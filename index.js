const http = require('http');
const https = require('https');
const fs = require('fs');
const urlParse = require('url-parse');

module.exports = (url, options) => {
    let parse = urlParse(url); 
};