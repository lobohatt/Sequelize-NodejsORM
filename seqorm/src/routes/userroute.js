const express = require('express');
const router = express.Router();
const User = require('../models/user');
const sequelize = require('../db/connection');
 

router.post('/user', (req, res) => {
  User.create(req.body).then((response) => {
    res.status(200).json({
      status: 1,
      message: "User has been created successfully",
      msg: response
    });
  }).catch((error) => {
    res.send(`Error creating User - ${error}`);
  });
});

// bulkcreate in array bulkCreate([{},{}])
router.post('/bulk-user',(req,res)=>{
    User.bulkCreate(req.body).then((response)=>{
      res.status(200).json({
        status: 1,
        message: "User has been created successfully",
        msg: response
      });
    }).catch((error)=>{
      res.send(`Error creating User - ${error}`);
    });
});

router.get('/users',(req,res)=>{
   User.findAll({
     where: {
       status: '1'
     }
   }).then((response)=>{
     res.status(200).json({
       status: 1,
       message: 'Users found',
       data: response
     })
   }).catch((error)=>{
     res.send(`No user Found - ${error}`);
   });
});

router.put('/userupdate',(req,res)=>{

  User.update({
    name: req.body.name,
    email:req.body.email,
    rollNo: req.body.rollNo
  },{
    where: {
      id: req.body.id
    }
  }).then((response)=>{
    res.status(200).json({
      status: 1,
      message: 'Users Updated',
      data: response
    })
  }).catch((error)=>{
    res.send(`Error Updating Users - ${error}`);
  });

});

router.delete('/userdel/:id',(req,res)=>{
    
    User.destroy({
      where:{
        id: req.params.id
      }
    }).then((response) => {
      res.status(200).json({
        status: 1,
        message: 'User Deleted',
        data: response
      })
    }).catch((error) => {
      res.send(`Error Deleting User - ${error}`);
    });
});

// Raw Query
router.get('/user-raw',(req,res)=>{
  
  sequelize.query("SELECT * FROM tbl_users", {
    type: sequelize.QueryTypes.SELECT
  }).then((response)=>{
    res.status(200).json({
      status: 1,
      message: 'Users Found',
      data: response
    })
  }).catch((error)=>{
    res.send(`Users Not found - ${error}`);
  });

});

router.put('/userupdate-raw', (req, res) => {

  sequelize.query("UPDATE tbl_users SET name ='"+req.body.name+"', email ='"+req.body.email+"' WHERE id = "+req.body.id+" ", {
    type: sequelize.QueryTypes.UPDATE
  }).then((response) => {
    res.status(200).json({
      status: 1,
      message: 'User updated successfully',
      data: response
    })
  }).catch((error) => {
    res.send(`Users Not found - ${error}`);
  });

});


router.get('/', (req, res) => {

  res.status(200).json({
    status: 1,
    message: "Welcome to Home page"
  });
});

module.exports = router;