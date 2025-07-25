import milestoneGroup from '../../modules/milestone-group';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'milestone-group',
});

class iamMilestoneGroup extends HTMLElement {
  constructor() {
    super();
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css')
      ? document.body.getAttribute('data-core-css')
      : `${assetLocation}/css/core.min.css`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    </style>
      <div class="milestone-group" part="milestone-group">
        <slot>
        </slot>
      </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    milestoneGroup(this);
  }
}

export default iamMilestoneGroup;
