"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileAndSession = void 0;
const base_1 = require("./base");
const profileAndSession = (endpoint, informationDevices) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        itemId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) || '',
        itemType: 'profile',
        version: 0,
        properties: {},
        systemProperties: {},
        segments: [],
        scores: {},
        mergedWith: '',
        consents: {},
    };
    try {
        const profileData = yield (0, base_1.default)('http://103.175.216.183:8181/cxs/profiles', data);
        if (profileData.status === 200) {
            const sessionId = {
                itemId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) + 'android' || '',
                itemType: 'session',
                scope: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.appName) || '',
                version: 1,
                profileId: (informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId) || '',
                profile: data,
                properties: {},
                systemProperties: {},
                timeStamp: new Date().toISOString(),
            };
            yield (0, base_1.default)(`http://103.175.216.183:8181/cxs/profiles/sessions/${informationDevices === null || informationDevices === void 0 ? void 0 : informationDevices.deviceId}android`, sessionId);
        }
    }
    catch (error) {
        throw new Error('Error Register Profile And Session, Please Contact Support');
    }
    finally {
        console.log('finally profileAndSession');
    }
});
exports.profileAndSession = profileAndSession;
//# sourceMappingURL=profile.js.map