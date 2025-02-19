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

  const getMixin = (name): string => {
    switch (name) {
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
      case 'text-truncate':
        // code block
        return `
@mixin text-truncate() {
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
        `;
      case 'ratio':
        // code block
        return `
@mixin ratio() {
  .ratio {
    position: relative;
    width: 100%;

    &::before {
      display: block;
      padding-top: var(--#{$prefix}aspect-ratio);
      content: '';
    }

    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @each $key, $ratio in $aspect-ratios {
    .ratio-#{$key} {
      --#{$prefix}aspect-ratio: #{$ratio};
    }
  }
}
        `;
      case 'fixed':
        return `
@mixin fixed() {
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: $zindex-fixed;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $zindex-fixed;
  }
}
        `;
      case 'sticky':
        return `
@mixin sticky() {
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

      .sticky#{$infix}-top {
        position: sticky;
        top: 0;
        z-index: $zindex-sticky;
      }

      .sticky#{$infix}-bottom {
        position: sticky;
        bottom: 0;
        z-index: $zindex-sticky;
      }
    }
  }
}
        `;
      case 'max-height':
        return `
@mixin max-height() {
  :is(.mh-sm, .mh-md, .mh-lg, .mh-sm-sm, .mh-sm-md, .mh-sm-lg, .mh-md-sm, .mh-md-md, .mh-md-lg) {
    &:not(iam-table):not(.table__wrapper) {
      padding-inline: var(--mh-padding-inline, 0);
      margin-inline: calc(var(--mh-padding-inline, 0) * -1);
    }

    &::before {
      top: calc(100% - 1.5rem);
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.5rem;
      position: sticky;
      display: block;
      background: linear-gradient(180deg, transparent 0%, var(--colour-canvas-2) 100%);
      z-index: 2;
      margin-bottom: -1.5rem;
    }
  }

  :is(.mh-sm, .mh-md, .mh-lg) {
    overflow: auto;
    overscroll-behavior: contain;

    &::before {
      content: '';
    }
  }

  .mh-sm {
    max-height: calc(#{rem(200)} - var(--mh-modifier, 0rem));
  }

  .mh-md {
    max-height: calc(#{rem(400)} - var(--mh-modifier, 0rem));
  }

  .mh-lg {
    max-height: calc(#{rem(600)} - var(--mh-modifier, 0rem));
  }

  @include media-breakpoint-up(sm) {
    :is(.mh-sm-sm, .mh-sm-md, .mh-sm-lg) {
      overflow: auto;
      overscroll-behavior: contain;

      &::before {
        content: '';
      }
    }

    .mh-sm-sm {
      max-height: calc(#{rem(200)} - var(--mh-modifier, 0rem));
    }

    .mh-sm-md {
      max-height: calc(#{rem(400)} - var(--mh-modifier, 0rem));
    }

    .mh-sm-lg {
      max-height: calc(#{rem(600)} - var(--mh-modifier, 0rem));
    }
  }

  @include media-breakpoint-up(md) {
    :is(.mh-md-sm, .mh-md-md, .mh-md-lg) {
      overflow: auto;
      overscroll-behavior: contain;

      &::before {
        content: '';
      }
    }

    .mh-md-sm {
      max-height: calc(#{rem(200)} - var(--mh-modifier, 0rem));
    }

    .mh-md-md {
      max-height: calc(#{rem(400)} - var(--mh-modifier, 0rem));
    }

    .mh-md-lg {
      max-height: calc(#{rem(600)} - var(--mh-modifier, 0rem));
    }
  }
}
        `;
      case 'js-display':
        return `
@mixin js-display() {
  @media (scripting: enabled) {
    .js-show {
      display: none !important;
    }
  }

  @media (scripting: none) {
    .js-hide {
      display: none !important;
    }
  }
}
        `;
      case 'line-clamp':
        return `
@mixin line-clamp() {
  .line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: hidden;
    overflow: hidden;
  }

  .line-clamp--2 {
    -webkit-line-clamp: 2;
  }

  .line-clamp--3 {
    -webkit-line-clamp: 3;
  }

  .line-clamp--4 {
    -webkit-line-clamp: 4;
  }

  .line-clamp--5 {
    -webkit-line-clamp: 5;
  }
}
        `;
      case 'wider-colours':
        return `
@mixin wider-colours() {
  @each $colour, $value in $wider-colours {
    .wider-colour-#{$colour} {
      --wider-colour: var(--wider-colour-#{$colour});
      --wider-colour-hover: var(--wider-colour-#{$colour}-hover);
      --wider-colour-active: var(--wider-colour-#{$colour}-active);
      color: #262626 !important;
    }
  }
}
        `;
      case 'align':
        return `
@mixin align() {
  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }
}
        `;
      case 'opacity':
        return `
@mixin opacity() {
  .opacity-0 {
    opacity: 0 !important;
  }

  .opacity-25 {
    opacity: 0.25 !important;
  }

  .opacity-50 {
    opacity: 0.5 !important;
  }

  .opacity-75 {
    opacity: 0.75 !important;
  }

  .opacity-100 {
    opacity: 1 !important;
  }
}
        `;
      case 'overflow':
        return `
@mixin overflow() {
  .overflow-auto {
    overflow: auto !important;
  }

  .overflow-hidden {
    overflow: hidden !important;
  }

  .overflow-visible {
    overflow: visible !important;
  }

  .overflow-scroll {
    overflow: scroll !important;
  }
}
        `;
      case 'display':
        return `
@mixin display() {
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

      .d#{$infix}-inline {
        display: inline !important;
      }

      .d#{$infix}-inline-block {
        display: inline-block !important;
      }

      .d#{$infix}-block {
        display: block !important;
      }

      .d#{$infix}-grid {
        display: grid !important;
      }

      .d#{$infix}-table {
        display: table !important;
      }

      .d#{$infix}-table-row {
        display: table-row !important;
      }

      .d#{$infix}-table-cell {
        display: table-cell !important;
      }

      .d#{$infix}-flex {
        display: flex !important;
      }

      .d#{$infix}-inline-flex {
        display: inline-flex !important;
      }

      .d#{$infix}-none {
        display: none !important;
      }
    }
  }
}
        `;
      case 'position':
        return `
@mixin position() {
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
      .position#{$infix}-static {
        position: static !important;
      }

      .position#{$infix}-relative {
        position: relative !important;
      }

      .position#{$infix}-absolute {
        position: absolute !important;
      }

      .position#{$infix}-fixed {
        position: fixed !important;
      }

      .position#{$infix}-sticky {
        position: sticky !important;
      }

      .top#{$infix}-0 {
        top: 0 !important;
      }

      .top#{$infix}-50 {
        top: 50% !important;
      }

      .top#{$infix}-100 {
        top: 100% !important;
      }

      .bottom#{$infix}-0 {
        bottom: 0 !important;
      }

      .bottom#{$infix}-50 {
        bottom: 50% !important;
      }

      .bottom#{$infix}-100 {
        bottom: 100% !important;
      }

      .start#{$infix}-0 {
        left: 0 !important;
      }

      .start#{$infix}-50 {
        left: 50% !important;
      }

      .start#{$infix}-100 {
        left: 100% !important;
      }

      .end#{$infix}-0 {
        right: 0 !important;
      }

      .end#{$infix}-50 {
        right: 50% !important;
      }

      .end#{$infix}-100 {
        right: 100% !important;
      }

      .translate#{$infix}-middle {
        transform: translate(-50%, -50%) !important;
      }

      .translate#{$infix}-middle-x {
        transform: translateX(-50%) !important;
      }

      .translate#{$infix}-middle-y {
        transform: translateY(-50%) !important;
      }
    }
  }
}
        `;
      case 'border':
        return `
@mixin border() {
  .border {
    border: var(--border-width) var(--border-style) var(--border-color) !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top {
    border-top: var(--border-width) var(--border-style) var(--border-color) !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-end {
    border-right: var(--border-width) var(--border-style) var(--border-color) !important;
  }

  .border-end-0 {
    border-right: 0 !important;
  }

  .border-bottom {
    border-bottom: var(--border-width) var(--border-style) var(--border-color) !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-start {
    border-left: var(--border-width) var(--border-style) var(--border-color) !important;
  }

  .border-start-0 {
    border-left: 0 !important;
  }

  .border-1 {
    --border-width: 1px;
  }

  .border-2 {
    --border-width: 2px;
  }

  .border-3 {
    --border-width: 3px;
  }

  .border-4 {
    --border-width: 4px;
  }

  .border-5 {
    --border-width: 5px;
  }

  .border-opacity-10 {
    --border-opacity: 0.1;
  }

  .border-opacity-25 {
    --border-opacity: 0.25;
  }

  .border-opacity-50 {
    --border-opacity: 0.5;
  }

  .border-opacity-75 {
    --border-opacity: 0.75;
  }

  .border-opacity-100 {
    --border-opacity: 1;
  }
}
        `;
      case 'sizes':
        return `
@mixin sizes() {
  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .mw-fit-content {
    max-width: fit-content !important;
  }

  .mw-content {
    max-width: var(--content-max-width) !important;
  }

  .vw-100 {
    width: 100vw !important;
  }

  .min-vw-100 {
    min-width: 100vw !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .vh-100 {
    height: 100vh !important;
  }

  .min-vh-100 {
    min-height: 100vh !important;
  }

  .min-100 {
    min-width: 100% !important;
  }

  .min-fit-content {
    min-width: fit-content !important;
  }

  .object-cover {
    object-fit: cover !important;
  }

  .object-contain {
    object-fit: contain !important;
  }
}
        `;
      case 'flex':
        return `
@mixin flex() {
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

      .flex#{$infix}-fill {
        flex: 1 1 auto !important;
      }

      .flex#{$infix}-row {
        flex-direction: row !important;
      }

      .flex#{$infix}-column {
        flex-direction: column !important;
      }

      .flex#{$infix}-row-reverse {
        flex-direction: row-reverse !important;
      }

      .flex#{$infix}-column-reverse {
        flex-direction: column-reverse !important;
      }

      .flex#{$infix}-grow-0 {
        flex-grow: 0 !important;
      }

      .flex#{$infix}-grow-1 {
        flex-grow: 1 !important;
      }

      .flex#{$infix}-shrink-0 {
        flex-shrink: 0 !important;
      }

      .flex#{$infix}-shrink-1 {
        flex-shrink: 1 !important;
      }

      .flex#{$infix}-wrap {
        flex-wrap: wrap !important;
      }

      .flex#{$infix}-nowrap {
        flex-wrap: nowrap !important;
      }

      .flex#{$infix}-wrap-reverse {
        flex-wrap: wrap-reverse !important;
      }

      .justify-content#{$infix}-start {
        justify-content: flex-start !important;
      }

      .justify-content#{$infix}-end {
        justify-content: flex-end !important;
      }

      .justify-content#{$infix}-center {
        justify-content: center !important;
      }

      .justify-content#{$infix}-between {
        justify-content: space-between !important;
      }

      .justify-content#{$infix}-around {
        justify-content: space-around !important;
      }

      .justify-content#{$infix}-evenly {
        justify-content: space-evenly !important;
      }

      .align-items#{$infix}-start {
        align-items: flex-start !important;
      }

      .align-items#{$infix}-end {
        align-items: flex-end !important;
      }

      .align-items#{$infix}-center {
        align-items: center !important;
      }

      .align-items#{$infix}-baseline {
        align-items: baseline !important;
      }

      .align-items#{$infix}-stretch {
        align-items: stretch !important;
      }

      .align-content#{$infix}-start {
        align-content: flex-start !important;
      }

      .align-content#{$infix}-end {
        align-content: flex-end !important;
      }

      .align-content#{$infix}-center {
        align-content: center !important;
      }

      .align-content#{$infix}-between {
        align-content: space-between !important;
      }

      .align-content#{$infix}-around {
        align-content: space-around !important;
      }

      .align-content#{$infix}-stretch {
        align-content: stretch !important;
      }

      .align-self#{$infix}-auto {
        align-self: auto !important;
      }

      .align-self#{$infix}-start {
        align-self: flex-start !important;
      }

      .align-self#{$infix}-end {
        align-self: flex-end !important;
      }

      .align-self#{$infix}-center {
        align-self: center !important;
      }

      .align-self#{$infix}-baseline {
        align-self: baseline !important;
      }

      .align-self#{$infix}-stretch {
        align-self: stretch !important;
      }
    }
  }
}
        `;
      case 'order':
        return `
@mixin order() {
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

      .order#{$infix}-first {
        order: -1 !important;
      }

      .order#{$infix}-0 {
        order: 0 !important;
      }

      .order#{$infix}-1 {
        order: 1 !important;
      }

      .order#{$infix}-2 {
        order: 2 !important;
      }

      .order#{$infix}-3 {
        order: 3 !important;
      }

      .order#{$infix}-4 {
        order: 4 !important;
      }

      .order#{$infix}-5 {
        order: 5 !important;
      }

      .order#{$infix}-last {
        order: 6 !important;
      }
    }
  }
}
        `;
      case 'margins':
        return `
@mixin margins() {
  @each $key, $value in $spacers {
    .m-#{$key} {
      margin: #{$value} !important;
    }

    .mx-#{$key} {
      margin-left: #{$value} !important;
      margin-right: #{$value} !important;
    }

    .my-#{$key} {
      margin-top: #{$value} !important;
      margin-bottom: #{$value} !important;
    }

    .mt-#{$key} {
      margin-top: #{$value} !important;
    }

    .me-#{$key} {
      margin-right: #{$value} !important;
    }

    .mb-#{$key} {
      margin-bottom: #{$value} !important;
    }

    .ms-#{$key} {
      margin-left: #{$value} !important;
    }
  }

  .m-auto {
    margin: auto !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .me-auto {
    margin-right: auto !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ms-auto {
    margin-left: auto !important;
  }
}
        `;
      case 'paddings':
        return `
@mixin paddings() {
  @each $key, $value in $spacers {
    .p-#{$key} {
      padding: #{$value} !important;
    }

    .px-#{$key} {
      padding-left: #{$value} !important;
      padding-right: #{$value} !important;
    }

    .py-#{$key} {
      padding-top: #{$value} !important;
      padding-bottom: #{$value} !important;
    }

    .pt-#{$key} {
      padding-top: #{$value} !important;
    }

    .pe-#{$key} {
      padding-right: #{$value} !important;
    }

    .pb-#{$key} {
      padding-bottom: #{$value} !important;
    }

    .ps-#{$key} {
      padding-left: #{$value} !important;
    }
  }
}
        `;
      case 'gap':
        return `
@mixin gap() {
  @each $key, $value in $spacers {
    .gap-#{$key} {
      gap: #{$value} !important;
    }
  }
}
        `;
      case 'text':
        return `
@mixin text() {
  .font-monospace {
    font-family: var(--font-monospace) !important;
  }

  .font-body {
    font-family: var(--font-body) !important;
  }

  .fs-1 {
    font-size: rfs-fluid-value(2.5rem) !important;
  }

  .fs-2 {
    font-size: rfs-fluid-value(2rem) !important;
  }

  .fs-3 {
    font-size: rfs-fluid-value(1.75rem) !important;
  }

  .fs-4 {
    font-size: rfs-fluid-value(1.5rem) !important;
  }

  .fs-5 {
    font-size: rfs-fluid-value(1.25rem) !important;
  }

  .fs-6 {
    font-size: rfs-fluid-value(1rem) !important;
  }

  .fst-italic {
    font-style: italic !important;
  }

  .fst-normal {
    font-style: normal !important;
  }

  .fw-light {
    font-weight: 300 !important;
  }

  .fw-lighter {
    font-weight: lighter !important;
  }

  .fw-normal {
    font-weight: 400 !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .fw-semibold {
    font-weight: 600 !important;
  }

  .fw-bolder {
    font-weight: bolder !important;
  }

  .lh-0 {
    line-height: 0 !important;
  }

  .lh-1 {
    line-height: 1 !important;
  }

  .text-start {
    text-align: left !important;
  }

  .text-end {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .text-decoration-underline {
    text-decoration: underline !important;
  }

  .text-decoration-line-through {
    text-decoration: line-through !important;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
}
        `;
      case 'colours':
        return `
@mixin colours() {
  @each $color, $value in $theme-colors {
    .text-#{$color} {
      --text-opacity: 1;
      color: var(--colour-#{$color}) !important;
    }

    .bg-#{$color} {
      --bg-opacity: 1;
      background-color: var(--colour-#{$color}) !important;
    }

    .colour-#{$color} {
      --colour: var(--colour-#{$color}) !important;
    }
  }
}
        `;
      case 'gradients':
        return `
@mixin gradients() {
  .bg-gradient {
    background-image: var(--gradient) !important;
  }

  .gradient-success {
    --gradient-direction: 180deg;
    background-image: linear-gradient(
      var(--gradient-direction),
      var(--colour-success-theme) 0,
      transparent 100%
    ) !important;
  }

  .gradient-primary {
    --gradient-direction: 180deg;
    background-image: linear-gradient(
      var(--gradient-direction),
      var(--colour-primary-theme) 0,
      transparent 100%
    ) !important;
  }

  .gradient-info {
    --gradient-direction: 180deg;
    background-image: linear-gradient(
      var(--gradient-direction),
      var(--colour-info-theme) 0,
      transparent 100%
    ) !important;
  }

  .gradient-direction-left {
    --gradient-direction: 90deg;
  }

  .gradient-direction-angle {
    --gradient-direction: 135deg;
  }
}
        `;
      case 'pointer-events':
        return `
@mixin pointer-events() {
  .pe-none {
    pointer-events: none !important;
  }

  .pe-auto {
    pointer-events: auto !important;
  }
}
        `;
      case 'rounded':
        return `
@mixin rounded() {
  .rounded {
    border-radius: var(--border-radius) !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .rounded-1 {
    border-radius: var(--border-radius-sm) !important;
  }

  .rounded-2 {
    border-radius: var(--border-radius) !important;
  }

  .rounded-3 {
    border-radius: var(--border-radius-lg) !important;
  }

  .rounded-4 {
    border-radius: var(--border-radius-xl) !important;
  }

  .rounded-5 {
    border-radius: var(--border-radius-2xl) !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-pill {
    border-radius: var(--border-radius-pill) !important;
  }

  .rounded-top {
    border-top-left-radius: var(--border-radius) !important;
    border-top-right-radius: var(--border-radius) !important;
  }

  .rounded-end {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
  }

  .rounded-start {
    border-bottom-left-radius: var(--border-radius) !important;
    border-top-left-radius: var(--border-radius) !important;
  }
}
        `;
      case 'visible':
        return `
@mixin visible() {
  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }
}
        `;
      default:
        return `...`;
    }
  };
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

    <Tabs>
      <details>
        <summary><h2>Bootstrap</h2></summary>

        <p>
          Our original Utility classes are based upon and use the
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
        <p>
          Using mixins to create the utility classes allows for the classes to be added to the web components easily.
        </p>
        <template v-for="(value, name) in utMixins" :key="name" class="pb-4">
          <h2 class="h5 pb-1">
            {{ name }}
          </h2>
          <p class="pb-3">{{ value }}</p>
          <pre class="mb-5 pb-o"><code>@include {{ name }}();</code><code v-if="getMixin(name).trim() != '...'">
{{ getMixin(name).trim() }}</code></pre>
        </template>
      </details>

      <details>
        <summary><h2>Tailwind</h2></summary>
        <p>
          Tailwind can be used for smaller sites that use a framework like nuxt or next. But it will need to be
          configured carefully and parts of the library like their grid system is not recommended.
        </p>
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

  pre {
    max-height: 20rem;
  }
</style>
