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

    const storedTheme = localStorage.getItem('user-theme');
    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Work from local storage first then look at the media preferences
    this?.innerHTML = `<label class="toggle"><input type="checkbox" name="dark-mode" /> <span style="all: unset!important;">Light mode</span></label>`;

    const label = this.querySelector('label');
    const input = this.querySelector('input');
    const span = this.querySelector('span');

    const setDark = () => {
      
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');

      input.checked = true;
      span?.innerHTML = `Dark mode`;
      label?.classList.add('dark-theme');
    }

    const unsetDark = () => {

      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');

      input.checked = false;
      span?.innerHTML = `Light mode`;
      label?.classList.remove('dark-theme');
    }

    if (storedTheme == 'light-theme') {
      document.documentElement.classList.add('light-theme');
    }
    else if (storedTheme == 'dark-theme') {
      setDark();
    }
    else if(hasDarkPreference) {
      setDark();
    }

    input.addEventListener('change', () => {
      
      if(input.checked){
        localStorage.setItem('user-theme', 'dark-theme');
        setDark();
      }
      else {
        localStorage.setItem('user-theme', 'light-theme');
        unsetDark();
      }

      // Dispatch event so other toggles can then detect it
      const customEvent = new CustomEvent('theme-change');
      document.dispatchEvent(customEvent);
    });

    // Detect if the theme has been changed outside of this toggle; i.e. another toggle or via other javascript
    document.addEventListener('theme-change', () => {

      if(document.documentElement.classList.contains('dark-theme'))
        setDark();
      else
        unsetDark();
    })

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      if (matches)
        setDark();
      else 
        unsetDark();
    });
  }
}

export default iamDarkMode;
