module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Join = app.model.define('join', {
    id: {
      type: INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
    active_user_id: { type: INTEGER, allowNull: false },//发起活动用户id
    join_user_id:{type:STRING,allowNull: false},//参与活动用户id
    createdAt:DATE,
    updatedAt:DATE,
    deletedAt:DATE
  },{
    timestamps:true,
    paranoid: true,
    underscored: false,
  });

  return Join;
};