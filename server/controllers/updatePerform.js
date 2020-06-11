const DB = require('../db.js')

module.exports = async (ctx) => {
	const {userid, score} = ctx.request.query
	try {
		await DB('perform')
			.where('userid', userid)
			.update({
				performance: score
			})
		ctx.state.data = {
			msg: '修改成功'
		}
	} catch(err) {
		ctx.state = {
	      code: -1,
	      data: {
	          msg: '修改失败'
	      }
	    }
	}
	

}