/**
 * @file 页面路由配置
 */
import Demo from '../views/demo/demo';
import Router from '../views/demo/router';
import Store from '../views/demo/store';
export default [
    {
        path: '/demo',
        component: Demo
    },
    {
        path: '/router',
        component: Router
    },
    {
        path: '/vuex',
        component: Store
    }
];
