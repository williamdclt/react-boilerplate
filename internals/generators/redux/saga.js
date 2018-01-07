const config = require('../../config.js');
const fileExists = require('../utils/fileExists');

module.exports = {
  description: 'Add a saga',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(
            `${config.appPath}/redux/${value}`,
            `${value}.saga.js`,
          )
            ? `redux/${value}/${value}.saga.js already exists`
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: `${config.appPath}/redux/{{name}}/{{name}}.saga.js`,
        templateFile: './redux/saga.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
