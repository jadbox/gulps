global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
global.environment = require('exenv');

require('babel-core/register');
require('./setup')();