"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepTracker = void 0;
const base_1 = require("./base");
const profile_1 = require("./profile");
const validationIsEmpty_1 = require("./utils/validationIsEmpty");
const validationKey_1 = require("./utils/validationKey");
let apiUrl;
let informationDevices;
const setSameKeyValues = (jsons, key, value) => {
    if (typeof jsons !== "object" || jsons === null) {
        return jsons;
    }
    for (const prop in jsons) {
        if (jsons.hasOwnProperty(prop)) {
            if (prop === key) {
                jsons[prop] = value;
            }
            else if (typeof jsons[prop] === "object") {
                setSameKeyValues(jsons[prop], key, value);
            }
        }
    }
    return jsons;
};
const cepTracker = () => {
    const setEndpoint = (endpoint, informationDevice) => {
        (0, validationIsEmpty_1.isEmpty)(endpoint, informationDevice);
        apiUrl = endpoint;
        if ((0, validationKey_1.isValidDevice)(informationDevice)) {
            informationDevices = informationDevice;
            (0, profile_1.profileAndSession)(apiUrl, informationDevice);
        }
        // something(profileAndSession(apiUrl, informationDevices));
    };
    const onCustomEvents = (obj, properties) => {
        let tmpCustom;
        const evonCustomEvents = {
            events: [
                {
                    eventType: "",
                    scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                    sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
                    profileId: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId,
                    timeStamp: new Date().toISOString(),
                    properties: {},
                    source: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: {},
                    },
                    target: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: informationDevices,
                    },
                },
            ],
            sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
        };
        for (const key in obj) {
            tmpCustom = setSameKeyValues(evonCustomEvents, key, obj[key]);
        }
        if (tmpCustom) {
            if (properties) {
                tmpCustom.events[0].properties = properties;
            }
            (0, base_1.default)(apiUrl, tmpCustom);
        }
    };
    const onIdentify = (obj, properties) => {
        let tmpIdentify;
        const evonIdentify = {
            events: [
                {
                    eventType: "",
                    scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                    sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
                    profileId: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId,
                    timeStamp: new Date().toISOString(),
                    properties: {},
                    source: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: {},
                    },
                    target: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: informationDevices,
                    },
                },
            ],
            sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
        };
        for (const key in obj) {
            tmpIdentify = setSameKeyValues(evonIdentify, key, obj[key]);
        }
        if (tmpIdentify) {
            if (properties) {
                tmpIdentify.events[0].properties = properties;
            }
            (0, base_1.default)(apiUrl, tmpIdentify);
        }
    };
    const onScreen = (obj, properties) => {
        let tmpView;
        const evonScreen = {
            events: [
                {
                    eventType: "",
                    scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                    sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
                    profileId: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId,
                    timeStamp: new Date().toISOString(),
                    properties: {},
                    source: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: {},
                    },
                    target: {
                        scope: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName,
                        itemId: "",
                        itemType: informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.osBase,
                        properties: informationDevices,
                    },
                },
            ],
            sessionId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android',
        };
        for (const key in obj) {
            tmpView = setSameKeyValues(evonScreen, key, obj[key]);
        }
        if (tmpView) {
            if (properties) {
                tmpView.events[0].target.properties = properties;
            }
            (0, base_1.default)(apiUrl, tmpView);
        }
    };
    return {
        onCustomEvents: onCustomEvents,
        onIdentify: onIdentify,
        onScreen: onScreen,
        setEndpoint: setEndpoint
    };
};
exports.cepTracker = cepTracker;
//# sourceMappingURL=index.js.map