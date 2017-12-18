const path = require('path');
const webpackConfig = require('../../webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: [
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    /* preLoaders: [
      {
        test: /^((?!spec).)*\.js$/,
        include: path.resolve('../../src/app.vue'),
        loader: 'isparta'
      }
    ], */
    colors: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      includeAllSources: true,
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
  });
};
