const DB = require('../db.js')

module.exports = async (ctx, next) => {
	const {page} = ctx.request.query
  const size = 10
  const performList = await DB('perform')
    .select('*')
    .orderBy('performance', 'desc')
    .limit(size).offset(Number(page-1) * size)
  const count = await DB('perform').count('id')
  ctx.state.data = {
    performList,
    count: count ? count[0]['count(`id`)']: 0
  }
}