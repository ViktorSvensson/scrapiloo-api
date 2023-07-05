"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DataTypeImpl_config;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeImpl = void 0;
const _1 = require(".");
class DataTypeImpl {
    get config() {
        var _a;
        return Object.assign({}, ((_a = __classPrivateFieldGet(this, _DataTypeImpl_config, "f")) !== null && _a !== void 0 ? _a : this.defaultConfig));
    }
    constructor(value, type) {
        this.value = value;
        this.type = type;
        _DataTypeImpl_config.set(this, void 0);
        this.defaultConfig = {};
    }
    setConfig(config) {
        const clone = this.clone();
        __classPrivateFieldSet(clone, _DataTypeImpl_config, Object.assign(Object.assign({}, __classPrivateFieldGet(clone, _DataTypeImpl_config, "f")), config), "f");
        return clone;
    }
    clone() {
        const clone = (0, _1.data)(this.valueOf(), this.type);
        __classPrivateFieldSet(clone, _DataTypeImpl_config, Object.assign({}, this.config), "f");
        return clone;
    }
    get [(_DataTypeImpl_config = new WeakMap(), Symbol.toStringTag)]() {
        return `${this.value}`;
    }
    valueOf() {
        return this.value;
    }
    pretty() {
        throw new Error("Method not implemented.");
    }
    toString() {
        return this.pretty();
    }
    isNull() {
        throw new Error("Method not implemented.");
    }
    toSortable() {
        throw new Error("Method not implemented.");
    }
}
exports.DataTypeImpl = DataTypeImpl;
//# sourceMappingURL=DataTypeImpl.js.map