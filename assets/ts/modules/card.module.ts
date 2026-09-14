export const cardHTML = `<div class="wrapper">
  <div class="card__head" part="head">
    <slot name="head"></slot>
  </div>
  <div class="card__badges"><slot name="badges"></slot></div>
  <slot name="checkbox" class="activate-prevent-hover"></slot>
  <div class="card__body" part="body">
    <slot></slot>
    <slot name="secondary" part="secondary"></slot>
  </div>
  <div class="card__details" part="details">
    <slot name="details"></slot>
  </div>
  <div class="card__footer" part="footer">
    <slot name="footer"></slot>
  </div>
</div>`;

const getCardPart = <T extends Element>(cardComponent: HTMLElement, selector: string): T | null =>
  cardComponent.shadowRoot?.querySelector<T>(selector) || null;

export const setupCard = (cardComponent: HTMLElement): void => {
  cardComponent.classList.add('card');
  const cardHead = getCardPart<HTMLDivElement>(cardComponent, '.card__head');
  const cardBody = getCardPart<HTMLDivElement>(cardComponent, '.card__body');
  const cardBadges = getCardPart<HTMLDivElement>(cardComponent, '.card__badges');

  if (cardComponent.hasAttribute('data-image')) {
    cardHead?.insertAdjacentHTML(
      'beforeend',
      `<img src="${cardComponent.getAttribute('data-image') || ''}" alt="" loading="lazy" part="image" />`
    );
  }

  // Inset the HTML for the data total or icon fallback
  if (cardComponent.hasAttribute('data-total')) {
    const cardTotal = cardBody?.querySelector<HTMLDivElement>('.card__total');

    if (!cardTotal)
      cardBody.insertAdjacentHTML(
        'beforeend',
        `<div class="card__total">${cardComponent.getAttribute('data-total') || ''}</div>`
      );
    else {
      cardTotal.innerHTML = cardComponent.getAttribute('data-total') || '';
    }
  } else if (cardComponent.querySelector('[slot="total-icon"]')) {
    cardBody?.insertAdjacentHTML('beforeend', `<div class="card__total"><slot name="total-icon"></slot></div>`);
  }

  if (!cardComponent.querySelector('[slot="badges"]')) {
    cardBadges?.classList.add('empty');
  } else {
    cardBadges?.classList.remove('empty');
  }
};
