
let OverallPan = function(){

    // let container = element(by.xpath(''));
    let config = {
        header: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textOverall"]'),
        info: {
            participants: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textParticipants"]'),
            tasks: by.xpath('.//*[@resource-id="com.itechart.aimer:id/textTasks"]'),
        },
        graph: {

        }
    };

    return {
        getHeaderText(){
            return element(config.header).getText();
        },
        get info(){
            return {
                getParticipantsNumber(){
                    return element(config.info.participants).getText();
                },
                getTasksInfo(){
                    return element(config.info.tasks).getText();
                }
            }
        }
    }
};

module.exports = OverallPan;