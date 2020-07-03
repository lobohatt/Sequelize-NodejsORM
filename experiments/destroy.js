router.delete('/userdel/:id', (req, res) => {

  User.destroy({
    where: {
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
