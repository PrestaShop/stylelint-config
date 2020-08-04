'use strict';

module.exports = {
  extends: ['stylelint-config-twbs-bootstrap/scss'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'property-blacklist': [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'transition'
    ],
    'function-blacklist': ['calc'],
    'scss/dollar-variable-default': [
      true,
      {
        ignore: 'local'
      }
    ],
    'unicode-bom': 'never',
    indentation: 2,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: ['> 2%'],
        ignore: [
          'rem',
          'word-break',
          'css3-cursors',
          'css-font-stretch',
          'css-resize',
          'multicolumn',
          'intrinsic-width',
          'user-select-none',
          'css-appearance'
        ]
      }
    ]
  }
};
