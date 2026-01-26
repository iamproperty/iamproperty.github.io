import Cookies from 'js-cookie';

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

  const inputType = firstInput.getAttribute('type');
  const inputName = firstInput.getAttribute('name');

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
            items += `<label class="tag"><input type="${inputType}" name="${component.hasAttribute('data-name') ? component.getAttribute('data-name') : inputName}" value="${ response['data'][i].value }"/>${ response['data'][i].title }</label>`;
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