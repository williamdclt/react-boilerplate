/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const reduxGenerator = require('./redux/index.js');
const promptDirectory = require('inquirer-directory');

module.exports = plop => {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator('component', componentGenerator.full);
  plop.setGenerator('component:nest', componentGenerator.nest);
  plop.setGenerator('redux:saga', reduxGenerator.saga);

  plop.addHelper('directory', comp => `components/${comp}`);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
