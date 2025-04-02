### Usage

```
<Chart :max="100" :min="0" :fields="fields" :items="items" :yaxis="yaxis"></Chart>
```

### Properties

**The charts props inherit the table props** - As charts are an extension of the tables.

| Option  | Type   | Default Value | Description                                                                                                     |
| ------- | ------ | ------------- | --------------------------------------------------------------------------------------------------------------- |
| type    | String | bar           | Changes the type of chart shown (bar, line or pie) or by passing none a table is shown.                         |
| caption | String | -             | Optional but recommended for accessibility concerns. Describes and summarizes the chart and the data inside it. |
| max     | Number | -             | Required numeric value to be used to work out the size/position of the chart elements.                          |
| min     | Number | 0             | Optional (deaults to 0) numeric value to be used to work out the size/position of the chart elements.           |
| yaxis   | Array  | -             | Array of labels to be shown along the y-axis                                                                    |
