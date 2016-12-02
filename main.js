/**
 * Created by afunx on 30/11/2016.
 */
if(afunx_debug) {
    console.info("afunx main.js")
}

define(['./status/status.js'],function (status) {
    if(afunx_debug){
        console.info("afunx main.js entrance")
    }
    return {
        init:function () {
            var self=this;
            self.getDeviceInfo();
            self.bindEvent();
            self.getDeviceStatus();
            self.bindPushData();
        },
        // get device info
        getDeviceInfo:function () {
            DA.getDeviceInfo({
                uuid: DA.uuid
            },function (d) {
                if(d.result.msg === "success") {
                    if(afunx_debug) {
                        console.info("main.js getDeviceInfo suc")
                    }
                } else {
                    console.error("main.js getDeviceInfo fail")
                }
            })
        },
        // bind event
        bindEvent:function () {
            var self = this, doc = $(document);
            doc.on("click",".submit-btn",function () {
                if(afunx_debug) {
                    console.info("afunx main.js submit-btn click")
                }
            })
            doc.on("click",".submit-close",function () {
                if(afunx_debug) {
                    console.info("afunx main.js submit-close click")
                }
            })
        },
        // get device status
        getDeviceStatus:function () {
            var self = this;
            DA.getDeviceStatus(DA.uuid,function (data) {
                if(data){
                    if(afunx_debug) {
                        console.info("afunx main.js DA.getDeviceStatus() data: " + data);
                    }
                }
            });
        },
        // bind push data
        bindPushData:function () {
            DA.bindPushData({
                'deviceStatusChange': function(data){
                    if(afunx_debug) {
                        console.info("afunx main.js DA.bindPushData() deviceStatusChange data: " + data);
                    }
                },
                'netWorkStatusChange': function(){
                    if(afunx_debug) {
                        console.info("afunx main.js DA.bindPushData() netWorkStatusChange");
                    }
                }
            });
        },
    }
})