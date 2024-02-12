**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/accordion/accordion.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-accordion`))
    window.customElements.define(`iam-accordion`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-accordion class="container">
  <details id="question1" class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 1</summary>
    <p>Answer </p>
  </details>
  <details class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 2</summary>
    <p>Answer </p>
  </details>
</iam-accordion>
```

### Class modifiers

- Adding a class of **.accordion--keep-open** to the accordion will stop the items from closing when another one is opened.
