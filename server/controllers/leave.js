const DB = require('../db.js')

module.exports = async (ctx) => {
	const {userid, reason} = ctx.request.body
	try {
		await DB('attendance')
			.where('userid', userid)
			.update({
				ask_leave: '1',
				ask_leave_reason: reason
			})
		ctx.state.data = {
			msg: '申请提交成功'
		}
	} catch(err) {
		ctx.state = {
      code: -1,
      data: {
          msg: '申请提交失败'
      }
    }
	}
	

}