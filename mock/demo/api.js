/**
 * @file 页面api定义文件
 * 定义格式 '请求方式 接口名': 数据，例如 'GET /api/list' : 数据
 */

const api = {
  'GET /api/test': [1, 2, 3],
  'POST /api/list': require('./list.json')
}
module.exports = api;