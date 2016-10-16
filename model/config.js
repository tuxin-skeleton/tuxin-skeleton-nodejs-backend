/**
 * Created by ufk on 15/10/2016.
 */
var fs = require('fs')
    , ini = require('ini');

var config = ini.parse(fs.readFileSync(__dirname + '/../config/config.ini', 'utf-8'));

module.exports=config;