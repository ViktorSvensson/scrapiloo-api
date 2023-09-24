/**
 * @author     Carl Viktor Svensson
 * @author     Kelsie Maria Enqvist
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */
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
import { data } from "../data";
export class DataTypeImpl {
    get config() {
        return { ...(__classPrivateFieldGet(this, _DataTypeImpl_config, "f") ?? this.defaultConfig) };
    }
    constructor(value, type) {
        this.value = value;
        this.type = type;
        _DataTypeImpl_config.set(this, void 0);
        this.defaultConfig = {};
    }
    setConfig(config) {
        const clone = this.clone();
        __classPrivateFieldSet(clone, _DataTypeImpl_config, { ...__classPrivateFieldGet(clone, _DataTypeImpl_config, "f"), ...config }, "f");
        return clone;
    }
    clone() {
        const clone = data(this.valueOf(), this.type);
        __classPrivateFieldSet(clone, _DataTypeImpl_config, { ...this.config }, "f");
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
        return this.pretty().toString();
    }
    isNull() {
        throw new Error("Method not implemented.");
    }
    toSortable() {
        throw new Error("Method not implemented.");
    }
    toJSON() {
        const res = { type: this.type };
        // We don't need to serialize undefined or null; when we unserialize
        // the value will be instanciated as null anyway.
        if (typeof this.value !== "undefined" && this.value !== null) {
            res.value = this.value;
        }
        // Only serialize config values that have been set explicitly, i.e.
        // ignore default config.
        if (__classPrivateFieldGet(this, _DataTypeImpl_config, "f")) {
            res.config = { ...__classPrivateFieldGet(this, _DataTypeImpl_config, "f") };
            // Remove config attributes that are either null/undefined or
            // are identical to the default config value.
            for (const k in res.config) {
                res.config[k] =
                    typeof res.config[k] === "undefined" ||
                        res.config[k] === null ||
                        res.config[k] === this.defaultConfig?.[k]
                        ? undefined
                        : res.config[k];
            }
        }
        return res;
    }
}
