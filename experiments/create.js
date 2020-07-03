User.create({
  name: 'lobo',
  email: 'test@gmail.com',
  rollNo: 12,
  status: 1
}).then((response) => {
  res.status(200).json({
    status: 1,
    message: "User has been created successfully",
    msg: response
  });
}).catch((error) => {
  res.send(`Error creating User- ${error}`);
});
