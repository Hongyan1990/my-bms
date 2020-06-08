const DB = require('../db.js')

module.exports = async (ctx, next) => {
	const {page, userid} = ctx.request.query
  const size = 10
  const mysqlSelect = DB('sell')
    .select('sell.*', 'userInfo.*')
    .join('userInfo', 'sell.userid', 'userInfo.user_id')
    .orderBy('sell.id', 'desc')
  let sellList
  if (userid) {
    sellList = await mysqlSelect.where('sell.openId', userid)
  } else {
    sellList = await mysqlSelect.limit(size).offset(Number(page) * size)
  }
  ctx.state.data = {
    sellList
  }
}