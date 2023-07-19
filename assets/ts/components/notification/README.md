```
<!-- Inline -->
<iam-notification data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>

<!-- Alert -->
<iam-notification data-type="alert" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>

<!-- Toast -->
<iam-notification data-type="toast" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>

```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-status | String | info | Choose from danger,succes and warning. This will change the colour of the notification box and which icon is shown. |
| data-type | String | inline | Choose from alert and toast. This will change the behavour of the component. |
| data-dismiss | Boolean | - | Adds a close button which will remove the alert box after clicking it. |
| data-timeout | Boolean | - | Adds a timer for how long the notification will appear. |

**Slots**

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | This is the content of the notification box |