### Usage

```
<Stepper class="visualtest">
  <Step status="warning">Warning status</Step>
  <Step url="/step" status="danger">Danger status</Step>
  <Step url="/step" status="success">Success status</Step>
  <Step href="/step" current>Current step</Step>
  <Step href="/step">Future step</Step>
</Stepper>
```

### Properties

| Option   | Type   | Default Value | Description                                 |
| -------- | ------ | ------------- | ------------------------------------------- |
| label    | String | -             | Optional label to title the component       |
| endlabel | String | Complete      | End label to signify the end of the process |

### Step Properties

| Option  | Type   | Default Value | Description                                                                                            |
| ------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------ |
| url     | String | -             | Add a url to take the user back to or ahead to said step, if a url is not passed the link is disabled. |
| status  | String | -             | Each step can have a status to highlight to the user whether the step was completed correctly.         |
| current | String | -             | Indicate whether this is the current step                                                              |

### Slots

| Option  | Default Value | Description                   |
| ------- | ------------- | ----------------------------- |
| default | -             | Container for step components |
