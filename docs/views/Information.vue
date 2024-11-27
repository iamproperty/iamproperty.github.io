<template>
  <main>
    <div class="container">
      <h1>Information</h1>
      
      <p>The iamkey design system is a collection of assets, rules and guidelines to follow. These rules and guidelines are not designed to be restrictive but are there to help the developer/designer. The main aim is to increase the consistency across the digital estate while also lifting the design standards to a higher level. </p>

      <h2>Figma Library and digital guidelines</h2>
      
      <p>The designs and requirements for any work that is done within the framework should have come from the digital guidelines produced from the internal product team. While the product team is responsible for building these requirements it is always better to work in collaboration. No one should be afraid to approach the product team with constructive feedback or suggestions.</p>

      <p>The digital guidelines will be generated from a XD library which will hold a series of design elements and components. Like building blocks which create a bigger more substantial design. This library will also be used to generate page/application designs too. Meaning the same source of design elements are used for the brand guidelines as designs given to developers to work from. This will go a long way to increase consistency which in turn will speed up the design and development process.</p>

      <p class="note"><strong>Note:</strong> This is still under construction with the majority of current framework has been based upon external sources and the brand guidelines.</p>

      <p>These guidelines should be used for all of the digital estate in some compacity, the internal applications will use the framework itself. But the external facing websites produced by external design agencys may be using the design system and digital guidelines as reference material.</p>

      <h2>Framework</h2>

      <p>The main framework consists of two parts, CSS and Javascript with HTML examples given within the documentation. It is not built to work purely with any specific Javascript or server side framework. But should be versatile enough to adapt to work with any. One way this has been done is to create seperate Javascript modules that holds the functionality and not for it to be written as part of a Vue or React component.</p>
      <p>The framework extends and uses elements of the <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5 framework</a> but not all of it. The Javascript and CSS/SCSS is built modular so the user has the option to use the full framework or cherry pick specific modules.</p>


      
      <p class="note mb-5"><strong>Note:</strong> On our roadmap we have some tasks that would remove the dependcy on bootstrap 5.</p>

      <h2>Libraries</h2>
      <p>While the framework is not built to work solely with one framework it should work with any that needs to use it. </p>

      <h3>Vue component library</h3>

      <p>Vue JS is the main javascript library that is used within iamproperty and iamsold. So this library is the one that currently gets the most focus and is also used to create this documentation site. Vue components for the time being are going to be the main focus over other libraries.</p>

    </div>
  </main>
</template>
