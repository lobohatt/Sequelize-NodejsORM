router.put('/userupdate', (req, res) => {

  User.update({
    name: req.body.name,
    email: req.body.email,
    rollNo: req.body.rollNo
  }, {
    where: {
      id: req.body.id
    }
  }).then((response) => {
    res.status(200).json({
      status: 1,
      message: 'Users Updated',
      data: response
    })
  }).catch((error) => {
    res.send(`Error Updating Users - ${error}`);
  });

});