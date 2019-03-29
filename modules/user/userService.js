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
  /**
   * @description 删除user
   * @param {Object} userId - userId
   * @returns {Promise} - Sequelize 数据库操作的结果
   */
  deleteUser(userInfo) {
    return DAO.UserDAO.deleteUser(userInfo);
  },
  /**
   * @description 更新user
   * @param {Object} userId - userId
   * @returns {Promise} - Sequelize 数据库操作的结果
   */
  updateUser(userInfo,userId) {
    return DAO.UserDAO.updateUser(userInfo,userId);
  },
  /**
   * @description 获取user详情
   * @param {Object} userInfo - userInfo
   * @returns {Promise} - Sequelize 数据库操作的结果
   */
  detailUser(userInfo) {
    return DAO.UserDAO.detailUser(userInfo);
  },
   /**
   * @description 获取user详情
   * @param {Object} userInfo - userInfo
   * @returns {Promise} - Sequelize 数据库操作的结果
   */
  listUser(userInfo) {
    return DAO.UserDAO.listUser(userInfo);
  },
};

module.exports = UserService;