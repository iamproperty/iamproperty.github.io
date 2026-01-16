function advancedSelect(advancedSelect, displayInputField, datalist, isSearch = false): boolean | void {
  let currentFocus = -1;

  const datalistWrapper = datalist.closest('.datalist__wrapper') ? datalist.closest('.datalist__wrapper') : datalist;

  // Hide the default datalist
  displayInputField.setAttribute('data-list', displayInputField.getAttribute('list'));
  displayInputField.setAttribute('list', '');

  if(displayInputField.hasAttribute('placeholder'))
    displayInputField.setAttribute('data-placeholder', displayInputField.getAttribute('placeholder'));

  if(displayInputField.hasAttribute('placeholder'))
    displayInputField.setAttribute('data-original-placeholder', displayInputField.getAttribute('placeholder'));

  displayInputField.addEventListener('focus', function () {
    
    if(displayInputField.value != ""){
        
      displayInputField.setAttribute('placeholder', displayInputField.value);
      displayInputField.setAttribute('data-value', displayInputField.value);
    }
    displayInputField.value = '';

  });

  displayInputField.addEventListener('keyup', function () {
    
    if(displayInputField.value != ""){
      displayInputField.setAttribute('data-value', displayInputField.value);
    }
  });

  displayInputField.addEventListener('blur', function () {
    if (displayInputField.hasAttribute('data-value')) {
      displayInputField.value = displayInputField.getAttribute('data-value');
    }

    if(displayInputField.hasAttribute('data-placeholder'))
      displayInputField.setAttribute('placeholder',displayInputField.getAttribute('data-placeholder'));
  });

  for (const option of datalist.options) {
    if (option.innerHTML == '') option.innerHTML = option.value;
  }

  datalist.addEventListener('click', function (event) {

    if (event && event.target instanceof HTMLElement && event.target.closest('option')) {
      const option = event.target.closest('option');

      displayInputField.value = option.value;

      if (typeof window.triggerDynamicEvent == 'function') window.triggerDynamicEvent(displayInputField);

      for (const optionInner of datalist.options) {
        optionInner.classList.remove('active');
      }

      option.classList.add('active');
    }
  });

  displayInputField.addEventListener('input', function () {
    displayInputField.removeAttribute('data-value');
    currentFocus = -1;
    const text = displayInputField.value.toUpperCase();
    for (const option of datalist.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
        option.style.display = 'block';
        option.classList.remove('hide');
      } else {
        option.style.display = 'none';
        option.classList.add('hide');
      }
    }
  });

  advancedSelect.addEventListener('keydown', function (e) {

    if (e.keyCode == 40) {
      currentFocus++;
      addActive(datalist.options);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(datalist.options);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (datalist.options) datalist.options[currentFocus].click();
      }
    }
  });

  function addActive(x): void {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add('active');
  }

  function removeActive(x): void {
    if (!x) return false;
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
  }

  // Add the empty button
  displayInputField
    .closest('label')
    .insertAdjacentHTML(
      'beforeend',
      '<button class="empty btn btn-action" type="button"><i class="fa-light fa-times me-0"></i></button>'
    );


  const emptyField = (): void => {

    displayInputField.removeAttribute('placeholder');

    if(displayInputField.hasAttribute('data-original-placeholder'))
      displayInputField.setAttribute('placeholder', displayInputField.getAttribute('data-original-placeholder'));
    
    
    displayInputField.removeAttribute('data-value');
    displayInputField.value = '';

    for (const optionInner of datalist.options) {
      optionInner.classList.remove('active');
      optionInner.removeAttribute('style');
    }

    const updateEvent = new CustomEvent('close-button-pressed');
    advancedSelect.dispatchEvent(updateEvent);
  }




  const closeBtn = advancedSelect.querySelector('.empty') ? advancedSelect.querySelector('.empty') : advancedSelect.shadowRoot.querySelector('.empty');

  closeBtn.addEventListener('click', function (e) {

    emptyField();
  });

  advancedSelect.addEventListener('empty', function (e) {

    emptyField();
  });
}

export default advancedSelect;
