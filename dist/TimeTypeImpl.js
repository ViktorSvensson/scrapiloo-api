"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class TimeTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    getHour() {
        throw new Error("Method not implemented.");
    }
    getMinute() {
        throw new Error("Method not implemented.");
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
    pretty() {
        return this.value;
    }
}
exports.TimeTypeImpl = TimeTypeImpl;
//# sourceMappingURL=TimeTypeImpl.js.map