/**
 * @file mock入口文件
 * 定义格式 '请求方式 接口名': 数据，例如 'GET /api/list' : 数据
 * 请求方式支持 GET/POST/PUT/DELETE
 * 数据与约定真实接口保持一致（模拟方式直接返回数据/通过文件require/函数形式均可）
 * 全局公共接口写在该文件中
 * 各个页面接口通过require引入合并，参考demo
 */
const data = require('./data.json');
const Demo = require('./demo/api.js');
const proxy = {
    'POST /api/login': (req, res) => {
        const {password, username} = req.body;
        if (password === '888888' && username === 'admin') {
            return res.send(data);
        } else {
            return res.send({status: '403', message: '用户名或密码不正确！' });
        }
    }
}
let proxyTotal = Object.assign(proxy,Demo);
module.exports = proxyTotal;