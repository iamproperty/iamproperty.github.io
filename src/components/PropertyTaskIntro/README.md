# Property Task Intro
```
<property-task-intro
        v-for="property in properties"
        :key="property.id"
        :property="property"
      />
```

## Component Reference

### Properties

| Property  | Type  | Default Value  | Description  |
| --------- | ----- | -------------- | -------------- |
| property     | Object | ``         | An object of property values|
| url     | String | ``         | property url link|
| address     | String | ``         | property address|
| startingBid     | Number | ``         | property starting bid|
| contractSigned     | String | ``         | property contract signed|
| contractTime     | String | ``         | property contract time|
| auctionStartDate     | String | ``         | auction start date|
| auctionEndDate     | String | ``         | auction end date|
| branchName     | String | ``         | branch name|
| branchTelephone     | String | ``         | branch telephone number|
| branchEmail     | String | ``         | branch email address|

