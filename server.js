'use strict';
// this comment is for the branch 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
const { bookSchema, bookModel } = require('./schemas/bookSchema');

sssssssssss
//connecting
app.listen(PORT, () => console.log(`${PORT} Radio!!`));

mongoose.connect(process.env.DB_PORT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION OPEN!!!")
  })
  .catch(err => {
    console.log("OH NO ERROR!!!!")
    console.log(err)
  })



//Routes
app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', getBooks)


//functions
function getBooks(req, res) {
  bookModel.find({}, (err, data) => {
    if (err) console.log(`error reading from the database: ${err}`);
    else res.send(data);
  })
}