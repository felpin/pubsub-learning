require('dotenv').config()

const publish = require('./pub');
const subscription = require('./sub');

publish();
subscription();
