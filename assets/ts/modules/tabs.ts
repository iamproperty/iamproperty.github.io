import v from '../../js/components/pagination/pagination.component.min';
import { getSwipeDirection } from './helpers';

export const createTabsLinks = function (tabsElement: Element): void {
  const detailsORLinks = tabsElement.querySelectorAll(':scope > details, :scope > a');
  let tabLinks = tabsElement.querySelector(':scope > .tabs__links');
  let tabDropdown = tabsElement.querySelector(':scope .tabs__dropdown');

  if (tabsElement.shadowRoot && tabsElement.shadowRoot.querySelector('.tabs__links'))
    tabLinks = tabsElement.shadowRoot.querySelector('.tabs__links');

  if (!tabLinks) {
    tabLinks = document.createElement('div');
    tabLinks.classList.add('tabs__links');

    const tabLinksWrapper = document.createElement('div');
    tabLinksWrapper.classList.add('tabs__links__wrapper');

    tabLinksWrapper.prepend(tabLinks);
    tabsElement.prepend(tabLinksWrapper);
  }

  if (!tabDropdown) {
    tabDropdown = document.createElement('select');

    tabDropdown.classList.add('tabs__dropdown');

    tabsElement.prepend(tabDropdown);
  }

  // Create the tab buttons from the summary titles
  let tabindex = 0;
  detailsORLinks.forEach((element) => {
    let button = document.createElement('button');
    const dropdownOpt = document.createElement('option');

    if (element.matches('details')) {
      const summary = element.querySelector(':scope > summary');
      const isDisabled = summary.classList.contains('disabled');

      summary.classList.add('visually-hidden');

      if (element.hasAttribute('id')) button.setAttribute('data-id', `${element.getAttribute('id')}`);

      if (element.hasAttribute('open')) {
        button.setAttribute('aria-pressed', true);
      }
      button.innerHTML = `${summary.innerText}`;
      button.classList.add('link');
      button.setAttribute('data-index', tabindex);
      button.setAttribute('part', 'tab-link');

      dropdownOpt.innerHTML = `${summary.innerText}`;
      dropdownOpt.value = summary.innerText.replace(/\s+/g, '-').toLowerCase();
      dropdownOpt.setAttribute('data-index', tabindex);

      element.setAttribute('tabindex', '-1');

      if (isDisabled) {
        button.classList.add('disabled');
      }

      tabindex++;
    } else if (element.matches('a')) {
      button = element;
    }

    button.classList.add('link');
    tabLinks.appendChild(button);

    tabDropdown.appendChild(dropdownOpt);
  });
};

export const setTabsEventHandlers = function (tabsElement: Element): void {
  const details = tabsElement.querySelectorAll(':scope > details');
  const summaries = tabsElement.querySelectorAll(':scope > details > summary');
  let buttonWrapper = tabsElement.querySelector(':scope .tabs__links');
  let buttons = tabsElement.querySelectorAll(':scope .tabs__links > button');
  const tabDropdown = tabsElement.querySelector(':scope .tabs__dropdown');

  let nextButton = tabsElement.querySelector(':scope .tabs__next');

  let scrollTimeout;
  window.isClicked = false;
  window.isScrolling = false;

  if (tabsElement.shadowRoot) {
    buttons = tabsElement.shadowRoot.querySelectorAll('.tabs__links > button');
    buttonWrapper = tabsElement.shadowRoot.querySelector('.tabs__links');
    nextButton = tabsElement.shadowRoot.querySelector('.tabs__next');
  }

  // Set the on click for the tab buttons, these will open the details box it matches too
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      window.isClicked = true;

      if (button.classList.contains('disabled')) return false;

      buttons.forEach((buttonLoopItem) => {
        const buttonPressed = buttonLoopItem == button ? true : false;
        buttonLoopItem.setAttribute('aria-pressed', buttonPressed);
      });

      buttonWrapper.scroll({
        top: 0,
        left: button.offsetLeft,
        behavior: 'smooth',
      });

      //Handles showing correct content
      toggleTab(details, button);

      // Data layer Open Event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'openTab',
        tabTitle: button.textContent,
      });

      if (button.matches(':last-child')) {
        nextButton?.setAttribute('disabled', 'disabled');
      } else {
        nextButton?.removeAttribute('disabled');
      }
    });

    dropdownTabSelector(details, tabDropdown);
  });

  buttonWrapper.addEventListener('scrollend', () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function () {
      let buttonToClick = buttons[0];
      let closestOffset = Math.abs(buttonToClick.getBoundingClientRect().left);

      buttons.forEach((button) => {
        if (Math.abs(button.getBoundingClientRect().left) < closestOffset) {
          closestOffset = Math.abs(button.getBoundingClientRect().left);
          buttonToClick = button;
        }
      });

      if (window.isClicked) {
        window.isClicked = false;
        return false;
      } else {
        buttonToClick.click();
      }
      buttonToClick.focus();
    }, 500);
  });

  // Make sure we dont loose existing summary functionality
  summaries.forEach((summary, index) => {
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      buttons[index].click();
    });
  });

  nextButton?.addEventListener('click', (e) => {
    e.preventDefault();

    const currentTab = buttonWrapper.querySelector('[aria-pressed="true"]');
    const nextTab = currentTab.nextSibling;

    if (nextTab) nextTab.click();
  });

  if (tabsElement.classList.contains('tabs--guided')) {
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    details.forEach((detail) => {
      detail.addEventListener('touchstart', (event) => {
        event.stopPropagation();

        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      });

      detail.addEventListener('touchend', (event) => {
        event.stopPropagation();
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        const direction = getSwipeDirection(touchstartX, touchstartY, touchendX, touchendY);
        const currentTab = buttonWrapper.querySelector('[aria-pressed="true"]');
        const nextTab = currentTab.nextSibling;
        const prevTab = currentTab.previousSibling;

        switch (direction) {
          case 'left':
            if (nextTab) nextTab.click();

            break;
          case 'right':
            if (prevTab) prevTab.click();

            break;
        }
      });
    });
  }
};

export const toggleTab = function (details: Array, button: Element): boolean | void {
  details.forEach((detail, detailsIndex) => {
    const detailsOpen = button.getAttribute('data-index') == detailsIndex ? true : false;

    if (detailsOpen) detail.setAttribute('open', detailsOpen);
    else detail.removeAttribute('open');
  });
};

export const dropdownTabSelector = function (details: Array, dropdown: Element): boolean | void {
  dropdown.addEventListener('change', (e) => {
    e.preventDefault();
    const selected = dropdown.options[dropdown.selectedIndex];

    toggleTab(details, selected);

    // Data layer Open Event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'openTab',
      tabTitle: selected.innerText,
    });
  });
};

export const openFirstTab = function (tabsElement: Element): boolean | void {
  if (!tabsElement.querySelector(':scope > details')) return false;

  const details = tabsElement.querySelectorAll(':scope > details');
  const buttons = tabsElement.shadowRoot.querySelectorAll('.tabs__links > button');

  if (
    location.hash &&
    tabsElement.shadowRoot.querySelector(`.tabs__links [data-id="${location.hash.replace('#', '')}"]`)
  ) {
    tabsElement.shadowRoot
      .querySelector(`[data-id="${location.hash.replace('#', '')}"]`)
      .setAttribute('aria-pressed', true);
    tabsElement.querySelector(`details[id="${location.hash.replace('#', '')}"]`).setAttribute('open', true);
  } else if (!tabsElement.querySelector(`details[open]`)) {
    details[0].setAttribute('open', true);
    buttons[0].setAttribute('aria-pressed', true);
  }
};

const tabs = function (tabsElement: Element): void {
  createTabsLinks(tabsElement);
  setTabsEventHandlers(tabsElement);
  openFirstTab(tabsElement);
};

export default tabs;
