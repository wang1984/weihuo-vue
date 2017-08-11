import Vue from 'vue'
import App from './App.vue'


import router from './routerConfig.js'

import axios from 'axios'

//axios 是不能 使用 Vue.use()的
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

axios.interceptors.request.use(function(config) { //配置发送请求的信息
	//store.dispatch('showLoading')
	return config;
}, function(error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
	//store.dispatch('hideLoading')
	return response;
}, function(error) {

	return Promise.reject(error);
});
Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

new Vue({
	el: '#app',
	render: h => h(App),
	router: router
})