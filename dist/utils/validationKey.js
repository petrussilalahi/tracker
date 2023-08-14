"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDevice = void 0;
const deviceKeys = {
    deviceId: true,
    brand: true,
    buildNumber: true,
    appName: true,
    bundleId: true,
    model: true,
    osBase: true,
};
function isValidDevice(obj) {
    for (var keys in obj) {
        ;
        if (obj.hasOwnProperty(keys)) {
            if (!deviceKeys[keys]) {
                throw new Error('Invalid Device Key');
            }
        }
        else {
            return false;
        }
    }
    return true;
}
exports.isValidDevice = isValidDevice;
//# sourceMappingURL=validationKey.js.map