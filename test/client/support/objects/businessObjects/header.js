
let Header = function(){

    let container = element(by.xpath('.//*[@resource-id="com.itechart.aimer:id/container"]/android.widget.LinearLayout'));
    let config = {
        headerText: by.xpath('.//*[@resource-id="com.itechart.aimer:id/toolbar"]/android.widget.TextView'),
        buttons: by.xpath('.//*[@resource-id="com.itechart.aimer:id/tabLayout"]//android.support.v7.app.ActionBar.Tab')
    };

    return {
        container,
        getHeaderText(){
            return element(config.headerText).getText();
        },
        get dashboardBtn(){
            return container.all(config.buttons).get(0);
        },
        get reviewsBtn(){
            return container.all(config.buttons).get(1);
        },
        getBtnTextByNumber(n){
            return container.all(config.buttons).all(by.xpath('.//android.widget.TextView')).get(n).getText();
        },
        get burgerMenu(){
            return {};
        }

    }
};

module.exports = Header;