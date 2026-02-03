import Cookies from '../../../node_modules/js-cookie/dist/js.cookie.mjs';

export const filterList = (component, search): void => {

  Array.from(component.querySelectorAll(`label:not([slot="checked"])`)).forEach((label) => {
    const checkbox = label.querySelector('input');
    const searchValue = checkbox.value;
    const labelText = label.textContent;

    if (
      searchValue.toLowerCase().includes(search.value.toLowerCase()) ||
      labelText.toLowerCase().includes(search.value.toLowerCase())
    ) {
      label.removeAttribute('slot');
    } else {
      label.setAttribute('slot', 'notmatched');
    }
  });

}

export const searchAjax = async (component, search, callback): any => {

  const searchterm = search.value
  const ajaxURL = component.getAttribute('data-url');
  const firstInput = component.querySelector('input');

  console.log(firstInput);

  const inputType = firstInput && firstInput.hasAttribute('type') ? firstInput.getAttribute('type') : 'checkbox';
  let inputName = firstInput && firstInput.hasAttribute('name') ? firstInput.getAttribute('name') : 'tags';

  if(component.hasAttribute('data-name'))
    inputName = component.hasAttribute('data-name');

  const searchAjaxURL = `${ajaxURL}?search_query=${encodeURI(searchterm)}`;

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[searchAjaxURL]) window.controller[searchAjaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[searchAjaxURL] = new AbortController();
  const { signal } = controller[searchAjaxURL];

  try {
    await fetch(searchAjaxURL, {
      signal: signal,
      method: 'get',
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      }),
    })
      .then((response) => response.json())
      .then((response) => {

        let items = '';

        for (let i = 0; i < response['data'].length; i++) {

          if(!component.querySelector(`[value="${response['data'][i].value}"]`))
            items += `<label class="tag dropdown__option"><input type="${inputType}" name="${component.hasAttribute('data-name') ? component.getAttribute('data-name') : inputName}" value="${ response['data'][i].value }"/>${ response['data'][i].title }</label>`;
        }

        component.insertAdjacentHTML('beforeend', `${items}`);
        
        callback(component, search);
        return response;
      });
  } catch (error) {
    console.log(error);
  }
};

export const setTag = (tag):void => {

  const input = tag.querySelector(':checked');
  const inputName = input?.getAttribute('name');

  tag.setAttribute('slot', 'checked');
  tag.setAttribute('data-content', tag.textContent);

  let tags = [];

  if(localStorage.getItem('tags-'+inputName) != null)
    tags = JSON.parse(localStorage.getItem('tags-'+inputName));


  if(!tags.includes(tag.textContent)){

    tags.push(tag.textContent);
    
    localStorage.setItem('tags-'+inputName,JSON.stringify(tags));
  }

  let tagIndex = tags.indexOf(tag.textContent) + 1;
  if(tagIndex > 23)
    tagIndex = 1;

  tag?.classList.add(`wider-colour-${tagIndex + 1}`);
}

export const addKeyboardEvents = (dropdown, search):void => {



  search.addEventListener('keydown', (e) => {

    switch ( e.keyCode ) {
      case 40: // down
        e.stopPropagation();
        e.preventDefault();

        dropdown.querySelector('label:not([slot="checked"]) input')?.focus();

        break;
    }
  });

  dropdown.addEventListener('keydown', (event) => {

    const topLevelmenuItems = dropdown.querySelectorAll(':scope > a, :scope > button, :scope > details > summary, :scope > label:not([slot="checked"]) > input');
    const menuItems = dropdown.querySelectorAll('a, button, input, label:not([slot="checked"]) > input');

    const activeElement = document.activeElement;

    if (event && event.target instanceof HTMLElement && event.target.closest('a, button, summary, label:not([slot="checked"]) > input')) {
      const activeItem = document.activeElement;
      const prevIndex = Array.from(topLevelmenuItems).indexOf(activeItem) - 1;
      const nextIndex = Array.from(topLevelmenuItems).indexOf(activeItem) + 1;

      switch (
        event.keyCode // change to event.key to key to use the above variable
      ) {
        case 27: // Esc
          if (activeItem.closest('details')) {
            event.stopPropagation();
            event.preventDefault();
            activeItem.closest('details').removeAttribute('open');
            activeItem.closest('details').querySelector(':scope summary').focus();
          } else {
            event.stopPropagation();
            //menuButton.focus();
          }

          break;
        case 32: // Space
        case 13: // Enter

          break;
        case 35: // end
          event.stopPropagation();
          event.preventDefault();

          dropdown.querySelector('details[open]')?.removeAttribute('open');

          Array.from(menuItems)[menuItems.length - 1].focus();

          break;
        case 36: // home
          event.stopPropagation();
          event.preventDefault();

          dropdown.querySelector('details[open]')?.removeAttribute('open');

          Array.from(menuItems)[0].focus();

          break;
        case 38: // up
          event.stopPropagation();
          event.preventDefault();

          if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
            if (Array.from(topLevelmenuItems)[prevIndex] != undefined)
              Array.from(topLevelmenuItems)[prevIndex].focus();
            else Array.from(topLevelmenuItems)[topLevelmenuItems.length - 1].focus();
          } else if (activeItem.closest('details')) {
            const subMenuItems = activeItem
              .closest('details')
              .querySelectorAll('a, button, :scope details > summary');
            subPrevIndex = Array.from(subMenuItems).indexOf(activeItem) - 1;

            if (Array.from(subMenuItems)[subPrevIndex] != undefined) Array.from(subMenuItems)[subPrevIndex].focus();
            else Array.from(subMenuItems)[subMenuItems.length - 1].focus();
          }

          break;
        case 40: // down
          event.stopPropagation();
          event.preventDefault();

          if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
            if (Array.from(topLevelmenuItems)[nextIndex] != undefined)
              Array.from(topLevelmenuItems)[nextIndex].focus();
            else Array.from(topLevelmenuItems)[0].focus();
          } else if (activeItem.closest('details')) {
            const subMenuItems = activeItem.closest('details')?.querySelectorAll('a, button, :scope details > summary');
            subNextIndex = Array.from(subMenuItems).indexOf(activeItem) + 1;

            if (Array.from(subMenuItems)[subNextIndex] != undefined) Array.from(subMenuItems)[subNextIndex].focus();
            else Array.from(subMenuItems)[0].focus();
          }

          break;
      }
    }
  });


}
