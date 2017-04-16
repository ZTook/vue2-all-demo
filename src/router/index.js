import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Notes from 'components/notes/Notes'
import Douban from 'components/douban'
import User from 'components/usersubmit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Hello
    },

    {
      path: '/notes',
      component: Notes
    },

    {
      path: '/douban',
      component: Douban
    },

    {
      path: '/user',
      component: User
    }
  ]
})
