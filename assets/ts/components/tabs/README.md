**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/tabs/tabs.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-tabs`))
    window.customElements.define(`iam-tabs`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-tabs class="container">
  <details>
    <summary>Tab one</summary>
    <p>Content one... Any element after summary is within content. First tab is active by default.</p>
  </details>
  <details>
    <summary>Tab two</summary>
    <p>Content two... </p>
  </details>
</iam-tabs>
```

### Tab Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title  | String | - | Used for the heading of the component |
| disabled  | Boolean | - | Used to apply disabled state for a tab (tab content will not be reachable) |