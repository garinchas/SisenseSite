let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

let reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'report.html',
    showSummary: true,
    reportTitle: "Sisense report"
});

exports.config = {

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    onPrepare: function () {
        global.EC = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(reporter);
    },

    directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        'ignoreSynchronization': true,
        'chromeOptions':{
            args: ['--start-maximized']
        }
    },

    framework: 'jasmine2',

    specs: ['./features/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    }
};