export const setMinMax = function (inputs): void {
  const min = inputs[0].value;
  let max = inputs[1].value;

  if(!min || !max)
    return false;

  // Make sure the second input/select is always higher than the first input/select
  if(parseInt(inputs[1].value) < parseInt(inputs[0].value)){
    max = min;
    inputs[1].value = min;
  }

  // First input/select
  if(inputs[0].matches('input'))
    inputs[0].setAttribute('max',max);

  if(inputs[0].matches('select')){
    Array.from(inputs[0].querySelectorAll('option')).forEach((option) => {

      if (parseInt(option.getAttribute('value')) > max) option.classList.add('d-none');
      else option.classList.remove('d-none');
    });
  }

  // Second input/select
  if(inputs[1].matches('input'))
    inputs[1].setAttribute('min',min);

  Array.from(inputs[1].querySelectorAll('option')).forEach((option) => {

    if (parseInt(option.getAttribute('value')) < min) option.classList.add('d-none');
    else option.classList.remove('d-none');
  });
};