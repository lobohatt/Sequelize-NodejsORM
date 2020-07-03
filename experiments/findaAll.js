router.get('/users', (req, res) => {
  User.findAll().then((response) => {
    res.status(200).json({
      status: 1,
      message: 'Users found',
      data: response
    })
  }).catch((error) => {
    res.send(`No user Found - ${error}`);
  });
});