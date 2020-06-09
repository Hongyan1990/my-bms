const DB = require('../db.js')

module.exports = async (ctx, next) => {
	const {page, userid} = ctx.request.query
  const size = 10
  const mysqlSelect = DB('attendance')
    .select('attendance.*', 'userInfo.*')
    .join('userInfo', 'attendance.userid', 'userInfo.user_id')
    .orderBy('attendance.id', 'desc')

  let signList
  let count
  if (userid) {
    signList = await mysqlSelect.where('attendance.userid', userid)
  } else {
    signList = await mysqlSelect.limit(size).offset(Number(page-1) * size)
    count = await DB('attendance').count('id')
  }
  ctx.state.data = {
    signList,
    count: count ? count[0]['count(`id`)']: 0
  }
}