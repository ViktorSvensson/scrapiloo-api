"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class CurrencyTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.CurrencyTypeImpl = CurrencyTypeImpl;
//# sourceMappingURL=CurrencyTypeImpl.js.map