import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
