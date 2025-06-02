import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-rankings');
class iamRankings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/rankings.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/rankings.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="podium">
      <div><iam-rank>1st</iam-rank><span class="first-position"></span></div>
      <div><iam-rank>2nd</iam-rank><span class="second-position"></span></div>
      <div><iam-rank>3rd</iam-rank><span class="third-position"></span></div>
    </div>
    <div class="mh-md" part="leaderboard"><slot></slot></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('rankingsGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="rankingsGlobal">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {
    const firstText = this.shadowRoot?.querySelector('.first-position');
    const secondText = this.shadowRoot?.querySelector('.second-position');
    const thirdText = this.shadowRoot?.querySelector('.third-position');
    const max = this.hasAttribute('data-max') ? this.getAttribute('data-max') : 100;

    firstText?.innerHTML = this.querySelector('tbody tr:nth-child(1) :is(td,th):nth-child(1)')?.textContent;
    secondText?.innerHTML = this.querySelector('tbody tr:nth-child(2) :is(td,th):nth-child(1)')?.textContent;
    thirdText?.innerHTML = this.querySelector('tbody tr:nth-child(3) :is(td,th):nth-child(1)')?.textContent;

    this.querySelectorAll('tbody tr').forEach((element) => {
      const value = element.querySelector('td:last-child')?.textContent?.trim();

      if (!element.querySelector(':first-child progress'))
        element.querySelector(':first-child')?.innerHTML += `<progress max="${max}" value="${value}"></progress>`;
    });

    trackComponent(this, 'iam-rank', ['select-card']);
  }
}

export default iamRankings;
