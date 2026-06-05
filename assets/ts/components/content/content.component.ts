import {createTitle,replaceShortcode,transformElement,transformButtons, loadComponents} from '../../modules/content';

class iamContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/content.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <slot></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const component = this;
    const url = this.getAttribute('data-url');

    if (url) {
      const newXHRRequest = new XMLHttpRequest();
      newXHRRequest.open('GET', url, true);

      newXHRRequest.onload = function (): void {
        if (this.status === 200) {
          let response = JSON.parse(this.responseText);

          if(Array.isArray(response))
            response = response[0];

          // Create the rendered content block and maintain any shortcodes
          const renderedContent = replaceShortcode(response.content.rendered);

          // Update the content title
          component.parentElement?.querySelector('.iam-content--title')?.remove();
          const renderedTitle = createTitle(component, response.title.rendered);

          // Transform the component if required
          if(component.hasAttribute('data-transform')){

            component.innerHTML = transformElement(component,renderedTitle,renderedContent);
            component.removeAttribute('class');

            component.querySelectorAll(`${component.getAttribute('data-transform')} > *:empty`).forEach((element) => {
              element.remove();
            });
          }
          else {

            component.insertAdjacentHTML('beforebegin',renderedTitle);

            component.innerHTML = `${renderedContent}`;
            component.querySelectorAll(`:scope > *:empty`).forEach((element) => {
              element.remove();
            });
          }

          // Load components - Each component will load once the first of its type has been loaded
          loadComponents(component);

          // Transform the buttons
          Array.from(document.querySelectorAll('.wp-block-buttons')).forEach((buttons) => {

            const fragment = transformButtons(buttons);
            buttons.parentNode.replaceChild(fragment, buttons);
          });

          // This allows for content added dynamically via the standardised nav to be added after the content is loaded
          Array.from(document.querySelectorAll('[data-variable]')).forEach((element) => {

            if(document.querySelector(`[data-save-variable="${element.getAttribute('data-variable')}"][data-variable-value]`))
              element.innerHTML = document.querySelector(`[data-save-variable="${element.getAttribute('data-variable')}"][data-variable-value]`)?.getAttribute('data-variable-value');
          });

          // Dispatch the loaded event for external JS and save to the data layer
          const eventDetails = {url: url};
          const changeEvent = new CustomEvent('content-loaded', { detail: eventDetails });

          component?.dispatchEvent(changeEvent);
          window.dataLayer.push({'event': 'content-loaded', ...eventDetails});
        }
      };

      newXHRRequest.send();
    }
  }
}

export default iamContent;
