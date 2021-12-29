### Usage

```
<CardDeck :items="items"></CardDeck>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| cols  | Number | 1 | Number of columns on mobile |
| smcols  | Number | 1 | Number of columns on tablet |
| mdcols  | Number | 3 | Number of columns on desktop |
| items  | Array | - | Card data passed (See card component) |
| cardtype | String | - | Change the type of card (simple,quick) |
| btntype | String | (See card) | Change the type of button at the bottom of the card (primary,secondary,tertairy, link) |
| ctatext | String | (See card) | Update the cta text within the button at the bottom of the card |
| titleclass | String | (See card) | Update the class of the title from being a h2 |

### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display before the cards |
| after | - | Will display underneath the cards |