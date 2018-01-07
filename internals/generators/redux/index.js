/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const config = require('../../config.js');
const componentExists = require('../utils/componentExists');
const sagaGenerator = require('./saga');

module.exports = {
  saga: sagaGenerator,
};
