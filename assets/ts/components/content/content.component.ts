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

  addTitle = (title) => {

    if(this.hasAttribute('data-title-tag')){

      return `<${this.getAttribute('data-title-tag')} class="${this.getAttribute('data-title-class')}">${title}</${this.getAttribute('data-title-tag')}>`;
    }

    return '';
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const component = this;
    const url = this.getAttribute('data-url');

    const transform = this.getAttribute('data-transform');

    let elementAttributes = '';


    for (const attr of this.attributes) {
      elementAttributes += `${attr.name}="${attr.value}" `;
    }

    const addTitle = this.addTitle;

    const registerComponents = (contentComponent): void => {
      const components = ['carousel', 'card', 'marketing', 'notification'];

      const assetLocation = document.body.hasAttribute('data-assets-location')
        ? document.body.getAttribute('data-assets-location')
        : '/assets';

      // Load components - Each component will load once the first of its type has been loaded
      components.forEach((component) => {
        if (component == 'notification') {
          document.querySelectorAll('[data-notification]').forEach((element) => {
            element.outerHTML = element.outerHTML
              .replace(/<div/g, '<iam-notification')
              .replace(/<\/div>/g, '</iam-notification>');
          });
        }

        if (contentComponent.getElementsByTagName(`iam-${component}`).length === 0) return;

        import(/* @vite-ignore */ `${assetLocation}/js/components/${component}/${component}.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-${component}`))
              window.customElements.define(`iam-${component}`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    };

    if (url) {
      const newXHRRequest = new XMLHttpRequest();
      newXHRRequest.open('GET', url, true);

      newXHRRequest.onload = function (): void {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);

          component.insertAdjacentHTML('beforebegin',addTitle(response.title.rendered));
          
          if(transform){
          
            component.innerHTML = `<${transform} ${elementAttributes}>${response.content.rendered}</${transform}>`;  
            component.removeAttribute('class');
          }
          else
            component.innerHTML = `${response.content.rendered}`;

          registerComponents(component);
        }
      };

      newXHRRequest.send();
    }
  }
}

export default iamContent;
