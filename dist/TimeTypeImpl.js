"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class TimeTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    getHour() {
        var _a, _b;
        if (this.isNull())
            return null;
        const m = this.value.match(/^(?<h>\d{2}):(?<m>\d{2})/);
        if (!m || !((_a = m.groups) === null || _a === void 0 ? void 0 : _a.h) || !((_b = m.groups) === null || _b === void 0 ? void 0 : _b.m))
            throw new Error(`Invalid time "${this.value}"`);
        return Number(m.groups.h);
    }
    getMinute() {
        var _a, _b;
        if (this.isNull())
            return null;
        const m = this.value.match(/^(?<h>\d{2}):(?<m>\d{2})/);
        if (!m || !((_a = m.groups) === null || _a === void 0 ? void 0 : _a.h) || !((_b = m.groups) === null || _b === void 0 ? void 0 : _b.m))
            throw new Error(`Invalid time "${this.value}"`);
        return Number(m.groups.m);
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
    pretty() {
        return this.value;
    }
    getDuration(end) {
        const startMin = this.getHour() * 60 + this.getMinute();
        const endMin = end.getHour() * 60 + end.getMinute();
        const durMin = endMin - startMin;
        return {
            get minutes() {
                return durMin;
            },
            get hours() {
                return durMin / 60;
            },
        };
    }
}
exports.TimeTypeImpl = TimeTypeImpl;
//# sourceMappingURL=TimeTypeImpl.js.map