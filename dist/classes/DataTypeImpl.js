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
import { data } from "../data";
export class DataTypeImpl {
    value;
    type;
    #config;
    defaultConfig = {};
    get config() {
        return { ...(this.#config ?? this.defaultConfig) };
    }
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    setConfig(config) {
        const clone = this.clone();
        clone.#config = { ...clone.#config, ...config };
        return clone;
    }
    clone() {
        const clone = data(this.valueOf(), this.type);
        clone.#config = { ...this.config };
        return clone;
    }
    get [Symbol.toStringTag]() {
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
        if (this.#config) {
            res.config = { ...this.#config };
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
