'use strict';

module.exports = {
  extends: ['stylelint-config-twbs-bootstrap'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'property-disallowed-list': [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'transition',
    ],
    'function-disallowed-list': ['calc'],
    'scss/dollar-variable-default': [
      true,
      {
        ignore: 'local',
      },
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
          'css-appearance',
        ],
      },
    ],
    'number-leading-zero': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
  },
};
