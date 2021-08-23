### Usage

```
<Header title="Page title" :image="require('../../assets/code.jpeg')">
  <template v-slot:breadcrumb>
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/top">Top level</a></li>
    </ul>
  </template>
  <p>Page description</p>
</Header>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| title | String | - | Required |
| image | String | - | Optional image url to display in the background |


### Slots

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Will display underneath the heading inside of the white box |
| breadcrumb | - | An optional space to add a breadcrumb trail list. |