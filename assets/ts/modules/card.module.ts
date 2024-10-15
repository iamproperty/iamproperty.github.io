export const cardHTML = `<div class="card__head" part="head">
  <slot name="head"></slot>
</div>
<div class="card__body" part="body">
  <slot></slot>
</div>
<div class="card__footer" part="footer">
  <slot name="footer"></slot>
</div>`;

export const setupCard = (cardComponent:any) => {

  const cardHead =  cardComponent.shadowRoot.querySelector('.card__head');

  if(cardComponent.hasAttribute('data-image')){

    cardHead.innerHTML += `<img src="${cardComponent.getAttribute('data-image')}" alt="" loading="lazy" part="image" />`;
  }
}