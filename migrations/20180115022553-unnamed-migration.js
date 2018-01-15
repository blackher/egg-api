'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE,BIGINT } = Sequelize;

    await queryInterface.createTable('actives', {

      id: { type: INTEGER, primaryKey: true, autoIncrement: true },//active id
      user_id: { type: INTEGER, allowNull: false },//发起活动用户id
      content:{type:STRING,allowNull: false},//活动内容
      descript:{type:STRING,allowNull: false},//活动描述
      user_max_num:{type:INTEGER,allowNull:false},//活动最多参与人数
      user_attend_num:{type:INTEGER,defaultValue:0},//当前参数的人数
      user_limit:{type:INTEGER,allowNull:false,defaultValue:0},//用户人数时候限制 0：无限制、1：限制
      start_at:BIGINT,//活动开始时间
      end_at:BIGINT,//活动结束时间
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
     await queryInterface.dropTable('actives');
  }
};
