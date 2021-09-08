import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
        path: 'type',
        name: 'Type',
        meta: {
          title: 'Typography | Elements | IAM Key'
        },
        component: () => import('../views/elements/Type.vue')
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
        component: () => import('../views/components/Accordion.vue')
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
        path: 'header',
        name: 'Header',
        meta: {
          title: 'Header | Components | IAM Key'
        },
        component: () => import('../views/components/Header.vue')
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
        path: 'task-title',
        name: 'Task Title',
        component: () => import('../views/components/TaskTitle.vue')
      },
      {
        path: 'key-stats',
        name: 'Key Stats',
        component: () => import('../views/components/KeyStats.vue')
      },
      {
        path: 'property-task-intro',
        name: 'Property Task Intro',
        component: () => import('../views/components/PropertyTaskIntro.vue')
      },
      {
        path: 'vendor-table',
        name: 'Vendor Table',
        component: () => import('../views/components/VendorTable.vue')
      },
      {
        path: 'key-information',
        name: 'Key Information',
        component: () => import('../views/components/KeyInformation.vue')
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
        path: 'related-cards',
        component: () => import('../views/examples/RelatedCards.vue')
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
