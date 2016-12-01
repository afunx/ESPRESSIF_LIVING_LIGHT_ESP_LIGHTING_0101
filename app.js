/**
 * Created by afunx on 28/11/2016.
 */
var afunx_debug=true

if(afunx_debug){
    console.info("afunx app.js")
}
require(['./main.js'],function (main) {
    /*light mode*/
    function modeFn() {
        var mode = new DA.AlinkUI.Grid('grid', {
            domhook: $('.bind_handle_mode'),
            datamodel: {
                key: 'WorkMode_MasterLight',
                gridNum: '5',
                value: '0',
                map: [
                    {
                        icon: '&#xe62f;',
                        txt: '手动',
                        value: '0'
                    },
                    {
                        icon: '&#xe668',
                        txt: '娱乐',
                        value: '1'
                    },
                    {
                        icon: '&#xe64e',
                        txt: '影院',
                        value: '2'
                    },

                    {
                        icon: '&#xe630;',
                        txt: '夜灯',
                        value: '3'
                    },
                    {
                        icon: '&#xe667',
                        txt: '会客',
                        value: '4'
                    }
                ]
            },
            changed: function () {
                var curLightMode = this.getValue();
                if(afunx_debug) {
                    console.info("afunx app.js modeFn() changed curLightMode: " + curLightMode);
                }
                var curLightMode = this.getValue();
                DA.setDeviceStatus(DA,uuid, {
                    "WorkMode_MasterLight": {
                        "value": curLightMode
                    }
                })
                return true;
            }
        })
    }
    
    /*light color temperature*/
    function colorFn() {
        var color_temperature = new DA.AlinkUI.Slider({
            name:'color_temperature',
            datamodel: {
                key: 'Color_Temperature'
            },
            sliderLabel: '设定色温',
            element: '.bind_handle_color_temperature',
            value: 25,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            changed:function () {
                var curColorTemperature = this.getValue();
                if(afunx_debug) {
                    console.info("afunx app.js colorFn() changed curColorTemperature: " + curColorTemperature)
                }
                DA.setDeviceStatus(DA,uuid, {
                    "Color_Temperature": {
                        "value": curColorTemperature
                    }
                })
                return true;
            }
        });
    }
    
    /*light bright*/
    function brightFn() {
        var color_bright = new DA.AlinkUI.Slider({
           name:'color_bright',
            datamodel: {
                key: 'Light_Brightness'
            },
            sliderLabel: '设定亮度',
            element: '.bind_handle_color_bright',
            value: 75,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            changed:function () {
                var curColorBright = this.getValue();
                if(afunx_debug) {
                    console.info("afunx app.js brightFn() changed curColorBright: " + curColorBright)
                }
                DA.setDeviceStatus(DA,uuid,{
                    "Light_Brightness": {
                        "value": curColorBright
                    }
                })
                return true;
            }

        });
    }
    
    modeFn();
    colorFn();
    brightFn();
})