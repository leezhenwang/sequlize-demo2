const express = require('express');
const router = express.Router();
const db = require('../../models').db;
const UserService = require('../userService')
const Common = require('../../../common/common')
var uuid = require('uuid');

// 添加用户
const operate = (req, res, next) => {
  // 获取接口参数
  const params = req.body;
  const updateArr = ['userName','password','nickName','email'];
  let updateObj = {};
  updateArr.forEach(function(item){
    let obj = {};
    params[item] ? obj[item] = params[item] : {};
    Object.assign(updateObj,obj)
  })
  console.log(updateObj)
  db.transaction(transaction => {
    UserService.updateUser(updateObj,params.userId).then(data=>{
      res.send('更新成功！');
    }).catch(error =>{
      console.log(error)
      console.log(Common.handleError(error))
      res.send(Common.handleError(error))
    })
  })
}

router.post('/', operate);

module.exports = router;