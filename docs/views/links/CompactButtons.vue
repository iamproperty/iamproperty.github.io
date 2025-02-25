<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Compact Button</h1>
    </DSHeader>

    <p class="lead">
      When space is very limited or when the same button needs to be used multiple times on a page a
      compact primary button may be suitable. A ‘solid’ icon should always be used for compact buttons.
    </p>
    <h2>Primary</h2>
    <h3>Default</h3>
    <p>
      Use a default primary compact button to call attention to an action on a form or to highlight the strongest call to
      action on a page. Primary compact buttons should only appear once per container (not including the application
      header or in a modal dialog). Not every screen requires a primary button. A filter overlay of 85% brightness will be
      applied to the default states for the active state.
    </p>


    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-5 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover btn-compact fa-chevron-right"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary active btn-compact fa-chevron-right"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-3">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-compact fa-chevron-right" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-3">
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right" disabled>Lorum ipsum</a>
        </div>
      </div>
    </div>



    <h2>Small</h2>


    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-5 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover btn-compact fa-chevron-right btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pe-none">
          <a href="/components/buttons" class="btn btn-primary colour-primary active btn-compact fa-chevron-right btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-3">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-compact fa-chevron-right btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-3">
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-chevron-right btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>
    </div>


    <h2>Secondary</h2>
    <h3>Default</h3>

    <p>
      Use a default secondary compact button to help the user get a further understanding of its priority. It can either
      be paired alongside a primary button on used on it’s own to support a secondary action for the user. A filter
      overlay of 85% brightness will be applied to the default states for the active state.
    </p>

    
    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary btn-compact fa-save">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary hover btn-compact fa-save"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary active btn-compact fa-save"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-save" disabled>Lorum ipsum</a>
        </div>
      </div>
      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger btn-compact fa-trash">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger hover btn-compact fa-trash"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger active btn-compact fa-trash"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-trash" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right" disabled>Lorum ipsum</a>
        </div>
      </div>
    </div>


    <h3>Small</h3>

    <p>
      Use a small secondary compact button when there isn’t enough space for a default compact secondary compact button.
    </p>


    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary btn-compact fa-save btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary hover btn-compact fa-save btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary active btn-compact fa-save btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-save btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>
      <div class="row">
        <div class="col-5 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger btn-compact fa-trash btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger hover btn-compact fa-trash btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary colour-danger active btn-compact fa-trash btn-sm"
            >Lorum ipsum</a
          >
        </div>
        <div class="col-7 col-sm-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-trash btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2 pe-none">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary light-mode pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-chevron-right btn-sm" disabled>Lorum ipsum</a>
        </div>
      </div>
    </div>


    <h2>Default compact action button</h2>
    <p>
      Use a default compact action button to display actions within a component such as a action bar or inline edit field
      when space is limited. A filter overlay of 85% brightness will be applied to the default states for the active state.
    </p>



    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-compact btn-action btn-save fa-plus">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action hover fa-plus">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus">Save</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus" disabled>Save</a>
        </div>
      </div>
    </div>




    


    <h2>Emphasised compact action button</h2>
    <p>
      Use an emphasised compact action button to display the primary action within a component such as a action bar or inline edit field when space is limited. A filter overlay of 85% brightness will be applied to the default states for
      the active state.
    </p>

    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-compact btn-action btn-plus btn-primary fa-edit">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action hover fa-plus btn-primary">Save</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus btn-primary">Save</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus btn-primary" disabled>Save</a>
        </div>
      </div>
    </div>

    
    <h2>Quiet compact action button</h2>
    <p>
      Use a quiet compact action button to display less important actions within a component such as a action bar or
      inline edit field when space is limited. A filter overlay of 85% brightness will be applied to the default states for the
      active state.
    </p>

    <div class="container visualtest pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-compact btn-action btn-save fa-plus border-0">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action hover fa-plus ">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3 pe-none">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus ">Edit</a>
        </div>
        <div class="col-sm-6 col-md-3">
          <p class="lead pb-2">Disabled state</p>
          <a href="/components/buttons" class="btn btn-compact btn-action active fa-plus " disabled>Edit</a>
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
                - Changed icon sizes to align with standard buttons<br/>
                - Added compact action buttons (default, emphasised, and quiet)<br/>
                - Reduced minimum button external padding to 8px<br/>
                - Added disabled states to figma components
              </td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/compact-buttons.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
