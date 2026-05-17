export const transformButtons = (component):void => {

  Array.from(document.querySelectorAll('.wp-block-buttons')).forEach((buttons) => {

    const fragment = document.createDocumentFragment();

    Array.from(buttons.querySelectorAll('.wp-block-button')).forEach((element) => {

      const link = element.querySelector('a');
      link.setAttribute('class',element.getAttribute('class'));

      fragment.appendChild(link);
    });

    buttons.parentNode.replaceChild(fragment, buttons);
  });
}
