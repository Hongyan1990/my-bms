import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/order'
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