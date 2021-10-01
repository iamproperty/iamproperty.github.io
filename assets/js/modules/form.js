// Create a link between two input/selects with one acting as setting a minimum value and the second a maximum
// The link between the two will prevent the max input field form setting a lower value than the min and vice versa
function inputRange(inputWrapper){

  inputWrapper.addEventListener('change', function(e){

    var min = parseInt(inputWrapper.querySelector('[data-min] select,[data-min] input').value);
    var max = parseInt(inputWrapper.querySelector('[data-max] select,[data-max] input').value);

    // Set attributes for input fields
    Array.from(inputWrapper.querySelectorAll('[data-min] input')).forEach((input, index) => {
      
      input.setAttribute('max',max);
    });

    Array.from(inputWrapper.querySelectorAll('[data-max] input')).forEach((input, index) => {
      
      input.setAttribute('min',min);
    });

    // Hide select options if they are higher or lower than the min and max values
    Array.from(inputWrapper.querySelectorAll('[data-min] select option')).forEach((option, index) => {
      
      if(parseInt(option.getAttribute('value')) > max)
        option.classList.add('d-none');
      else 
        option.classList.remove('d-none');
    });

    Array.from(inputWrapper.querySelectorAll('[data-max] select option')).forEach((option, index) => {
      
      if(parseInt(option.getAttribute('value')) < min)
        option.classList.add('d-none');
      else 
        option.classList.remove('d-none');
    });
  }, false);
}

// Acts as an overall initialise function to trigger other functions.
function form(formElement) {

  // Check for input range groups
  Array.from(formElement.querySelectorAll('[data-input-range]')).forEach((arrayElement, index) => {
    inputRange(arrayElement);
  });
}

export default form