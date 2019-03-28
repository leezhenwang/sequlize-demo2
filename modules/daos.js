//汇聚所有的数据库操作
const UserDAO = require('./user/userDao');

const DAO = {
  UserDAO: UserDAO,
};

module.exports = DAO;