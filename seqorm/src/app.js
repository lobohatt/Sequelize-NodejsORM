const express = require('express');
const bodyParser = require('body-parser');
const userrouter = require('./routes/userroute');



const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userrouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port,()=>{
  console.log(`server up on port ${port}`);
});

