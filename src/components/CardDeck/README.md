### Usage

```
<CardDeck :items="items"></CardDeck>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| cols  | Number | 1 | Number of columns on mobile |
| smCols  | Number | 1 | Number of columns on tablet |
| mdCols  | Number | 3 | Number of columns on desktop |
| items  | Array | - | Card data passed (See card component) |


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display before the cards |
| after | - | Will display underneath the cards |