import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Calendar from '@/components/Calendar'
import CheckPin from '@/components/CheckPin'
import NotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Pin',
      name: 'CheckPin',
      component: CheckPin
    },
    {
      path: '*',
      name: "NotFound",
      component: NotFound
    }
  ]
})
