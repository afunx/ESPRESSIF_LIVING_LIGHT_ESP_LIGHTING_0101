var offlineConfig = {
    "bgColor": "#AEAEAE",
    "panel": {
        "p1": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        },
        "p2": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        },
        "p3": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "设备离线",
            vLabel:"",
        },
        "connection": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        }
    },
    "cmd": []
};
var config = {
    "bgColor": getBackgroundColor(),
    "panel": {
        "p1": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        },
        "p2": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        },
        "p3": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        },
        "connection": {
            vType: "text",
            vUnit: "",
            vTitle: "",
            vContent: "",
            vLabel:"",
        }
    },
    "cmd": []
};
function main() {
    if (model.data.onlineState.value == "on") {
        return JSON.stringify(config);
    } else {
        return JSON.stringify(offlineConfig);
    }
}
function getBackgroundColor() {
    var bgColor = (isDeviceOnline()) ? "#2AC781" : "#AEAEAE";
    return bgColor;
}




























