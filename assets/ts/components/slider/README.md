**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/slider/slider.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-slider`))
    window.customElements.define(`iam-slider`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<label>Input field label <iam-slider><input type="number" name="percent" min="0" max="100" value="15" step="1" /></iam-slider></label>
```

**Note**

The slider component is best put inside of a label and wrapped around an input field. The component is there to enhance the input field.

**Properties**

The properties of the slider are reflected by the attributes of the input field. So the min and max used to create the range are taken from the first input inside of the component.
