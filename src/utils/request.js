/**
 * @file axios封装
 */
import axios from 'axios';
// 使用elementUI的组件来给提示
import {Message} from 'element-ui';

// 创建axios实例 timeout:超时时间 baseURL:根据自己配置的反向代理去设置不同环境的baeUrl
const instance = axios.create({
    timeout: 10000,
    baseURL: process.env.NODE_ENV === 'production' ? '' : '/'
});
const showMessage = Message;
// 文档中的统一设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 常见的http状态码信息
const httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    config.headers.token = window.sessionStorage.getItem('token') || '';
    // 根据业务需求可以在发送请求之前做些什么:例如导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob
    if (config.url.includes('pur/contract/export')) {
        config.headers.responseType = 'blob';
    }
    // 文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    if (config.url.includes('pur/contract/upload')) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
    // 响应结果里的status
    if (response.data.status === 200) {
        return Promise.resolve(response.data);
    } else {
        showMessage({
            message: response.data.message,
            type: 'error'
        });
        return Promise.reject(response.data.message);
    }
}, error => {
    if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
        const tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
        showMessage({
            message: tips,
            type: 'error'
        });
        // 根据不同的响应错误结果，做对应的事
        if (error.response.status === 401) {
            // todo token或者登陆失效情况下跳转到登录页面
        }
        return Promise.reject(error);
    } else {
        showMessage({
            message: '请求超时, 请刷新重试',
            type: 'error'
        });
        return Promise.reject(new Error('请求超时, 请刷新重试'));
    }
});

/* 封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
};

/* 封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
};
