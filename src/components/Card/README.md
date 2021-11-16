### Usage

```
<Card :title="value.title" :content="value.content" :link="value.link"></Card>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title | String | - | Used for the card heading |
| titleClass | String | h2 | Update the class of the title from being a h2 |
| subTitle | String | - | Optional sub heading |
| content | HTML | - | Card content |
| link | String | - | Card link |
| type | String | - | Change the type of card (simple,quick)|
| btnType | String | secondary | Change the type of button at the bottom of the card (primary,secondary,tertairy, link) |
| ctaText | String | Find out more | Update the cta text within the button at the bottom of the card |
| details | Object | - | Build up the card content with pre-defined bits of data |
| - detail.tags | Array of strings | - | Add tags above the card header |
| - detail.guidePrice | String | - | Property guide price |
| - detail.auctionTime | String | - | Auction time left |
| - detail.readTime | String | - | How long it will take to read |
| - detail.status | String | - | Display a status badge at the top of the card |
