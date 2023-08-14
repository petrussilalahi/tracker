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
const buffer_1 = require("buffer");
const username = 'karaf';
const password = 'karaf';
const credentials = `${username}:${password}`;
const base64Credentials = buffer_1.Buffer.from(credentials, 'utf-8').toString('base64');
const authHeaderValue = 'Basic ' + `${base64Credentials}`;
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: authHeaderValue,
    },
};
function baseApi(endpoint, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(endpoint, {
                method: 'POST',
                headers: config.headers,
                body: JSON.stringify(data),
            });
            if (response.ok) {
                return response;
            }
            else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            console.log('handle error', error);
            throw new Error(error);
        }
    });
}
exports.default = baseApi;
//# sourceMappingURL=base.js.map