import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _134421ff = () => import('..\\resources\\nuxt\\pages\\register.vue' /* webpackChunkName: "pages_register" */).then(m => m.default || m)
const _eae17c86 = () => import('..\\resources\\nuxt\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _6e5183cc = () => import('..\\resources\\nuxt\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */).then(m => m.default || m)
const _1469fe66 = () => import('..\\resources\\nuxt\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */).then(m => m.default || m)
const _7e30c2b4 = () => import('..\\resources\\nuxt\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/register",
			component: _134421ff,
			name: "register"
		},
		{
			path: "/login",
			component: _eae17c86,
			name: "login"
		},
		{
			path: "/dashboard",
			component: _6e5183cc,
			name: "dashboard"
		},
		{
			path: "/logout",
			component: _1469fe66,
			name: "logout"
		},
		{
			path: "/",
			component: _7e30c2b4,
			name: "index"
		},
		{
			path: "/__laravel_nuxt__",
			component: _7e30c2b4,
			name: "__laravel_nuxt__"
		}
    ],
    
    
    fallback: false
  })
}