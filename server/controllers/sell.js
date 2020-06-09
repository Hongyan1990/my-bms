const DB = require('../db.js')

module.exports = async (ctx, next) => {
	const {page, userid} = ctx.request.query
  const size = 10
  const mysqlSelect = DB('sell')
    .select('sell.*', 'userInfo.*')
    .join('userInfo', 'sell.userid', 'userInfo.user_id')
    .orderBy('sell.id', 'desc')
  let sellList
  let count
  if (userid) {
    sellList = await mysqlSelect.where('sell.userid', userid)
  } else {
    sellList = await mysqlSelect.limit(size).offset(Number(page-1) * size)
    count = await DB('sell').count('id')
  }
  ctx.state.data = {
    sellList,
    count: count ? count[0]['count(`id`)']: 0
  }
}