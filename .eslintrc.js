module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '15.5',
    },
  },
  plugins: [
    'classes', // checks class style
    'mocha',
    'import',
  ],
  extends: [
    'airbnb',
    // Turns off all rules that are unnecessary or might conflict with Prettier
    'prettier',
    'prettier/react',
  ],
  rules: {
    'no-continue': 0, // because of saga
    'prefer-destructuring': 1,
    'prefer-promise-reject-errors': 0,
    'react/no-typos': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-console': 'error',
    /*****
     ***** AIRBNB RELAX
     *****/
    'no-use-before-define': 0, // Does not work properly with hoisting :( disallow the use of variables before they are defined,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/interactive-supports-focus': 0, // Enforce that elements with interactive handlers like onClick must be focusable.
    'jsx-a11y/no-static-element-interactions': 0, // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
    'import/prefer-default-export': 0, // Ensure a default export is present, given a default import.
    'import/named': 2, // Verifies that all named imports are part of the set of named exports in the referenced module.
    /*****
     ***** CLASSES PLUGIN RULES
     *****/
    'classes/name': [2, 'class', 'method'], // class name should start with upper case & method name should start with lower case
    'classes/style': 2, // enforce order of definition of method in order
    /* by default object is not accepted, but style params can be shaped . object is to restrictive*/
    'react/forbid-prop-types': [1, { forbid: ['any', 'array'] }],
  },
  overrides: [
    {
      files: ['src/**/*.test.js', 'src/test/**/*.js'],
      globals: {
        it: true,
        beforeEach: true,
        describe: true,
        before: true,
        after: true,
      },
      rules: {
        /*****
         ***** AIRBNB RELAX FOR TESTS
         *****/
        'no-unused-expressions': 0,
        'no-console': 0,
        'prefer-arrow-callback': 0, // because of this issue https://github.com/mochajs/mocha/issues/2018
        'func-names': 0, // because of this issue https://github.com/mochajs/mocha/issues/2018
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'dot-notation': 'off',
        /*****
         ***** MOCHA
         *****/
        'mocha/no-exclusive-tests': 'error',
      },
    },
    {
      files: ['**/*/publisherlabs/**/*.js', '**/*/stories/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'global-require': 'off',
      },
    },
  ],
}
