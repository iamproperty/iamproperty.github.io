### Usage

```
<Snapshot :items="items"></Snapshot>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| items  | Array | - | Table row data passed |
|  - item.title | String | - | Title of the snapshot figure |
|  - item.bg | String | - | Theme colour to highlight the importance of the figure i.e. danger to indicate a high priority. |
|  - item.number | String | - | The actual figure, recommended to be a single number but could be more i.e. 10 days.


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display before the snapshot items |