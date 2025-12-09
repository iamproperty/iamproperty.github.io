<script setup>
  import Password from '@/components/Password/Password.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';
  //import TrackEvents from '../TrackEvents.vue';
</script>


<template>
  
  <main>
     <DSHeader :image="headerImg" section="components">
      <h1>Password</h1>
    </DSHeader>

    <p class="lead md-col-end-7">
      Password fields hide the field value for security. The password component can be added for the user to hide and show the value of the field.</p>

    <div class="visualtest container">
         
      <label>Password
        
          <Password>
            <input type="password" name="password" required="" autocomplete="on" minlength="8">
          </Password>
      </label>


    </div>
    

  <Integration component="password" componentName="password">
      <template #web-component>
        <pre><code>{{`
        <label>
          Password 
          <span>
            <input type="password" id="password" name="password" required="" autocomplete="on" minlength="8" data-strength-checker="pwdchecker1">
            <iam-password-indicator data-alt-class="suffix fa-solid fa-eye">
              <button class="suffix fa-solid fa-eye-slash" aria-hidden="true"><span class="visually-hidden">Show password</span></button>
            </iam-password-indicator>
          </span>
        </label>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import PasswordIndicator from '@/components/PasswordIndicator/PasswordIndicator.vue</script>
        
      <label>
        Password 
        <span>
          <input type="password" id="password" name="password" required="" autocomplete="on" minlength="8" data-strength-checker="pwdchecker1">
          <PasswordIndicator data-alt-class="suffix fa-solid fa-eye">
            <button class="suffix fa-solid fa-eye-slash" aria-hidden="true"><span class="visually-hidden">Show password</span></button>
          </PasswordIndicator>
        </span>
      </label>
`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-alt-class</th>
              <td></td>
              <td>string</td>
              <td>Yes</td>
              <td>This should be set in order to switch the classlist of the button and show a different icon</td>
            </tr>
          </tbody>
        </table>
      </template>

        <template #criteria>
        <ul>
          <li>A button should appear alongside the input field</li>
          <li>By default, the button should have the eye icon with a slash through it (or alternative icon set).</li>
          <li>By default, any text entered into the input should be obfuscated</li>
          <li>Clicking the button for the first time should show the text entered into the input.</li>
          <li>Clicking the button for the first time should change the icon.</li>
          <li>Clicking the button a second time, should revert the state to default.</li>

        </ul>
      </template>
    </Integration>

  </main>
</template>
