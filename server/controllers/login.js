const DB = require('../db.js')

// 登录授权接口
module.exports = async (ctx, next) => {
	const {user_name} = ctx.request.query
	if(user_name) {
		const searchUser = await DB('userInfo').select().where('user_name', user_name)
		console.log(searchUser)
		if(searchUser.length > 0) {
			ctx.state.data = {
        msg: 'success',
        userid: searchUser[0].user_id
      }
      return
		} else {
			ctx.state = {
        code: -1,
        data: {
            msg: '用户不存在'
        }
      }
		}
	}
}
