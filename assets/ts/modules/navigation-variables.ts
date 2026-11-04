// Use DOM events so separately bundled Content and STDNav components share ownership.
const bindEvent = 'navigation-variable-bind';

export const bindNavigationVariables = (attributes: Record<string, unknown>): (() => void) => {
  const restore: Array<() => void> = [];
  const bound = new WeakSet<Element>();
  const bind = (element: Element, value: string | number): void => {
    if (bound.has(element)) return;
    bound.add(element);
    const original = Array.from(element.childNodes);
    restore.push(() => element.replaceChildren(...original));
    element.textContent = String(value);
  };
  document.querySelectorAll('[data-variable], [data-save-variable]').forEach((element) => {
    const key = element.getAttribute('data-variable') ?? element.getAttribute('data-save-variable');
    const value = attributes[key];
    if (typeof value !== 'string' && typeof value !== 'number') return;
    if (element.hasAttribute('data-variable')) {
      bind(element, value);
    } else {
      const original = element.getAttribute('data-variable-value');
      const onBind = (event: CustomEvent<{ element: Element }>): void => {
        event.preventDefault();
        bind(event.detail.element, value);
      };
      element.addEventListener(bindEvent, onBind);
      restore.push(() => {
        element.removeEventListener(bindEvent, onBind);
        if (original === null) element.removeAttribute('data-variable-value');
        else element.setAttribute('data-variable-value', original);
      });
      element.setAttribute('data-variable-value', String(value));
    }
  });
  return () => {
    restore.forEach((callback) => callback());
    restore.length = 0;
  };
};

export const applySavedNavigationVariables = (): void => {
  const sources = Array.from(document.querySelectorAll('[data-save-variable][data-variable-value]'));
  document.querySelectorAll('[data-variable]').forEach((element) => {
    const source = sources.find(
      (candidate) => candidate.getAttribute('data-save-variable') === element.getAttribute('data-variable')
    );
    if (!source) return;
    const event = new CustomEvent(bindEvent, { cancelable: true, detail: { element } });
    // An active navigation owner records the original content before binding it.
    if (source.dispatchEvent(event)) element.textContent = source.getAttribute('data-variable-value');
  });
};
