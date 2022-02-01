<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Buttons & links</h1>
    </div>

    <div class="container pb-0">
      <h2>Text links</h2>
      <p>Links should always be highlighted in at least two different ways; one of which should be a non-colour indictaor. Our text links deploy the use of a thick underline, which is then thinned down when its an inline link. Links that open in a new window will display a single colour icon to help indicate this. Our more stylised icons can also be added into a link and they will resize to fit in, its recommended to add an additional modifying padding class to the link.</p>
    </div>
    <div class="container visualtest">
      <a href="/elements/buttons" class="me-3">Find out more</a>
      <a href="https://bbc.com" target="_blank" class="me-3">Find out more</a>
      <a href="/elements/buttons" class="me-3">Email<i class="icon fa-envelope me-0"></i></a>
      <hr />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <a href="/elements/buttons">industry's standard</a> dummy text ever since the 1500s, when an <a href="/elements/buttons"><Icon id="email"></Icon>unknown printer</a> took a galley of type and <a href="/elements/buttons" target="_blank">scrambled</a> it to make a type specimen book. </p>
    </div>

    <div class="container ">
      <h2>Buttons</h2>
      <p>Either a button element or an element with a .btn class applied to it. This will generally be an anchor elemenet or an input field with a submit type. In bootstrap there are some additional modifying classes that can be used with buttons these are <strong>not</strong> supported.</p>
    </div>

    <div class="container visualtest">
      <h2 class="h4">button, .btn</h2>
      <input type="submit" class="btn" value="Find out more" />
      <button class="btn" disabled>Find out more</button>
      <a href="https://bbc.com" class="btn" target="_blank">Find out more</a>
      <a href="/elements/buttons" class="btn pe-3">Email<i class="icon fa-envelope"></i></a>
      <a href="/elements/buttons" class="btn ps-3"><Icon id="mobile" class="ms-0"></Icon>Locate on a map</a>

      <hr class="hr--clear" />
      <h2 class="h4">.btn-secondary</h2>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-secondary" disabled>Find out more</button>
      <a href="https://bbc.com" class="btn btn-secondary" target="_blank">Find out more</a>
      <a href="/elements/buttons" class="btn btn-secondary pe-3">Email<i class="icon fa-envelope"></i></a>
      <a href="/elements/buttons" class="btn btn-secondary ps-3"><Icon id="mobile" class="ms-0"></Icon>Locate on a map</a>
      <hr class="hr--clear" />
      <h2 class="h4">.btn-tertiary</h2>
      <button class="btn btn-tertiary">Find out more</button>
      <button class="btn btn-tertiary" disabled>Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="/elements/buttons" class="btn btn-tertiary pe-3">Email<i class="icon fa-envelope"></i></a>
      <a href="/elements/buttons" class="btn btn-tertiary ps-3"><Icon id="mobile" class="ms-0"></Icon>Locate on a map</a>
    </div>
    
    <div class="container">
      <h2>HTML code examples</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>


    <div class="container pb-0 bg-light">
      <h2>Buttons on a light background</h2>
      <p>Buttons on a light background should default to the primary colour to maintain colour contrast.</p>
    </div>
    <div class="container bg-light visualtest">
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>
    <div class="container bg-info">
      
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>
    <div class="container bg-secondary visualtest">
      
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>


    <div class="container pt-5 bg-primary">
      <h2>Buttons on a dark background</h2>
      <p>Buttons on a dark background should default to a white background to maintain colour contrast.</p>
    </div>

    <div class="container bg-primary visualtest">
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>
    <div class="container bg-danger">
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>
    <div class="container bg-dark">
      <button class="btn">Find out more</button>
      <button class="btn btn-secondary">Find out more</button>
      <button class="btn btn-tertiary">Find out more</button>
      <a href="https://bbc.com" class="btn btn-tertiary" target="_blank">Find out more</a>
      <a href="https://bbc.com" class="btn btn-tertiary ps-3"><Icon id="email"></Icon>Email</a>
    </div>
    <div class="container">
      <h2>Collapsible content</h2>
      <p>Hide away some content but keep it retrievable quickly.</p>
      <details>
        <summary class="link">Reveal content</summary>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </details>
    </div>
  </main>
</template>

<script>
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    Icon
  },
  data () {
    return {
      htmlUsage: `<a href="/button" class="btn">Button</a>
<a href="/button" class="btn btn-secondary">Button</a>
<a href="/button" class="btn btn-tertiary">Button</a>

<input type="submit" class="btn" value="Button" />
<input type="submit" class="btn btn-secondary" value="Button" />
<input type="submit" class="btn btn-tertiary" value="Button" />

<button>Button</button>
<button class="btn-secondary">Button</button>
<button class="btn-tertiary">Button</button>`
    }
  }
}
</script>