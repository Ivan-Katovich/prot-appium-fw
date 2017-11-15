
let RecentActivityPan = function(){

    // let container = element(by.xpath(''));
    let config = {
        header: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textRecent"]'),
        events: {
            root: by.xpath('.//*[@resource-id="com.itechart.aimer:id/recyclerView"]/android.widget.LinearLayout'),
            name: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textOwner"]'),
            tasks: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textAction"]'),
            avatar: by.xpath('.//*[@resource-id="com.itechart.aimer:id/imageAvatar"]'),
            date: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textDate"]'),
        },
        total: {
            root: by.xpath('.//*[@resource-id="com.itechart.aimer:id/btnMore"]'),
            eventsAvailable: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textAvailable"]'),
            moreLink: by.xpath('./android.widget.TextView[2]'),
        }
    };

    return {
        getHeaderText(){
            return element(config.header).getText();
        },
        getEvents(nameOrNum){
            let root = element.all(config.events.root);
            let event;
            if(typeof nameOrNum === 'number'){
                event = root.get(nameOrNum);
            }else{
                event = root.filter((ev)=>{
                    return ev.element(config.events.name).getText()
                        .then(function (text) {
                            return text === nameOrNum;
                        })
                }).get(0);
            }
            return {
                get avatar(){
                    return event.element(config.events.avatar);
                },
                getName(){
                    return event.element(config.events.name).getText();
                },
                getTasksText(){
                    return event.element(config.events.tasks).getText();
                },
                getDate(){
                    return event.element(config.events.date).getText();
                }
            }
        },
        get total(){
            let root = element(config.total.root);
            return {
                viewMore(){
                    return root.click();
                },
                getEventsAvaText(){
                    return element(config.total.eventsAvailable).getText();
                },
                getEventsAvaNumber(){
                    return element(config.total.eventsAvailable).getText()
                        .then(function (text) {
                            return parseInt(text.match(/\d+/)[0]);
                        });
                }
            }
        }
    }
};

module.exports = RecentActivityPan;