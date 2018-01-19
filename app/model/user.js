module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
     id: {
      type: INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
      openid: { type: STRING, allowNull: false },
      nickName:{type:STRING,allowNull: false},
      avatarUrl:{type:STRING,allowNull:false},
      gender:{type:INTEGER,allowNull:false},//性别 0：未知、1：男、2：女
      province:{type:STRING,allowNull:false},
      city:{type:STRING,allowNull:false},
      country:{type:STRING,allowNull:false},
      createdAt: DATE,
      updatedAt: DATE,
  },{
    timestamps:true,
    paranoid: true,
    underscored: false,
  });

  return User;
};