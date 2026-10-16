export const navTemplate = /* HTML */ `<div class="container">
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

        <div class="menu__secondary">
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
export const populateNav = (data, slot = ''): void => {
  let html = ``;

  data.forEach((feature) => {
    if (feature.attributes.sections.length)
      html += `<details name="megamenu" ${slot != '' ? `slot="${slot}"` : ''}><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateSections(feature.attributes.sections)}</div></details>`;
    else if (feature.attributes.links)
      html += `<details name="megamenu" ${slot != '' ? `slot="${slot}"` : ''}><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${populateLinks(feature.attributes.links)}</div></details>`;
    else html += `<a href="/" ${slot != '' ? `slot="${slot}"` : ''}>${feature.attributes.title}</a>`;
  });

  return html;
};

export const populateSections = (data): void => {
  let html = ``;

  data.forEach((section) => {
    html += `<span class="section section--${section.layout}">
      ${section.title ? `<span class="lead section-title" data-product="${section.id}" data-title>${section.title}:</span>` : ''}
      ${section.description ? `<span class="lead section-desc text-body" data-product="${section.id}"><i class="fa-solid fa-lock colour-warning"></i> ${section.description}</span>` : ''}
      ${populateLinks(section.links)}
    </span>`;
  });
  return html;
};

export const populateLinks = (data): void => {
  let html = ``;

  data.forEach((link) => {
    html += `<a href="${link.destinations.unlinked}" title="Learn more about this features product" target="_blank" data-product="${link.productKey}" data-feature="${link.featureKey}" data-enabled="${link.destinations.linkedEnabled}" data-disabled="${link.destinations.linkedDisabled}" ${link.visibility?.hideWhenAny ? `data-hide-when-any='{"values":${JSON.stringify(link.visibility.hideWhenAny)}}'` : ''}>${link.title}</a>`;
  });

  return html;
};

export const getEnvUrl = (mode?: string | null, product?: 'iap' | 'crm' | 'mtk'): string => {
  const envMap = {
    production: {
      iap: 'https://my.iamproperty.com',
      crm: 'https://crm.iamproperty.com',
      mtk: 'frontend.informationworks.co.uk'
    },
    test: {
      iap: 'https://my.eco.iamproperty.group',
      crm: 'https://dev.vtopenview.com',
      mtk: 'frontend-test.informationworks.co.uk'
    }
  };
  return envMap[mode ?? 'production'][product ?? 'iap'];
};

export const getNavigationEnvironment = (mode?: string | null): { hub: string; api: string } => {
  switch (mode ?? 'production') {
    case 'dev':
      return { hub: 'https://hub.dev.iamproperty.group', api: 'https://sso-api.dev.iamproperty.group' };
    case 'test':
    case 'uat':
    case 'pre-prod':
      return { hub: 'https://hub.pre-prod.iamproperty.group', api: 'https://sso-api.pre-prod.iamproperty.group' };
    default:
      return { hub: 'https://one.iamproperty.com', api: 'https://sso-api.iamproperty.com' };
  }
};

export const loadNavData = async (mode?: string | null): Promise<any> => {
  const ajaxURL = `${getNavigationEnvironment(mode).hub}/data/ecosystem-switcher.json`;

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
};

export type NavigationTokenProvider = () => string | null | Promise<string | null>;

// Navigation access is always resolved from the verified access token.
export const loadAuthenticatedUserData = async (
  mode: string | null | undefined,
  product: string | null,
  getAccessToken: NavigationTokenProvider,
  signal?: AbortSignal
): Promise<any> => {
  const token = await getAccessToken();
  if (signal?.aborted) throw new Error('Navigation request cancelled');
  if (typeof token !== 'string' || !token.trim()) throw new Error('Navigation access token unavailable');
  const base = getNavigationEnvironment(mode).api;
  const response = await fetch(`${base}/v2/navigation/access-context`, {
    method: 'POST',
    signal,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      data: {
        type: 'navigation-access-context-request',
        attributes: { requestingProduct: product, navigationSchemaVersion: '2026-04-16' },
      },
    }),
  });
  if (!response.ok) throw new Error(`Navigation access request failed (${response.status})`);
  const json = await response.json();
  const data = json.data ?? json;
  if (
    !data?.attributes?.features ||
    typeof data.attributes.features !== 'object' ||
    Array.isArray(data.attributes.features) ||
    !Object.values(data.attributes.features).every((features) => Array.isArray(features))
  ) {
    throw new Error('Invalid navigation access response');
  }
  return data;
};

export const loadInsightsData = async (mode, subject, product): any => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const data = {
    "dashboards": [
      {
          "slug": "stock-switch",
          "pageTitle": "All Insights",
          "iframeTitle": "Properties most likely to switch",
          "suggestionLabel": "Show me stock currently on the market most likely to switch",
          "group": "Win",
          "requiredProducts": [
              "mtk"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/marketing-toolkit/"
      },
      {
          "slug": "predicted-movers",
          "pageTitle": "All Insights",
          "iframeTitle": "Predicted movers not yet on the market",
          "suggestionLabel": "Show me predicted movers not yet on the market",
          "group": "Win",
          "requiredProducts": [
              "mtk"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/marketing-toolkit/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Create Print Campaign",
                  "action": "create-print-campaign"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property",
              "branch-column": "Branch",
              "counter-text": "Predicted movers not yet on the market",
              "cta-url-structure": "https://my.eco.iamproperty.group/iamproperty-one/login?return=/DataServices/PropertyProfile/:UDPRN/:UMRRN",
              "cta-text": "View property"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      },
      {
          "slug": "market-appraisals",
          "pageTitle": "All Insights",
          "iframeTitle": "Market appraisals not yet on the market",
          "suggestionLabel": "Show me Market Appraisals carried out, but not yet on market",
          "group": "Win",
          "requiredProducts": [
              "mtk"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/marketing-toolkit/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Create Print Campaign",
                  "action": "create-print-campaign"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property",
              "branch-column": "Branch",
              "cta-url-structure": "https://my.eco.iamproperty.group/iamproperty-one/login?return=/MarketAppraisals/:InstructionType/Appraisal/:AppraisalId?s_Id=4003",
              "cta-text": "View appraisal"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      },
      {
          "slug": "vendor-conveyancing",
          "pageTitle": "All Insights",
          "iframeTitle": "Vendor conveyancing opportunities",
          "suggestionLabel": "Show me current vendor conveyancing opportunities still to convert",
          "group": "Grow",
          "requiredProducts": [
              "crm",
              "movebutler"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/iamproperty-crm/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property",
              "branch-column": "Branch",
              "cta-url-structure": "https://my.iamproperty.com/iamproperty-one/login?return=/ic/transaction/:transactionId/view",
              "cta-text": "View transaction overview"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      },
      {
          "slug": "sale-ready",
          "pageTitle": "All Insights",
          "iframeTitle": "Sale Ready opportunities",
          "suggestionLabel": "Show me properties that could be suitable for Sale Ready based on client circumstances",
          "group": "Grow",
          "requiredProducts": [
              "crm",
              "movebutler"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/iamproperty-crm/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property",
              "branch-column": "Branch",
              "cta-url-structure": "/ic/transaction/:transaction/:action",
              "cta-text": "See details"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      },
      {
          "slug": "sales-progression",
          "pageTitle": "All Insights",
          "iframeTitle": "Potential sales progression delays",
          "suggestionLabel": "Show me properties that may experience delays during sales progression",
          "group": "Grow",
          "requiredProducts": [
              "crm",
              "movebutler"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/iamproperty-crm/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property",
              "branch-column": "Branch",
              "cta-url-structure": "/ic/transaction/:transaction/:action",
              "cta-text": "See details"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      },
      {
          "slug": "auction",
          "pageTitle": "All Insights",
          "iframeTitle": "Properties potentially suitable for auction",
          "suggestionLabel": "Show me properties that could be suitable for auction",
          "group": "Grow",
          "requiredProducts": [
              "ias"
          ],
          "lockedUrl": "https://iamproperty.com/ecosystem/auction/",
          "actions": [
              {
                  "label": "Create Task",
                  "action": "create-task"
              },
              {
                  "label": "Export table data",
                  "action": "export-table-data"
              }
          ],
          "properties": {
              "class": "inside-hub",
              "title-column": "Property"
          },
          "lookerHost": "iamproperty.cloud.looker.com"
      }
    ]
  };
  return data;
};

export const setEnabledLinks = (component, data): void => {
  const elements = component.querySelectorAll('[data-product][data-feature]');

  elements.forEach((element) => {
    if (data.attributes.features[element.getAttribute('data-product')]) {
      const isEnabled = data.attributes.features[element.getAttribute('data-product')].includes(
        element.getAttribute('data-feature')
      );

      element.setAttribute('data-is-enabled', isEnabled);
      if (isEnabled && element.getAttribute('data-enabled')) {
        element.setAttribute('href', element.getAttribute('data-enabled'));
        element.removeAttribute('target');
        element.removeAttribute('title');
      }
    }
  });
};

export const setInsightsLinks = (component, data): void => {
  const insights = component.shadowRoot.querySelectorAll('#insights-menu [data-required-products]');
  insights.forEach((insight) => {
    const requiredProducts = JSON.parse(insight.getAttribute('data-required-products'));
    requiredProducts.forEach((product) => {
      if (!data.attributes.features[product]){
        insight.setAttribute('data-is-disabled', true);
      }
    });
  });
  insights.forEach((insight) => {
    if (!insight.hasAttribute('data-is-disabled')) {
      insight.setAttribute('data-is-enabled', true);
      insight.setAttribute('href', insight.getAttribute('data-enabled'));
      insight.removeAttribute('target');
      insight.removeAttribute('title');
    }
  });
};

export const hideLinks = (component, data): void => {
  const elements = component.querySelectorAll('[data-hide-when-any]');

  elements.forEach((element) => {
    const hideConditions = JSON.parse(element.getAttribute('data-hide-when-any')).values;
    const shouldHide = hideConditions.some(
      (condition) => !data.attributes.features[condition.product]?.includes(condition.feature)
    );

    if (shouldHide) {
      element.style.display = 'none';
    }
  });
};


export const populateInsightsMenu = (insightsMenu, dashboards): void => {

  const createGroups = (dashboards: any[]): { name: string; children: any[] }[] => {

    const defaultGroupOrder = ['Win', 'Grow'];
    return [...new Set<string>(dashboards.map((dashboard) => dashboard.group))]
      .sort((a, b) => {
        const aIndex = defaultGroupOrder.indexOf(a);
        const bIndex = defaultGroupOrder.indexOf(b);
        return (
          (aIndex === -1 ? defaultGroupOrder.length : aIndex) - (bIndex === -1 ? defaultGroupOrder.length : bIndex)
        );
      })
      .map((name) => ({
        name,
        children: dashboards.filter((dashboard: any) => dashboard.group === name),
      }));
  };

  const groups = createGroups(dashboards);

  // Populate the questions into the nav menu
  groups.forEach((group) => {
    const groupTitle = document.createElement('span');
    groupTitle.classList.add('group-title');
    groupTitle.textContent = group.name;
    insightsMenu.appendChild(groupTitle);

    group.children.forEach((dashboard) => {
      const questionElement = document.createElement('a');
      questionElement.textContent = dashboard.suggestionLabel;
      questionElement.setAttribute('href', dashboard.lockedUrl); // Add a default href or modify as needed
      questionElement.setAttribute('data-required-products', JSON.stringify(dashboard.requiredProducts));
      questionElement.setAttribute('data-enabled', dashboard.slug);
      questionElement.setAttribute('target', '_blank');
      questionElement.setAttribute('title', 'Requires product access — learn more');

      insightsMenu.appendChild(questionElement);
    });
  });
};

export const insightsEvents = (component): void => {

  const insightsMenu = component.shadowRoot.querySelector('#insights-menu');
  const insightsButton = component.querySelector('#insights-button');
  const insightsClose = component.shadowRoot.querySelector('#insights-close');
  const backdrop = component.shadowRoot.querySelector('.backdrop');

  const menuButton = component.shadowRoot.querySelector('#btn-menu');
  const menu = component.shadowRoot.querySelector('.menu');
  const accountMenuButton = component.shadowRoot.querySelector('#btn-menu-account');
  const accountMenu = component.shadowRoot.querySelector('.nav--menu');

  insightsButton.addEventListener('click', (e) => {
    e.preventDefault();
    insightsMenu.classList.toggle('open');

    menu.classList.remove('open');
    menuButton?.removeAttribute('aria-expanded');
    accountMenu.classList.remove('open');
    accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
    accountMenuButton?.removeAttribute('aria-expanded');
    component.querySelector(':scope > details[open]')?.removeAttribute('open');

    if (insightsMenu.classList.contains('open')) {
      insightsButton.classList.add('active');
      insightsButton?.setAttribute('aria-expanded', true);

      component.classList.add('open');
      component.classList.add('open-secondary');
      backdrop.classList.add('show');
    } else {
      insightsButton.classList.remove('active');
      component.classList.remove('open');
      component.classList.remove('open-secondary');
      backdrop.classList.remove('show');
    }
  });

  insightsClose?.addEventListener('click', (e) => {
    e.preventDefault();
    insightsMenu.classList.remove('open');
    insightsButton.classList.remove('active');
    insightsButton?.removeAttribute('aria-expanded');
    component.classList.remove('open');
    component.classList.remove('open-secondary');
    backdrop.classList.remove('show');
  });
};
// #endregion

export const branchSelector = (component): void => {
  const branchSelector = component.querySelector('iam-branch-selector');
  const mql = window.matchMedia('(width > 62em)');

  if (mql.matches) branchSelector?.setAttribute('slot', 'secondary');

  mql.addEventListener('change', (e) => {
    if (e.matches && component.classList.contains('has-secondary')) branchSelector?.setAttribute('slot', 'secondary');
    else branchSelector?.setAttribute('slot', 'account');
  });
};


export const menuEvents = (component, menu, menuButton, accountMenu, accountMenuButton): void => {
  menuButton.addEventListener(
    'click',
    (e) => {
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
    },
    false
  );
};

export const megaMenuTitles = (component): void => {
  // Mega menu title
  component.querySelectorAll('details').forEach((detailsElement) => {
    const summary = detailsElement.querySelector('summary');
    const containerDiv = detailsElement.querySelector(':Scope > div');

    if (containerDiv) containerDiv.setAttribute('data-title', summary.textContent);
  });
};

export const megaMenusEvents = (component, menu, menuButton, accountMenu, accountMenuButton, backdrop): void => {
  component.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('summary')) {
      const summary = event.target.closest('summary');
      const details = summary.closest('details');

      if (details.hasAttribute('slot') && details.getAttribute('slot') == 'account') {
        return false;
      }

      if (window.innerWidth > 992 && !event.target.closest('.nav--menu')) {
        if (details?.hasAttribute('open')) {
          // Is open before the user clicks on the details summary

          backdrop.classList.remove('show');
          component.classList.remove('open');
          component.classList.remove('open-secondary');
        } else {
          backdrop.classList.add('show');
          component.classList.add('open');

          if (details?.hasAttribute('slot') && details?.getAttribute('slot') == 'secondary')
            component.classList.add('open-secondary');

          // Open the first details element if one isn't open
          if (!details.querySelector('details[open]') && details.querySelector('details'))
            details.querySelector('details').setAttribute('open', true);
        }

        // Close all other siblings of details
        details?.parentNode.querySelectorAll(':scope > details').forEach((element) => {
          if (element != details) element.removeAttribute('open');
        });

        menu.classList.remove('open');
        accountMenu.classList.remove('open');
        accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
        menuButton?.removeAttribute('aria-expanded');
        accountMenuButton?.removeAttribute('aria-expanded');

        const insightsMenu = component.shadowRoot.querySelector('#insights-menu');
        const insightsButton = component.querySelector('#insights-button');

        if (insightsMenu)
          insightsMenu.classList.remove('open');

        if (insightsButton){
          insightsButton?.classList.remove('active');
          insightsButton?.removeAttribute('aria-expanded');
        }
      }
    }
  });
};

export const accountMenuEvents = (component, menu, menuButton, accountMenu, accountMenuButton, backdrop): void => {
  accountMenuButton.addEventListener('click', () => {

    const insightsMenu = component.shadowRoot.querySelector('#insights-menu');
    const insightsButton = component.querySelector('#insights-button');

    // Close the main menu
    menu.classList.remove('open');
    accountMenu.classList.toggle('open');


    if (accountMenu.classList.contains('open')) {
      component.classList.add('open');
      accountMenuButton?.querySelector('.btn-primary').classList.add('active');
      accountMenuButton?.setAttribute('aria-expanded', true);

      backdrop.classList.add('show');

      /* insights menu */
      if (insightsButton) {
        insightsButton?.classList.remove('active');
        insightsButton?.removeAttribute('aria-expanded');
      }

    } else {
      component.classList.remove('open');
      accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
      accountMenuButton?.removeAttribute('aria-expanded');
      backdrop.classList.remove('show');
    }

    component.querySelector(':scope > details[open]')?.removeAttribute('open');
    menuButton?.removeAttribute('aria-expanded');

    if (insightsMenu)
      insightsMenu.classList.remove('open');
  });
};

export const backdropEvents = (component, menu, menuButton, accountMenu, accountMenuButton, backdrop): void => {
  // Close the menu on the click of the backdrop on desktop
  backdrop.addEventListener('click', () => {
    const openMenu = component.querySelector(':scope > details[open]');
    const insightsMenu = component.shadowRoot.querySelector('#insights-menu');
    const insightsButton = component.querySelector('#insights-button');

    if (openMenu) openMenu.removeAttribute('open');

    component.classList.remove('open');
    menu.classList.remove('open');
    menuButton?.removeAttribute('aria-expanded');
    accountMenu.classList.remove('open');
    accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
    accountMenuButton?.removeAttribute('aria-expanded');

    if (insightsMenu)
      insightsMenu.classList.remove('open');

    if (insightsButton){
      insightsButton?.classList.remove('active');
      insightsButton?.removeAttribute('aria-expanded');
    }

    backdrop.classList.remove('show');
  });
};
