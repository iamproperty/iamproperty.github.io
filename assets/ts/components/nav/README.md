**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/nav/nav.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-nav`))
    window.customElements.define(`iam-nav`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<nav>
<iam-nav>
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
</iam-nav>
</nav>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-searcd-open  | String | - | Flag that opens the search bar on desktop on page load. |

**Slots**

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| default | - | Populates the main nav area |
| logo | - | A place to add the logo to the site |
| secondary | - | Moves the link upto the top of the navbar on desktop |
| actions | - | A place to add buttons |
| dual | - | Plave the link or list to the right of the nav, forcing the default slot to the left. |
| search | - | A place to include a form with search functionality |

**Class modifiers**

- Adding a class of **.bg-primary** will change the background of the navbar without chaning the menu background. 
- Adding a class of **.nav--sticky** will add etxra styling to make the navbar stick to the top of the page
- Adding a class of **.nav--xs-sticky** will add etxra styling to make the navbar stick to the top of the page BUT only on the mobile view.