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
            self.bindEvent();
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
        }
    }
})