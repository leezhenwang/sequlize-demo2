//用于聚合数据库操作
const DAO = require('../daos');

const UserService = {
  /**
   * @description 创建user
   * @param {Object} userInfo - user信息
   * @returns {Promise} - Sequelize 数据库操作的结果
   */
  createUser(userInfo) {
    return DAO.UserDAO.createUser(userInfo);
  },
};

module.exports = UserService;