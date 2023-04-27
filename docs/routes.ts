// @ts-nocheck
const routes = [
  { name: 'Home', path: '/', component: () => import('./views/Home.vue') },
  { name: 'Principles', path: '/principles', component: () => import('./views/Principles.vue'), meta: { title: 'Principles | iamkey' } },
  { name: 'Principles', path: '/principles', component: () => import('./views/Principles.vue'), meta: { title: 'Principles | iamkey' } },
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
        name: 'Accessibility',
        meta: {
          title: 'Accessibility | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Accessibility.vue')
      },
      {
        path: 'logos',
        name: 'Logos',
        meta: {
          title: 'Logos | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Logos.vue')
      },
      {
        path: 'colours',
        name: 'Colours',
        meta: {
          title: 'Colours | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Colours.vue')
      },
      {
        path: 'fonts',
        name: 'Fonts',
        meta: {
          title: 'Fonts | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Fonts.vue')
      },
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          title: 'Icons | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Icons.vue')
      },
      {
        path: 'type',
        name: 'Typography',
        meta: {
          title: 'Typography | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Type.vue')
      },
      {
        path: 'illustrations',
        name: 'Illustrations',
        meta: {
          title: 'Illustrations | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Illustrations.vue')
      },
      {
        path: 'circles',
        name: 'Circles',
        meta: {
          title: 'Circles | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Circles.vue')
      },
      {
        path: 'media',
        name: 'Media',
        meta: {
          title: 'Media | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Media.vue')
      },
      {
        path: 'spacing',
        name: 'Spacing and Layout',
        meta: {
          title: 'Spacing and Layout | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Spacing.vue')

      },
      {
        path: 'utilities',
        name: 'Utility Classes',
        meta: {
          title: 'Utility Classes | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Utilities.vue')
      },
      {
        path: 'z-index',
        name: 'Z-index',
        meta: {
          title: 'Z-index | Foundations | iamkey'
        },
        component: () => import('./views/foundations/Zindex.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
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
        path: 'accordion',
        name: 'Accordion',
        meta: {
          title: 'Accordion | Components | iamkey'
        },
        component: () => import('./views/components/AccordionDoc.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        meta: {
          title: 'Alert | Components | iamkey'
        },
        component: () => import('./views/components/AlertDoc.vue')
      },
      {
        path: 'banner',
        name: 'Banner',
        meta: {
          title: 'Banner | Components | iamkey'
        },
        component: () => import('./views/components/BannerDoc.vue')
      },
      {
        path: 'card-deck',
        name: 'Card Deck',
        meta: {
          title: 'Card Deck | Components | iamkey'
        },
        component: () => import('./views/components/CardDeckDoc.vue')
      },
      {
        path: 'carousel',
        name: 'Carousel',
        meta: {
          title: 'Carousel | Components | iamkey'
        },
        component: () => import('./views/components/CarouselDoc.vue')
      },
      {
        path: 'charts',
        name: 'Charts',
        meta: {
          title: 'Charts | Components | iamkey'
        },
        component: () => import('./views/components/ChartsDoc.vue')
      },
      {
        path: 'header',
        name: 'Header',
        meta: {
          title: 'Header | Components | iamkey'
        },
        component: () => import('./views/components/Header.vue')
      },
      {
        path: 'modal',
        name: 'Modal',
        meta: {
          title: 'Modal | Components | iamkey'
        },
        component: () => import('./views/components/ModalDoc.vue')
      },
      {
        path: 'nav',
        name: 'Nav',
        meta: {
          title: 'Nav | Components | iamkey'
        },
        component: () => import('./views/components/NavDoc.vue')
      },
      {
        path: 'property-searchbar',
        name: 'Property Searchbar',
        meta: {
          title: 'Property Searchbar | Components | iamkey'
        },
        component: () => import('./views/components/PropertySearchbarDoc.vue')
      },
      {
        path: 'snapshot',
        name: 'Snapshot',
        meta: {
          title: 'Snapshot | Components | iamkey'
        },
        component: () => import('./views/components/SnapshotDoc.vue')
      },
      {
        path: 'stepper',
        name: 'Stepper',
        meta: {
          title: 'Stepper | Components | iamkey'
        },
        component: () => import('./views/components/StepperDoc.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        meta: {
          title: 'Tabs | Components | iamkey'
        },
        component: () => import('./views/components/TabsDoc.vue')
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        meta: {
          title: 'Testimonial | Components | iamkey'
        },
        component: () => import('./views/components/TestimonialDoc.vue')
      },
      {
        path: 'timeline',
        name: 'Timeline',
        meta: {
          title: 'Timeline | Components | iamkey'
        },
        component: () => import('./views/components/TimelineDoc.vue')
      },
      {
        path: 'notefeed',
        name: 'Note feed',
        meta: {
          title: 'Note feed | Components | iamkey'
        },
        component: () => import('./views/components/NoteFeedDoc.vue')
      },{
        path: '',
        name: 'Elements',
        meta: {
          title: 'Elements | iamkey'
        },
        component: () => import('./views/components/Index.vue')
      },
      {
        path: 'container',
        name: 'Container',
        meta: {
          title: 'Container | Elements | iamkey'
        },
        component: () => import('./views/components/Container.vue')
      },
      {
        path: 'lists',
        name: 'Lists',
        meta: {
          title: 'Lists | Elements | iamkey'
        },
        component: () => import('./views/components/Lists.vue')
      },
      {
        path: 'buttons',
        name: 'Buttons & links',
        meta: {
          title: 'Buttons & links | Elements | iamkey'
        },
        component: () => import('./views/components/Buttons.vue')
      },
      {
        path: 'tables',
        name: 'Tables',
        meta: {
          title: 'Tables | Elements | iamkey'
        },
        component: () => import('./views/components/Tables.vue')
      },
      {
        path: 'advanced-tables',
        name: 'Advanced Tables',
        meta: {
          title: 'Advanced Tables | Elements | iamkey'
        },
        component: () => import('./views/components/AdvancedTables.vue')
      },
      {
        path: 'tooltips',
        name: 'Tooltips',
        meta: {
          title: 'Tooltips | Elements | iamkey'
        },
        component: () => import('./views/components/TooltipsDoc.vue')
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
            path: 'inputs',
            name: 'Form input field',
            meta: {
              title: 'Form input fields | Elements | iamkey'
            },
            component: () => import('./views/components/form/Input.vue')
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
            path: 'radio',
            name: 'Radio field',
            meta: {
              title: 'Radio field | Elements | iamkey'
            },
            component: () => import('./views/components/form/Radio.vue')
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
        path: 'card',
        name: 'Card',
        meta: {
          title: 'Card | Components | iamkey'
        },
        component: () => import('./views/components/CardDoc.vue')
      },
      {
        path: 'panel',
        name: 'Admin panel',
        meta: {
          title: 'Admin panel | Components | iamkey'
        },
        component: () => import('./views/components/PanelDoc.vue')
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
    }
  },
  {
    path: '/get-started',
    component: () => import('./views/GetStarted.vue'),
    name: 'Get started',
    meta: {
      title: 'Get started | iamkey'
    }
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
        path: 'related-cards',
        component: () => import('./views/examples/RelatedCards.vue')
      },
      {
        path: 'insight-cards',
        component: () => import('./views/examples/InsightCards.vue')
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
        component: () => import('./views/standalone/IamsoldHomepage.vue')
      },
      {
        path: 'iamsold-admin',
        name: "iam sold admin",
        meta: {
          title: 'iam sold | iamkey'
        },
        component: () => import('./views/standalone/IamsoldAdmin.vue')
      },
      {
        path: 'completions-dashboard',
        name: "Completions dashboard",
        meta: {
          title: 'Completions dashboard | iamkey'
        },
        component: () => import('./views/standalone/CompletionsDashboard.vue')
      },
      {
        path: 'marketplace',
        name: "Marketplace",
        meta: {
          title: 'Marketplace | IAM Key'
        },
        component: () => import('./views/standalone/Marketplace.vue')
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
        path: 'client-dashboard',
        name: "Client Dashboard",
        meta: {
          title: 'Client Dashboard | iamkey'
        },
        component: () => import('./views/standalone/ClientDashboard/index.vue')
      },
      {
        path: 'client-risk',
        name: "Client risk",
        meta: {
          title: 'Client Dashboard | iamkey'
        },
        component: () => import('./views/standalone/ClientDashboard/risk.vue')
      },
      {
        path: 'client-legal',
        name: "Client legal",
        meta: {
          title: 'Client Dashboard | iamkey'
        },
        component: () => import('./views/standalone/ClientDashboard/legal.vue')
      },
      {
        path: 'client-legal-selected',
        name: "Client legal selected",
        meta: {
          title: 'Client Dashboard | iamkey'
        },
        component: () => import('./views/standalone/ClientDashboard/legalSelected.vue')
      },
      {
        path: 'client-method',
        name: "Client method",
        meta: {
          title: 'Client method | iamkey'
        },
        component: () => import('./views/standalone/ClientDashboard/method.vue')
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
      },
      {
        path: 'client-login',
        name: 'Client login',
        component: () => import('./views/prototype/clientLogin.vue')
      },
      {
        path: 'survey',
        name: 'Survey - In platform',
        component: () => import('./views/prototype/survey/inplatform.vue')
      },
      {
        path: 'survey-client-onboarding',
        name: 'Survey - Client onboarding',
        component: () => import('./views/prototype/survey/clientOnboarding.vue')
      },
      {
        path: 'survey-client-dashboard',
        name: 'Survey - Client dashboard',
        component: () => import('./views/prototype/survey/clientDashboard.vue')
      },
      {
        path: 'survey-client-dashboard-2',
        name: 'Survey - Client dashboard 2',
        component: () => import('./views/prototype/survey/clientDashboard2.vue')
      }
    ]
  },
  { path: '/audit', component: () => import('./views/Audit.vue') },
  {
    path: '/changelog',
    component: () => import('./views/Changelog.vue'),
    name: 'Changelog',
    meta: {
      title: 'Changelog | iamkey'
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./views/PageNotFound.vue') }
]

export default routes
