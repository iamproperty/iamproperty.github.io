```
<Accordion>
  <AccordionItem title="Question 1">
    <p>Accordion item content</p>
  </AccordionItem>
  <AccordionItem title="Question 2">
    <p>Accordion item content</p>
  </AccordionItem>
</Accordion>
```

### Class modifiers

- Adding a class of **.accordion--keep-open** to the accordion will stop the items from closing when another one is opened.
- Adding a class of **.accordion--straight** to the accordion will remove the slight indentation of the accordion.

### Accordion item Properties

| Option      | Type    | Default Value | Description                                                                                                                 |
| ----------- | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| title       | String  | -             | A question or statement                                                                                                     |
| titlecolour | String  | -             | Apply a colour the the accordion item title                                                                                 |
| badge       | String  | -             | Add a highlighted badge/tag to the accordion item title                                                                     |
| badgecolour | String  | light         | Apply a colour the badge                                                                                                    |
| lazy        | Boolean | -             | If set the content of the tab will not loaded intially and will be loaded after the user has clicked on the accordion link. |

### Accordion item Slots

| Option  | Default Value | Description                               |
| ------- | ------------- | ----------------------------------------- |
| default | -             | This is the content of the accordion item |
