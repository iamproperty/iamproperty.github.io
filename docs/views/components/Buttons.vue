<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Buttons & links</h1>
    </DSHeader>

    <div class="container pb-0">
      <h2>Buttons</h2>
      <p class="lead">Buttons are generally used as an anchor link to another page or to perform an action such as submitting a form.</p>
      <h3>Primary</h3>
      <p>Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button. A filter overlay of 85% brightness will be applied to the default states for the active state.</p>
    </div>

    <!-- #region Primary button -->
    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary active">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary active">Lorum ipsum</a>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h4 class="text-body">Primary button (with icon)</h4>
      <p>Use an icon to support a primary button. See example below where a plus is used to highlight that the button action adds a new record. The icon can be added before or after the button copy. Whichever is most relevant.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary active fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary hover fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary active fa-plus-large">Lorum ipsum</a>
        </div>
      </div>
    </div>


    <div class="container pb-0">
      <h4 class="text-body">Primary button (with interactive prompt)</h4>
      <p>Use an interactive prompt to support a primary button. See example below where an arrow is used to add interest and signify that the button will navigate the user to another page.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Focus/Hover state</p>
          <a href="/components/buttons" class="btn btn-primary hover btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active btn--prompt">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary active btn--prompt">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary hover btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary active btn--prompt">Lorum ipsum</a>
        </div>
      </div>
    </div>


    <div class="container pb-0">
      <h4 class="text-body">Primary button (small)</h4>
      <p>When there is limited space a small button variant can be used.</p>
    </div>


    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/focus state</p>
          <a href="/components/buttons" class="btn btn-primary active btn-sm">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a href="/components/buttons" class="btn btn-primary colour-primary active btn-sm">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary hover btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-primary active btn-sm">Lorum ipsum</a>
        </div>
      </div>
    </div>


    
    <div class="container pb-0">
      <h4 class="text-body">Primary button (compact)</h4>
      <p>When space is very limited or when the same button needs to be used multiple times on a page a compact primary button may be suitable. A ‘solid’ icon should always be used for compact buttons.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-5 col-sm-3">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3">
          <a href="/components/buttons" class="btn btn-primary colour-primary btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-primary colour-primary hover btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-primary colour-primary active btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-primary btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-primary hover btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-primary active btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
      </div>
    </div>


    <div class="container pb-0">
      <h4 class="text-body">Primary button (complete)</h4>
      <p>Use a ‘complete’ primary button when a user has completed a stage and can then access/view the outcome or to submit/complete a task.</p>
    </div>


    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-primary colour-success">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-primary hover colour-success">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-primary active colour-success">Lorum ipsum</a>
        </div>
      </div>

    </div>
    <!-- #endregion -->

    <!-- #region Secondary button -->
    <div class="container">
      <h3>Secondary</h3>
      <p>Use a secondary button to help the user get a further understanding of its priority. It can either be paired alongside a primary button on used on it’s own to support a secondary action for the user. A filter overlay of 85% brightness will be applied to the default states for the active state.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-4 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary active">Lorum ipsum</a>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h4 class="text-body">Secondary button (with icon)</h4>
      <p>Use an icon to support a secondary button. See example below where a plus is used to highlight that the button action adds a new event. The icon can be added before or after the button copy. Whichever is most relevant.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary hover fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary active fa-plus-large">Lorum ipsum</a>
        </div>
      </div>
    </div>


    <div class="container pb-0">
      <h4 class="text-body">Secondary button (with interactive prompt)</h4>
      <p>Use an interactive prompt to support a secondary button. See example below where an arrow is used to add interest and signify that the button will navigate the user to another page.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Focus/Hover state</p>
          <a href="/components/buttons" class="btn btn-secondary hover btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn--prompt">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary hover btn--prompt">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary active btn--prompt">Lorum ipsum</a>
        </div>
      </div>
    </div>

 
    <div class="container pb-0">
      <h4 class="text-body">Secondary button (opening filter dialog pop-over)</h4>
      <p>Secondary buttons can be used to open a filter dialog pop-over.</p>
    </div>  

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <div class="dialog__wrapper">
            <button class="btn btn-secondary"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Focus/Hover state</p>
          <div class="dialog__wrapper">
            <button class="btn btn-secondary hover"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <div class="dialog__wrapper">
            <button class="btn btn-secondary active"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <div class="dialog__wrapper">
            <button class="btn btn-secondary"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <div class="dialog__wrapper">
            <button class="btn btn-secondary hover"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <div class="dialog__wrapper">
            <button class="btn btn-secondary active"><i class="fa-light fa-user"></i>Individual</button>
            <dialog><p>Dialog content</p></dialog>
          </div>
        </div>
      </div>
    </div>




    <div class="container pb-0">
      <h4 class="text-body">Secondary button (opening filter dialog modal)</h4>
      <p>Secondary buttons can be used to open a filter dialog modal.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          
          <button class="btn btn-secondary btn-filter" data-model="example1">Filter by</button>
          <dialog id="example1"><p>Dialog content</p></dialog>
        
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Focus/Hover state</p>
          
          <button class="btn btn-secondary btn-filter hover" data-model="example2">Filter by</button>
          <dialog id="example2"><p>Dialog content</p></dialog>
        
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          
          <button class="btn btn-secondary btn-filter active" data-model="example2b">Filter by</button>
          <dialog id="example2b"><p>Dialog content</p></dialog>
        
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          <button class="btn btn-secondary btn-filter" data-model="example3">Filter by</button>
          <dialog id="example3"><p>Dialog content</p></dialog>
        
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          <button class="btn btn-secondary  btn-filter hover" data-model="example4">Filter by</button>
          <dialog id="example4"><p>Dialog content</p></dialog>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          <button class="btn btn-secondary  btn-filter active" data-model="example4b">Filter by</button>
          <dialog id="example4b"><p>Dialog content</p></dialog>
        </div>
      </div>
    </div>


    <div class="container pb-0">
      <h4 class="text-body">Secondary button (form field acting as a button)</h4>
      <p>Form fields can be set-up to act like a button to improve consistency when used alongside other buttons.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          
          <div class="btn btn-secondary">
            <select>
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>
        
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Focus/Hover state</p>
          
          <div class="btn btn-secondary hover">
            <select >
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>

        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          
          <div class="btn btn-secondary active">
            <select >
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          
          <div class="btn btn-secondary">
            <select>
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>
        
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          
          <div class="btn btn-secondary hover">
            <select>
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>
          
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          
          
          <div class="btn btn-secondary active">
            <select>
              <option>Sort by</option>
              <option>Partial name of option</option>
              <option>Option 2</option>
            </select>
          </div>
          
        </div>
      </div>
    </div>


    
    <div class="container pb-0">
      <h4 class="text-body">Secondary button (small)</h4>
      <p>When there is limited space a small button variant can be used.</p>
    </div>


    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-sm">Lorum ipsum</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary hover btn-sm">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-secondary active btn-sm">Lorum ipsum</a>
        </div>
      </div>
    </div>


    
    <div class="container pb-0">
      <h4 class="text-body">Secondary button (compact)</h4>
      <p>When space is very limited or when the same button needs to be used multiple times on a page a compact secondary button may be suitable. A ‘solid’ icon should always be used for compact buttons.</p>
    </div>

    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-5 col-sm-3">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary btn-compact fa-save">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary hover btn-compact fa-save">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-secondary active btn-compact fa-save">Lorum ipsum</a>
        </div>
      </div>
      <div class="row">
        <div class="col-5 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-danger btn-compact fa-trash">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-danger hover btn-compact fa-trash">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3">
          <a href="/components/buttons" class="btn btn-secondary colour-danger active btn-compact fa-trash">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-5 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary hover btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
        <div class="col-7 col-sm-3 bg-primary pt-3 pb-2">
          <a href="/components/buttons" class="btn btn-secondary active btn-compact fa-plus-large">Lorum ipsum</a>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region tertiary button -->
    <div class="container pb-0">
      <h3>Tertiary</h3>
      <p>Use a tertiary button for links such as low level navigations. A filter overlay of 85% brightness will be applied to the default states for the active state.</p>
    </div>


    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons" class="btn btn-tertiary">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-tertiary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-tertiary active">Lorum ipsum</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-tertiary">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-tertiary hover">Lorum ipsum</a>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <a href="/components/buttons" class="btn btn-tertiary active">Lorum ipsum</a>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h4 class="text-body">Tertiary button (with icon)</h4>
      <p>An icon can be added to support a tertiary button for links like information downloads (pdfs, csvs etc.)</p>
    </div>


    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <a href="/components/buttons.pdf" class="btn btn-tertiary"><span>Lorum ipsum</span><i class="fa-light fa-arrow-down-to-bracket"></i></a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <a href="/components/buttons" class="btn btn-tertiary hover"><span>Lorum ipsum</span><i class="fa-light fa-arrow-down-to-bracket"></i></a>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <a href="/components/buttons" class="btn btn-tertiary active"><span>Lorum ipsum</span><i class="fa-light fa-arrow-down-to-bracket"></i></a>
        </div>
      </div>
    </div>

    <!-- #endregion -->

    <!-- #region diasabled -->
    <div class="container pb-0">
      <h3>Disabled button state</h3>
      <p>When any of the buttons above are disabled we should:<br/>
      - Disable the normal hover state for that button<br/>
      - Reduce the opacity of the button to 40%<br/>
      - Add a native browser ‘blocked’ symbol when the user hovers over the button.</p>
    </div>

    <div class="container visualtest pb-5 ">
      <div class="row">
        <div class="col-sm-6 col-md-4 pe-none">
          <p class="lead pb-2">Default state</p>
          <button class="btn btn-primary" disabled>Lorum ipsum</button>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <button class="btn btn-primary" disabled>Lorum ipsum</button>
        </div>
      </div>
    </div>
    <!-- #endregion -->

   

    <div class="container pb-0">
      
      <h2>Mobile button padding</h2>
      <p>Due to the small real estate of mobile screens we can reduce the minimum padding around buttons from 24px (1.5rem) to 16px (1rem). Compact buttons can still have the smaller padding of 8px (0.5rem) on desktop, tablet, and mobile.</p>
      <p>This reduced padding provides more flexibility when designing for mobile as more content can be displayed on the screen at once. The minimum padding does however ensure that the screen doesn’t become too cluttered and that there is adequate spacing around the button to maintain a suitable touch target size to avoid accidental taps.</p>
    </div>

    <div class="container pb-0">
      
      <h2>Text links</h2>
      <p class="pb-3">Inline text links can be used among body copy. See examples below:</p>
    </div>

    <div class="container visualtest">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <a href="/components/buttons">industry's standard</a> dummy text ever since the 1500s, when an <a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a> took a galley of type and scrambled it to make a type specimen book. </p>
    </div>
    <div class="container visualtest pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <p><a href="/components/buttons">industry's standard</a></p>
          <p><a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <p><a href="/components/buttons" class="hover">industry's standard</a></p>
          <p><a href="/components/buttons" class="hover"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Active state</p>
          <p><a href="/components/buttons" class="active">industry's standard</a></p>
          <p><a href="/components/buttons" class="active"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <p><a href="/components/buttons">industry's standard</a></p>
          <p><a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <p><a href="/components/buttons" class="hover">industry's standard</a></p>
          <p><a href="/components/buttons" class="hover"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary pt-3">
          <p><a href="/components/buttons" class="active">industry's standard</a></p>
          <p><a href="/components/buttons" class="active"><i class="fa-light fa-envelope"></i> unknown printer</a></p>
        </div>
      </div>
    </div>


    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs >
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{`<!-- Primary button -->
<button class="btn btn-primary">Button text</button>
<a href="/" class="btn btn-primary">Button text</a>
<a href="/" class="btn btn-primary colour-primary">Button text</a><!-- change the colour -->

<!-- Primary button with icon to the left -->
<a href="/components/buttons" class="btn btn-primary fa-plus-large">Lorum ipsum</a>

<!-- Primary button with icon to the right -->
<a href="/components/buttons" class="btn btn-primary"><span>Lorum ipsum</span><i class="fa-plus-large"></i></a>


<!-- Primary button (with interactive prompt) -->
<a href="/components/buttons" class="btn btn-primary btn--prompt">Lorum ipsum</a>

<!-- Primary button (small) -->
<a href="/components/buttons" class="btn btn-primary btn-sm">Lorum ipsum</a>

<!-- Primary button (compact) -->
<a href="/components/buttons" class="btn btn-primary btn-compact fa-plus-large">Lorum ipsum</a>

<!-- Primary button (complete) -->
<a href="/components/buttons" class="btn btn-primary colour-success">Lorum ipsum</a>

<!-- Secondary button -->
<a href="/components/buttons" class="btn btn-secondary">Lorum ipsum</a>

<!-- Secondary button (opening filter dialog pop-over) -->
<div class="dialog__wrapper">
  <button class="btn btn-secondary"><i class="fa-light fa-user"></i>Individual</button>
  <dialog><p>Dialog content</p></dialog>
</div>

<!-- Secondary button (opening filter dialog modal) -->
<button class="btn btn-secondary btn-filter" data-model="example1">Filter by</button>
<dialog id="example1"><p>Dialog content</p></dialog>
        
<!-- Secondary button (form field acting as a button) -->
<div class="btn btn-secondary">
  <select>
    <option>Sort by</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<!-- Secondary button (compact) -->
<a href="/components/buttons" class="btn btn-secondary colour-secondary btn-compact fa-save">Lorum ipsum</a>
        
<!-- Tertiary -->
<a href="/components/buttons" class="btn btn-tertiary">Lorum ipsum</a>
`}}</code></pre>
        </details>
      </Tabs>
    </div>
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
              <td>01.06.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/buttons-links.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    DSHeader,
    Table,
    Tabs,
    Tab
  },
  data () {
    return {
      headerImg: headerImg
    }
  }
}
</script>