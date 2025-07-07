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
      <div>
        <iam-rank class="rank--trophy first-position">1st</iam-rank>
      </div>
      <div>
        <iam-rank class="second-position">2nd</iam-rank>
      </div>
      <div>
        <iam-rank class="third-position">3rd</iam-rank>
      </div>
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

    firstText?.setAttribute('data-title', this.querySelector('tbody tr:nth-child(1) :is(td,th):nth-child(1)')?.textContent);
    secondText?.setAttribute('data-title', this.querySelector('tbody tr:nth-child(2) :is(td,th):nth-child(1)')?.textContent);
    thirdText?.setAttribute('data-title', this.querySelector('tbody tr:nth-child(3) :is(td,th):nth-child(1)')?.textContent);

    const max = this.hasAttribute('data-max') ? this.getAttribute('data-max') : 100;
    this.querySelectorAll('tbody tr').forEach((element) => {
      const value = element.querySelector('td:last-child')?.textContent?.trim();

      if (!element.querySelector(':first-child progress'))
        element.querySelector(':first-child')?.innerHTML += `<progress max="${max}" value="${value}"></progress>`;
    });


    if(this.classList.contains('show-gold')){

      const firstRow = this.querySelector('tbody tr th');

      firstRow?.insertAdjacentHTML('afterbegin',`<iam-rank class="rank--medal first-position">1st</iam-rank>`);
    }

  }
}

export default iamRankings;
