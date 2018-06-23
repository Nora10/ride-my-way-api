// pascal case becos its a class Joi
// const Joi = require('joi');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();


const router = require('./routes/routes');

// view engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api/v1', router);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
module.exports = app;
