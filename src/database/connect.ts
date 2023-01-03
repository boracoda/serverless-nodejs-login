import config from './config';

const mysql = require('serverless-mysql')({
    config: config
});

module.exports = mysql;