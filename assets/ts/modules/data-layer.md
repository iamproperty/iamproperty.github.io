# Function `createDataLayer()`

The `createDataLayer()` function sets up a dataLayer for tracking events and interactions on a web page. It initializes the `window.dataLayer` array if it doesn't exist, and then pushes a "Pageview" event with the current document title. It also attaches a click event listener to the document, which tracks additional events related to clicks on elements like `summary`, `a` (anchor), and `button` elements.

## Usage

The `createDataLayer()` function should be called in the JavaScript code of the web page, typically during its initialization phase. This allows the dataLayer to be available for tracking various events and interactions.

## Function Signature

`function createDataLayer(): void` 

## Events Tracked

1.  **"Pageview" Event**
    
    -   Description: This event is automatically pushed to the `window.dataLayer` array during the function's execution, representing the initial pageview with the current document title.
    -   Event Data:
        -   `event`: "Pageview"
        -   `pageTitle`: The title of the current document.
2.  **"closeDetails" Event**
    
    -   Description: This event is triggered when a click occurs on an element with the attribute `[open] summary`, indicating that a summary element with the `[open]` attribute is being closed.
    -   Event Data:
        -   `event`: "closeDetails"
        -   `detailsTitle`: The text content of the `summary` element associated with the clicked element. If the `summary` element doesn't have any text content, an empty string is used.
3.  **"openDetails" Event**
    
    -   Description: This event is triggered when a click occurs on a `summary` element (not associated with `[open]` attribute), indicating that a summary element is being opened.
    -   Event Data:
        -   `event`: "openDetails"
        -   `detailsTitle`: The text content of the clicked `summary` element. If the `summary` element doesn't have any text content, an empty string is used.
4.  **"linkClicked" Event**
    
    -   Description: This event is triggered when a click occurs on an `a` (anchor) element.
    -   Event Data:
        -   `event`: "linkClicked"
        -   `linkText`: The text content of the clicked `a` element. If the `a` element has a `title` attribute, its value is used as `linkText`; otherwise, the text content of the `a` element is used. If the `a` element doesn't have any text content, an empty string is used.
        -   `class`: The `class` attribute value of the `a` element. If the `a` element doesn't have a `class` attribute, an empty string is used.
        -   `href`: The value of the `href` attribute of the `a` element. If the `a` element doesn't have an `href` attribute, an empty string is used.
5.  **"buttonClicked" Event**
    
    -   Description: This event is triggered when a click occurs on a `button` element.
    -   Event Data:
        -   `event`: "buttonClicked"
        -   `buttonText`: The text content of the clicked `button` element. If the `button` element doesn't have any text content, an empty string is used.
        -   `class`: The `class` attribute value of the `button` element. If the `button` element doesn't have a `class` attribute, an empty string is used.

## Notes

-   The function relies on the `window.dataLayer` array to store the events, so it should be executed after the page has loaded and the `window` object is available.
-   This implementation assumes that the JavaScript code is placed at the end of the HTML document, ensuring that the DOM elements are accessible at the time the function is executed.

### Example Usage

```
<!DOCTYPE html>
	<html>
    <head>
      <title>My Web Page</title>
    </head>
	<body>
	<!-- Your web page content here -->

	  <script> // Call the createDataLayer function to initialize event tracking
	    createDataLayer();
    </script>
	</body>
</html>
```

In this example, the `createDataLayer()` function is called in a script block within the HTML document, allowing it to set up the dataLayer for event tracking on the page.
