<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';


</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Button group (beta)</h1>
    </DSHeader>

    <p class="lead">
      Collction of related actions or links.
    </p>

    <div class="container">
        
      <div class="btn__group">
        <button class="btn btn-tertiary">Tertiary button</button>
        <button class="btn btn-secondary">Secondary button</button>
        <button class="btn btn-primary">Primary button</button>
      </div>
    </div>


    <h2 class="pt-5">Behaviour</h2>

    <h3>Smaller containers</h3>
    <p>All buttons should have a 100% width; with the primary buttons being displayed first.</p>
    <div class="visualtest mb-5">
      <div class="sm-col-end-10 md-col-end-6 container">
        <div class="btn__group">
          <button class="btn btn-secondary">Secondary button</button>
          <button class="btn btn-primary">Primary button</button>
          <button class="btn btn-tertiary">Tertiary button</button>
        </div>
      </div>
    </div>
    
    <h3>Wider containers</h3>

    <p>The primary button should be displayed on the right to the other buttons.</p>
    <div class="container visualtest">
        
      <div class="btn__group mb-5">
        <button class="btn btn-tertiary">Tertiary button</button>
        <button class="btn btn-secondary">Secondary button</button>
        <button class="btn btn-primary">Primary button</button>
      </div>

      <p>To align the button to the right for forms you need to apply the <code>.text-end</code> class. By default the buttons are aligned right when the button group inside a form.</p>
        
      <div class="btn__group text-end mb-5">
        <button class="btn btn-tertiary">Tertiary button</button>
        <button class="btn btn-secondary">Secondary button</button>
        <button class="btn btn-primary">Primary button</button>
      </div>
      <form>
        <label>
          Label
          <input type="text" name="text" />
        </label>
        <label>
          Label
          <input type="text" name="text" />
        </label>
        <div class="btn__group">
          <button class="btn btn-secondary">Back button</button>
          <button class="btn btn-primary">Submit button</button>
        </div>
      </form>
    </div>


  </main>
</template>


