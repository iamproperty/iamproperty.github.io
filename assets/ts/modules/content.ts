export const loadComponents = (component, components = ['skeleton', 'bone', 'carousel', 'card', 'banner', 'notification']): void => {

  const assetLocation = document.body.hasAttribute('data-assets-location')
    ? document.body.getAttribute('data-assets-location')
    : '/assets';

  components.forEach((loadComponent) => {
    if (component.getElementsByTagName(`iam-${loadComponent}`).length === 0) return;

    import(/*! @vite-ignore */ `${assetLocation}/js/components/${loadComponent}/${loadComponent}.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-${loadComponent}`))
          window.customElements.define(`iam-${loadComponent}`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const replaceShortcode = (content): string => {
  return content.replaceAll(
    /<p>\[([^\]]+)\]<\/p>/g,
    '<span data-shortcode="$1"><iam-skeleton><iam-bone class="search"></iam-bone></iam-skeleton></span>'
  );
};

export const createTitle = (component, title): string => {
  if (component.hasAttribute('data-title-tag') && title)
    return `<${component.getAttribute('data-title-tag')} class="${component.getAttribute('data-title-class')} iam-content--title">${title}</${component.getAttribute('data-title-tag')}>`;

  return '';
};

export const transformElement = (component, renderedTitle, renderedContent): string => {
  const transform = component.getAttribute('data-transform');

  let elementAttributes = '';

  for (const attr of component.attributes) {
    elementAttributes += `${attr.name}="${attr.value}" `;
  }

  return `<${transform} ${elementAttributes}>${renderedTitle + renderedContent}</${transform}>`;
};

export const transformButtons = (buttons): DocumentFragment => {
  const fragment = document.createDocumentFragment();

  Array.from(buttons.querySelectorAll('.wp-block-button')).forEach((element) => {
    const link = element.querySelector('a');
    link.setAttribute('class', element.getAttribute('class'));

    fragment.appendChild(link);
  });

  return fragment;
};

export const loadNotifications = (nav, slug, mode): void => {

  const newXHRRequest = new XMLHttpRequest();

  let url = `https://iamcontent.iamproperty.com/wp-json/wp/v2/notification?slug=${slug}`

  switch (mode) {
    case 'dev':
    case 'mock':
      url = `https://iamcontent.dev.iamproperty.group/wp-json/wp/v2/notification?slug=${slug}`
      break;
    case 'local':
      url = `http://localhost:8080/wp-json/wp/v2/notification?slug=${slug}`
      break;
  }

  newXHRRequest.open('GET', url, true);

  newXHRRequest.onload = function (): void {
    if (this.status === 200) {

      let response = JSON.parse(this.responseText);

      if(response.length === 0) return;

      const notifications = response.filter((item: any) => item.slug == slug).map((item: any) => item)[0];

      console.log(notifications);

      const temp = document.createElement('div');
      temp.innerHTML = notifications.content.rendered;

      temp.querySelectorAll(`:scope > *:empty`).forEach((element) => {
        element.remove();
      });

      temp.querySelectorAll(`:scope > iam-notification`).forEach((notification) => {

        if(notification.hasAttribute('id')) {

          if(window.localStorage.getItem(`notification-dismissed-${notification.getAttribute('id')?.replace(' ', '-')}`) === 'true') {
            return;
          }
          // Mark the notification as dismissible
          notification.setAttribute('data-dismiss', true);
          // When dismissed, remove the notification and mark it as dismissed in localStorage
          notification.addEventListener('dismiss', () => {
            notification.remove();
            window.localStorage.setItem(`notification-dismissed-${notification.getAttribute('id')?.replace(' ', '-')}`, 'true');
          });
        }
        notification.setAttribute('data-type', 'alert');
        notification.setAttribute('slot', 'notifications');

        nav.insertAdjacentElement('beforeend', notification);
      });

      loadComponents(nav, ['notification']);
    }
  };

  newXHRRequest.send();
};
