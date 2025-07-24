export const actionbar = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>switch-view</th>
      <td>When a user switches the view</td>
      <td>{ detail: { view: btn.textContent } }</td>
    </tr>
    <tr>
      <th>search-submit</th>
      <td>The search bar has submitted</td>
      <td>{ detail: { search: searchBar.querySelector('input').value } }</td>
    </tr>
    <tr>
      <th>columm-filters-set</th>
      <td>When columns have been set to hid or show</td>
      <td>detail: { columnsHidden: columnsHidden.slice(0, -1) }</td>
    </tr>
    <tr>
      <th>selected</th>
      <td>One or more items have been selected</td>
      <td></td>
    </tr>
  </tbody>
</table>`;

export const bentogrid = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>item-opened</th>
      <td>When one of the items in the bento grid has been opened</td>
      <td>{ "event": "item-opened", "title": "Item summary title"}</td>
    </tr>
    <tr>
      <th>item-closed</th>
      <td>When one of the items in the bento grid has been closed</td>
      <td>{ "event": "item-closed", "title": "Item summary title"}</td>
    </tr>
  </tbody>
</table>`;

export const carousel = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>pip-clicked</th>
      <td>When a user clicks on a pip</td>
      <td>{ "event": "pip-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>next-clicked</th>
      <td>When a user clicks on the next button</td>
      <td>{ "event": "next-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>prev-clicked</th>
      <td>When a user clicks on the previous button</td>
      <td>{ "event": "prev-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>slider-changed</th>
      <td>The slider element is used to update the carousel</td>
      <td>
        { "event": "slider-changed", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}
      </td>
    </tr>
  </tbody>
</table>`;

export const fileupload = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>elementchange</th>
      <td>Fires whenever the file input changes, so if files are added, or changed.</td>
      <td>Emits the list of files currently added</td>
    </tr>
    <tr>
      <th>empty</th>
      <td>Fires when the file input changes, resulting in there being no files selected.</td>
      <td></td>
    </tr>
    <tr>
      <th>fileremoved</th>
      <td>Fires when a file is removed from the list by clicking the X icon on an individual file.</td>
      <td>Emits the name of the removed file</td>
    </tr>
  </tbody>
</table>`;

export const menu = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>open</th>
      <td>When the menu is opened</td>
    </tr>
    <tr>
      <th>closed</th>
      <td>When the menu is closed</td>
    </tr>
  </tbody>
</table>`;

export const table = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>update-show</th>
      <td>When a user clicks on the load more button</td>
    </tr>
    <tr>
      <th>update-page</th>
      <td>When a updates the page via either a button or other method</td>
    </tr>
    <tr>
      <th>row-expanded</th>
      <td>When a a row has been expanded on mobile or desktop</td>
    </tr>
    <tr>
      <th>row-selected</th>
      <td>
        When the checkbox for a row has been selected or unselected. No other functionality triggered by
        default.
      </td>
    </tr>
    <tr>
      <th>all-rows-selected</th>
      <td>All rows have been selected. No other functionality triggered by default.</td>
    </tr>
    <tr>
      <th>all-rows-unselected</th>
      <td>All rows have been selected. No other functionality triggered by default.</td>
    </tr>

    <tr>
      <th>sort-by-heading</th>
      <td>A column heading has been pressed to sort by that column</td>
    </tr>

    <tr>
      <th>search-submit</th>
      <td>The table has been searched via javascript or an ajax call.</td>
    </tr>
  </tbody>
</table>`;

export const tabs = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>pip-clicked</th>
      <td>When a user clicks on a pip</td>
      <td>{ "event": "pip-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>next-clicked</th>
      <td>When a user clicks on the next button</td>
      <td>{ "event": "next-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>prev-clicked</th>
      <td>When a user clicks on the previous button</td>
      <td>{ "event": "prev-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
    </tr>
    <tr>
      <th>slider-changed</th>
      <td>The slider element is used to update the carousel</td>
      <td>
        { "event": "slider-changed", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}
      </td>
    </tr>
  </tbody>
</table>`;

export const card = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>select-card</th>
      <td>checkbox is checked</td>
      <td>{"Card value":"on","input name":"card10"}</td>
    </tr>
    <tr>
      <th>unselect-card</th>
      <td>Checkbox is unchecked</td>
      <td>{"Card value":"on","input name":"card10"}</td>
    </tr>
    <tr>
      <th>secondary-button-clicked</th>
      <td>The secondary button is clicked</td>
      <td></td>
    </tr>
    <tr>
      <th>action-button-clicked</th>
      <td>One of the buttons in the dialog menu is clicked</td>
      <td></td>
    </tr>
  </tbody>
</table>`;

export const filtercard = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>select-card</th>
      <td>checkbox is checked</td>
      <td>{"Card value":"on","input name":"card10"}</td>
    </tr>
    <tr>
      <th>unselect-card</th>
      <td>Checkbox is unchecked</td>
      <td>{"Card value":"on","input name":"card10"}</td>
    </tr>
  </tbody>
</table>`;

export const videocard = `<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Dispatched</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>play-video</th>
      <td>When the card head is clicked</td>
      <td>
        {"event": "close-video", "element": "iam-video-card", "target": "iam-video-card", "Video
        Type":"YoutTube","ID":"lROFZaJcVug"}
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th>close-video</th>
      <td>Dialog with video is closed via either pressing esc or clicking on the backdrop</td>
      <td>
        {"event": "close-video", "element": "iam-video-card", "target": "iam-video-card", "Video
        Type":"YoutTube","ID":"lROFZaJcVug"}
      </td>
    </tr>
  </tbody>
</table>`;
