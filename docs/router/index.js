import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'IAM Key Design system and framework'
    }
  },
  {
    path: '/audit',
    component: () => import('../views/Audit.vue'),
    name: 'Audit',
    meta: {
      title: 'Audit | IAM Key'
    }
  },
  {
    path: '/get-started',
    component: () => import('../views/GetStarted.vue'),
    name: 'Get started',
    meta: {
      title: 'Get started | IAM Key'
    }
  },
  {
    path: '/changelog',
    component: () => import('../views/Changelog.vue'),
    name: 'Changelog',
    meta: {
      title: 'Changelog | IAM Key'
    }
  },
  {
    path: '/principles',
    component: () => import('../views/Principles.vue'),
    name: 'Principles',
    meta: {
      title: 'Principles | IAM Key'
    }
  },
  {
    path: '/accessibility',
    component: () => import('../views/Accessibility.vue'),
    name: 'Accessibility',
    meta: {
      title: 'Accessibility | IAM Key'
    }
  },
  {
    path: '/foundations',
    component: () => import(/* webpackChunkName: "foundations" */ '../views/Foundations.vue'),
    children: [
      {
        path: '',
        name: 'Foundations',
        meta: {
          title: 'Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Index.vue')
      },
      {
        path: 'logos',
        name: 'Logos',
        meta: {
          title: 'Logos | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Logos.vue')
      },
      {
        path: 'colours',
        name: 'Colours',
        meta: {
          title: 'Colours | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Colours.vue')
      },
      {
        path: 'fonts',
        name: 'Fonts',
        meta: {
          title: 'Fonts | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Fonts.vue')
      },
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          title: 'Icons | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Icons.vue')
      },
      {
        path: 'illustrations',
        name: 'Illustrations',
        meta: {
          title: 'Illustrations | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Illustrations.vue')
      },
      {
        path: 'circles',
        name: 'Circles',
        meta: {
          title: 'Circles | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Circles.vue')
      },
      {
        path: 'media',
        name: 'Media',
        meta: {
          title: 'Media | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Media.vue')
      },
      {
        path: 'breakpoints',
        name: 'Breakpoints',
        meta: {
          title: 'Breakpoints | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Breakpoints.vue')
      },
      {
        path: 'grid',
        name: 'Grid',
        meta: {
          title: 'Grid | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Grid.vue')

      },
      {
        path: 'utilities',
        name: 'Utility Classes',
        meta: {
          title: 'Utility Classes | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Utilities.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        meta: {
          title: 'Animation | Foundations | IAM Key'
        },
        component: () => import('../views/foundations/Animation.vue')
      }
    ]
  },
  {
    path: '/elements',
    component: () => import(/* webpackChunkName: "elements" */ '../views/Elements.vue'),
    children: [
      {
        path: '',
        name: 'Elements',
        meta: {
          title: 'Elements | IAM Key'
        },
        component: () => import('../views/elements/Index.vue')
      },
      {
        path: 'container',
        name: 'Container',
        meta: {
          title: 'Container | Elements | IAM Key'
        },
        component: () => import('../views/elements/Container.vue')
      },
      {
        path: 'type',
        name: 'Type',
        meta: {
          title: 'Typography | Elements | IAM Key'
        },
        component: () => import('../views/elements/Type.vue')
      },
      {
        path: 'lists',
        name: 'Lists',
        meta: {
          title: 'Lists | Elements | IAM Key'
        },
        component: () => import('../views/elements/Lists.vue')
      },
      {
        path: 'buttons',
        name: 'Buttons & links',
        meta: {
          title: 'Buttons & links | Elements | IAM Key'
        },
        component: () => import('../views/elements/Buttons.vue')
      },
      {
        path: 'tables',
        name: 'Tables',
        meta: {
          title: 'Tables | Elements | IAM Key'
        },
        component: () => import('../views/elements/Tables.vue')
      },
      {
        path: 'advanced-tables',
        name: 'Advanced Tables',
        meta: {
          title: 'Advanced Tables | Elements | IAM Key'
        },
        component: () => import('../views/elements/AdvancedTables.vue')
      },
      {
        path: 'tooltips',
        name: 'Tooltips',
        meta: {
          title: 'Tooltips | Elements | IAM Key'
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
              title: 'Form elements | Elements | IAM Key'
            },
            component: () => import('../views/elements/FormIndex.vue')
          },
          {
            path: 'inputs',
            name: 'Form input field',
            meta: {
              title: 'Form input fields | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Input.vue')
          },
          {
            path: 'input-types',
            name: 'Form basic input types',
            meta: {
              title: 'Form basic input types | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/InputTypes.vue')
          },
          {
            path: 'textarea',
            name: 'Form textarea',
            meta: {
              title: 'Form textarea | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Textarea.vue')
          },
          {
            path: 'date',
            name: 'Form date and time pickers',
            meta: {
              title: 'Form date and time pickers | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Date.vue')
          },
          {
            path: 'range',
            name: 'Form range field',
            meta: {
              title: 'Form range field | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Range.vue')
          },
          {
            path: 'file',
            name: 'Form file upload field',
            meta: {
              title: 'Form file upload field | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/File.vue')
          },
          {
            path: 'select',
            name: 'Form select field',
            meta: {
              title: 'Form select field | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Select.vue')
          },
          {
            path: 'checkbox',
            name: 'Checkbox field',
            meta: {
              title: 'Checkbox field | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Checkbox.vue')
          },
          {
            path: 'radio',
            name: 'Radio field',
            meta: {
              title: 'Radio field | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Radio.vue')
          },
          {
            path: 'toggle',
            name: 'Toggle buttons',
            meta: {
              title: 'Toggle buttons | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Toggle.vue')
          },
          {
            path: 'tags',
            name: 'Pill tags',
            meta: {
              title: 'Pill tags | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Tags.vue')
          },
          {
            path: 'validation',
            name: 'Form validation',
            meta: {
              title: 'Form validation | Elements | IAM Key'
            },
            component: () => import('../views/elements/form/Validation.vue')
          }
        ]
      },
      {
        path: 'card',
        name: 'Card',
        meta: {
          title: 'Card | Components | IAM Key'
        },
        component: () => import('../views/elements/CardDoc.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'Components',
    meta: {
      title: 'Components | IAM Key'
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
          title: 'Accordion | Components | IAM Key'
        },
        component: () => import('../views/components/AccordionDoc.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        meta: {
          title: 'Alert | Components | IAM Key'
        },
        component: () => import('../views/components/AlertDoc.vue')
      },
      {
        path: 'banner',
        name: 'Banner',
        meta: {
          title: 'Banner | Components | IAM Key'
        },
        component: () => import('../views/components/BannerDoc.vue')
      },
      {
        path: 'card-deck',
        name: 'Card Deck',
        meta: {
          title: 'Card Deck | Components | IAM Key'
        },
        component: () => import('../views/components/CardDeckDoc.vue')
      },
      {
        path: 'carousel',
        name: 'Carousel',
        meta: {
          title: 'Carousel | Components | IAM Key'
        },
        component: () => import('../views/components/CarouselDoc.vue')
      },
      {
        path: 'drawer',
        name: 'Drawer',
        meta: {
          title: 'Drawer | Components | IAM Key'
        },
        component: () => import('../views/components/DrawerDoc.vue')
      },
      {
        path: 'charts',
        name: 'Charts',
        meta: {
          title: 'Charts | Components | IAM Key'
        },
        component: () => import('../views/components/ChartsDoc.vue')
      },
      {
        path: 'header',
        name: 'Header',
        meta: {
          title: 'Header | Components | IAM Key'
        },
        component: () => import('../views/components/Header.vue')
      },
      {
        path: 'modal',
        name: 'Modal',
        meta: {
          title: 'Modal | Components | IAM Key'
        },
        component: () => import('../views/components/ModalDoc.vue')
      },
      {
        path: 'nav',
        name: 'Nav',
        meta: {
          title: 'Nav | Components | IAM Key'
        },
        component: () => import('../views/components/NavDoc.vue')
      },
      {
        path: 'property-searchbar',
        name: 'Property Searchbar',
        meta: {
          title: 'Property Searchbar | Components | IAM Key'
        },
        component: () => import('../views/components/PropertySearchbarDoc.vue')
      },
      {
        path: 'snapshot',
        name: 'Snapshot',
        meta: {
          title: 'Snapshot | Components | IAM Key'
        },
        component: () => import('../views/components/SnapshotDoc.vue')
      },
      {
        path: 'stepper',
        name: 'Stepper',
        meta: {
          title: 'Stepper | Components | IAM Key'
        },
        component: () => import('../views/components/StepperDoc.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        meta: {
          title: 'Tabs | Components | IAM Key'
        },
        component: () => import('../views/components/TabsDoc.vue')
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        meta: {
          title: 'Testimonial | Components | IAM Key'
        },
        component: () => import('../views/components/TestimonialDoc.vue')
      },
      {
        path: 'timeline',
        name: 'Timeline',
        meta: {
          title: 'Timeline | Components | IAM Key'
        },
        component: () => import('../views/components/TimelineDoc.vue')
      }
    ]
  },
  {
    path: '/templates',
    name: 'Templates',
    meta: {
      title: 'Templates | IAM Key'
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
          title: 'Email Template | Components | IAM Key'
        },
        component: () => import('../views/templates/EmailDoc.vue')
      },
      {
        path: 'print',
        name: 'Print Template',
        meta: {
          title: 'Print Template | Components | IAM Key'
        },
        component: () => import('../views/templates/PrintDoc.vue')
      },
      {
        path: 'error-pages',
        name: 'Error page templates',
        meta: {
          title: 'Error page templates | Template | IAM Key'
        },
        component: () => import('../views/templates/ErrorDoc.vue')
      }
    ]
  },
  {
    path: '/examples',
    name: 'Examples',
    meta: {
      title: 'Examples | IAM Key'
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
  {
    path: '/standalone',
    name: 'Standalone',
    meta: {
      title: 'Standalone | IAM Key'
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
          title: 'Navbar example| IAM Key'
        },
        component: () => import('../views/standalone/Navbar.vue')
      },
      {
        path: 'iamsold-homepage',
        name: "iam sold homepage",
        meta: {
          title: 'iam sold | IAM Key'
        },
        component: () => import('../views/standalone/IamsoldHomepage.vue')
      },
      {
        path: 'iamsold-admin',
        name: "iam sold admin",
        meta: {
          title: 'iam sold | IAM Key'
        },
        component: () => import('../views/standalone/IamsoldAdmin.vue')
      },
      {
        path: 'completions-dashboard',
        name: "Completions dashboard",
        meta: {
          title: 'Completions dashboard | IAM Key'
        },
        component: () => import('../views/standalone/CompletionsDashboard.vue')
      },
      {
        path: 'print',
        name: "Print",
        meta: {
          title: 'Print | IAM Key'
        },
        component: () => import('../views/standalone/PrintExample.vue')
      },
      {
        path: 'print-single',
        name: "Single page Print",
        meta: {
          title: 'Single page Print | IAM Key'
        },
        component: () => import('../views/standalone/PrintExampleSingle.vue')
      }
    ]
  },
  {
    path: '/articles',
    name: 'Articles',
    meta: {
      title: 'Articles | IAM Key'
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
          title: 'Flexbox Charts | IAM Key'
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
      title: 'Page not Found | IAM Key'
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
