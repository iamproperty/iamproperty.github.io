**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/fileupload/fileupload.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-fileupload`))
    window.customElements.define(`iam-fileupload`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-fileupload data-maxsize="500"><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png" /></iam-fileupload>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-maxsize | Int | - | Blocks files from being added that is larger than the max size given in kb's |

**Class modifiers**

- Adding a class of **.fileupload--drag-drop** will add a droppable area for the user to drag files into and drop.
