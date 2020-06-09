/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/api'
})
const upload = require('../middlewares/upload.js')
const controllers = require('../controllers')
// --- 登录与授权 Demo --- //
// 登录接口
router.get('/login', controllers.login)

// 打卡
router.post('/sign', upload.single('file'), controllers.sign)

// 获取考勤数据
router.get('/signinfo', controllers.signInfo)

// 申请请假
router.post('/leave', controllers.leave)

// 申请加班
router.get('/overtime', controllers.overtime)

// 销售数据
router.get('/sell', controllers.sell)

// 分配加班
router.get('/applywork', controllers.applywork)

// 审批请假
router.get('/applyleave', controllers.applyleave)

// 获取打卡数据
router.get('/signdata', controllers.signdata)

// 获取员工绩效
router.get('/performance', controllers.performance)

module.exports = router
