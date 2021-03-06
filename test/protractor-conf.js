exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    //'browserName': 'firefox'
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  chromeOnly: true,
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
