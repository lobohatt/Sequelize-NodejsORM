const Model = Sequelize.Model;

class User extends Model { }

User.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  rollNo: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM("1", "0"),
    defaultValue: "1"
  },
}, {
  timestamps: false,
  modelName: "tbl_users",
  sequelize
});
