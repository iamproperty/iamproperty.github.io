import { trackComponent, trackComponentRegistered } from '../_global';
import milestone from '../../modules/milestone';

trackComponentRegistered('iam-milestone');

class iamMilestone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

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
      <div class="milestone-wrap" part="milestone-wrap">
        <slot name="milestone-intro" class="milestone-intro" part="milestone-intro"></slot>
        <slot>
          <div class="task-wrap" part="milestone-task-wrap"></div>
        </slot>
      </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const milestoneComponent = this;

    trackComponent(milestoneComponent, 'iam-milestone', ['milestone-item-closed', 'milestone-item-opened']);

    milestone(this);
  }
}

export default iamMilestone;
