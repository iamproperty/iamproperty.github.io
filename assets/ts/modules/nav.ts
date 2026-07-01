export const navTemplate = /* HTML */`<div class="container">
  <slot name="logo"></slot>

  <div class="buttons-holder">
    <button class="btn-menu" part="btn-menu-account" id="btn-menu-account">
      <span class="btn btn-primary">
        <span id="account-btn-title"></span>
        <i class="fa-user fa-solid"></i>
        <i class="fa-regular fa-xmark-large"></i>
      </span>
    </button>
    <button class="btn-menu" part="btn-menu" id="btn-menu">
      Menu
      <i class="fa-regular fa-bars"></i>
      <i class="fa-regular fa-xmark-large"></i>
    </button>
  </div>

  <div class="menu__outer" part="menu__outer">
    <div class="menu closed" part="menu">

      <div class="menu__primary">
        <slot></slot>
        <slot name="dual"></slot>
      </div>
      <div class="dialog__wrapper d-none" id="search-wrapper"></div>

      <slot name="actions"></slot>

      <div class="menu__secondary bg-light">
        <div class="container">

          <slot name="secondary"></slot>
        </div>
      </div>
    </div>
    <div class="nav--menu" part="nav--menu">
      <slot name="account"></slot>
    </div>
  </div>
</div>
<div class="backdrop" part="backdrop"></div>`;

// #region Standadised Nav
export const populateNav = (data, slot = ''):void => {

  let html = ``;

  data.forEach((feature) => {

    if(feature.attributes.sections.length)
      html += `<details name="megamenu" ${slot != '' ? `slot="${slot}"` : ''}><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateSections(feature.attributes.sections)}</div></details>`;
    else if(feature.attributes.links)
      html += `<details name="megamenu" ${slot != '' ? `slot="${slot}"` : ''}><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateLinks(feature.attributes.links)}</div></details>`;
    else
      html += `<a href="/" ${slot != '' ? `slot="${slot}"` : ''}>${feature.attributes.title}</a>`;
  });

  return html;
}

export const populateSections = (data):void => {

  let html = ``;

  data.forEach((section) => {

    html += `<span class="section section--${section.layout}">
      ${section.title ? `<span class="lead section-title" data-product="${section.id}" data-title>${section.title}:</span>` : ''}
      ${section.description ? `<span class="lead section-desc text-body" data-product="${section.id}"><i class="fa-solid fa-rocket colour-warning"></i> ${section.description}</span>` : ''}
      ${populateLinks(section.links)}
    </span>`;
  });
  return html;
}

export const populateLinks = (data):void => {

  let html = ``;

  data.forEach((link) => {


    html += `<a href="${link.destinations.unlinked}" title="Learn more about this features product" target="_blank" data-product="${link.productKey}" data-feature="${link.featureKey}" data-enabled="${link.destinations.linkedEnabled}" data-disabled="${link.destinations.linkedDisabled}">${link.title}</a>`;

  });

  return html;
}

export const loadNavData = async(mode): any => {

  const ajaxURL = mode != 'dev' ? 'https://hub.iamproperty.group/data/ecosystem-switcher.json' : 'https://dev.hub.iamproperty.group/data/ecosystem-switcher.json';

  try {
    const response = await fetch(ajaxURL, {
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

export const loadUserData = async(mode, subject, product): any => {

  const ajaxURL = mode != 'dev' ? 'https://api.sso.iamproperty.group/navigation/access-context' : 'https://api.dev.sso.iamproperty.group/navigation/access-context';

  try {

    const response = await fetch(ajaxURL, {
      method: 'post',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        "data": {
          "type": "navigation-access-context-request",
          "attributes": {
            "subject": subject,
            "requestingProduct": product,
            "navigationSchemaVersion": "2026-04-16"
          }
        }
      })
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

  const elements = component.querySelectorAll('[data-product][data-feature]');

  elements.forEach((element) => {

    if(data.attributes.features[element.getAttribute('data-product')]){

      const isEnabled = data.attributes.features[element.getAttribute('data-product')].includes(element.getAttribute('data-feature'));

      element.setAttribute('data-is-enabled',isEnabled);
      if(isEnabled && element.getAttribute('data-enabled')){
        element.setAttribute('href',element.getAttribute('data-enabled'));
        element.removeAttribute('target');
        element.removeAttribute('title');
      }

    }
  });

}
// #endregion

export const branchSelector = (component):void => {
  const branchSelector = component.querySelector("iam-branch-selector");
  const mql = window.matchMedia("(width > 62em)");

  if (mql.matches)
    branchSelector?.setAttribute('slot','secondary');

  mql.addEventListener("change", (e) => {

    if (e.matches && component.classList.contains('has-secondary'))
      branchSelector?.setAttribute('slot','secondary');
    else
      branchSelector?.setAttribute('slot','account');
  });
}

export const menuEvents = (component,menu,menuButton,accountMenu,accountMenuButton):void => {

  menuButton.addEventListener ('click', (e) => {
    e.preventDefault();

    menu.classList.toggle('open');
    accountMenu.classList.remove('open');


    if (menu.classList.contains('open')) {
      component.classList.add('open');
    } else {
      component.classList.remove('open');
    }

    accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
    accountMenuButton?.removeAttribute('aria-expanded');

    component.querySelector(':scope > details[open]')?.removeAttribute('open');

  }, false);
}

export const megaMenuTitles = (component):void => {

  // Mega menu title
  component.querySelectorAll('details').forEach((detailsElement) => {
    const summary = detailsElement.querySelector('summary');
    const containerDiv = detailsElement.querySelector(':Scope > div');

    if(containerDiv)
      containerDiv.setAttribute('data-title', summary.textContent);
  });
}

export const megaMenusEvents = (component,menu,menuButton,accountMenu,accountMenuButton,backdrop):void => {

  component.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('summary')) {

      const summary = event.target.closest('summary');
      const details = summary.closest('details');

      if (window.innerWidth > 992 && !event.target.closest('.nav--menu')) {


        if (details?.hasAttribute('open')) { // Is open before the user clicks on the details summary

          backdrop.classList.remove('show');
          component.classList.remove('open');
          component.classList.remove('open-secondary');
        } else {
          backdrop.classList.add('show');
          component.classList.add('open');

          if(details?.hasAttribute('slot') && details?.getAttribute('slot') == "secondary")
            component.classList.add('open-secondary');

          // Open the first details element if one isn't open
          if(!details.querySelector('details[open]') && details.querySelector('details'))
            details.querySelector('details').setAttribute('open', true);
        }

        // Close all other siblings of details
        details?.parentNode.querySelectorAll(':scope > details').forEach(element => {

          if(element != details)
            element.removeAttribute('open');
        });


        menu.classList.remove('open');
        accountMenu.classList.remove('open');
        accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
        menuButton?.removeAttribute('aria-expanded');
        accountMenuButton?.removeAttribute('aria-expanded');
      }
    }
  });
}

export const accountMenuEvents = (component,menu,menuButton,accountMenu,accountMenuButton,backdrop):void => {

  accountMenuButton.addEventListener ('click', () => {

    // Close the main menu
    menu.classList.remove('open');
    accountMenu.classList.toggle('open');

    if (accountMenu.classList.contains('open')) {
      component.classList.add('open');
      accountMenuButton?.querySelector('.btn-primary').classList.add('active');
      accountMenuButton?.setAttribute('aria-expanded', true);
    } else {
      component.classList.remove('open');
      accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
      accountMenuButton?.removeAttribute('aria-expanded');
    }

    component.querySelector(':scope > details[open]')?.removeAttribute('open');
    menuButton?.removeAttribute('aria-expanded');
  });
}

export const backdropEvents = (component,menu,menuButton,accountMenu,accountMenuButton,backdrop):void => {

  // Close the menu on the click of the backdrop on desktop
  backdrop.addEventListener('click', () => {
    const openMenu = component.querySelector(':scope > details[open]');

    if (openMenu) openMenu.removeAttribute('open');

    component.classList.remove('open');
    menu.classList.remove('open');
    menuButton?.removeAttribute('aria-expanded');
    accountMenu.classList.remove('open');
    accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
    accountMenuButton?.removeAttribute('aria-expanded');

    backdrop.classList.remove('show');
  });
}
