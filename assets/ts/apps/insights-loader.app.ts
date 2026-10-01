import iamTableAdvanced from '../../js/components/table-advanced/table-advanced.component.min.js';
import iamPagination from '../../js/components/pagination/pagination.component.min.js';
import iamActionbar from '../../js/components/actionbar/actionbar.component.min.js';
import iamMenu from '../../js/components/menu/menu.component.min.js';
import iamMap from '../../js/components/map/map.component.min.js';
import iamNotification from '../../js/components/notification/notification.component.min.js';
import iamAppInsights from './insights.app.js';

document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-pagination`) && iamPagination)
    window.customElements.define(`iam-pagination`, iamPagination);

  if (!window.customElements.get(`iam-actionbar`) && iamActionbar)
    window.customElements.define(`iam-actionbar`, iamActionbar);

  if (!window.customElements.get(`iam-table-advanced`) && iamTableAdvanced)
    window.customElements.define(`iam-table-advanced`, iamTableAdvanced);

  if (!window.customElements.get(`iam-menu`) && iamMenu)
    window.customElements.define(`iam-menu`, iamMenu);

  if (!window.customElements.get(`iam-notification`) && iamNotification)
    window.customElements.define(`iam-notification`, iamNotification);

  if (!window.customElements.get(`iam-map`) && iamMap)
    window.customElements.define(`iam-map`, iamMap);

  // Finally, define the iam-app-insights component if it hasn't been defined yet.
  if (!window.customElements.get(`iam-app-insights`) && iamAppInsights)
    window.customElements.define(`iam-app-insights`, iamAppInsights);

});

