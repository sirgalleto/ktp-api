'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('co.svzosorio.ktp')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();
