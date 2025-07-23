function advancedSelect(advancedSelect, displayInputField, datalist, isSearch = false): boolean | void {
  let currentFocus = -1;

  console.log(isSearch);
  if(!isSearch){
    displayInputField.addEventListener('focus', function () {
      displayInputField.setAttribute('placeholder', displayInputField.value);
      displayInputField.setAttribute('data-value', displayInputField.value);
      displayInputField.value = '';

      displayInputField.setAttribute('data-list', displayInputField.getAttribute('list'));
      displayInputField.setAttribute('list', '');

      datalist.style.display = 'block';
    });
  }
  else {
    displayInputField.addEventListener('focus', function () {

      displayInputField.setAttribute('data-list', displayInputField.getAttribute('list'));
      displayInputField.setAttribute('list', '');

      datalist.style.display = 'block';
    });
  }

  displayInputField.addEventListener('blur', function () {
    if (displayInputField.hasAttribute('data-value')) {
      displayInputField.value = displayInputField.getAttribute('data-value');
    }

    setTimeout(() => {
      datalist.style.display = 'none';
    }, 500);
  });

  for (const option of datalist.options) {
    if (option.innerHTML == '') option.innerHTML = option.value;
  }


  advancedSelect.addEventListener('click', function () {

    if (event && event.target instanceof HTMLElement && event.target.closest('datalist option')) {
      const option = event.target.closest('datalist option');
 
      displayInputField.value = option.value;
      datalist.style.display = 'none';

      for (const optionInner of datalist.options) {
        optionInner.classList.remove('active')
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
      } else {
        option.style.display = 'none';
      }
    }
  });

  displayInputField.addEventListener('keydown', function (e) {
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
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
  }


  // Add the empty button
  displayInputField
    .closest('label')
    .insertAdjacentHTML('beforeend', '<button class="empty btn btn-action btn-save border-0"><i class="fa-light fa-times me-0"></i></button>');
  const closeBtn = advancedSelect.querySelector('.empty');

  closeBtn.addEventListener('click', function (e) {
    displayInputField.removeAttribute('placeholder');
    displayInputField.removeAttribute('data-value');
    displayInputField.value = '';
    
    for (const optionInner of datalist.options) {
      optionInner.classList.remove('active')
    }
  });
}

export default advancedSelect;
