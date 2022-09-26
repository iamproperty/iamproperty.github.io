<template>
  <div class="container"><ul class="breadcrumb mb-0">
      <li><a href="/articles">Articles</a></li>
    </ul>
    <h1>Create charts using flexbox</h1>
    <p>Charts on the web are usually created using SVG's or Canvas elements that have been generated via JavaScript. With the developer who implements them trying to configure it so that they match the brand styles the best that it can. Or are created by an art worker and then added as an image, losing all interactivity.</p>

    <p>But charts can be created by taking advantage of existing HTML elements and CSS style rules for the most part.</p>

    <h2>Why not use a library?</h2>

    <p>If you are happy with the functionality and the configurability then nothing as its meeting your requirements. But you have to be conscious of the file size and page performance impacts.</p>

    <p>Moving away from a library gives you greater control over styles and functionality. rather relying on being able to configure it the way you want you can build it exactly how you want. This level of control also means you can choose how much of an impact it has on file size and page performance. If you want to build one small bar chart with limited styling then thats going to have very little impact on file size.</p>

    <p>Some libraries unfortunately come with dependancies that could cause; conflicts with your code, increase the number of files loaded or larger file sizes. For example your application could be built with Vue JS but the chosen chart library is built with a need to use jQuery. Causing the app to have to load two separate frameworks with duplicate functionality. In the worse case scenario a library may make you add a contribution to your app or even cost money to use.</p>

    <h2>Okay then why not use SVG or Canvas?</h2>

    <p>The first thought when building charts from scratch would be to go straight to something like SVG or Canvas elements. As they are built to work with graphics. Which again is fine but both ways would need a significant amount of work compared to using CSS (depending upon the design). Canvas as-well requires the use of JavaScript and I have found to be very difficult to debug with no browser based debug tools available. Neither support existing HTML elements easily or very well which would lead to duplication of content/elements to generate the charts. Moving away from existing HTML elements then means we lose cascaded and global styles meaning we would have to duplicate style rules.</p>

    <h2>What does CSS and flexbox give us?</h2>

    <p>So by using HTML and CSS we get to keep the default and cascaded styles. I personally think using tables is a great idea for charts as it comes with pre-defined accessibility features and makes the most sense semantically. This table could also be used as an alternative view for the chart. Since we are using CSS to create the styles we can use media queries to make them look there best on all devices.</p>

    <p>CSS has always worked well with percentage based layouts but <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" title="A Complete Guide to Flexbox">flexbox</a> brings a whole other level of useful features. Making the creation of layouts incredibly easy by being able to justify content and aligning items.</p>

    <p>In the below image we have a stacked bar chart that has been created with flexbox techniques. On the containing element with have assigned <em>'display: flex;'</em> and the inner chart has a width of 100%. Forcing the chart to stretch and take up as much space as possible while the y-axis takes up just the amount of space needed. The inner part of the chart again usses flexbox to spread out each item with the same amount of space. Each item in the chart is then told to display each bar in the center ontop of each other but anchored to the bottom of the chart. This is done with three simple rules <em>'flex-direction: column-reverse; justify-content: flex-start; align-items: center;'</em>. With the small amount of CSS rules mentioned and some styling we have created a really simple but responsive bar chart with very little work.</p>

    <img src="/chart-flexbox-example.png" alt="An example of a chart with browser tools overlayed ontop to show how flexbox is creating the layout." />

    <p>We could easily make changes to this chart by adjusting the CSS rules. We could change the 'justify-content' rule to be 'space-between' which will force the first item to the very left and the last item to the very right. The space then inbetween is then worked out for us. We could also change the direction of the bar chart by updating the 'flex-direction' to 'column' instead of the default of 'row'.</p>

    <h2>But what can't it to?</h2>

    <p>All the above is great for creating bar charts, scatter graphs and other type of square based designs. But what about none square shapes needed like lines, circles or polygons. This is where SVG or Canvas elements are needed. CSS techniques can be used in theory to create these shapes but not easily and not accurately.</p>

    <p>Line charts can use the above flexbox techniques to create a dot based chart and then we can overlay the SVG line path. Meaning we can still take advantage of flexbox to some degree. But something like a pie chart would probably be best to be done mostly with SVG's due to the complexity of the shape.</p>

    <h2>What's the best solution?</h2>

    <p>Short answer is 'It depends upon your requirements'. The long answer is to try and be flexible with the approach and to not restrict yourself with just using an SVG or just using CSS flexbox. But combine different elements of different techniques to get greater results.</p>

    <br/>
    <p><strong>Written by James Lambert</strong></p>

  </div>
</template>
