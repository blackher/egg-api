'use strict';

module.exports = {
  up:  async function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      openid: { type: STRING, allowNull: false },
      nickName:{type:STRING,allowNull: false},
      avatarUrl:{type:STRING,allowNull:false},
      gender:{type:INTEGER,allowNull:false},//性别 0：未知、1：男、2：女
      province:{type:STRING,allowNull:false},
      city:{type:STRING,allowNull:false},
      country:{type:STRING,allowNull:false},
      createdAt: DATE,
      updatedAt: DATE,
      deletedAt:DATE
    });

    //await queryInterface.addIndex('users', ['email'], { indicesType: 'UNIQUE' });


  },

  down: async function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
     await queryInterface.dropTable('users');

  }
};


