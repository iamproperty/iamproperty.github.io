```
<nav>
<Nav>
  <a href="/" class="brand brand--property" slot="logo">
    <svg>
      <title>iamproperty</title>
      <use xlink:href="/svg/logo.svg#logo-property"></use>
    </svg>
  </a>

  <a href="/" class="selected">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>

  <button class="btn btn-primary">Lorem ipsum</button>
</Nav>
</nav>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-search  | String | - | Optional, displays a search button and form. The value passed through is used for the forms action attribute. |
| data-list  | String | - | Optional string with an ID of a datalist, note this list needs to be added as an element in the component |
| data-prevent-search  | String | - | Flag that prevents the search form submitting allowing it to used purely with JavaScript |
| data-searcd-open  | String | - | Flag that opens the search bar on desktop on page load. |

**Slots**

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Populates the main nav area |
| logo | - | A place to add the logo to the site |
| secondary | - | Moves the link upto the top of the navbar on desktop |
| actions | - | A place to add buttons |

**Class modifiers**

- Adding a class of **.bg-primary** will change the background of the navbar without chaning the menu background. 
- Adding a class of **.nav--sticky** will add etxra styling to make the navbar stick to the top of the page
- Adding a class of **.nav--xs-sticky** will add etxra styling to make the navbar stick to the top of the page BUT only on the mobile view.

**Dispatched events**

| Event | Dispatched when | Details passed|
| ------ | ------------- | ----------- |
| search-keydown | When a user uses the search input field and triggers the keydown event. | { search: $inputValue } |
| search-keyup | When a user uses the search input field and triggers the keyup event. | { search: $inputValue } |
| search-change | When a user uses the search input field and triggers the change event. | { search: $inputValue } |
| search-submit | When a user uses the search form and triggers the submit event. | { search: $inputValue } |
