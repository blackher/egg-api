'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
     const { STRING, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable('joins', {

      id: { type: INTEGER, primaryKey: true, autoIncrement: true },//join id
      active_user_id: { type: INTEGER, allowNull: false },//发起活动用户id
      join_user_id:{type:STRING,allowNull: false},//参与活动用户id
      createdAt:DATE,
      updatedAt:DATE,
      deletedAt:DATE
    });
  },

  down: async function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('joins');
  }
};
