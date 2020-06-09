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
// 	{userid: '3297', performance: 98.00, remark: ''},
// 	{userid: '2917', performance: 95.00, remark: ''},
// 	{userid: '6799', performance: 89.00, remark: ''},
// 	{userid: '9078', performance: 92.00, remark: ''},
// 	{userid: '2242', performance: 96.00, remark: ''},
// ]

// const userList = [
// 	{userid: '2242', goods_id: '0001', price: 50.00, sell_count: '20', favorable: '18', negative: '2', favorable_rate: 0.9, saleroom: 1000, performance: '', rank: 1},
// 	{userid: '2242', goods_id: '0002', price: 100.00, sell_count: '10', favorable: '10', negative: '0', favorable_rate: 1, saleroom: 1000, performance: '', rank: 1},
// ]

// userList.map(async (data) => {
// 	const {userid, performance, remark} = data
// 	try {
//     console.log('开始存储')
//     await DB('perform').insert({userid, performance, remark})
//     console.log('存储完成')
//   } catch (e) {
//     console.log(e)
//   }
// })

// function rand(min,max) {
//     return Math.floor(Math.random()*(max-min))+min;
// }