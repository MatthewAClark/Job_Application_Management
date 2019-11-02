/* eslint-disable no-console */
if(!process.env.NODE_ENV)  process.env.NODE_ENV = 'dev';
if(process.env.NODE_ENV !== 'production') require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});


const jsonParse = require('body-parser').json();





const express = require('express');
const app = require('express')();
//const url = require('./config')
const cors = require('cors');


// Define routes
const apiRoutes = require('./routes/apiRoutes.js');

app.set('view engine', 'ejs');

// corse
app.use(cors());

// parse JSON
app.use(jsonParse);

// Static express
app.use(express.static('public'));

//API routes/
app.use('/api', apiRoutes);

// Server status
app.get('/', (req, res) => {
  res.status(200).send('Server working');
});
//


// Error handling
app.use((err, req, res, next) => res.status(err.status).send({error: err.error}));



module.exports = app; 
