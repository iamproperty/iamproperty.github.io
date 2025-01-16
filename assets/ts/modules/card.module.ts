export const cardHTML = `<div class="card__head" part="head">
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
</div>`;


export const setupCard = (cardComponent:any) => {

  cardComponent.classList.add('card');
  const cardHead =  cardComponent.shadowRoot.querySelector('.card__head');
  const cardBody =  cardComponent.shadowRoot.querySelector('.card__body');

  if(cardComponent.hasAttribute('data-image')){

    cardHead.innerHTML += `<img src="${cardComponent.getAttribute('data-image')}" alt="" loading="lazy" part="image" />`;
  }


  // Inset the HTML for the data total or icon fallback
  if(cardComponent.hasAttribute('data-total')){

    cardBody.insertAdjacentHTML('beforeend', `<div class="card__total">${cardComponent.getAttribute('data-total')}</div>`);
  }
  else if(cardComponent.querySelector('[slot="total-icon"]')){
    
    cardBody.insertAdjacentHTML('beforeend', `<div class="card__total"><slot name="total-icon"></slot></div>`);
  }

  if(!cardComponent.querySelector('[slot="badges"]')){
    cardComponent.shadowRoot.querySelector('.card__badges').classList.add('empty');
  }
  else{
    cardComponent.shadowRoot.querySelector('.card__badges').classList.remove('empty');
  }
}