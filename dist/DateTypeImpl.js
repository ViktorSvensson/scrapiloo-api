"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class DateTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    getYear() {
        throw new Error("Method not implemented.");
    }
    getMonth() {
        throw new Error("Method not implemented.");
    }
    getDay() {
        throw new Error("Method not implemented.");
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.DateTypeImpl = DateTypeImpl;
//# sourceMappingURL=DateTypeImpl.js.map