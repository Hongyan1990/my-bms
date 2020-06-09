const DB = require('../db.js')

module.exports = async (ctx) => {
	const {userid} = ctx.request.body
	try {
		await DB('attendance')
			.where('userid', userid)
			.update({
				apply_overtime: '2'
			})
		ctx.state.data = {
			msg: '审批成功'
		}
	} catch(err) {
		ctx.state = {
	      code: -1,
	      data: {
	          msg: '审批失败'
	      }
	    }
	}
	

}