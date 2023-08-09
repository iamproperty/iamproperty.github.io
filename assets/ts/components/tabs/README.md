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
    <summary>Question 1</summary>
    <p>Answer </p>
  </details>
  <details>
    <summary>Question 2</summary>
    <p>Answer</p>
  </details>
</iam-tabs>
```

### Tab Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title  | String | - | Used for the heading of the component |