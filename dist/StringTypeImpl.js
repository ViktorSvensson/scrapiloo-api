"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class StringTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    pretty() {
        if (this.isNull())
            return "–";
        return this.valueOf();
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.StringTypeImpl = StringTypeImpl;
//# sourceMappingURL=StringTypeImpl.js.map