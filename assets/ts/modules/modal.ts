// @ts-nocheck
const modal = (element) => {

  const links = element.querySelectorAll('.modal__outer a, .modal__outer button');
  const firstLink = links[0]
  const lastLink = links[links.length - 1]
  const modalID = element.getAttribute('id');

  const closeModal = function(){
    const button = document.querySelector('[href="'+window.location.hash+'"]');
    button.focus();
    window.location.hash = "close";
    history.replaceState("", document.title, window.location.pathname + window.location.search);

    // If there is more than one video lets make sure there is only one playing at a time.
    if(typeof window.player != "undefined" && typeof window.player.pauseVideo == "function")
      window.player.pauseVideo();
  }

  // Trap the tab focus inside
  element.addEventListener('keydown', function(e){

    if(e.key === "Tab" && e.shiftKey && document.activeElement == firstLink){

      e.preventDefault();
      lastLink.focus();
    }
    else if(e.key === "Tab" && !e.shiftKey && document.activeElement == lastLink) {

      e.preventDefault();
      firstLink.focus();
    }
  });

  // ESC will close the open modal
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && document.querySelector('.modal:target'))
      closeModal();
  });

  element.addEventListener('click', function(e){
    for (var target = e.target; target && target != this; target = target.parentNode) {

      // Close links will close the model by default but we want to remove the hash link also
      if (target.matches('[href="#close"]')) {
        
        e.preventDefault();
        closeModal();
        break;
      }
      // Dock the modal to the right or left to make the content behind readable
      else if (target.matches('.modal__dock--right')) {
        
        e.preventDefault();
        if(!element.classList.contains('modal--left'))
          element.classList.add('modal--right');

        element.classList.remove('modal--left');

        break;
      }   
      else if (target.matches('.modal__dock--left')) {
        
        e.preventDefault();

        if(!element.classList.contains('modal--right'))
          element.classList.add('modal--left');

        element.classList.remove('modal--right');

        break;
      }
    }
  });

  function locationHashChanged() {
    if (location.hash === '#'+modalID) {
      console.log("Modal is now open");
      const videoButton = document.querySelector('.modal:target .modal__inner > .youtube-embed:first-child:last-child a');

      console.log(videoButton)
      if (videoButton){
        videoButton.click();
      }
        
    }
  }
  window.onhashchange = locationHashChanged;
}

export default modal