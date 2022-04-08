/**
 * @file router入口文件
 */
import Router from 'vue-router';
import routes from './routes';

export default () => {
    return new Router({
        routes,
        mode: 'hash'
    });
};
