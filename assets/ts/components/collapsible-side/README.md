**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/collapsible-side/collapsible-side.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-collapsible-side`))
    window.customElements.define(`iam-collapsible-side`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-collapsible-side data-title="Configuration">
        
  <div slot="menu">
    <label for="test1">Active branch</label>
    <select class="form-select" name="test1" id="test1">
      <option value="1" selected>Newcastle</option>
      <option value="2">Two</option>
      <option value="2">Three</option>
      <option value="2">Four</option>
    </select>
  </div>

  <hr slot="menu"/>
  <a href="/" slot="menu">Agency settings</a>
  <a href="/" slot="menu">Control panel</a>
  <a href="/" slot="menu" class="selected">Contact us</a>

  <h1>Inspections</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

</iam-collapsible-side>
```
