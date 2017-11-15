const LoginScreen = require('../support/objects/screenObjects/loginScreen');
const AppScreen = require('../support/objects/screenObjects/appScreen');

let loginScreen = LoginScreen();
let appScreen = AppScreen();

let isFirst = true;

describe('Perchwell with appium', function () {

    /*Async await example of code (require >8.5.0 node version)*/
    beforeEach(function(){
        // browser.ignoreSynchronization = true;
        if(!isFirst){
            console.log('Launch !!!!');
            // return browser.driver.launchApp(); doesn't work !!!
            return browser.driver.resetApp();
        }else{
            isFirst = false;
        }
    });
    // afterEach(function(){
    //     console.log('reseting !!!' );
    //     // return browser.driver.resetApp();
    //     return browser.driver.closeApp();
    // });

    fit('first test', function () {
        return Promise.resolve()
            .then(function () {
                return loginScreen.login('test.manager','aimertest');
            })
            .then(function () {
                return appScreen.header.container.waitReady();
            })
            .then(function () {
                expect(appScreen.header.getHeaderText()).toBe('Aimer.kt');
                expect(appScreen.header.getBtnTextByNumber(0)).toBe('DASHBOARD');
                expect(appScreen.header.getBtnTextByNumber(1)).toBe('REVIEWS');
            })
    });

    it('first test clone', function () {
        return Promise.resolve()
            .then(function () {
                return element(by.xpath('.//*[@resource-id="com.itechart.aimer:id/editEmail"]')).waitReady();
            })
            .then(function () {
                return element(by.xpath('.//*[@resource-id="com.itechart.aimer:id/editEmail"]')).sendKeys('test.manager');
            })
            .then(function () {
                return element(by.xpath('.//*[@resource-id="com.itechart.aimer:id/editPassword"]')).sendKeys('aimertest');
            })
            .then(function () {
                return element(by.xpath('.//*[@resource-id="com.itechart.aimer:id/btnLogin"]')).click();
            })
            .then(function () {
                return element(by.xpath('.//*[@content-desc="drawer_open"]')).waitReady();
            })
    });

});