// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Dark mode button',
});

class iamDarkMode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/darkmode.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>${loadCSS}
    </style>
      <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const label = this.querySelector('label');

    const storedTheme = localStorage.getItem('user-theme');

    // Work from local storage first then look at the media preferences
    label?.innerHTML = `<input type="checkbox" name="dark-mode"  /> Light mode`;
    if (storedTheme == 'dark-theme') {
      label?.innerHTML = `<input type="checkbox" name="dark-mode" checked="checked" /> Dark mode`;
      label?.classList.add('dark-theme');
    } else if (storedTheme == 'light-theme') {
      label?.innerHTML = `<input type="checkbox" name="dark-mode"  /> Light mode`;
      label?.classList.remove('dark-theme');
    }

    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (hasDarkPreference) {
      label?.innerHTML = `<input type="checkbox" name="dark-mode" checked="checked" /> Dark mode`;
      label?.classList.remove('dark-theme');
    }

    this.addEventListener('click', (event) => {
      console.log(label?.querySelector('input:checked'));

      if (label?.querySelector('input:checked')) {
        label?.innerHTML = `<input type="checkbox" name="dark-mode" checked="checked" /> Dark mode`;
        localStorage.setItem('user-theme', 'dark-theme');
        document.documentElement.className = 'dark-theme';
        label?.classList.add('dark-theme');
      } else {
        label?.innerHTML = `<input type="checkbox" name="dark-mode" /> Light mode`;
        localStorage.setItem('user-theme', 'light-theme');
        document.documentElement.className = 'light-theme';
        label?.classList.remove('dark-theme');
      }
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      if (matches) {
        label?.innerHTML = `<input type="checkbox" name="dark-mode" checked="checked" /> Dark mode`;
        label?.classList.add('dark-theme');
      }
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', ({ matches }) => {
      if (matches) {
        label?.innerHTML = `<input type="checkbox" name="dark-mode"  /> Light mode`;
        label?.classList.remove('dark-theme');
      }
    });
  }
}

export default iamDarkMode;
