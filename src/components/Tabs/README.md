```
<Tabs class="visualtest">
  <Tab title="Tab content 1">
    <h2>Tab content 1</h2>
  </Tab>
  <Tab title="Tab content 2">
    <h2>Tab content 2</h2>
  </Tab>
  <Tab title="Tab content 3">
    <h2>Tab content 3</h2>
  </Tab>
</Tabs>
```

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