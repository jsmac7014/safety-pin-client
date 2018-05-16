import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Calendar from '@/components/Calendar'
import Chat from '@/components/Chat'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: "*",
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
