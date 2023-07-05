"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class ImageTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.ImageTypeImpl = ImageTypeImpl;
//# sourceMappingURL=ImageTypeImpl.js.map