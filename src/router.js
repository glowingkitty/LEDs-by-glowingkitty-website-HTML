import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import About from './views/about'
import GlowTower from './views/glow-tower'
import GlowCore from './views/glow-core'
import GlowTube from './views/glow-tube'
import Products from './views/products'
import GlowLight from './views/glow-light'
import Help from './views/help'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'GlowTower',
      path: '/glow-tower',
      component: GlowTower,
    },
    {
      name: 'GlowCore',
      path: '/glow-core',
      component: GlowCore,
    },
    {
      name: 'GlowTube',
      path: '/glow-tube',
      component: GlowTube,
    },
    {
      name: 'Products',
      path: '/products',
      component: Products,
    },
    {
      name: 'GlowLight',
      path: '/glow-light',
      component: GlowLight,
    },
    {
      name: 'Help',
      path: '/help',
      component: Help,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
