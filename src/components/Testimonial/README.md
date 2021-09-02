### Usage

```
<Testimonial :items="items">
  <a href="/buying-stories" class="btn">Buying stories</a>
  <a href="/selling-stories" class="btn">Selling stories</a>
</Testimonial>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title  | String | What our customers think… | Used for the heading of the component |
| items  | Array | - | Testimonial data passed |
| - item.class | String | - | Optional, this should be used to define the largest testimonial by setting it to 'largest' |
| - item.cite | String | - | The person who made the quote |
| - item.quote | HTML | - | The quote content |
| - item.image | Image | - | The image that sits to the left of the quote. |


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display underneath the quotes |