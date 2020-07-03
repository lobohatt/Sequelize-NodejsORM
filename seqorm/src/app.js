const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

const sequelize = new Sequelize('node_orm','root','',{
  host:"localhost",
  dialect:"mysql"
});

sequelize.authenticate().then((success)=>{
  console.log("Successfully connected with database");
}).catch((error)=>{
  console.log("Error connecting with database");
});

const User = sequelize.define("tbl_users", {

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
  modelName: "Userdata",
  timestamps: false
});

sequelize.sync();

app.post('/user',(req,res)=>{
  User.create(req.body).then((response)=>{
    res.status(200).json({
      status: 1,
      message:"User has been created successfully",
      msg:response
    });
  }).catch((error)=>{
    res.send(`Error creating User- ${error}`);
  });
});



app.get('/',(req,res)=>{
  
  res.status(200).json({
    status: 1,
    message: "Welcome to Home page"
  });
});

app.listen(port,()=>{
  console.log(`server up on port ${port}`);
});

