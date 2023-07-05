"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanTypeImpl = void 0;
const _1 = require(".");
const DataTypeImpl_1 = require("./DataTypeImpl");
class BooleanTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    pretty() {
        if (this.value === true)
            return "Ja";
        if (this.value === false)
            return "Nej";
        return "–";
    }
    isNull() {
        return !(this.value === false || this.value === true);
    }
    negate(strict = false) {
        if (strict && this.isNull())
            return this;
        return (0, _1.data)(!this.value, this.type);
    }
}
exports.BooleanTypeImpl = BooleanTypeImpl;
//# sourceMappingURL=BooleanTypeImpl.js.map