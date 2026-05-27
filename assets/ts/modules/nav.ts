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

    if(feature.attributes.sections.length)
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

    html += `<span class="section section--${section.layout}">
      ${section.title ? `<span class="lead section-title" data-product="${section.id}" data-title>${section.title}:</span>` : ''}
      ${section.description ? `<span class="lead section-desc" data-product="${section.id}"><i class="fa-solid fa-sparkles colour-warning"></i> ${section.description}</span>` : ''}
      ${populateLinks(section.links)}
    </span>`;
  });
  return html;
}

export const populateLinks = (data):void => {

  let html = ``;

  data.forEach((link) => {


    html += `<a href="${link.destinations.unlinked}" target="_blank" data-product="${link.productKey}" data-feature="${link.featureKey}" data-enabled="${link.destinations.linkedEnabled}" data-disabled="${link.destinations.linkedDisabled}">${link.title}</a>`;

  });

  return html;
}

export const loadNavData = async(Cookies): any => {

  const ajaxURL = 'https://dev.hub.iamproperty.group/data/ecosystem-switcher.json';

  //const ajaxURL = '/nav.json';

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = window.controller[ajaxURL];

  try {
    const response = await fetch(ajaxURL, {
      signal,
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const json = await response.json();
    const data = json.data ? json.data : json;
    return data;
  } catch (error) {
    if (error?.name === 'AbortError') {
      return true;
    }
    console.log(error);
    return 'There has been a problem. Please try again in a few moments.';
  }
}

export const loadUserData = async(Cookies): any => {

  const ajaxURL = '/user.json';

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = window.controller[ajaxURL];

  try {
    const response = await fetch(ajaxURL, {
      signal,
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const json = await response.json();
    const data = json.data ? json.data : json;
    return data;
  } catch (error) {
    if (error?.name === 'AbortError') {
      return true;
    }
    console.log(error);
    return 'There has been a problem. Please try again in a few moments.';
  }
}

export const setEnabledLinks = (component,data):void => {

  document.querySelectorAll(`iam-nav [data-product][data-feature]`).forEach((element) => {
    const isEnabled = data.attributes.products[element.getAttribute('data-product')].features[element.getAttribute('data-feature')];
    element.setAttribute('data-is-enabled',isEnabled);
    if(isEnabled && element.getAttribute('data-enabled')){
      element.setAttribute('href',element.getAttribute('data-enabled'));
      element.removeAttribute('target');
    }
  });

}

export default navbar;
