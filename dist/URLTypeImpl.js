"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class URLTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.URLTypeImpl = URLTypeImpl;
//# sourceMappingURL=URLTypeImpl.js.map