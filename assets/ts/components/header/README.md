### Usage

```
<iam-header class="bg-secondary" image="/shutterstock_1229155495.webp">
  <ul class="breadcrumb" slot="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/top">Top level</a></li>
  </ul>
  <h1>Page title</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</iam-header>
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