// const DB = require('../db.js')

// const userList = [
// 	{user_id: '3297', user_name: 'admin', sex: '1', year_work: '0', auth: '0'},
// 	{user_id: '2917', user_name: '何良', sex: '1', year_work: '3', auth: '1'},
// 	{user_id: '6799', user_name: '张红', sex: '0', year_work: '5', auth: '1'},
// 	{user_id: '9078', user_name: '刘星辰', sex: '1', year_work: '2', auth: '1'},
// 	{user_id: '2242', user_name: '赵亮', sex: '1', year_work: '4', auth: '1'},
// ]

// userList.map(async (data) => {
// 	const {user_id, user_name, sex, year_work, auth} = Object.assign(data, {user_id: rand(1000,9999)})
// 	try {
//     console.log('开始存储')
//     await DB('userInfo').insert({user_id, user_name, sex, year_work, auth})
//     console.log('存储完成')
//   } catch (e) {
//     console.log(e)
//   }
// })

// function rand(min,max) {
//     return Math.floor(Math.random()*(max-min))+min;
// }