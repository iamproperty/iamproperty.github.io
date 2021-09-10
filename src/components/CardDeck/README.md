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
| cardType | String | - | Change the type of card (simple,quick) |
| btnType | String | (See card) | Change the type of button at the bottom of the card (primary,secondary,tertairy, link) |
| ctaText | String | (See card) | Update the cta text within the button at the bottom of the card |
| titleClass | String | (See card) | Update the class of the title from being a h2 |

### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display before the cards |
| after | - | Will display underneath the cards |