
const jasmineReporters = require('jasmine-reporters');

exports.config = {

    plugins: [
        {path: '../client/support/utils/protractorExtensions.js'},
        {path: '../client/support/utils/timeOutExtension.js'}
    ],

    seleniumAddress: 'http://localhost:4723/wd/hub',

    capabilities: {
        browserName: '',
        // 'appium-version': '1.7.1',
        platformName: 'Android',
        platformVersion: '8.0',
        deviceName: 'Android Emulator',
        appWaitPackage: 'com.itechart.aimer',
        appWaitActivity: 'com.itechart.aimer.ui.activities.SetupActivity,com.itechart.aimer.ui.activities.LoginActivity,com.itechart.aimer.ui.activities.TabsActivity,com.itechart.aimer.ui.activities.GoalDetailsActivity,com.itechart.aimer.ui.activities.EmployeeActivity,com.itechart.aimer.ui.activities.RelevantTasksActivity,com.itechart.aimer.ui.activities.SettingsActivity,com.itechart.aimer.ui.activities.RecentEventsActivity',
        // automationName: 'selendroid',
        // automationName: 'UIAutomator2',
        // autoWebView: true,
        // clearSystemFiles: true,
        // fullReset: true,
        newCommandTimeout: '200',
        app: './apk/test-app.apk'
        // specs: '../client/functionalTests/*.js'
    },

    // baseUrl: 'https://staging.perchwell.com/',

    // params: env[process.env.ENVIRONMENT].params,

    // directConnect: true,

    specs: '../client/functionalTests/*.js',

    // restartBrowserBetweenTests: true,

    // beforeLaunch: function() {
    // },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
        browser.ignoreSynchronization = true;
    },


    ignoreUncaughtExceptions: true,

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1200000
    },

    allScriptsTimeout: 12000
};