import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/Home.vue'

export default new Router({
	mode: 'history', //切换路径模式，变成history模式  地址栏中就不会有 #
	scrollBehavior: () => ({
		y: 0
	}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes: [{
		path: '/home',
		component: Home
	}, {
		path: '/',
		redirect: '/home'
	}, {
		path: '*',
		redirect: '/home'
	}]
})