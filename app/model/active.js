module.exports = app => {
  const { STRING, INTEGER, DATE,BIGINT } = app.Sequelize;

  const Active = app.model.define('actives', {
    id: {
      type: INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
    user_id: { type: INTEGER, allowNull: false },
    content:{type:STRING,allowNull: false},
    descript:{type:STRING,allowNull: false},
    user_max_num:{type:INTEGER,allowNull:false},
    user_limit:{type:INTEGER,allowNull:false,defaultValue:0},
    start_at:BIGINT,//活动开始时间
    end_at:BIGINT,//活动结束时间
    createdAt:DATE,
    updatedAt:DATE,
    deletedAt:DATE
  },{
    timestamps:true,
    paranoid: true,
    underscored: false,
  });
  return Active;
};



