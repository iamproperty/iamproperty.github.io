```
<AppliedFilters></AppliedFilters>
```

To add an input to the applied filters an attribute of **data-filter-text** needs to be supplied so that the JavaScript knows to listen for the value to change. This attribute can also be used on a wrapper for mulitple input filters also and dynamic values can also be given. **$value** passes the inputs value as the filter text and **$1,$2,$3...** will pass the corresponding child input value to the text.
