**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/card/card.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-card`))
    window.customElements.define(`iam-card`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<a href="/link-url">
  <iam-card>Link content</iam-card>
</a>
```

**Note**

The card component needs to be wrapped with a link or a button, this is required to give the card any functionality.

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-total | Int | - | Optional total number , usually use on the filter card type |
| data-image | image url | - | Optional image url to create a card header with an image as its background |

**Class modifiers**

- Adding a class of **.card--filter** will implement the filter card design. 
- Adding a class of **.colour-danger** will add a left hand border with the danger colour (See status card). This works with all of the theme
- Adding a class of **.border-o** will remove the box-shadow of the card and make some minor sizing adjustments. 
- Adding a class like **.colour-warning** will update the colour of the left berder for the card. The theme colours will be avialable to use.
- Adding a class of **.card--flag** will add a card to the top right corner. 
