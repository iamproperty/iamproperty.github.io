**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/filterlist/filterlist.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-filterlist`))
    window.customElements.define(`iam-filterlist`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-filterlist>
<ul>
  <li>Olivia Anderson</li>
  <li>Ethan Ramirez</li>
  <li>Sophia Patel</li>
  <li>Noah Jenkins</li>
  <li>Ava Thompson</li>
</ul>
</iam-filterlist>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-max-height | string | '' | Optional choice from small, medium or large control of the height of the list. Giving it a scrollable area. |
