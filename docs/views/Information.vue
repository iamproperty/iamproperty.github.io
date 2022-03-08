<template>
  <main>
    <div class="container">
      <h1>Information</h1>
      
      <p>The iamkey design system is a collection of assets, rules and guidelines to follow. These rules and guidelines are not designed to be restrictive but are there to help the developer/designer. The main aim is to increase the consistency across the digital estate while also lifting the design standards to a higher level. </p>

      <h2>XD Library and digital guidelines</h2>
      
      <p>The designs and requirements for any work that is done within the framework should have come from the digital guidelines produced from the internal product team. While the product team is responsible for building these requirements it is always better to work in collaboration. No one should be afraid to approach the product team with constructive feedback or suggestions.</p>

      <p>The digital guidelines will be generated from a XD library which will hold a series of design elements and components. Like building blocks which create a bigger more substantial design. This library will also be used to generate page/application designs too. Meaning the same source of design elements are used for the brand guidelines as designs given to developers to work from. This will go a long way to increase consistency which in turn will speed up the design and development process.</p>

      <p class="note"><strong>Note:</strong> This is still under construction with the majority of current framework has been based upon external sources and the brand guidelines.</p>

      <p>These guidelines should be used for all of the digital estate in some compacity, the internal applications will use the framework itself. But the external facing websites produced by external design agencys may be using the design system and digital guidelines as reference material.</p>

      <h2>Framework</h2>

      <p>The main framework consists of two parts, CSS and Javascript with HTML examples given within the documentation. It is not built to work purely with any specific Javascript or server side framework. But should be versatile enough to adapt to work with any. One way this has been done is to create seperate Javascript modules that holds the functionality and not for it to be written as part of a Vue or React component.</p>
      <p>The framework extends and uses elements of the <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5 framework</a> but not all of it. The Javascript and CSS/SCSS is built modular so the user has the option to use the full framework or cherry pick specific modules.</p>


      <h2>Libraries</h2>
      <p>While the framework is not built to work solely with one framework it should work with any that needs to use it. </p>

      <h3>Vue component library</h3>

      <p>Vue JS is the main javascript library that is used within iamproperty and iamsold. So this library is the one that currently gets the most focus and is also used to create this documentation site. Vue components for the time being are going to be the main focus over other libraries.</p>

      <h3>Blade component library (planned)</h3>

      <p>Iamproperty internal applocations have been transitioning to using the Laravel PHP framework, which utilises Blade components. It is planned to replicate each component as a blade component.</p>

      <h3>Other possible libraries</h3>

      <p>No other libraries are planned to be produced but in the future they could be due to the way the framework is built. React is a very popular framework and it may be needed to better integrate with it. We have a number of external facing websites built with the CMS wordpress. This CMS has some new functionality which allows for component based editing which they call blocks. A library of blocks can be created as a plugin which is installed like any other wordpress plugin. The creation of this block library would increase consistency across these sites.</p>

      <h2>Integration</h2>

      <figure>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Repo</th>
            <th>Framework version</th>
            <th>Integration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>iamsold admin</th>
            <td>www.iamsold.co.uk/admin</td>
            <td>https://github.com/iamproperty/iamsold</td>
            <td>2.6.3</td>
            <td>Javascript, CSS and Vue components</td>
          </tr>
          <tr>
            <th>iamproperty</th>
            <td>my.iamproperty.com</td>
            <td>https://github.com/iamproperty/iamproperty-marketplace</td>
            <td>2.6.1</td>
            <td>CSS only but javascript and Vue components available</td>
          </tr>
          <tr>
            <th>movebutler</th>
            <td>my.iamproperty.com/ic</td>
            <td>https://github.com/iamproperty/iamproperty-marketplace</td>
            <td>2.6.1</td>
            <td>CSS only but javascript and Vue components available</td>
          </tr>
          <tr>
            <th>iamsold</th>
            <td>my.iamproperty.com/ias</td>
            <td>https://github.com/iamproperty/iamsold-agent-platform</td>
            <td>2.6.1</td>
            <td>CSS only but javascript and Vue components available (not live yet)</td>
          </tr>
          <tr>
            <th>reapit</th>
            <td>reapit.iamproperty.com</td>
            <td>https://github.com/iamproperty/iamproperty-reapit-backend</td>
            <td></td>
            <td>None</td>
          </tr>
          <tr>
            <th>iamsold external</th>
            <td>www.iamsold.co.uk/</td>
            <td>n/a</td>
            <td></td>
            <td>None</td>
          </tr>
          <tr>
            <th>iamproperty external</th>
            <td>https://iamproperty.com/</td>
            <td>n/a</td>
            <td></td>
            <td>None</td>
          </tr>
          <tr>
            <th>Medway Law</th>
            <td>https://www.medway-law.co.uk/</td>
            <td>n/a</td>
            <td></td>
            <td>None</td>
          </tr>
        </tbody>
      </table>
        <figcaption class="small d-block">Data correct on 7/03/2022</figcaption>
      </figure>
    </div>
  </main>
</template>
