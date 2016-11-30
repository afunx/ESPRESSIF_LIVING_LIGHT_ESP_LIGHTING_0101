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
                key: 'LightMode',
                gridNum: '3',
                value: '1',
                map: [
                    {
                        icon: '&#xe62f;',
                        txt: '普通风',
                        value: '1'
                    },
                    {
                        icon: '&#xe668',
                        txt: '自然风',
                        value: '2'
                    },
                    {
                        icon: '&#xe64e',
                        txt: '睡眠风',
                        value: '3'
                    },

                    {
                        icon: '&#xe630;',
                        txt: '冷风',
                        value: '4'
                    },
                    {
                        icon: '&#xe667',
                        txt: '静音',
                        value: '5'
                    }
                ]
            },
            changed: function () {
                if(afunx_debug) {
                    console.info("afunx app.js modeFn() changed");
                }
                this.setDeviceStatus();
            }
        })
    }
    
    /*light color temperature*/
    function colorFn() {
        var color_temperature = new DA.AlinkUI.Slider({
            name:'color_temperature',
            datamodel: {
                key: 'ColorTemperature'
            },
            sliderLabel: '设定色温',
            element: '.bind_handle_temperature',
            value: 25,
            min: 0,
            max: 100,
            step: 1,
            changed:function () {
                var curColorTemperature = this.getValue();
                if(afunx_debug) {
                    console.info("afunx app.js colorFn() changed curColorTemperature: " + curColorTemperature)
                }
                DA.setDeviceStatus(DA,uuid, {
                    "ColorTemperature": {
                        "value": curColorTemperature
                    }
                })
                return true;
            }
        });
    }
    
    /**/
    
    modeFn();
    colorFn();
})