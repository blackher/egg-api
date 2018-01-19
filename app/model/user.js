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
      nickName:{type:STRING},
      avatarUrl:{type:STRING},
      gender:{type:INTEGER},//性别 0：未知、1：男、2：女
      province:{type:STRING},
      city:{type:STRING},
      country:{type:STRING},
      createdAt: DATE,
      updatedAt: DATE,
  },{
    timestamps:true,
    paranoid: true,
    underscored: false,
  });

  return User;
};