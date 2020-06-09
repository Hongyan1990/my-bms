const DB = require('../db.js')

module.exports = async (ctx) => {
	const {userid} = ctx.request.query
    let res

    const mysqlSelect = await DB('sign')
		    .select('sign.*', 'userInfo.*')
		    .join('userInfo', 'sign.userid', 'userInfo.user_id')
		    .orderBy('sign.id', 'desc')
	console.log(mysqlSelect)
	res = mysqlSelect[0]

	ctx.state.data = {
		res
	}
}