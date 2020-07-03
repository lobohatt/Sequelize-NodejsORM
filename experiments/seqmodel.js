var User = sequelize.define("tbl_users", {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
  }

}, {
  modelName: "User",
  timestamps: false
});

//  For more than one model
// to sync a particular model
// User.sync();