const multer = require('koa-multer');//加载koa-multer模块

// 上传 图片
const storage = multer.diskStorage({
  //文件保存路径
  destination: function(req, file, cb) {
      cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function(req, file, cb) {
      const fileFormat = (file.originalname).split(".");
      cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
    //加载配置
const upload = multer({
    storage: storage
});

module.exports = upload