const navbar = (element): void => {
  Array.from(element.querySelectorAll('details')).forEach((detail) => {
    detail.addEventListener(
      'mouseenter',
      function () {
        if (window.matchMedia('(min-width: 62em)').matches) detail.setAttribute('open', 'true');
      },
      false
    );

    detail.addEventListener(
      'mouseleave',
      function () {
        if (window.matchMedia('(min-width: 62em)').matches) detail.removeAttribute('open');
      },
      false
    );
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1), {
      threshold: [1],
    });

    observer.observe(element);
  }
};

export const populateNav = (data):void => {

  let html = ``;

  data.forEach((feature) => {

    if(feature.attributes.sections)
      html += `<details name="megamenu"><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateSections(feature.attributes.sections)}</div></details>`;
    else if(feature.attributes.links)
      html += `<details name="megamenu"><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateLinks(feature.attributes.links)}</div></details>`;
    else 
      html += `<a href="/">${feature.attributes.title}</a>`;
  });

  return html;
}

export const populateSections = (data):void => {

  let html = ``;

  data.forEach((section) => {

    html += `<span class="section ${section.class}">
      <span class="lead text-heading d-block">${section.enabled == "false" && section.marketing ? section.marketing : section.title}</span>
      ${populateLinks(section.links)}
    </span>`;
  });
  return html;
}

export const populateLinks = (data):void => {

  let html = ``;

  data.forEach((link) => {

  html += `
    <a href="${link.url}">${link.title}</a>`;

  });

  return html;
}

export const loadNavData = async(Cookies): any => {

  const ajaxURL = '/nav.json';

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = window.controller[ajaxURL];

  try {
    return await fetch(ajaxURL, {
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
      // populate datalist
      let listString = '';

      const data = response['data'] ? response['data'] : response;


      return data;
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      return true;
    }
    console.log(error);
    return 'There has been a problem. Please try again in a few moments.';
  }
}


export default navbar;
