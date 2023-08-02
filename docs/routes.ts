// @ts-nocheck
const routes = [
  { name: 'Home', path: '/', component: () => import('./views/Home.vue') },
  { name: 'Principles', path: '/principles', component: () => import('./views/Principles.vue'), meta: { title: 'Principles | iamkey' }, searchterms: 'relative units, variables, progressively enhance' },
  { name: 'Search', path: '/search', component: () => import('./views/Search.vue'), meta: { title: 'Search | iamkey' } },
  { /* Foundations */
    path: '/foundations',
    component: () => import(/* webpackChunkName: "foundations" */ './views/Foundations.vue'),
    children: [
      {
        path: '',
        name: 'Foundations',
        meta: {
          title: 'Foundations | iamkey'
        },
        component: () => import('./views/foundations/Index.vue')
      },
      {
        path: 'accessibility',
        name: 'Accessibility (Beta)',
        meta: {
          title: 'Accessibility | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Accessibility.vue'),
        searchterms: 'wave, lighthouse'
      },
      {
        path: 'logos',
        name: 'Logos (Beta)',
        meta: {
          title: 'Logos | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Logos.vue'),
        searchterms: 'brand, identity'
      },
      {
        path: 'colours',
        name: 'Colours',
        meta: {
          title: 'Colours | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Colours.vue'),
        searchterms: 'light mode, dark mode, background, palette, slate, gradient, high contrast'
      },
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          title: 'Icons | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Icons.vue'),
        searchterms: 'svg, status, font awesome'
      },
      {
        path: 'type',
        name: 'Typography',
        meta: {
          title: 'Typography | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Type.vue'),
        searchterms: 'headings, body, lead, small, blockquote, stat'
      },
      {
        path: 'illustrations',
        name: 'Illustrations (Beta)',
        meta: {
          title: 'Illustrations | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Illustrations.vue'),
        searchterms: 'svg, presentation'
      },
      {
        path: 'circles',
        name: 'Circles (Beta)',
        meta: {
          title: 'Circles | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Circles.vue')
      },
      {
        path: 'media',
        name: 'Media (Beta)',
        meta: {
          title: 'Media | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Media.vue'),
        searchterms: 'youtube'
      },
      {
        path: 'spacing',
        name: 'Spacing and Layout',
        meta: {
          title: 'Spacing and Layout | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Spacing.vue'),
        searchterms: 'grid, baseline, line heights, vertical rhythm, root, vertical, margin, padding, breakpoints, scaling'
      },
      {
        path: 'utilities',
        name: 'Utility Classes (Beta)',
        meta: {
          title: 'Utility Classes | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Utilities.vue')
      },
      {
        path: 'z-index',
        name: 'Z-index (Beta)',
        meta: {
          title: 'Z-index | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Zindex.vue'),
        searchterms: 'below, base, focus, above, floating, menu, overlay'
      },
      {
        path: 'animation',
        name: 'Animation (Beta)',
        meta: {
          title: 'Animation | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Animation.vue')
      }
    ]
  },
  { /* Components */
    path: '/components',
    name: 'Components',
    meta: {
      title: 'Components | iamkey'
    },
    component: () => import( './views/Components.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/components/Index.vue')
      },
      {
        path: 'panel',
        name: 'Admin panel',
        meta: {
          title: 'Admin panel | Components | iamkey'
        },
        component: () => import('./views/components/PanelDoc.vue'),
        searchterms: 'admin, tabs'
      },
      {
        path: 'accordion',
        name: 'Accordion (Beta)',
        meta: {
          title: 'Accordion | Components | iamkey'
        },
        component: () => import('./views/components/AccordionDoc.vue'),
        searchterms: 'expanded, list'
      },
      {
        path: 'applied-filters',
        name: 'Applied Filters (Beta)',
        meta: {
          title: 'Applied Filters | Components | iamkey'
        },
        component: () => import('./views/components/AppliedFiltersDoc.vue')
      },
      {
        path: 'banner',
        name: 'Banner (Beta)',
        meta: {
          title: 'Banner | Components | iamkey'
        },
        component: () => import('./views/components/BannerDoc.vue'),
        searchterms: 'promote'
      },
      {
        path: 'buttons',
        name: 'Buttons & links',
        meta: {
          title: 'Buttons & links | Elements | iamkey'
        },
        component: () => import('./views/components/Buttons.vue'),
        searchterms: 'anchor, prompt, secondary button, primary button, compact'
      },
      {
        path: 'card',
        name: 'Card',
        meta: {
          title: 'Card | Components | iamkey'
        },
        component: () => import('./views/components/CardDoc.vue'),
        searchterms: 'navigational, filter, status, numerical'
      },
      {
        path: 'carousel',
        name: 'Carousel (Beta)',
        meta: {
          title: 'Carousel | Components | iamkey'
        },
        component: () => import('./views/components/CarouselDoc.vue'),
        searchterms: 'slideshow'
      },
      {
        path: 'charts',
        name: 'Charts (Beta)',
        meta: {
          title: 'Charts | Components | iamkey'
        },
        component: () => import('./views/components/ChartsDoc.vue')
      },
      {
        path: 'container',
        name: 'Container (Beta)',
        meta: {
          title: 'Container | Elements | iamkey'
        },
        component: () => import('./views/components/Container.vue'),
        searchterms: 'fundamental, backgrounds, curve'
      },
      {
        path: 'dialog',
        name: 'Dialog',
        meta: {
          title: 'Dialog | Components | iamkey'
        },
        component: () => import('./views/components/DialogDoc.vue'),
        searchterms: 'focused, direct, helpful, response, notify, passive, transactional, acknowledgement, multi-step, inline notification, snackbar, banner, dismissal'
      },
      {
        path: 'modal',
        name: 'Dialog (Modal)',
        meta: {
          title: 'Dialog (Modal) | Components | iamkey'
        },
        component: () => import('./views/components/ModalDoc.vue'),
        searchterms: 'focused, direct, helpful, response, notify, passive, transactional, acknowledgement, multi-step, dismissal'
      },
      {
        path: 'nonmodal',
        name: 'Dialog (Non-Modal)',
        meta: {
          title: 'Dialog (Non-Modal) | Components | iamkey'
        },
        component: () => import('./views/components/NonModalDoc.vue'),
        searchterms: 'passive, transactional, acknowledgement, popover'
      },
      {
        path: 'popover',
        name: 'Dialog (Popover)',
        meta: {
          title: 'Dialog (Popover) | Components | iamkey'
        },
        component: () => import('./views/components/PopoverDoc.vue'),
        searchterms: 'passive, transactional, acknowledgement, popover, no top, pointer, tooltip'
      },
      {
        path: 'form',
        name: 'Form elements',
        component: () => import('./views/components/Form.vue'),
        children: [
          {
            path: '',
            name: 'Form',
            meta: {
              title: 'Form elements | Elements | iamkey'
            },
            component: () => import('./views/components/FormIndex.vue')
          },
          {
            path: 'input-types',
            name: 'Form basic input types',
            meta: {
              title: 'Form basic input types | Elements | iamkey'
            },
            component: () => import('./views/components/form/InputTypes.vue')
          },
          {
            path: 'textarea',
            name: 'Form textarea',
            meta: {
              title: 'Form textarea | Elements | iamkey'
            },
            component: () => import('./views/components/form/Textarea.vue')
          },
          {
            path: 'date',
            name: 'Form date and time pickers',
            meta: {
              title: 'Form date and time pickers | Elements | iamkey'
            },
            component: () => import('./views/components/form/Date.vue')
          },
          {
            path: 'range',
            name: 'Form range field',
            meta: {
              title: 'Form range field | Elements | iamkey'
            },
            component: () => import('./views/components/form/Range.vue')
          },
          {
            path: 'file',
            name: 'Form file upload field',
            meta: {
              title: 'Form file upload field | Elements | iamkey'
            },
            component: () => import('./views/components/form/File.vue')
          },
          {
            path: 'select',
            name: 'Form select field',
            meta: {
              title: 'Form select field | Elements | iamkey'
            },
            component: () => import('./views/components/form/Select.vue')
          },
          {
            path: 'checkbox',
            name: 'Checkbox field',
            meta: {
              title: 'Checkbox field | Elements | iamkey'
            },
            component: () => import('./views/components/form/Checkbox.vue')
          },
          {
            path: 'toggle',
            name: 'Toggle buttons',
            meta: {
              title: 'Toggle buttons | Elements | iamkey'
            },
            component: () => import('./views/components/form/Toggle.vue')
          },
          {
            path: 'tags',
            name: 'Pill tags',
            meta: {
              title: 'Pill tags | Elements | iamkey'
            },
            component: () => import('./views/components/form/Tags.vue')
          },
          {
            path: 'validation',
            name: 'Form validation',
            meta: {
              title: 'Form validation | Elements | iamkey'
            },
            component: () => import('./views/components/form/Validation.vue')
          }
        ]
      },
      {
        path: 'inputs',
        name: 'Form input fields',
        meta: {
          title: 'Form input fields | Components | iamkey'
        },
        component: () => import('./views/components/FormInputDoc.vue'),
        searchterms: 'label, disabled, prefix, suffix, readonly, masks, helper'
      },
      {
        path: 'radio',
        name: 'Form Radio fields',
        meta: {
          title: 'Form Radio fields | Elements | iamkey'
        },
        component: () => import('./views/components/RadioDoc.vue'),
        searchterms: 'selected, card, select, reveal'
      },
      {
        path: 'validation',
        name: 'Form validation',
        meta: {
          title: 'Form validation | Components | iamkey'
        },
        component: () => import('./views/components/FormValidationDoc.vue'),
        searchterms: 'error, success, message'
      },
      {
        path: 'filterlist',
        name: 'Filter list (Beta)',
        meta: {
          title: 'Filter list | Components | iamkey'
        },
        component: () => import('./views/components/FilterlistDoc.vue'),
        searchterms: 'reduce, search'
      },
      {
        path: 'header',
        name: 'Header (Beta)',
        meta: {
          title: 'Header | Components | iamkey'
        },
        component: () => import('./views/components/Header.vue'),
        searchterms: 'introduce, banner'
      },
      {
        path: 'lists',
        name: 'Lists (Beta)',
        meta: {
          title: 'Lists | Elements | iamkey'
        },
        component: () => import('./views/components/Lists.vue'),
        searchterms: 'unordered, ordered, tick, breadcrumb'
      },
      {
        path: 'nav',
        name: 'Nav (Beta)',
        meta: {
          title: 'Nav | Components | iamkey'
        },
        component: () => import('./views/components/NavDoc.vue')
      },
      {
        path: 'notefeed',
        name: 'Note feed (Beta)',
        meta: {
          title: 'Note feed | Components | iamkey'
        },
        component: () => import('./views/components/NoteFeedDoc.vue')
      },
      {
        path: 'pagination',
        name: 'Pagination (Beta)',
        meta: {
          title: 'Pagination | Components | iamkey'
        },
        component: () => import('./views/components/PaginationDoc.vue'),
        searchterms: 'navigation'
      },
      {
        path: 'property-searchbar',
        name: 'Property Searchbar (Beta)',
        meta: {
          title: 'Property Searchbar | Components | iamkey'
        },
        component: () => import('./views/components/PropertySearchbarDoc.vue'),
        searchterms: 'search, property, price range, number of beds, property type, desired'
      },
      {
        path: 'snapshot',
        name: 'Snapshot (Beta)',
        meta: {
          title: 'Snapshot | Components | iamkey'
        },
        component: () => import('./views/components/SnapshotDoc.vue')
      },
      {
        path: 'stepper',
        name: 'Stepper (Beta)',
        meta: {
          title: 'Stepper | Components | iamkey'
        },
        component: () => import('./views/components/StepperDoc.vue')
      },
      {
        path: 'system-notifications',
        name: 'System notifications',
        meta: {
          title: 'System notifications | Components | iamkey'
        },
        component: () => import('./views/components/SystemNotificationsDoc.vue'),
        searchterms: 'high urgency, meduim urgency, low urgency, notify, message, toasts, inline notification, alert, transactional modal, acknowledgment, status'
      },
      {
        path: 'alert',
        name: 'System notifications (Alert)',
        meta: {
          title: 'System notifications (Alert) | Components | iamkey'
        },
        component: () => import('./views/components/AlertDoc.vue'),
        searchterms: 'high urgency, warning, promotional, calls to action, time-sensitive, critical'
      },
      {
        path: 'toasts',
        name: 'System notifications (Toasts)',
        meta: {
          title: 'System notifications (Toasts) | Components | iamkey'
        },
        component: () => import('./views/components/ToastsDoc.vue'),
        searchterms: 'low urgency, confirmation, message, temporary'
      },
      {
        path: 'inline-notification',
        name: 'System notifications (Inline)',
        meta: {
          title: 'System notifications (Inline) | Components | iamkey'
        },
        component: () => import('./views/components/InlineDoc.vue'),
        searchterms: 'high urgency, error, form'
      },
      {
        path: 'tables',
        name: 'Tables',
        meta: {
          title: 'Tables | Elements | iamkey'
        },
        component: () => import('./views/components/Tables.vue'),
        searchterms: 'expandable, scrollable, rows, columns'
      },
      {
        path: 'tabs',
        name: 'Tabs (Beta)',
        meta: {
          title: 'Tabs | Components | iamkey'
        },
        component: () => import('./views/components/TabsDoc.vue'),
        searchterms: 'admin panel, '
      },
      {
        path: 'testimonial',
        name: 'Testimonial (Beta)',
        meta: {
          title: 'Testimonial | Components | iamkey'
        },
        component: () => import('./views/components/TestimonialDoc.vue')
      },
      {
        path: 'timeline',
        name: 'Timeline (Beta)',
        meta: {
          title: 'Timeline | Components | iamkey'
        },
        component: () => import('./views/components/TimelineDoc.vue')
      }
    ]
  },
  { /* Templates */
    path: '/templates',
    name: 'Templates',
    meta: {
      title: 'Templates | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "templates" */ './views/Templates.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/templates/Index.vue')
      },
      {
        path: 'email',
        name: 'Email Template',
        meta: {
          title: 'Email Template | Components | iamkey'
        },
        component: () => import('./views/templates/EmailDoc.vue')
      },
      {
        path: 'print',
        name: 'Print Template',
        meta: {
          title: 'Print Template | Components | iamkey'
        },
        component: () => import('./views/templates/PrintDoc.vue')
      },
      {
        path: 'error-pages',
        name: 'Error page templates',
        meta: {
          title: 'Error page templates | Template | iamkey'
        },
        component: () => import('./views/templates/ErrorDoc.vue')
      }
    ]
  },
  {
    path: '/best-practice',
    name: 'Best practice',
    meta: {
      title: 'Best practice | Components | iamkey'
    },
    component: () => import('./views/BestPracticeDoc.vue')
  },
  { /* Information */
    path: '/information',
    component: () => import('./views/Information.vue'),
    name: 'Information',
    meta: {
      title: 'Information | iamkey'
    },
    searchterms: 'guidance, XD library, framework, bootstrap, library, integration'
  },
  {
    path: '/get-started',
    component: () => import('./views/GetStarted.vue'),
    name: 'Get started',
    meta: {
      title: 'Get started | iamkey'
    },
    searchterms: 'npm, install, assets, static, sass, modules, vue, branch, commands, contributing, code, web server, develoment, unit tests, regression tests, workflow'
  },
  { /* Examples */
    path: '/examples',
    name: 'Examples',
    meta: {
      title: 'Examples | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "examples" */ './views/Examples.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/examples/Index.vue')
      },
      {
        path: 'filter-by-age',
        component: () => import('./views/examples/FilterByAge.vue')
      },
      {
        path: 'charts',
        component: () => import('./views/examples/Charts.vue')
      },
      {
        path: 'news-promo-cards',
        component: () => import('./views/examples/NewsPromoCards.vue')
      },
      {
        path: 'logo-carousel',
        component: () => import('./views/examples/LogoCarousel.vue')
      },
      {
        path: 'stats-carousel',
        component: () => import('./views/examples/StatCarousel.vue')
      }
    ]
  },
  { /* Standalone */
    path: '/standalone',
    name: 'Standalone',
    meta: {
      title: 'Standalone | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "examples" */ './views/Standalone.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/standalone/Index.vue')
      },
      {
        path: 'navbar',
        name: "navbar example",
        meta: {
          title: 'Navbar example| iamkey'
        },
        component: () => import('./views/standalone/Navbar.vue')
      },
      {
        path: 'iamsold-homepage',
        name: "iam sold homepage",
        meta: {
          title: 'iam sold | iamkey'
        },
        component: () => import('./views/standalone/IamsoldHomepage.vue'),
        searchterms: 'iamsold, iam sold'
      },
      {
        path: 'iamsold-admin',
        name: "iam sold admin",
        meta: {
          title: 'iam sold | iamkey'
        },
        component: () => import('./views/standalone/IamsoldAdmin.vue'),
        searchterms: 'iamsold, iam sold'
      },
      {
        path: 'marketplace',
        name: "Marketplace",
        meta: {
          title: 'Marketplace | IAM Key'
        },
        component: () => import('./views/standalone/Marketplace.vue'),
        searchterms: 'iamproperty'
      },
      {
        path: 'movebutler',
        name: "Movebutler",
        meta: {
          title: 'Movebutler | IAM Key'
        },
        component: () => import('./views/standalone/Movebutler.vue')
      },
      {
        path: 'agent',
        name: "Agent Platform",
        meta: {
          title: 'Agent Platform | IAM Key'
        },
        component: () => import('./views/standalone/Agent.vue')
      },
      {
        path: 'print',
        name: "Print",
        meta: {
          title: 'Print | iamkey'
        },
        component: () => import('./views/standalone/PrintExample.vue')
      },
      {
        path: 'print-single',
        name: "Single page Print",
        meta: {
          title: 'Single page Print | iamkey'
        },
        component: () => import('./views/standalone/PrintExampleSingle.vue')
      },
      {
        path: 'agent-dashboard',
        name: "Agent dashboard",
        meta: {
          title: 'Agent dashboard | iamkey'
        },
        component: () => import('./views/standalone/AgentDashboard.vue'),
        searchterms: 'movebutler'
      },
      {
        path: 'openview',
        name: "Openview homepage",
        meta: {
          title: 'Openview homepage | iamkey'
        },
        component: () => import('./views/standalone/Openview.vue')
      },
      {
        path: 'compliance-dashboard',
        name: "Compliance dashboard",
        meta: {
          title: 'Compliance dashboard | iamkey'
        },
        component: () => import('./views/standalone/ComplianceDashboard.vue'),
        searchterms: 'iamsold, iam sold'
      }
    ]
  },
  { /* Prototype */
    path: '/prototype',
    name: 'Prototype',
    meta: {
      title: 'Prototypes | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "prototypes" */ './views/Prototype.vue'),
    children: [
      {
        path: '',
        component: () => import('./views/prototype/Index.vue')
      }
    ]
  },
  { path: '/audit',
    name: 'Audit',
    component: () => import('./views/Audit.vue'),
    searchterms: 'filesize'
  },
  {
    path: '/changelog',
    component: () => import('./views/Changelog.vue'),
    name: 'Changelog',
    meta: {
      title: 'Changelog | iamkey'
    },
    searchterms: 'versions, changes'
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./views/PageNotFound.vue') }
]

export default routes
