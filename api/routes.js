var models = require('../models');
var express = require('express');
var router = express.Router();


module.exports = {
	'/movie': require('./moviecontroller')
};
