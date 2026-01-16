<script setup lang="ts">
  import { ref } from 'vue';

  const sortedClasses = ref({});
  const classes = {
    'clearfix': {
      'url': '/utilities/clearfix.scss',
      'desc': 'Clear the floats from both sides.',
    },
    'visually-hidden': {
      'url': '/utilities/visually-hidden.scss',
      'desc': 'Hide an element from the standard user but not from screen readers.',
    },
    'text-truncate': {
      'url': '/utilities/text-truncate.scss',
      'desc': 'Keep the text onto one line and add an ellipsis if needed.',
    },
    'ratio': {
      'url': '/utilities/ratio.scss',
      'desc': 'Use pre-defined aspect ratios to generate the sizing or elements.',
    },
    'fixed-top .fixed-bottom': {
      'url': '/utilities/fixed.scss',
      'desc': 'Fix elements to either the top or bottom.',
    },
    'sticky': {
      'url': '/utilities/sticky.scss',
      'desc': 'Make elements stick to either the top or bottom.',
    },
    'max-height': {
      'url': '/utilities/max-height.scss',
      'desc': 'Set a pre-defined max height on an element, note this will create a scrollable area if the content is larger than the max height.',
    },
    'js-display': {
      'url': '/utilities/js-display.scss',
      'desc': 'Show and hide elements depending upon if javascript is running or not.',
    },
    'line-clamp': {
      'url': '/utilities/line-clamp.scss',
      'desc': 'Restricts a texts height to a number of lines (1-5).',
    },
    'align': {
      'url': '/utilities/align.scss',
      'desc': 'Change the alignment of the text.',
    },
    'wider-colours': {
      'url': '/utilities/wider-colours.scss',
      'desc': 'Apply the wider range of colours in our design system.',
    },
    'opacity': {
      'url': '/utilities/opacity.scss',
      'desc': 'Apply the opacity of an element by intervals of 25%',
    },
    'overflow': {
      'url': '/utilities/overflow.scss',
      'desc': 'Update the overflow of an element',
    },
    'display': {
      'url': '/utilities/display.scss',
      'desc': 'Update the display of an element, can be applied at different breakpoints',
    },
    'position': {
      'url': '/utilities/position.scss',
      'desc': 'Update the position of an element, can be applied at different breakpoints',
    },
    'border': {
      'url': '/utilities/border.scss',
      'desc': 'Apply a border and adjust its settings',
    },
    'sizes': {
      'url': '/utilities/sizes.scss',
      'desc': 'Apply sizing rules to an element',
    },
    'flex': {
      'url': '/utilities/flex.scss',
      'desc': 'Update the flex rules of an element, can be applied at different breakpoints',
    },
    'order': {
      'url': '/utilities/order.scss',
      'desc': 'Update the order of an element, can be applied at different breakpoints',
    },
    'margins': {
      'url': '/utilities/margins.scss',
      'desc': 'Adjust the margins of an element',
    },
    'paddings': {
      'url': '/utilities/paddings.scss',
      'desc': 'Adjust the paddings of an element',
    },
    'gap': {
      'url': '/utilities/gap.scss',
      'desc': 'Update the gap sizing of an element with the display flex',
    },
    'text': {
      'url': '/utilities/text.scss',
      'desc': 'Apply the text settings',
    },
    'colours': {
      'url': '/utilities/colours.scss',
      'desc': 'Apply our design system colours by either text colour or background',
    },
    'gradients': {
      'url': '/utilities/gradients.scss',
      'desc': 'Add gradients to backgrounds',
    },
    'pointer-events': {
      'url': '/utilities/pointer-events.scss',
      'desc': 'Disable or enable point events',
    },
    'rounded': {
      'url': '/utilities/rounded.scss',
      'desc': 'Add rounded corners',
    },
    'visible': {
      'url': '/utilities/visible.scss',
      'desc': 'Change the visibility of elements',
    }
  };

  sortedClasses.value = Object.keys(classes)
  .sort() // Sort the keys alphabetically
  .reduce((obj, key) => {
    obj[key] = classes[key]; // Rebuild the object with sorted keys
    return obj;
  }, {});
  
  Object.entries(sortedClasses.value).forEach(([className, classObject])=> {
    

    fetch(classObject.url)
      .then( r => r.text() )
      .then( t => { sortedClasses.value[className].content = t; } )
  });

</script>

<template>
  <main>
    <ul class="breadcrumb mb-0 d-sm-none">
      <li><a href="/foundations">Foundations</a></li>
    </ul>

    <h1>Utility classes</h1>
    <p>
      Utility classes help developers quickly apply global style rules in a consistant way while reducing duplicate CSS
      rules.
    </p>

    <template v-for="(item, key) in sortedClasses" :key="key">

      <h2 class="h4 pb-1">{{ key }}</h2>
      <pre class="mb-5"><code>{{ item.content }}</code></pre>

    </template>

  </main>
</template>

<style lang="scss" scoped>
  pre {
    max-height: 20rem;
  }

  code {
    background: #f3f3f3;
    color: #444;
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
</style>
