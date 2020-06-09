import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import {
  Button, Container, Header, Main, Row, Col,
  Table, TableColumn, Dialog, Input, Form, FormItem,
  Tooltip, Upload, Loading, Message, Tabs, TabPane, Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui'

import App from './app.vue'
// /home/hongyan/Desktop/hongyan/my-order/dist
import router from './routes/router.js'
import createStore from './store/store.js'
import cookie from './util/cookie.js'
import './style.css'

Vue.use(Router)
Vue.use(Vuex)

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.prototype.$message = Message

const store = createStore()

router.beforeEach((to, from, next) => {
  const username = cookie.getCookie('username')
  const userid = cookie.getCookie('userid')
  store.dispatch('saveUsername', username)
  store.dispatch('saveUserid', userid)
  if(username === null && to.path !== '/login') {
  	next('/login')
  } else {
  	next()
  }
  
})
router.beforeResolve((to, from, next) => {
  console.log('router before resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('router after each')
})


new Vue({
	router,
  store,
	render: h => h(App)
}).$mount('#root')