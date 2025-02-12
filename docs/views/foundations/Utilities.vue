<script setup lang="ts">
  import { shared } from '../../main.ts';
  import Tabs from '@/components/Tabs/Tabs.vue';

  const replaceNewline = function (input) {
    var newline = String.fromCharCode(13, 10);
    return input.replaceAll('\\n', newline);
  };
  // Filters the CSS vars object to pull out the non-theme colours
  const utClasses = Object.keys(shared.cssVars).reduce(function (arr, key) {
    if (key.startsWith('--ut-')) {
      let updateKey = key.replace('--ut-', '');
      let value = replaceNewline(shared.cssVars[key].substring(0, shared.cssVars[key].length - 1).substring(1));
      arr[updateKey] = { name: updateKey, value: value };
    }
    return arr;
  }, {});

  const totalClasses = Object.keys(utClasses).length;

  // Removed classes
  Object.keys(shared.themeColours).forEach(function (element) {
    utClasses['border-' + element.toLowerCase()] = {
      name: 'border-' + element.toLowerCase(),
      value: 'Removed',
      class: 'text-danger',
    };
  });
  let floatClass = [
    'float-end',
    'float-md-end',
    'float-md-none',
    'float-md-start',
    'float-none',
    'float-sm-end',
    'float-sm-none',
    'float-sm-start',
    'float-start',
  ];
  floatClass.forEach(function (classsName) {
    utClasses[classsName] = { name: classsName, value: 'Removed', class: 'text-danger' };
  });

  let sizingClass = ['p', 'pb', 'pe', 'px', 'py', 'ps', 'pt', 'm', 'mb', 'me', 'mx', 'my', 'ms', 'mt', 'gap'];
  sizingClass.forEach(function (classsName) {
    for (let i = 0; i <= 5; i++) {
      let cn = classsName + '-sm-' + i;
      utClasses[cn] = { name: cn, value: 'Removed', class: 'text-danger' };
      cn = classsName + '-md-' + i;
      utClasses[cn] = { name: cn, value: 'Removed', class: 'text-danger' };
    }
    let cn = classsName + '-sm-auto';
    utClasses[cn] = { name: cn, value: 'Removed', class: 'text-danger' };
    cn = classsName + '-md-auto';
    utClasses[cn] = { name: cn, value: 'Removed', class: 'text-danger' };
  });

  utClasses['lh-sm'] = { name: 'lh-sm', value: 'Removed', class: 'text-danger' };
  utClasses['lh-base'] = { name: 'lh-sm', value: 'Removed', class: 'text-danger' };
  utClasses['lh-lg'] = { name: 'lh-sm', value: 'Removed', class: 'text-danger' };

  // Added classes
  utClasses['mw-fit-content'] = {
    name: 'mw-fit-content',
    value: utClasses['mw-fit-content']['value'],
    added: 'true',
  };
  utClasses['mw-sm-fit-content'] = {
    name: 'mw-sm-fit-content',
    value: utClasses['mw-sm-fit-content']['value'],
    added: 'true',
  };
  utClasses['mw-md-fit-content'] = {
    name: 'mw-md-fit-content',
    value: utClasses['mw-md-fit-content']['value'],
    added: 'true',
  };
  utClasses['font-body'] = {
    name: 'font-body',
    value: utClasses['font-body']['value'],
    added: 'true',
  };
  utClasses['object-contain'] = {
    name: 'object-fit',
    value: utClasses['object-contain']['value'],
    added: 'true',
  };
  utClasses['object-cover'] = {
    name: 'object-fit',
    value: utClasses['object-cover']['value'],
    added: 'true',
  };
  utClasses['lh-0'] = { name: 'line height 0', value: utClasses['lh-0']['value'], added: 'true' };

  const ordered = Object.keys(utClasses)
    .sort()
    .reduce((obj, key) => {
      obj[key] = utClasses[key];
      return obj;
    }, {});

  const utMixins = Object.keys(shared.cssVars).reduce(function (arr, key) {
    if (key.startsWith('-ut-mixin-')) {
      let updateKey = key.replace('-ut-mixin-', '');
      let value = shared.cssVars[key];
      arr[updateKey] = value;
    }
    return arr;
  }, {});


  const getMixin = (name):string => {
    switch(name) {
      case 'clearfix':
        // code block
        return `
@mixin clearfix() {
  .clearfix {
    &::after {
      display: block;
      clear: both;
      content: "";
    }
  }
}
        `;
      case 'visually-hidden':
        // code block
        return `
@mixin visually-hidden() {
  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {

    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
}
        `;
      default:
        return 'Content missing';
    }
  }


</script>

<template>
  <main>
    <ul class="breadcrumb mb-0 d-sm-none">
      <li><a href="/foundations">Foundations</a></li>
    </ul>
    <h1>Utility classes (Beta)</h1>

    <Tabs>
      <details>
        <summary><h2>Bootstrap</h2></summary>

        <p>
          Our Utility classes are based upon and use the
          <a href="https://getbootstrap.com/docs/5.1/utilities/api/" target="_blank">boostrap utility api</a>. But some
          classes have been removed to help reduce the CSS file size or to restrict unwanted layout and style changes.
          For example the responsive version of the padding and margins classes have been removed. This reduces around
          10kb in file size and removes the temptation to over configure elements.
        </p>
        <p class="h5 pb-4">Total classes: {{ totalClasses }}</p>
        <ul class="list-unstyled">
          <li :class="'pb-4 ' + value.class" v-for="(value, name) in utClasses" :key="name">
            <h2 :class="'h5 ' + value.class">
              {{ name }} <span class="strong text-success" v-if="value.added">Added</span>
            </h2>
            <pre><code>{{ value.value }}</code></pre>
          </li>
        </ul>
      </details>

      <details>
        <summary><h2>Mixins</h2></summary>

        <ul class="list-unstyled">
          <li v-for="(value, name) in utMixins" :key="name" class="pb-4">
            <h2 class="h5 pb-1">
              {{ name }}
            </h2>
            <p class="pb-3">{{ value }}</p>
            <pre><code>@include {{ name }}();

{{ getMixin(name).trim() }}</code></pre>
          </li>
        </ul>
      </details>

      <details>
        <summary><h2>Tailwind</h2></summary>
      </details>
    </Tabs>
  </main>
</template>

<style lang="scss" scoped>
  @media (min-width: 36em) {
    .list-unstyled {
      columns: auto 2;
      column-gap: 1rem;

      li {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  }
  @media (min-width: 62em) {
    .list-unstyled {
      columns: auto 3;
    }
  }
</style>
