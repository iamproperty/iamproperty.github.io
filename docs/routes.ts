// @ts-nocheck
const routes = [
  { name: 'Home', path: '/', component: () => import('./views/Home.vue') },
  {
    name: 'Principles',
    path: '/principles',
    component: () => import('./views/Principles.vue'),
    meta: { title: 'Principles | iamkey' },
    searchterms: 'relative units, variables, progressively enhance',
  },
  {
    name: 'Search',
    path: '/search',
    component: () => import('./views/Search.vue'),
    meta: { title: 'Search | iamkey' },
  },
  {
    /* Foundations */ path: '/foundations',
    component: () => import(/* webpackChunkName: "foundations" */ './views/Foundations.vue'),
    children: [
      {
        path: '',
        name: 'Foundations',
        meta: {
          title: 'Foundations | iamkey',
        },
        component: () => import('./views/foundations/Index.vue'),
      },
      {
        path: 'accessibility',
        name: 'Accessibility (Beta)',
        meta: {
          title: 'Accessibility | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Accessibility.vue'),
        searchterms: 'wave, lighthouse',
      },
      {
        path: 'colours',
        name: 'Colours',
        meta: {
          title: 'Colours | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Colours.vue'),
        searchterms: 'light mode, dark mode, background, palette, slate, gradient, high contrast',
      },
      {
        path: 'spacing',
        name: 'Spacing and Layout',
        meta: {
          title: 'Spacing and Layout | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Spacing.vue'),
        searchterms:
          'grid, baseline, line heights, vertical rhythm, root, vertical, margin, padding, breakpoints, scaling',
      },
      {
        path: 'grid',
        name: 'Grid',
        meta: {
          title: 'Grid | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Grid.vue'),
        searchterms:
          'grid, baseline, line heights, vertical rhythm, root, vertical, margin, padding, breakpoints, scaling',
      },
      {
        path: 'greakpoints',
        name: 'Breakpoints',
        meta: {
          title: 'Breakpoints and scaling | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Breakpoints.vue'),
        searchterms:
          'grid, baseline, line heights, vertical rhythm, root, vertical, margin, padding, breakpoints, scaling',
      },
      {
        path: 'utilities',
        name: 'Utility Classes',
        meta: {
          title: 'Utility Classes | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Utilities.vue'),
      },
      {
        path: 'z-index',
        name: 'Z-index (Beta)',
        meta: {
          title: 'Z-index | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Zindex.vue'),
        searchterms: 'below, base, focus, above, floating, menu, overlay',
      },
      {
        path: 'animation',
        name: 'Animation (Beta)',
        meta: {
          title: 'Animation | Foundations | iamkey',
        },
        component: () => import('./views/foundations/Animation.vue'),
      },
      {
        path: 'dynamic-events',
        name: 'Dynamic Events (Beta)',
        meta: {
          title: 'Dynamic Events | Foundations | iamkey',
        },
        component: () => import('./views/foundations/DynamicEvents.vue'),
      },
    ],
  },
  {
    /* Elements */ path: '/elements',
    component: () => import(/* webpackChunkName: "elements" */ './views/Elements.vue'),
    children: [
      {
        path: '',
        name: 'Elements',
        meta: {
          title: 'Elements | iamkey',
        },
        component: () => import('./views/elements/Index.vue'),
      },
      {
        path: 'logos',
        name: 'Logos (Beta)',
        meta: {
          title: 'Logos | Elements | iamkey',
        },
        component: () => import('./views/elements/Logos.vue'),
        searchterms: 'brand, identity',
      },
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          title: 'Icons | Foundations | iamkey',
        },
        component: () => import('./views/elements/Icons.vue'),
        searchterms: 'svg, status, font awesome',
      },
      {
        path: 'media',
        name: 'Media (Beta)',
        meta: {
          title: 'Media | Elements | iamkey',
        },
        component: () => import('./views/elements/Media.vue'),
        searchterms: 'youtube',
      },
      {
        path: 'illustrations',
        name: 'Illustrations',
        meta: {
          title: 'Illustrations | Elements | iamkey',
        },
        component: () => import('./views/elements/Illustrations.vue'),
        searchterms: 'svg, presentation',
      },
      {
        path: 'type',
        name: 'Typography',
        meta: {
          title: 'Typography | Elements | iamkey',
        },
        component: () => import('./views/elements/Type.vue'),
        searchterms: 'headings, body, lead, small, blockquote, stat',
      },
      {
        path: 'lists',
        name: 'Lists (Beta)',
        meta: {
          title: 'Lists | Elements | iamkey',
        },
        component: () => import('./views/elements/Lists.vue'),
        searchterms: 'unordered, ordered, tick, breadcrumb',
      },
      {
        path: 'badges',
        name: 'Badges (Beta)',
        meta: {
          title: 'Badges (Beta) | Elements | iamkey',
        },
        component: () => import('./views/elements/BadgesDoc.vue'),
      },
      {
        path: 'tags',
        name: 'Tags',
        meta: {
          title: 'Tags | Elements | iamkey',
        },
        component: () => import('./views/elements/TagsDoc.vue'),
      },
      {
        path: 'progress',
        name: 'Progress (BETA)',
        meta: {
          title: 'Progress | Elements | iamkey',
        },
        component: () => import('./views/elements/ProgressDoc.vue'),
        searchterms: 'percentage',
      },
      {
        path: 'container',
        name: 'Container (Beta)',
        meta: {
          title: 'Container | Elemenets | iamkey',
        },
        component: () => import('./views/elements/Container.vue'),
        searchterms: 'fundamental, backgrounds, curve',
      },
      {
        path: 'panel',
        name: 'Admin panel',
        meta: {
          title: 'Admin panel | Elements | iamkey',
        },
        component: () => import('./views/elements/PanelDoc.vue'),
        searchterms: 'admin, tabs',
      },
      {
        path: 'tables',
        name: 'Table Element',
        meta: {
          title: 'Tables | Elements | iamkey',
        },
        component: () => import('./views/elements/Tables.vue'),
        searchterms: 'rows, columns',
      },
      {
        path: 'details',
        name: 'Details (BETA)',
        meta: {
          title: 'Details | Elements | iamkey',
        },
        component: () => import('./views/elements/Details.vue'),
        searchterms: 'details, accordion, summary',
      },
    ],
  },
  {
    path: '/links',
    name: 'links',
    meta: {
      title: 'Elements | iamkey',
    },
    component: () => import('./views/Elements.vue'),
    children: [
      {
        path: 'text-links',
        name: 'Text Links',
        meta: {
          title: 'Links | Elements | iamkey',
        },
        component: () => import('./views/links/Links.vue'),
        searchterms: 'anchor, prompt, secondary button, primary button, compact',
      },
      {
        path: 'buttons',
        name: 'Buttons',
        meta: {
          title: 'Buttons | Elements | iamkey',
        },
        component: () => import('./views/links/Buttons.vue'),
        searchterms: 'anchor, prompt, secondary button, primary button, compact',
      },
      {
        path: 'action-buttons',
        name: 'Action buttons',
        meta: {
          title: 'Action buttons | Elements | iamkey',
        },
        component: () => import('./views/links/ActionButtons.vue'),
        searchterms: 'anchor, prompt, secondary button, primary button, compact',
      },
      {
        path: 'compact-buttons',
        name: 'Compact buttons',
        meta: {
          title: 'Compact buttons | Elements | iamkey',
        },
        component: () => import('./views/links/CompactButtons.vue'),
        searchterms: 'anchor, prompt, secondary button, primary button, compact',
      },
    ],
  },
  {
    /* Form */ path: '/form',
    name: 'Form',
    meta: {
      title: 'Elements | iamkey',
    },
    component: () => import('./views/Elements.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/elements/Index.vue'),
      },
      {
        path: 'inputs',
        name: 'Form input fields',
        meta: {
          title: 'Form input fields | Elements | iamkey',
        },
        component: () => import('./views/form/FormInputDoc.vue'),
        searchterms: 'label, disabled, prefix, suffix, readonly, masks, helper',
      },
      {
        path: 'select',
        name: 'Selects',
        meta: {
          title: 'Form select field | Elements | iamkey',
        },
        component: () => import('./views/form/Select.vue'),
      },
      {
        path: 'checkbox',
        name: 'Form checkboxes',
        meta: {
          title: 'Checkbox field | Elements | iamkey',
        },
        component: () => import('./views/form/Checkbox.vue'),
      },
      {
        path: 'radio',
        name: 'Form Radio fields',
        meta: {
          title: 'Form Radio fields | Elements | iamkey',
        },
        component: () => import('./views/form/RadioDoc.vue'),
        searchterms: 'selected, card, select, reveal',
      },
      {
        path: 'date',
        name: 'Form date and time pickers (Beta)',
        meta: {
          title: 'Form date and time pickers | Elements | iamkey',
        },
        component: () => import('./views/form/Date.vue'),
      },
      {
        path: 'range',
        name: 'Form range fields',
        meta: {
          title: 'Form range fields | Elements | iamkey',
        },
        component: () => import('./views/form/Range.vue'),
      },
      {
        path: 'toggle',
        name: 'Form Toggle buttons (Beta)',
        meta: {
          title: 'Toggle buttons | Elements | iamkey',
        },
        component: () => import('./views/form/Toggle.vue'),
      },
      {
        path: 'file',
        name: 'Form file upload fields (BETA)',
        meta: {
          title: 'Form file upload field | Elements | iamkey',
        },
        component: () => import('./views/form/File.vue'),
      },
      {
        path: 'validation',
        name: 'Form validation',
        meta: {
          title: 'Form validation | Elements | iamkey',
        },
        component: () => import('./views/form/FormValidationDoc.vue'),
        searchterms: 'error, success, message',
      },
    ],
  },
  {
    /* Dialogs */ path: '/dialogs',
    name: 'Dialogs',
    meta: {
      title: 'Elements | iamkey',
    },
    component: () => import('./views/Elements.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/elements/Index.vue'),
      },
      {
        path: 'dialog',
        name: 'Dialog',
        meta: {
          title: 'Dialog | Elements | iamkey',
        },
        component: () => import('./views/dialogs/DialogDoc.vue'),
        searchterms:
          'focused, direct, helpful, response, notify, passive, transactional, acknowledgement, multi-step, inline notification, snackbar, banner, dismissal',
      },
      {
        path: 'modal',
        name: 'Dialog (Modal)',
        meta: {
          title: 'Dialog (Modal) | Elements | iamkey',
        },
        component: () => import('./views/dialogs/ModalDoc.vue'),
        searchterms:
          'focused, direct, helpful, response, notify, passive, transactional, acknowledgement, multi-step, dismissal',
      },
      {
        path: 'nonmodal',
        name: 'Dialog (Non-Modal)',
        meta: {
          title: 'Dialog (Non-Modal) | Elements | iamkey',
        },
        component: () => import('./views/dialogs/NonModalDoc.vue'),
        searchterms: 'passive, transactional, acknowledgement, popover',
      },
      {
        path: 'popover',
        name: 'Dialog (Popover)',
        meta: {
          title: 'Dialog (Popover) | Elements | iamkey',
        },
        component: () => import('./views/dialogs/PopoverDoc.vue'),
        searchterms: 'passive, transactional, acknowledgement, popover, no top, pointer, tooltip',
      },
    ],
  },
  {
    /* Components */ path: '/components',
    name: 'Components',
    meta: {
      title: 'Components | iamkey',
    },
    component: () => import('./views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue'),
      },
      {
        path: 'accordion',
        name: 'Accordion (Beta)',
        meta: {
          title: 'Accordion | Components | iamkey',
        },
        component: () => import('./views/components/AccordionDoc.vue'),
        searchterms: 'expanded, list',
      },
      {
        path: 'actionbar',
        name: 'Action bar',
        meta: {
          title: 'Action bar | Components | iamkey',
        },
        component: () => import('./views/components/ActionbarDoc.vue'),
        searchterms: 'options, actions, edit, tinymce, editor',
      },
      {
        path: 'addresslookup',
        name: 'Address Lookup (Beta)',
        meta: {
          title: 'Address Lookup | Components | iamkey',
        },
        component: () => import('./views/components/AddressLookupDoc.vue'),
        searchterms: 'postcode',
      },
      {
        path: 'applied-filters',
        name: 'Applied Filters (Beta)',
        meta: {
          title: 'Applied Filters | Components | iamkey',
        },
        component: () => import('./views/components/AppliedFiltersDoc.vue'),
      },
      {
        path: 'bento-grid',
        name: 'Bento grid (Beta)',
        meta: {
          title: 'Bento grid | Components | iamkey',
        },
        component: () => import('./views/components/BentoGridDoc.vue'),
      },
      {
        path: 'carousel',
        name: 'Carousel',
        meta: {
          title: 'Carousel | Components | iamkey',
        },
        component: () => import('./views/components/CarouselDoc.vue'),
        searchterms: 'slideshow',
      },
      {
        path: 'charts',
        name: 'Charts (Depreciated)',
        meta: {
          title: 'Charts | Components | iamkey',
        },
        component: () => import('./views/components/ChartsDoc.vue'),
      },
      {
        path: 'filterlist',
        name: 'Filter list (Beta)',
        meta: {
          title: 'Filter list | Components | iamkey',
        },
        component: () => import('./views/components/FilterlistDoc.vue'),
        searchterms: 'reduce, search',
      },
      {
        path: 'file',
        name: 'File upload component',
        meta: {
          title: 'File upload component | Components | iamkey',
        },
        component: () => import('./views/components/File.vue'),
      },
      {
        path: 'header',
        name: 'Header (Beta)',
        meta: {
          title: 'Header | Components | iamkey',
        },
        component: () => import('./views/components/Header.vue'),
        searchterms: 'introduce, banner',
      },
      {
        path: 'inline-edit',
        name: 'Inline edit',
        meta: {
          title: 'Inline edit | Components | iamkey',
        },
        component: () => import('./views/components/InlineEdit.vue'),
        searchterms: 'form, input, inline',
      },
      {
        path: 'menu',
        name: 'Menu (Beta)',
        meta: {
          title: 'Menu | Components | iamkey',
          beta: true,
          standalone: true,
        },
        component: () => import('./views/components/MenuDoc.vue'),
      },
      {
        path: 'multistep',
        name: 'Multi-Step form',
        meta: {
          title: 'Multi-step form | Components | iamkey',
        },
        component: () => import('./views/components/MultiStep.vue'),
      },
      {
        path: 'multiselect',
        name: 'Multiselect',
        meta: {
          title: 'Multiselect | Components | iamkey',
        },
        component: () => import('./views/components/Multiselect.vue'),
      },
      {
        path: 'notefeed',
        name: 'Note feed (Beta)',
        meta: {
          title: 'Note feed | Components | iamkey',
        },
        component: () => import('./views/components/NoteFeedDoc.vue'),
      },
      {
        path: 'rank',
        name: 'Rank',
        meta: {
          title: 'Rank | Components | iamkey',
        },
        component: () => import('./views/components/RankDoc.vue'),
        searchterms: 'rank, ranking, score',
      },
      {
        path: 'pagination',
        name: 'Pagination',
        meta: {
          title: 'Pagination | Components | iamkey',
        },
        component: () => import('./views/components/PaginationDoc.vue'),
        searchterms: 'navigation',
      },
      {
        path: 'snapshot',
        name: 'Snapshot (Deprecation warning)',
        meta: {
          title: 'Snapshot | Components | iamkey',
        },
        component: () => import('./views/components/SnapshotDoc.vue'),
      },
      {
        path: 'search',
        name: 'Search component',
        meta: {
          title: 'Search | Components | iamkey',
        },
        component: () => import('./views/components/SearchDoc.vue'),
      },
      {
        path: 'stepper',
        name: 'Stepper (Deprecation warning)',
        meta: {
          title: 'Stepper | Components | iamkey',
        },
        component: () => import('./views/components/StepperDoc.vue'),
      },
      {
        path: 'slider',
        name: 'Slider',
        meta: {
          title: 'Slider | Components | iamkey',
        },
        component: () => import('./views/components/SliderDoc.vue'),
      },
      {
        path: 'tables',
        name: 'Tables',
        meta: {
          title: 'Tables | Components | iamkey',
        },
        component: () => import('./views/components/Tables.vue'),
        searchterms: 'expandable, scrollable, rows, columns',
      },
      {
        path: 'tabs',
        name: 'Tabs',
        meta: {
          title: 'Tabs | Components | iamkey',
        },
        component: () => import('./views/components/TabsDoc.vue'),
        searchterms: 'admin panel, ',
      },
      {
        path: 'testimonial',
        name: 'Testimonial (Beta)',
        meta: {
          title: 'Testimonial | Components | iamkey',
        },
        component: () => import('./views/components/TestimonialDoc.vue'),
      },
    ],
  },
  {
    /* Nav */ path: '/nav',
    name: 'Nav',
    meta: {
      title: 'Components | iamkey',
    },
    component: () => import('./views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue'),
      },
      {
        path: 'nav',
        name: 'Navbar',
        meta: {
          title: 'Navbar | Components | iamkey',
        },
        component: () => import('./views/nav/NavDoc.vue'),
      },
      {
        path: 'nav-secondary',
        name: 'Navbar-secondary',
        meta: {
          title: 'Navbar-secondary | Components | iamkey',
        },
        component: () => import('./views/nav/NavSecondaryDoc.vue'),
      },
      {
        path: 'nav-mega',
        name: 'Navbar-mega menu',
        meta: {
          title: 'Navbar-mega menu | Components | iamkey',
        },
        component: () => import('./views/nav/NavMegaDoc.vue'),
      },
      {
        path: 'nav-dual',
        name: 'Navbar-dual',
        meta: {
          title: 'Navbar-dual menu | Components | iamkey',
        },
        component: () => import('./views/nav/NavDualDoc.vue'),
      },
      {
        path: 'nav-menu',
        name: 'Navbar-menu',
        meta: {
          title: 'Navbar-menu menu | Components | iamkey',
        },
        component: () => import('./views/nav/NavMenuDoc.vue'),
      },
      {
        path: 'collapsible-side-menu',
        name: 'Collapsible Side Menu',
        meta: {
          title: 'Collapsible Side Menu | Components | iamkey',
        },
        component: () => import('./views/nav/CollapsibleSideMenu.vue'),
        searchterms: 'nav,hidden,expand,menu,admin,settings,sub',
      },
    ],
  },
  {
    /* Cards */ path: '/cards',
    name: 'Cards',
    meta: {
      title: 'Cards | iamkey',
    },
    component: () => import('./views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue'),
      },
      {
        path: 'card',
        name: 'Navigational Card',
        meta: {
          title: 'Navigational Card | Components | iamkey',
        },
        component: () => import('./views/cards/CardDoc.vue'),
      },
      {
        path: 'filter-card',
        name: 'Filter card',
        meta: {
          title: 'Filter card | Components | iamkey',
        },
        component: () => import('./views/cards/FilterCardDoc.vue'),
      },
      {
        path: 'record-card',
        name: 'Record card',
        meta: {
          title: 'Record card | Components | iamkey',
        },
        component: () => import('./views/cards/RecordCardDoc.vue'),
      },
      {
        path: 'video-card',
        name: 'Video card',
        meta: {
          title: 'Video card | Components | iamkey',
        },
        component: () => import('./views/cards/VideoCardDoc.vue'),
      },
    ],
  },
  {
    /* Charts */ path: '/charts',
    name: 'Charts',
    meta: {
      title: 'Charts | iamkey',
    },
    component: () => import('./views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue'),
      },
      {
        path: 'barchart',
        name: 'Bar chart',
        meta: {
          title: 'Bar chart | Components | iamkey',
        },
        component: () => import('./views/charts/BarChart.vue'),
      },
      {
        path: 'doughnutchart',
        name: 'Doughnut chart',
        meta: {
          title: 'Doughnut chart | Components | iamkey',
        },
        component: () => import('./views/charts/DoughnutChart.vue'),
      },
    ],
  },
  {
    /* Notifications */ path: '/notifications',
    name: 'Notifications',
    meta: {
      title: 'Components | iamkey',
    },
    component: () => import('./views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue'),
      },
      {
        path: 'system-notifications',
        name: 'System notifications',
        meta: {
          title: 'System notifications | Components | iamkey',
        },
        component: () => import('./views/notifications/SystemNotificationsDoc.vue'),
        searchterms:
          'high urgency, meduim urgency, low urgency, notify, message, toasts, inline notification, alert, transactional modal, acknowledgment, status',
      },
      {
        path: 'alert',
        name: 'System notifications (Alert)',
        meta: {
          title: 'System notifications (Alert) | Components | iamkey',
        },
        component: () => import('./views/notifications/AlertDoc.vue'),
        searchterms: 'high urgency, warning, promotional, calls to action, time-sensitive, critical',
      },
      {
        path: 'toasts',
        name: 'System notifications (Toasts)',
        meta: {
          title: 'System notifications (Toasts) | Components | iamkey',
        },
        component: () => import('./views/notifications/ToastsDoc.vue'),
        searchterms: 'low urgency, confirmation, message, temporary',
      },
      {
        path: 'inline-notification',
        name: 'System notifications (Inline)',
        meta: {
          title: 'System notifications (Inline) | Components | iamkey',
        },
        component: () => import('./views/notifications/InlineDoc.vue'),
        searchterms: 'high urgency, error, form',
      },
    ],
  },
  {
    /* Templates */ path: '/templates',
    name: 'Templates',
    meta: {
      title: 'Templates | iamkey',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "templates" */ './views/Templates.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/templates/Index.vue'),
      },
      {
        path: 'form',
        name: 'Form page Template (Beta)',
        meta: {
          title: 'Email Template | Components | iamkey',
        },
        component: () => import('./views/templates/FormDoc.vue'),
      },
      {
        path: 'auth',
        name: 'Auth page Template (Beta)',
        meta: {
          title: 'Auth Template | Components | iamkey',
        },
        component: () => import('./views/templates/AuthDoc.vue'),
      },
      {
        path: 'email',
        name: 'Email Template',
        meta: {
          title: 'Email Template | Components | iamkey',
        },
        component: () => import('./views/templates/EmailDoc.vue'),
      },
      {
        path: 'print',
        name: 'Print Template',
        meta: {
          title: 'Print Template | Components | iamkey',
        },
        component: () => import('./views/templates/PrintDoc.vue'),
      },
      {
        path: 'error-pages',
        name: 'Error page templates',
        meta: {
          title: 'Error page templates | Template | iamkey',
        },
        component: () => import('./views/templates/ErrorDoc.vue'),
      },
    ],
  },
  {
    path: '/best-practice',
    name: 'Best practice',
    meta: {
      title: 'Best practice | Components | iamkey',
    },
    component: () => import('./views/BestPracticeDoc.vue'),
  },
  {
    /* Information */ path: '/information',
    component: () => import('./views/Information.vue'),
    name: 'Information',
    meta: {
      title: 'Information | iamkey',
    },
    searchterms: 'guidance, XD library, framework, bootstrap, library, integration',
  },
  {
    path: '/get-started',
    component: () => import('./views/GetStarted.vue'),
    name: 'Get started',
    meta: {
      title: 'Get started | iamkey',
    },
    searchterms:
      'npm, install, assets, static, sass, modules, vue, branch, commands, contributing, code, web server, develoment, unit tests, regression tests, workflow',
  },
  {
    path: '/audit-results',
    component: () => import('./views/Audit.vue'),
    name: 'Audit',
    meta: {
      title: 'Audit | iamkey',
    },
    searchterms: 'Audit, npm, build, pr, Pull request',
  },
  {
    /* Examples */ path: '/examples',
    name: 'Examples',
    meta: {
      title: 'Examples | iamkey',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "examples" */ './views/Examples.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/examples/Index.vue'),
      },
      {
        path: 'basic-table',
        component: () => import('./views/examples/BasicTable.vue'),
      },
      {
        path: 'no-submit-table',
        component: () => import('./views/examples/NoSubmitTableDoc.vue'),
      },
      {
        path: 'submit-table',
        component: () => import('./views/examples/SubmitTableDoc.vue'),
      },
      {
        path: 'ajax-table',
        component: () => import('./views/examples/AjaxTableDoc.vue'),
      },
      {
        path: 'actionbar-table',
        component: () => import('./views/examples/ActionbarTable.vue'),
      },
      {
        path: 'actionbar-panel',
        component: () => import('./views/examples/ActionbarPanel.vue'),
      },
      {
        path: 'actionbar-top',
        component: () => import('./views/examples/ActionbarTop.vue'),
      },
      {
        path: 'pagination',
        component: () => import('./views/examples/Pagination.vue'),
      },
      {
        path: 'barcharts',
        component: () => import('./views/examples/BarCharts.vue'),
      },
      {
        path: 'news-promo-cards',
        component: () => import('./views/examples/NewsPromoCards.vue'),
      },
      {
        path: 'logo-carousel',
        component: () => import('./views/examples/LogoCarousel.vue'),
      },
      {
        path: 'stats-carousel',
        component: () => import('./views/examples/StatCarousel.vue'),
      },
    ],
  },
  {
    /* Standalone */ path: '/standalone',
    name: 'Standalone',
    meta: {
      title: 'Standalone | iamkey',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "examples" */ './views/Standalone.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/standalone/Index.vue'),
      },
      {
        path: 'navbar',
        name: 'navbar example',
        meta: {
          title: 'Navbar example| iamkey',
        },
        component: () => import('./views/standalone/Navbar.vue'),
      },
      {
        path: 'navbar-secondary',
        name: 'navbar Secondary example',
        meta: {
          title: 'Navbar Secondary example| iamkey',
        },
        component: () => import('./views/standalone/NavbarSecondary.vue'),
      },
      {
        path: 'navbar-mega',
        name: 'navbar Megamenu example',
        meta: {
          title: 'Navbar Megamenu example| iamkey',
        },
        component: () => import('./views/standalone/NavbarMega.vue'),
      },
      {
        path: 'navbar-dual',
        name: 'navbar Dual example',
        meta: {
          title: 'Navbar Dual example| iamkey',
        },
        component: () => import('./views/standalone/NavbarDual.vue'),
      },
      {
        path: 'navbar-menu',
        name: 'navbar Menu example',
        meta: {
          title: 'Navbar Menu example| iamkey',
        },
        component: () => import('./views/standalone/NavbarMenu.vue'),
      },
      {
        path: 'iamsold-homepage',
        name: 'iam sold homepage',
        meta: {
          title: 'iam sold | iamkey',
        },
        component: () => import('./views/standalone/IamsoldHomepage.vue'),
        searchterms: 'iamsold, iam sold',
      },
      {
        path: 'iamsold-admin',
        name: 'iam sold admin',
        meta: {
          title: 'iam sold | iamkey',
        },
        component: () => import('./views/standalone/IamsoldAdmin.vue'),
        searchterms: 'iamsold, iam sold',
      },
      {
        path: 'marketplace',
        name: 'Marketplace',
        meta: {
          title: 'Marketplace | IAM Key',
        },
        component: () => import('./views/standalone/Marketplace.vue'),
        searchterms: 'iamproperty',
      },
      {
        path: 'movebutler',
        name: 'Movebutler',
        meta: {
          title: 'Movebutler | IAM Key',
        },
        component: () => import('./views/standalone/Movebutler.vue'),
      },
      {
        path: 'agent',
        name: 'Agent Platform',
        meta: {
          title: 'Agent Platform | IAM Key',
        },
        component: () => import('./views/standalone/Agent.vue'),
      },
      {
        path: 'print',
        name: 'Print',
        meta: {
          title: 'Print | iamkey',
        },
        component: () => import('./views/standalone/PrintExample.vue'),
      },
      {
        path: 'print-single',
        name: 'Single page Print',
        meta: {
          title: 'Single page Print | iamkey',
        },
        component: () => import('./views/standalone/PrintExampleSingle.vue'),
      },
      {
        path: 'agent-dashboard',
        name: 'Agent dashboard',
        meta: {
          title: 'Agent dashboard | iamkey',
        },
        component: () => import('./views/standalone/AgentDashboard.vue'),
        searchterms: 'movebutler',
      },
      {
        path: 'openview',
        name: 'Openview homepage',
        meta: {
          title: 'Openview homepage | iamkey',
        },
        component: () => import('./views/standalone/Openview.vue'),
      },
      {
        path: 'compliance-dashboard',
        name: 'Compliance dashboard',
        meta: {
          title: 'Compliance dashboard | iamkey',
        },
        component: () => import('./views/standalone/ComplianceDashboard.vue'),
        searchterms: 'iamsold, iam sold',
      },
      {
        path: 'collapsible-side-menu',
        name: 'Collapsible Side Menu example',
        meta: {
          title: 'Collapsible Side Menu example| iamkey',
        },
        component: () => import('./views/standalone/CollapsibleSideMenu.vue'),
      },
      {
        path: 'crm-mb',
        name: 'CRM - MB',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Index.vue'),
      },
      {
        path: 'crm-mb/page2',
        name: 'CRM - MB 2',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Page2.vue'),
      },
      {
        path: 'crm-mb/page3',
        name: 'CRM - MB 3',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Page3.vue'),
      },
      {
        path: 'crm-mb/page4',
        name: 'CRM - MB 4',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Page4.vue'),
      },
      {
        path: 'crm-mb/page5',
        name: 'CRM - MB 5',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Page5.vue'),
      },
      {
        path: 'crm-mb/page6',
        name: 'CRM - MB 6',
        meta: {
          title: 'CRM to MB example | iamkey',
        },
        component: () => import('./views/standalone/crm-mb/Page6.vue'),
      },
      {
        path: 'crm-ias',
        name: 'CRM - IAS',
        meta: {
          title: 'CRM to IAS example | iamkey',
        },
        component: () => import('./views/standalone/crm-ias/Index.vue'),
      },
      {
        path: 'crm-ias/page2',
        name: 'CRM - IAS 2',
        meta: {
          title: 'CRM to IAS example | iamkey',
        },
        component: () => import('./views/standalone/crm-ias/Page2.vue'),
      },
      {
        path: 'iamproperty',
        name: 'iamproperty dashboard',
        meta: {
          title: 'iamproperty dashboard | iamkey',
        },
        component: () => import('./views/standalone/Iamproperty.vue'),
      },
      {
        path: 'signin',
        name: 'Sign in',
        meta: {
          title: 'Sign in | iamkey',
        },
        component: () => import('./views/standalone/Signin.vue'),
      },
      {
        path: 'informationRequests',
        name: 'Information requests table',
        meta: {
          title: 'Information requests table | iamkey',
        },
        component: () => import('./views/standalone/InformationRequests.vue'),
      },
      {
        path: 'inspections',
        name: 'Inspections',
        meta: {
          title: 'Inspections | iamkey',
        },
        component: () => import('./views/standalone/Inspections.vue'),
      },
      {
        path: 'competitor-analysis',
        name: 'Competitor analysis',
        meta: {
          title: 'Competitor analysis | iamkey',
        },
        component: () => import('./views/standalone/competitor-analysis.vue'),
      },
    ],
  },
  {
    /* Prototype */ path: '/prototype',
    name: 'Prototype',
    meta: {
      title: 'Prototypes | iamkey',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "prototypes" */ './views/Prototype.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/prototype/Index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/PageNotFound.vue'),
  },
];

export default routes;
