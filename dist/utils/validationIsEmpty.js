"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
function isEmpty(endpoint, informationDevice) {
    if (!endpoint || endpoint === '' || !informationDevice || Object.keys(informationDevice).length === 0) {
        throw new Error('Endpoint or Information Device is missing');
    }
    else if (typeof informationDevice !== 'object') {
        throw new Error('Information Device must be an object');
    }
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=validationIsEmpty.js.map