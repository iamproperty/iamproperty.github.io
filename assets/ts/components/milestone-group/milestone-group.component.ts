import { trackComponent, trackComponentRegistered } from '../_global';
import milestoneGroup from '../../modules/milestone-group';

trackComponentRegistered('iam-milestone-group');

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
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const milestoneGroupComponent = this;

    trackComponent(milestoneGroupComponent, 'iam-milestone-group', ['hide-future-items', 'show-future-items']);

    milestoneGroup(this);
  }
}

export default iamMilestoneGroup;
