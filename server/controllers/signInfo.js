const DB = require('../db.js')

module.exports = async (ctx, next) => {
	const {page, userid} = ctx.request.query
  const size = 10
  const mysqlSelect = DB('attendance')
    .select('attendance.*', 'userInfo.*')
    .join('userInfo', 'attendance.userid', 'userInfo.user_id')
    .orderBy('attendance.id', 'desc')
  let signList
  if (userid) {
    signList = await mysqlSelect.where('attendance.openId', userid)
  } else {
    signList = await mysqlSelect.limit(size).offset(Number(page) * size)
  }
  ctx.state.data = {
    signList
  }
}