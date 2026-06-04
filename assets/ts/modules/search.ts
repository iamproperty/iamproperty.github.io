import { resolvePath, isTraversable } from './helpers';

type SearchResultItem = Record<string, any>;

const appendDatalistOption = (
  datalistElement: HTMLDataListElement,
  item: SearchResultItem,
  valueSchema: string,
  displaySchema: string,
  groupLabel = ''
): void => {
  const resolvedValue = resolvePath(item, valueSchema, undefined);
  const resolvedDisplay = resolvePath(item, displaySchema, undefined);
  const fallbackValue = isTraversable(item) ? '' : item;
  const actualValue =
    resolvedValue ?? item?.value ?? item?.id ?? resolvedDisplay ?? item?.title ?? item?.label ?? fallbackValue;
  const displayValue = String(resolvedDisplay ?? item?.title ?? item?.label ?? actualValue).replace('\n', ', ');

  if (!displayValue) return;

  const optionElement = document.createElement('option');
  optionElement.value = String(actualValue);
  optionElement.textContent = `${groupLabel}${displayValue}`;
  datalistElement.appendChild(optionElement);
};

const search = async (component, datalistElement: HTMLDataListElement, searchTerm: string) => {
  let url = component.getAttribute('data-url');

  if (!url) return;

  const method = component.getAttribute('data-method') || 'GET';
  const body: Record<string, string> = {};

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[url]) window.controller[url].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[url] = new AbortController();
  const { signal } = window.controller[url];

  const requestOptions = {
    signal: signal,
    method: method,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  if (method.toUpperCase() === 'GET') {
    component.querySelectorAll('input,select').forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;

      if (name && value) {
        url += `${url.includes('?') ? '&' : '?'}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      }
    });
  } else {
    component.querySelectorAll('input,select').forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;

      if (name && value) {
        body[name] = value;
      }
    });

    requestOptions['body'] = JSON.stringify(body);
  }

  try {
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        const loopSchema = component.hasAttribute('data-schema') ? component.getAttribute('data-schema') || '' : 'data';
        const valueSchema = component.hasAttribute('data-value-schema')
          ? component.getAttribute('data-value-schema') || ''
          : 'value';
        const displaySchema = component.hasAttribute('data-display-schema')
          ? component.getAttribute('data-display-schema') || ''
          : 'label';
        const loopValues = resolvePath(response, loopSchema, []);

        if (isTraversable(loopValues) && typeof loopValues.forEach == 'function') {
          loopValues.forEach((item) => {
            appendDatalistOption(datalistElement, item, valueSchema, displaySchema);
          });
        } else if (loopValues && typeof loopValues == 'object') {
          for (const [key, value] of Object.entries(loopValues)) {
            if (isTraversable(value) && typeof value.forEach == 'function') {
              value.forEach((item) => {
                appendDatalistOption(datalistElement, item, valueSchema, displaySchema, `${key}: `);
              });
            }
          }
        }

        filterDatalist(datalistElement, searchTerm);

        return response;
      });
  } catch (error) {
    console.log(error);
  }
};

export const filterDatalist = (datalistElement: HTMLDataListElement, searchTerm: string): void => {
  for (const optionElement of datalistElement.options) {
    const optionText = optionElement.textContent?.trim() || optionElement.value;
    if (optionText.toLowerCase().includes(searchTerm.toLowerCase())) {
      optionElement.classList.remove('js-hide');
    } else {
      optionElement.classList.add('js-hide');
    }
  }
};

export const datalistSelectOption = (
  component,
  inputElement: HTMLInputElement,
  optionElement: HTMLOptionElement
): void => {
  const datalistElement = optionElement.closest('datalist') as HTMLDataListElement | null;
  const optionText = optionElement.textContent?.trim() || optionElement.value;
  const inputName = inputElement.getAttribute('name') || '';

  inputElement.value = optionText;
  inputElement.setAttribute('data-value', optionText);
  //inputElement.setAttribute('data-placeholder', optionText);
  inputElement.setAttribute('placeholder', optionText);

  // Make sure the value of the option is passed when in a form
  if (optionElement.value && optionElement.value !== optionText) {
    if (!component.querySelector(`input[name="${inputName}Alt"]`))
      component.insertAdjacentHTML(
        'beforeend',
        `<input type="hidden" name="${inputName}Alt" value="${optionElement.value}">`
      );
    else component.querySelector(`input[name="${inputName}Alt"]`).value = optionElement.value;
  } else {
    if (component.querySelector(`input[name="${inputName}Alt"]`))
      component.querySelector(`input[name="${inputName}Alt"]`)!.remove();
  }

  // Set the active value on the datalist option
  if (!datalistElement) return;
  for (const optionLoopElement of datalistElement.options) {
    if (optionLoopElement === optionElement) optionLoopElement.classList.add('active');
    else optionLoopElement.classList.remove('active');
  }
};

export default search;
