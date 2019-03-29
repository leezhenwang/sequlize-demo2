const Model = require('../models');
const sequelize = require('sequelize');

const UserDAO = {
  // 新增一个user
  createUser(userInfo) {
    console.log(userInfo)
    return Model.UserModel.create(userInfo);
  },
  // 删除一个user
  deleteUser(userInfo) {
    return Model.UserModel.destroy({
      where:{
        userId: userInfo.userId
      }
    });
  },
  // 更新一个user
  updateUser(userInfo,userId) {
    return Model.UserModel.update(userInfo,{
      where:{
        userId: userId
      }
    });
  },
  // 查询一个user
  detailUser(userInfo) {
    return Model.UserModel.findOne({
      where:{
        userId: userInfo.userId
      }
    });
  },
  // 查询所有user
  listUser(userInfo) {
    return Model.UserModel.findAll({
      offset: (userInfo.pageNo - 1) * userInfo.pageSize,//开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
      limit: userInfo.pageSize//每页限制返回的数据条数
    });
  },
};

module.exports = UserDAO;