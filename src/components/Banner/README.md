### Usage

```
<Banner title="The benefits of buying through auction" :image="require('../../assets/shutterstock_1229155495.webp')">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  <a href="/buyers-guide" class="btn">Download our buyers guide</a>
</Banner>
```

### Properties

| Option     | Type   | Default Value | Description                                         |
| ---------- | ------ | ------------- | --------------------------------------------------- |
| title      | String | -             | Required                                            |
| image      | String | -             | Optional image url to display in the background     |
| background | String | light         | The background colour can be overwritten if need be |

### Slots

| Option  | Default Value | Description                         |
| ------- | ------------- | ----------------------------------- |
| default | -             | Will display underneath the heading |
