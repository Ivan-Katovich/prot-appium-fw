const Header = require('../businessObjects/header');
const OverallPan = require('../businessObjects/panels/overallPan');


let AppScreen = function(){

    let container = element(by.xpath('.//hierarchy/android.widget.FrameLayout'));
    let config = {};

    return {
        get header(){
            return Header();
        },
        get dashboard(){
            return {
                get overallPan(){
                    return OverallPan();
                },
                get recentActivityPan(){
                    return
                },
                get deaslinersPan(){
                    return
                },
                get personalPan(){
                    return
                },
            }
        },
        get reviews(){
            return {
                get performance(){
                    return
                }
            }
        }


    }
};

module.exports = AppScreen;