import Router from 'vue-router'
import cookie from '../util/cookie.js'

const routes = [
	{
		path: '/',
		beforeEnter:(to, from, next) => {
			const username = cookie.getCookie('username')
			if(username === 'admin') {
				next('/order')
			} else {
				next('/user')
			}
		}
	},
	{
		path: '/order',
		component: () => import('../views/AdminOrder.vue')
	},
	{
		path: '/user',
		component: () => import('../views/UserOrder.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})