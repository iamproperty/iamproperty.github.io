```
<Tabs class="visualtest">
  <Tab title="Tab one">
    <p>Content one... Any element after summary is within content. First tab is active by default.</p>
  </Tab>
  <Tab title="Tab two">
    <p>Content two...</p>
  </Tab>
</Tabs>
```

  <details>
    <summary>Tab two</summary>
    <p>Lorem ipsum</p>
  </details>

### Tab Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title  | String | - | Used for the heading of the component |
| lazy  | Boolean | - | If set the content of the tab will not loaded intially and will be loaded after the user has clicked on the tab link. |
| disabled  | Boolean | - | Used to apply disabled state for a tab (tab content will not be reachable) |

### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Can be populated with Tab components |