import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import './assets/styles/global.styl';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {get, post} from './utils/request';
import createRouter from './router/index';
import createStore from './store/store';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.get = get;
Vue.prototype.post = post;
const router = createRouter();
const store = createStore();
new Vue({
    // 注入router
    router,
    // 注入store
    store,
    render: (h) => h(App)
}).$mount('#ecos');
