### Usage

```
<Alert class="alert--fixed" colour="info" dismissible timeout="6000">
  <h2 class="h6">Self dismissing alert</h2>
  <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
</Alert>
```

### Class and data modifiers

- Adding a class of **.alert--fixed** stick the alert box to the bottom of the page.
- Adding a class of **.alert--dismissible** will add the correct padding for the having a btn to the right.


### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| dismissible | Boolean | - | Adds a close button which will remove the alert box after clicking it. |
| colour | String | primary | Apply a background colour the alert box, any of the theme colours can be used. |
| timeout | String or Number | - | Sets a timeout to remove the alert box. |


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | This is the content of the alert box |