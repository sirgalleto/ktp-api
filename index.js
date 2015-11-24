'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('co.svzosorio.ktp', ['booljs-mongoose'])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run();
