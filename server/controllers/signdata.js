const DB = require('../db.js')

module.exports = async (ctx) => {
	const {userid} = ctx.request.body
    let res
    const mysqlSelect = DB('sign')
		    .select('sign.*', 'userInfo.*')
		    .join('userInfo', 'sign.userid', 'userInfo.user_id')
		    .orderBy('sign.id', 'desc')
	res = mysqlSelect[0]

	ctx.state.data = {
		res
	}
}