const express = require('express');
const bodyParser = require('body-parser'); //maybe uneccesery

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_HOST } = require('./constants');
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify:false,
};

mongoose.connect(url, options);
const connection = mongoose.connection;
mongoose.Promise = global.Promise;


connection.on('error', err => console.log('connection error: ', err));
connection.once('open', () => console.log('connected to: ', connection.name));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});