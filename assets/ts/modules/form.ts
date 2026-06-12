type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface FormCondition {
  equals: string | number | boolean | null;
  if: string;
}

interface CheckboxLimitDetail {
  element: string;
  limit: number;
}

const getConditions = (conditions: string | null): FormCondition[] => JSON.parse(conditions || '[]') as FormCondition[];

const getFormControl = (form: HTMLElement, id: string): FormControlElement | null =>
  form.querySelector<FormControlElement>(`#${id}`);

export const isFormValid = (form: HTMLFormElement): boolean => {

  if (form.querySelector(':invalid'))
    return false;

  if (form.querySelector('.pwd-checker[data-strength="1"]') || form.querySelector('.pwd-checker[data-strength="2"]'))
    return false;

  if (form.querySelector('iam-multiselect[data-is-required][data-error]'))
    return false;

  return true;
};

export const checkConditions = (conditions: string | null, form: HTMLElement): boolean => {

  let meetsCondition = true;

  getConditions(conditions).forEach((condition) => {
    const input = getFormControl(form, condition.if);

    if(input?.value != condition.equals)
      meetsCondition = false;
  });

  return meetsCondition;
}


export const showIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-show-if]').forEach((element) => {

    if(!checkConditions(element.getAttribute('data-show-if'), form))
      element.classList.add('d-none');
    else
      element.classList.remove('d-none');

  });
}

export const hideIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-hide-if]').forEach((element) => {

    if(checkConditions(element.getAttribute('data-hide-if'), form))
      element.classList.add('d-none');
    else
      element.classList.remove('d-none');

  });
}

export const disabledIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-disabled-if]').forEach((element) => {

    if(checkConditions(element.getAttribute('data-disabled-if'), form))
      element.setAttribute('disabled','disabled');
    else
      element.removeAttribute('disabled');

  });
}

export const enabledIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-enabled-if]').forEach((element) => {

    if(!checkConditions(element.getAttribute('data-enabled-if'), form))
      element.setAttribute('disabled','disabled');
    else
      element.removeAttribute('disabled');

  });
}

export const requiredIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-required-if]').forEach((element) => {

    if(checkConditions(element.getAttribute('data-required-if'), form))
      element.setAttribute('required','required');
    else
      element.removeAttribute('required');

  });
}

export const readonlyIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-readonly-if]').forEach((element) => {

    if(checkConditions(element.getAttribute('data-readonly-if'), form))
      element.setAttribute('readonly','readonly');
    else
      element.removeAttribute('readonly');

  });
}

export const writeIf = (form: HTMLElement): void => {

  form.querySelectorAll<HTMLElement>('[data-write-if]').forEach((element) => {

    if(!checkConditions(element.getAttribute('data-write-if'), form))
      element.setAttribute('readonly','readonly');
    else
      element.removeAttribute('readonly');

  });
}

export const emptyIf = (form: HTMLElement): void => {

  form.querySelectorAll<FormControlElement>('[data-empty-if]').forEach((element) => {

    if(checkConditions(element.getAttribute('data-empty-if'), form))
      element.value = "";

  });
}

export const getCheckboxLimit = (element: HTMLElement): number => {

  const limit = parseInt(element.getAttribute('data-checkbox-limit') || '10', 10);

  return !isNaN(limit) && limit > 0 ? limit : 10;
}

export const limitCheckboxes = (event: Event | null | undefined, root: HTMLElement): void => {

  console.log(event);


  const target = event?.target instanceof HTMLInputElement ? event.target : null;
  const changedCheckbox = target?.matches('input[type="checkbox"]') ? target : null;
  const checkboxLimitGroup = changedCheckbox?.closest<HTMLElement>('[data-checkbox-limit]');
  const checkboxLimitGroups = checkboxLimitGroup
    ? [checkboxLimitGroup]
    : [
        ...(root.hasAttribute('data-checkbox-limit') ? [root] : []),
        ...Array.from(root.querySelectorAll<HTMLElement>('[data-checkbox-limit]')),
      ];

  checkboxLimitGroups.forEach((group) => {

    const limit = getCheckboxLimit(group);
    const checked = Array.from(group.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked'));
    const notChecked = Array.from(group.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:not(:checked)'));

    notChecked.forEach((checkbox) => {

      checkbox.setAttribute('disabled','disabled');
    });

    if(checked.length < limit){
      notChecked.forEach((checkbox) => {

        checkbox.removeAttribute('disabled');
      });

      return;
    }

    if(checked.length == limit){

      // Data layer Web component created

      const eventDetails: CheckboxLimitDetail = {element: group.hasAttribute('id') ? `#${group.getAttribute('id')}` :'', limit: limit};
      const changeEvent = new CustomEvent<CheckboxLimitDetail>('checkbox-limit-reached', { detail: eventDetails });

      root.dispatchEvent(changeEvent);

      const formWindow = window as WindowWithDataLayer;
      formWindow.dataLayer = formWindow.dataLayer || [];
      formWindow.dataLayer.push({'event': 'checkbox-limit-reached', ...eventDetails});

      return;
    }


    if(changedCheckbox?.checked && group.contains(changedCheckbox)) {
      changedCheckbox.checked = false;
      return;
    }

    checked.slice(limit).forEach((checkbox) => {

      checkbox.checked = false;
    });
  });
}
