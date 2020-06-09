import cookie from '../util/cookie.js'
const axios = require('axios')

const createError = require('../util/util.js')

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(response => {
      const data = response.data
      if (!data) {
        reject(createError(400, 'no data'))
        return
      }
      resolve(data)
    }).catch(err => {
      console.log(err)
      if (err.response.status === 401) {
        reject(createError(401, 'need login'))
        return
      }
      if (err.response.status === 400) {
        reject(createError(400, err.response.data.message))
        return
      }
      if (err.response.status === 404 && err.response.data.detail === 'Not found.') {
        resolve({status: false, detail: '该用户不存在'})
        return
      }
      if (err.response.status === 404) {
        reject(createError(404, '路径错误'))
      }
    })
  })
}

module.exports = {
  getSignData (userid) {
    return handleRequest(request.get(`api/signdata/?userid=${userid}`))
  },
  getSignInfo (userid) {
    return handleRequest(request.get(`api/signinfo/?userid=${userid}`))
  },
  getSignInfoByPage (page) {
    return handleRequest(request.get(`api/signinfo/?page=${page}`))
  },
  applyLeave (data) {
    return handleRequest(request.post('api/leave/', data))
  },
  applyOvertime (userid) {
    return handleRequest(request.get(`api/overtime/?userid=${userid}`))
  },
  getSellData (userid) {
    return handleRequest(request.get(`api/sell/?userid=${userid}`))
  },
  getPerformance (page) {
    return handleRequest(request.get(`api/performance/?page=${page}`))
  },
  approveOvertime (userid, count) {
    return handleRequest(request.get(`api/applywork/?userid=${userid}&count=${count}`))
  },
  approveLeave (userid, count) {
    return handleRequest(request.get(`api/applyleave/?userid=${userid}&count=${count}`))
  },
  login (username) {
    return handleRequest(request.get(`api/login/?user_name=${username}`))
  }
}
