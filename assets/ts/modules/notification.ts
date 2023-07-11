// @ts-nocheck
function setupNotification(element) {

  element.setAttribute('role','alert');
  
  // Create a dissmissable button
  element.addEventListener('click', function(e){

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-dismiss-button]')){

      e.preventDefault();
      closeAlert(element);
    }
  }, false);
}

export const closeNotification = function(element) {

  element.classList.add('d-none');
}

export default setupNotification