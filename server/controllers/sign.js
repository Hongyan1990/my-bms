const DB = require('../db.js')
const {port, host} = require('../config.js')

module.exports = async (ctx) => {
	console.log('-------------->', ctx.request.query)
	const {userid} = ctx.request.query
	const url = 'http://' + host + ':' + port 
	const imgPath = url + '/public/uploads/' + ctx.req.file.filename
	const searchSign = await DB('sign').select().where('userid', userid)
	const searchAttendance = await DB('attendance').select().where('userid', userid)
    const count = searchSign.length + 1;
    let res
    console.log('-------------------1------------------')
    try {
    	await DB('sign').insert({userid, image:imgPath, count })
    	if(searchAttendance.length) {
    		await DB('attendance')
				.where('userid', userid)
				.update({
					sign_count: count
				})
    	} else {
    		const param = {
				userid,
				late_count: '0',
				leave_count: '0',
				sign_count: count,
				overtime_count: '0',
				ask_leave: 0,
				ask_leave_reason: '',
				apply_overtime: '0',
				image: imgPath,
				remark: ''
			}
			await DB('attendance').insert(param)
    	}
    	const mysqlSelect = DB('sign')
		    .select('sign.*', 'userInfo.*')
		    .join('userInfo', 'sign.userid', 'userInfo.user_id')
		    .orderBy('sign.id', 'desc')
		res = mysqlSelect[0]
    } catch(err) {

    }

	ctx.state.data = {
		res
	}
}