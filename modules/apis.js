//汇聚所有的接口
const express = require('express');
const router = express.Router();

// 端接口
router.use('/user', require('./user/userApi.js'));
//router.use('/article', require('./article/articleApi.js'));

module.exports = router;
