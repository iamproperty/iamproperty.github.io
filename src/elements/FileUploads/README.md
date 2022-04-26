### Usage

```
<Card :title="value.title" :content="value.content" :link="value.link"></Card>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title | String | - | Used for the card heading |
| titleclass | String | h2 | Update the class of the title from being a h2 |
| subtitle | String | - | Optional sub heading |
| content | HTML | - | Card content |
| link | String | - | Card link |
| type | String | - | Change the type of card (simple,quick)|
| btntype | String | secondary | Change the type of button at the bottom of the card (primary,secondary,tertairy, link) |
| ctatext | String | Find out more | Update the cta text within the button at the bottom of the card |
| details | Object | - | Build up the card content with pre-defined bits of data |
| - detail.tags | Array of strings | - | Add tags above the card header |
| - detail.guideprice | String | - | Property guide price |
| - detail.auctiontime | String | - | Auction time left |
| - detail.readtime | String | - | How long it will take to read |
| - detail.status | String | - | Display a status badge at the top of the card |
