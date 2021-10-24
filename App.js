const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');


// const mongoose = require('mongoose');

//Importing routes
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./Routes/posts');
app.use('/posts', postsRoute);

//Middleware (the middleware is on the routes folder, just left this here)
// app.use('/posts', () => {
//   console.log('This is a middleware running');
// })

//Routes
app.get('/', (req, res) => {
  res.send('we are home');
});

app.get('/posts', (req, res) => {
  res.send('we are on posts');
});

//connect to db

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected to the database");
})


//how to start listening to the server
app.listen(3000);