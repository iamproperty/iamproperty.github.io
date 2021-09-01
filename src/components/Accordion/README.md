### Usage

```
<Accordion :items="items"></Accordion>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| items  | Array | - | Table row data passed |
|  - item.summary | String | - | A question or statement |
|  - item.detail | HTML | - | An answer to a question or a detailed explanation of a statement.


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display before the accordion items |
| after | - | Will display after the accordion items |