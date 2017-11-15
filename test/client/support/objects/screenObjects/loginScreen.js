
let LoginScreen = function(){

    let container = element(by.xpath('.//hierarchy/android.widget.FrameLayout'));
    let config = {
        userNameInput: by.xpath('.//*[@resource-id="com.itechart.aimer:id/editEmail"]'),
        passInput: by.xpath('.//*[@resource-id="com.itechart.aimer:id/editPassword"]'),
        signInBtn: by.xpath('.//*[@resource-id="com.itechart.aimer:id/btnLogin"]')
    };

    return {
        get userNameInput(){
            return container.element(config.userNameInput);
        },
        get passInput(){
            return container.element(config.passInput);
        },
        get signInBtn(){
            return container.element(config.signInBtn);
        },
        login: function(user,pass){
            let self = this;
            return Promise.resolve()
                // .then(function () {
                //     return browser.driver.wait(()=>{
                //         return browser.driver.findElements(config.userNameInput)
                //             .then(function (arr) {
                //                 return arr.length>0;
                //             })
                //     })
                // })
                // .then(function () {
                //     return browser.driver.wait(()=>{
                //         return browser.driver.findElement(config.userNameInput).isDisplayed();
                //     })
                // })
                // .then(function () {
                //     return browser.driver.findElement(config.userNameInput).sendKeys(user);
                // })
                // .then(function () {
                //     return browser.driver.findElement(config.passInput).sendKeys(pass);
                // })
                // .then(function () {
                //     return browser.driver.findElement(config.signInBtn).click();
                // })
                .then(function () {
                    return self.userNameInput.waitReady(40000);
                })
                .then(function () {
                    return self.userNameInput.sendKeys(user);
                })
                .then(function () {
                    return self.passInput.sendKeys(pass);
                })
                .then(self.signInBtn.click);
        }
    }
};

module.exports = LoginScreen;