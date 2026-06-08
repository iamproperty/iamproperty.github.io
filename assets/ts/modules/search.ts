import { resolvePath, isTraversable } from './helpers';

type SearchComponent = HTMLElement;
type SearchFormControl = HTMLInputElement | HTMLSelectElement;
type SearchResultItem = Record<string, unknown> | string | number | boolean | null | undefined;
type SearchResponse = Record<string, unknown>;
type WindowWithControllers = Window & {
  controller?: Record<string, AbortController>;
};

interface OptionSelectedDetail {
  title: string;
  value: string;
  url: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const getResultValue = (item: SearchResultItem, key: string): unknown => (isRecord(item) ? item[key] : undefined);

const toOptionText = (value: unknown): string => String(value ?? '').replace('\n', ', ');

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
    resolvedValue ??
    getResultValue(item, 'value') ??
    getResultValue(item, 'id') ??
    resolvedDisplay ??
    getResultValue(item, 'title') ??
    getResultValue(item, 'label') ??
    fallbackValue;
  const displayValue = toOptionText(
    resolvedDisplay ?? getResultValue(item, 'title') ?? getResultValue(item, 'label') ?? actualValue
  );

  if (!displayValue) return;

  const optionElement = document.createElement('option');
  optionElement.value = String(actualValue);
  optionElement.textContent = `${groupLabel}${displayValue}`;
  datalistElement.appendChild(optionElement);
};

const getFormControls = (component: SearchComponent): SearchFormControl[] =>
  Array.from(component.querySelectorAll<SearchFormControl>('input,select'));

const getSearchSchema = (component: SearchComponent, attributeName: string, fallback: string): string =>
  component.hasAttribute(attributeName) ? component.getAttribute(attributeName) || '' : fallback;

const search = async (
  component: SearchComponent,
  datalistElement: HTMLDataListElement,
  searchTerm: string
): Promise<void> => {
  let url = component.getAttribute('data-url');

  if (!url) return;

  const method = component.getAttribute('data-method') || 'GET';
  const body: Record<string, string> = {};
  const searchWindow = window as WindowWithControllers;

  // Setup controller vars if not already set
  if (!searchWindow.controller) searchWindow.controller = {};

  // Abort if controller already present for this url
  if (searchWindow.controller[url]) searchWindow.controller[url].abort();

  // Create a new controller so it can be aborted if new fetch made
  searchWindow.controller[url] = new AbortController();
  const { signal } = searchWindow.controller[url];

  const requestOptions: RequestInit = {
    signal,
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  if (method.toUpperCase() === 'GET') {
    getFormControls(component).forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;

      if (name && value) {
        url += `${url.includes('?') ? '&' : '?'}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      }
    });
  } else {
    getFormControls(component).forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;

      if (name && value) {
        body[name] = value;
      }
    });

    requestOptions['body'] = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);
    const responseData = (await response.json()) as SearchResponse;
    const loopSchema = getSearchSchema(component, 'data-schema', 'data');
    const valueSchema = getSearchSchema(component, 'data-value-schema', 'value');
    const displaySchema = getSearchSchema(component, 'data-display-schema', 'label');
    const loopValues = resolvePath(responseData, loopSchema, []);

    if (Array.isArray(loopValues)) {
      loopValues.forEach((item: SearchResultItem) => {
        appendDatalistOption(datalistElement, item, valueSchema, displaySchema);
      });
    } else if (isRecord(loopValues)) {
      Object.entries(loopValues).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item: SearchResultItem) => {
            appendDatalistOption(datalistElement, item, valueSchema, displaySchema, `${key}: `);
          });
        }
      });
    }

    filterDatalist(datalistElement, searchTerm);
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
  component: SearchComponent,
  inputElement: HTMLInputElement,
  optionElement: HTMLOptionElement
): void => {
  const datalistElement = optionElement.closest<HTMLDataListElement>('datalist');
  const optionText = optionElement.textContent?.trim() || optionElement.value;
  const inputName = inputElement.getAttribute('name') || '';
  const alternateInputName = `${inputName}Alt`;

  inputElement.value = optionText;
  inputElement.setAttribute('data-value', optionText);
  //inputElement.setAttribute('data-placeholder', optionText);
  inputElement.setAttribute('placeholder', optionText);

  // Make sure the value of the option is passed when in a form
  if (optionElement.value && optionElement.value !== optionText) {


    const alternateInput = component.querySelector<HTMLInputElement>(`input[name="${alternateInputName}"]`);

    if (!alternateInput)
      component.insertAdjacentHTML(
        'beforeend',
        `<input type="hidden" name="${alternateInputName}" value="${optionElement.value}">`
      );
    else alternateInput.value = optionElement.value;
  } else {

    const alternateInput = component.querySelector<HTMLInputElement>(`input[name="${alternateInputName}"]`);

    if (alternateInput) alternateInput.remove();
  }

  // Set the active value on the datalist option
  if (!datalistElement) return;
  for (const optionLoopElement of datalistElement.options) {
    if (optionLoopElement === optionElement) optionLoopElement.classList.add('active');
    else optionLoopElement.classList.remove('active');
  }


  const customEvent = new CustomEvent<OptionSelectedDetail>('option-selected', {
    detail: {
      title: optionText,
      value: optionElement.value || '',
      url: optionElement.hasAttribute('data-url') ? optionElement.getAttribute('data-url') || '' : '',
    },
  });

  component.dispatchEvent(customEvent);
};

export default search;
