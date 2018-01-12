module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
    openid: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};