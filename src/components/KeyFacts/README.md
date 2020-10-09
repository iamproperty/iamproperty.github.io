# Key Facts
```
<key-fact-group></key-fact-group>
```
## Key Fact Item
...

<key-fact
    v-for="keyfact in keyfacts"
    :key="keyfact.id"
    :keyfact="keyfact">
</key-fact>
...

## Component Reference

### Properties

| Property  | Type  | Default Value  | Description  |
| --------- | ----- | -------------- | -------------- |
| keyfacts     | Object | `{}`           | Up to 6 keyfact objects can be displayed |
| value     | Number | ``           | This value is passed into the key fact component from the keyfacts object |
| label     | String | ``           | This value is passed into the key fact component from the keyfacts object |
