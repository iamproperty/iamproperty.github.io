import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  { /* Home */
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'iamkey Design system and framework'
    }
  },
  { /* Information */
    path: '/information',
    component: () => import('../views/Information.vue'),
    name: 'Information',
    meta: {
      title: 'Information | iamkey'
    }
  },
  { /* Audit */
    path: '/audit',
    component: () => import('../views/Audit.vue'),
    name: 'Audit',
    meta: {
      title: 'Audit | iamkey'
    }
  },
  {
    path: '/get-started',
    component: () => import('../views/GetStarted.vue'),
    name: 'Get started',
    meta: {
      title: 'Get started | iamkey'
    }
  },
  {
    path: '/changelog',
    component: () => import('../views/Changelog.vue'),
    name: 'Changelog',
    meta: {
      title: 'Changelog | iamkey'
    }
  },
  {
    path: '/principles',
    component: () => import('../views/Principles.vue'),
    name: 'Principles',
    meta: {
      title: 'Principles | iamkey'
    }
  },
  {
    path: '/accessibility',
    component: () => import('../views/Accessibility.vue'),
    name: 'Accessibility',
    meta: {
      title: 'Accessibility | iamkey'
    }
  },
  {
    path: '/best-practice',
    name: 'Best practice',
    meta: {
      title: 'Best practice | Components | iamkey'
    },
    component: () => import('../views/BestPracticeDoc.vue')
  },
  { /* Foundations */
    path: '/foundations',
    component: () => import(/* webpackChunkName: "foundations" */ '../views/Foundations.vue'),
    children: [
      {
        path: '',
        name: 'Foundations',
        meta: {
          title: 'Foundations | iamkey'
        },
        component: () => import('../views/foundations/Index.vue')
      },
      {
        path: 'logos',
        name: 'Logos',
        meta: {
          title: 'Logos | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Logos.vue')
      },
      {
        path: 'colours',
        name: 'Colours',
        meta: {
          title: 'Colours | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Colours.vue')
      },
      {
        path: 'fonts',
        name: 'Fonts',
        meta: {
          title: 'Fonts | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Fonts.vue')
      },
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          title: 'Icons | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Icons.vue')
      },
      {
        path: 'illustrations',
        name: 'Illustrations',
        meta: {
          title: 'Illustrations | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Illustrations.vue')
      },
      {
        path: 'circles',
        name: 'Circles',
        meta: {
          title: 'Circles | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Circles.vue')
      },
      {
        path: 'media',
        name: 'Media',
        meta: {
          title: 'Media | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Media.vue')
      },
      {
        path: 'breakpoints',
        name: 'Breakpoints',
        meta: {
          title: 'Breakpoints | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Breakpoints.vue')
      },
      {
        path: 'grid',
        name: 'Grid',
        meta: {
          title: 'Grid | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Grid.vue')

      },
      {
        path: 'utilities',
        name: 'Utility Classes',
        meta: {
          title: 'Utility Classes | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Utilities.vue')
      },
      {
        path: 'z-index',
        name: 'Z-index',
        meta: {
          title: 'Z-index | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Zindex.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        meta: {
          title: 'Animation | Foundations | iamkey'
        },
        component: () => import('../views/foundations/Animation.vue')
      }
    ]
  },
  { /* Elements */
    path: '/elements',
    component: () => import(/* webpackChunkName: "elements" */ '../views/Elements.vue'),
    children: [
      {
        path: '',
        name: 'Elements',
        meta: {
          title: 'Elements | iamkey'
        },
        component: () => import('../views/elements/Index.vue')
      },
      {
        path: 'container',
        name: 'Container',
        meta: {
          title: 'Container | Elements | iamkey'
        },
        component: () => import('../views/elements/Container.vue')
      },
      {
        path: 'type',
        name: 'Type',
        meta: {
          title: 'Typography | Elements | iamkey'
        },
        component: () => import('../views/elements/Type.vue')
      },
      {
        path: 'lists',
        name: 'Lists',
        meta: {
          title: 'Lists | Elements | iamkey'
        },
        component: () => import('../views/elements/Lists.vue')
      },
      {
        path: 'buttons',
        name: 'Buttons & links',
        meta: {
          title: 'Buttons & links | Elements | iamkey'
        },
        component: () => import('../views/elements/Buttons.vue')
      },
      {
        path: 'tables',
        name: 'Tables',
        meta: {
          title: 'Tables | Elements | iamkey'
        },
        component: () => import('../views/elements/Tables.vue')
      },
      {
        path: 'advanced-tables',
        name: 'Advanced Tables',
        meta: {
          title: 'Advanced Tables | Elements | iamkey'
        },
        component: () => import('../views/elements/AdvancedTables.vue')
      },
      {
        path: 'tooltips',
        name: 'Tooltips',
        meta: {
          title: 'Tooltips | Elements | iamkey'
        },
        component: () => import('../views/elements/TooltipsDoc.vue')
      },
      {
        path: 'form',
        name: 'Form elements',
        component: () => import('../views/elements/Form.vue'),
        children: [
          {
            path: '',
            name: 'Form',
            meta: {
              title: 'Form elements | Elements | iamkey'
            },
            component: () => import('../views/elements/FormIndex.vue')
          },
          {
            path: 'inputs',
            name: 'Form input field',
            meta: {
              title: 'Form input fields | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Input.vue')
          },
          {
            path: 'input-types',
            name: 'Form basic input types',
            meta: {
              title: 'Form basic input types | Elements | iamkey'
            },
            component: () => import('../views/elements/form/InputTypes.vue')
          },
          {
            path: 'textarea',
            name: 'Form textarea',
            meta: {
              title: 'Form textarea | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Textarea.vue')
          },
          {
            path: 'date',
            name: 'Form date and time pickers',
            meta: {
              title: 'Form date and time pickers | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Date.vue')
          },
          {
            path: 'range',
            name: 'Form range field',
            meta: {
              title: 'Form range field | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Range.vue')
          },
          {
            path: 'file',
            name: 'Form file upload field',
            meta: {
              title: 'Form file upload field | Elements | iamkey'
            },
            component: () => import('../views/elements/form/File.vue')
          },
          {
            path: 'select',
            name: 'Form select field',
            meta: {
              title: 'Form select field | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Select.vue')
          },
          {
            path: 'checkbox',
            name: 'Checkbox field',
            meta: {
              title: 'Checkbox field | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Checkbox.vue')
          },
          {
            path: 'radio',
            name: 'Radio field',
            meta: {
              title: 'Radio field | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Radio.vue')
          },
          {
            path: 'toggle',
            name: 'Toggle buttons',
            meta: {
              title: 'Toggle buttons | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Toggle.vue')
          },
          {
            path: 'tags',
            name: 'Pill tags',
            meta: {
              title: 'Pill tags | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Tags.vue')
          },
          {
            path: 'validation',
            name: 'Form validation',
            meta: {
              title: 'Form validation | Elements | iamkey'
            },
            component: () => import('../views/elements/form/Validation.vue')
          }
        ]
      },
      {
        path: 'card',
        name: 'Card',
        meta: {
          title: 'Card | Components | iamkey'
        },
        component: () => import('../views/elements/CardDoc.vue')
      },
      {
        path: 'panel',
        name: 'Admin panel',
        meta: {
          title: 'Admin panel | Components | iamkey'
        },
        component: () => import('../views/elements/PanelDoc.vue')
      }
    ]
  },
  { /* Components */
    path: '/components',
    name: 'Components',
    meta: {
      title: 'Components | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/components/Index.vue')
      },
      {
        path: 'accordion',
        name: 'Accordion',
        meta: {
          title: 'Accordion | Components | iamkey'
        },
        component: () => import('../views/components/AccordionDoc.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        meta: {
          title: 'Alert | Components | iamkey'
        },
        component: () => import('../views/components/AlertDoc.vue')
      },
      {
        path: 'banner',
        name: 'Banner',
        meta: {
          title: 'Banner | Components | iamkey'
        },
        component: () => import('../views/components/BannerDoc.vue')
      },
      {
        path: 'card-deck',
        name: 'Card Deck',
        meta: {
          title: 'Card Deck | Components | iamkey'
        },
        component: () => import('../views/components/CardDeckDoc.vue')
      },
      {
        path: 'carousel',
        name: 'Carousel',
        meta: {
          title: 'Carousel | Components | iamkey'
        },
        component: () => import('../views/components/CarouselDoc.vue')
      },
      {
        path: 'drawer',
        name: 'Drawer',
        meta: {
          title: 'Drawer | Components | iamkey'
        },
        component: () => import('../views/components/DrawerDoc.vue')
      },
      {
        path: 'charts',
        name: 'Charts',
        meta: {
          title: 'Charts | Components | iamkey'
        },
        component: () => import('../views/components/ChartsDoc.vue')
      },
      {
        path: 'header',
        name: 'Header',
        meta: {
          title: 'Header | Components | iamkey'
        },
        component: () => import('../views/components/Header.vue')
      },
      {
        path: 'modal',
        name: 'Modal',
        meta: {
          title: 'Modal | Components | iamkey'
        },
        component: () => import('../views/components/ModalDoc.vue')
      },
      {
        path: 'nav',
        name: 'Nav',
        meta: {
          title: 'Nav | Components | iamkey'
        },
        component: () => import('../views/components/NavDoc.vue')
      },
      {
        path: 'property-searchbar',
        name: 'Property Searchbar',
        meta: {
          title: 'Property Searchbar | Components | iamkey'
        },
        component: () => import('../views/components/PropertySearchbarDoc.vue')
      },
      {
        path: 'snapshot',
        name: 'Snapshot',
        meta: {
          title: 'Snapshot | Components | iamkey'
        },
        component: () => import('../views/components/SnapshotDoc.vue')
      },
      {
        path: 'stepper',
        name: 'Stepper',
        meta: {
          title: 'Stepper | Components | iamkey'
        },
        component: () => import('../views/components/StepperDoc.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        meta: {
          title: 'Tabs | Components | iamkey'
        },
        component: () => import('../views/components/TabsDoc.vue')
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        meta: {
          title: 'Testimonial | Components | iamkey'
        },
        component: () => import('../views/components/TestimonialDoc.vue')
      },
      {
        path: 'timeline',
        name: 'Timeline',
        meta: {
          title: 'Timeline | Components | iamkey'
        },
        component: () => import('../views/components/TimelineDoc.vue')
      },
      {
        path: 'notefeed',
        name: 'Note feed',
        meta: {
          title: 'Note feed | Components | iamkey'
        },
        component: () => import('../views/components/NoteFeedDoc.vue')
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
    component: () => import(/* webpackChunkName: "templates" */ '../views/Templates.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/templates/Index.vue')
      },
      {
        path: 'email',
        name: 'Email Template',
        meta: {
          title: 'Email Template | Components | iamkey'
        },
        component: () => import('../views/templates/EmailDoc.vue')
      },
      {
        path: 'print',
        name: 'Print Template',
        meta: {
          title: 'Print Template | Components | iamkey'
        },
        component: () => import('../views/templates/PrintDoc.vue')
      },
      {
        path: 'error-pages',
        name: 'Error page templates',
        meta: {
          title: 'Error page templates | Template | iamkey'
        },
        component: () => import('../views/templates/ErrorDoc.vue')
      }
    ]
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
    component: () => import(/* webpackChunkName: "examples" */ '../views/Examples.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/examples/Index.vue')
      },
      {
        path: 'filter-by-age',
        component: () => import('../views/examples/FilterByAge.vue')
      },
      {
        path: 'charts',
        component: () => import('../views/examples/Charts.vue')
      },
      {
        path: 'related-cards',
        component: () => import('../views/examples/RelatedCards.vue')
      },
      {
        path: 'insight-cards',
        component: () => import('../views/examples/InsightCards.vue')
      },
      {
        path: 'news-promo-cards',
        component: () => import('../views/examples/NewsPromoCards.vue')
      },
      {
        path: 'logo-carousel',
        component: () => import('../views/examples/LogoCarousel.vue')
      },
      {
        path: 'stats-carousel',
        component: () => import('../views/examples/StatCarousel.vue')
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
    component: () => import(/* webpackChunkName: "examples" */ '../views/Standalone.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/standalone/Index.vue')
      },
      {
        path: 'navbar',
        name: "navbar example",
        meta: {
          title: 'Navbar example| iamkey'
        },
        component: () => import('../views/standalone/Navbar.vue')
      },
      {
        path: 'iamsold-homepage',
        name: "iam sold homepage",
        meta: {
          title: 'iam sold | iamkey'
        },
        component: () => import('../views/standalone/IamsoldHomepage.vue')
      },
      {
        path: 'iamsold-admin',
        name: "iam sold admin",
        meta: {
          title: 'iam sold | iamkey'
        },
        component: () => import('../views/standalone/IamsoldAdmin.vue')
      },
      {
        path: 'completions-dashboard',
        name: "Completions dashboard",
        meta: {
          title: 'Completions dashboard | iamkey'
        },
        component: () => import('../views/standalone/CompletionsDashboard.vue')
      },
      {
        path: 'marketplace',
        name: "Marketplace",
        meta: {
          title: 'Marketplace | IAM Key'
        },
        component: () => import('../views/standalone/Marketplace.vue')
      },
      {
        path: 'movebutler',
        name: "Movebutler",
        meta: {
          title: 'Movebutler | IAM Key'
        },
        component: () => import('../views/standalone/Movebutler.vue')
      },
      {
        path: 'agent',
        name: "Agent Platform",
        meta: {
          title: 'Agent Platform | IAM Key'
        },
        component: () => import('../views/standalone/Agent.vue')
      },
      {
        path: 'print',
        name: "Print",
        meta: {
          title: 'Print | iamkey'
        },
        component: () => import('../views/standalone/PrintExample.vue')
      },
      {
        path: 'print-single',
        name: "Single page Print",
        meta: {
          title: 'Single page Print | iamkey'
        },
        component: () => import('../views/standalone/PrintExampleSingle.vue')
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
    component: () => import(/* webpackChunkName: "prototypes" */ '../views/Prototype.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/prototype/Index.vue')
      },
      {
        path: 'client-login',
        name: 'Client login',
        component: () => import('../views/prototype/clientLogin.vue')
      },
      {
        path: 'survey',
        name: 'Survey - In platform',
        component: () => import('../views/prototype/survey/inplatform.vue')
      },
      {
        path: 'survey-client-onboarding',
        name: 'Survey - Client onboarding',
        component: () => import('../views/prototype/survey/clientOnboarding.vue')
      },
      {
        path: 'survey-client-dashboard',
        name: 'Survey - Client dashboard',
        component: () => import('../views/prototype/survey/clientDashboard.vue')
      },
      {
        path: 'survey-client-dashboard-2',
        name: 'Survey - Client dashboard 2',
        component: () => import('../views/prototype/survey/clientDashboard2.vue')
      }
    ]
  },
  { /* Articles */
    path: '/articles',
    name: 'Articles',
    meta: {
      title: 'Articles | iamkey'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/articles/Index.vue')
      },
      {
        path: 'flexbox-charts',
        name: "Flexbox Charts",
        meta: {
          title: 'Flexbox Charts | iamkey'
        },
        component: () => import('../views/articles/FlexboxCharts.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'Page not found',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      title: 'Page not Found | iamkey'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  }).forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
