import Vue from 'vue'
import Router from 'vue-router'
import Alpha from './components/Alpha.vue'
import Bravo from './components/Bravo.vue'
import Charlie from './components/Charlie.vue'

Vue.use(Router)
console.log('Router init')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/alpha',
      name: 'alpha',
      component: Alpha
    },
    {
      path: '/bravo',
      name: 'bravo',
      component: Bravo
    },
    {
      path: '/charlie',
      name: 'charlie',
      component: Charlie
    },
  ]
})
