// const DB = require('../db.js')
/*id int not null auto_increment primary key,
    userid varchar(100) not null,
    goods_id varchar(100) not null,
    price float not null,
    sell_count varchar(100) not null,
    favorable varchar(100),
    negative varchar(100),
    favorable_rate float,
    saleroom float not null,
    performance varchar(100),
    rank int not null*/
// const userList = [
// 	{user_id: '3297', user_name: 'admin', sex: '1', year_work: '0', auth: '0'},
// 	{user_id: '2917', user_name: '何良', sex: '1', year_work: '3', auth: '1'},
// 	{user_id: '6799', user_name: '张红', sex: '0', year_work: '5', auth: '1'},
// 	{user_id: '9078', user_name: '刘星辰', sex: '1', year_work: '2', auth: '1'},
// 	{user_id: '2242', user_name: '赵亮', sex: '1', year_work: '4', auth: '1'},
// ]

// const userList = [
// 	{userid: '2242', goods_id: '0001', price: 50.00, sell_count: '20', favorable: '18', negative: '2', favorable_rate: 0.9, saleroom: 1000, performance: '', rank: 1},
// 	{userid: '2242', goods_id: '0002', price: 100.00, sell_count: '10', favorable: '10', negative: '0', favorable_rate: 1, saleroom: 1000, performance: '', rank: 1},
// ]

// userList.map(async (data) => {
// 	const {userid, goods_id, price, sell_count, favorable, negative, favorable_rate, saleroom, performance, rank} = data
// 	try {
//     console.log('开始存储')
//     await DB('sell').insert({userid, goods_id, price, sell_count, favorable, negative, favorable_rate, saleroom, performance, rank})
//     console.log('存储完成')
//   } catch (e) {
//     console.log(e)
//   }
// })

// function rand(min,max) {
//     return Math.floor(Math.random()*(max-min))+min;
// }