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
      openid: { type: STRING },
      nickName:{type:STRING},
      avatarUrl:{type:STRING},
      gender:{type:INTEGER},//性别 0：未知、1：男、2：女
      province:{type:STRING},
      city:{type:STRING},
      country:{type:STRING},
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


