<p class="note">The Timeline component represents an individual item within the timeline and not the full timeline itself. These Vue components need to be inside of a div with the class of 'timeline__container'.</p>

### Usage

```
<div class="timeline__container container">
  <Timeline :image="require('../../assets/shutterstock_1229155495.webp')">
    <h2>01 Search</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </Timeline>
</div>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| image | String | - | Optional image url to display in the background |
