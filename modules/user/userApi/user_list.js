const express = require('express');
const router = express.Router();
const db = require('../../models').db;
const UserService = require('../userService')
const Common = require('../../../common/common')

// 添加用户
const operate = (req, res, next) => {
  // 获取接口参数
  console.log('请求参数')
  console.log(req.query)
  const params = req.query;
  db.transaction(transaction => {
    UserService.listUser({
      pageNo: parseInt(params.pageNo),
      pageSize: parseInt(params.pageSize)
    }).then(data=>{
      console.log(data)
      res.send(data);
    }).catch(error =>{
      console.log(error)
      res.send(Common.handleError(error))
    })
  })
}

router.get('/', operate);

module.exports = router;