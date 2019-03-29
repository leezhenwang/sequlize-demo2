//用于汇聚所有的user相关的接口
const express = require('express');
const router = express.Router();

router.use('/create', require('./userApi/user_create'));//创建user
router.use('/detail', require('./userApi/user_detail'));//获取user的详情
router.use('/list', require('./userApi/user_list'));//获取user列表
router.use('/update', require('./userApi/user_update'));//更新user
router.use('/delete', require('./userApi/user_delete'));//删除user

module.exports = router;