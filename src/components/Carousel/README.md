### Usage

```
<Carousel :items="items" type="card"></Carousel>
```

### Properties

**The carousel props inherit the card deck props** - this is so that when we use cards in the carousel we can still pass the same options.

| Option   | Type   | Default Value | Description                                                                                                                     |
| -------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| type     | String | -             | Can be used to indicate that cards should be displayed in the carousel by giving the value 'card'                               |
| colclass | String | -             | Pass utility classes to the columns in the carousel. For example 'd-flex align-items-center' will align the items n the middle. |

### Slots

| Option  | Default Value | Description                      |
| ------- | ------------- | -------------------------------- |
| default | -             | Will display before the carousel |
