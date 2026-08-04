export const loadComponents = (component): void => {
  const components = ['skeleton', 'bone', 'carousel', 'card', 'banner', 'notification'];
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
