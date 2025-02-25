<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Action Button</h1>
    </DSHeader>

    <p class="lead">
      Actions buttons are used primarily within components such as the action bar or inline edit.
    </p>
    <h2>Default</h2>
    <p>
      Use a default action button to display actions within a component such as a action bar or inline edit field. A filter overlay of 85% brightness will be applied to the default states for the active state.
    </p>

    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-action fa-edit">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-action fa-edit hover">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-action fa-edit active">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-action fa-edit active" disabled>Edit</a>
        </div>
      </div>
    </div>

    
    <h2>Emphasised</h2>
    <p>
      Use an emphasised action button to display the primary action within a component such as a action bar or inline
      edit field. Emphasised action buttons should only appear once per component. Not every component requires an
      emphasised action button. A filter overlay of 85% brightness will be applied to the default states for the active state.
    </p>

    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-action btn-save btn-primary fa-edit">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-action hover fa-save btn-primary">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-action active fa-save btn-primary">Save</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-action active fa-save btn-primary" disabled>Save</a>
        </div>
      </div>
    </div>

    
    <h2>Quiet</h2>
    <p>
      Use a quiet action button to display less important actions within a component such as a action bar or inline edit
      field. A filter overlay of 85% brightness will be applied to the default states for the active state.
    </p>

    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-action btn-save fa-edit border-0">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-action hover fa-edit ">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-action active fa-edit ">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-action active fa-edit " disabled>Edit</a>
        </div>
      </div>
    </div>
    


    <h2>Disabled button state</h2>
    <p class="pb-2">
      When any of the buttons above are disabled we should:
    </p>
    <ul class="mb-5">
      <li>Disable the normal hover state for that button</li>
      <li>Reduce the opacity of the button to 40%</li>
      <li>Add a native browser ‘blocked’ symbol when the user hovers over the button</li>
    </ul>




    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">

            <tr>
              <td>V1 added</td>
              <td>21.02.2025</td>
              <td>
                - Split out into separate pae<br/>
                - Added emphasised and quiet action button!<br/>
                - Added option to have icon left and/or right of button label<br/>
                - Reduced minimum button external padding to 8px<br/>
                - Added disabled states to figma components
              </td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/action-buttons.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
