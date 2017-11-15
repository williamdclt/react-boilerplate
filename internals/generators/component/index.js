/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const config = require('../../config.js');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'connected',
      default: false,
      message: 'Is it connected?',
    },
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.Component',
        'React.PureComponent',
      ],
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    const splits = data.name.split('/');
    // eslint-disable-next-line
    data.name = splits.pop();
    // eslint-disable-next-line
    data.path = ['.'].concat(splits).join('/');
    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/component_func.jsx.hbs';
        break;
      }
      default: {
        componentTemplate = './component/component_class.jsx.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/{{name}}.jsx`,
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/{{name}}Wrapper.jsx`,
        templateFile: './component/wrapper.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/tests/{{name}}.test.jsx`,
        templateFile: './component/test.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/tests/.eslintrc`,
        templateFile: './component/eslintrc.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${config.appPath}/components/{{path}}/{{name}}/tests/{{ name }}.story.jsx`,
        templateFile: './component/story.jsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
