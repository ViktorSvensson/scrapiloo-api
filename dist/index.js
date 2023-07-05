"use strict";
/**
 * @author     Carl Viktor Svensson
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntry = exports.data = void 0;
__exportStar(require("./BooleanType"), exports);
__exportStar(require("./BooleanTypeImpl"), exports);
__exportStar(require("./CurrencyType"), exports);
__exportStar(require("./CurrencyTypeImpl"), exports);
__exportStar(require("./DataType"), exports);
__exportStar(require("./DataTypeImpl"), exports);
__exportStar(require("./DateType"), exports);
__exportStar(require("./DateTypeImpl"), exports);
__exportStar(require("./FloatType"), exports);
__exportStar(require("./FloatTypeImpl"), exports);
__exportStar(require("./ImageType"), exports);
__exportStar(require("./ImageTypeImpl"), exports);
__exportStar(require("./IntegerType"), exports);
__exportStar(require("./IntegerTypeImpl"), exports);
__exportStar(require("./StringType"), exports);
__exportStar(require("./StringTypeImpl"), exports);
__exportStar(require("./TimeType"), exports);
__exportStar(require("./TimeTypeImpl"), exports);
__exportStar(require("./URLType"), exports);
__exportStar(require("./URLTypeImpl"), exports);
__exportStar(require("./UnitType"), exports);
__exportStar(require("./UnitTypeImpl"), exports);
const node_fetch_1 = __importDefault(require("node-fetch"));
const BooleanTypeImpl_1 = require("./BooleanTypeImpl");
const CurrencyTypeImpl_1 = require("./CurrencyTypeImpl");
const DateTypeImpl_1 = require("./DateTypeImpl");
const FloatTypeImpl_1 = require("./FloatTypeImpl");
const ImageTypeImpl_1 = require("./ImageTypeImpl");
const IntegerTypeImpl_1 = require("./IntegerTypeImpl");
const StringTypeImpl_1 = require("./StringTypeImpl");
const TimeTypeImpl_1 = require("./TimeTypeImpl");
const URLTypeImpl_1 = require("./URLTypeImpl");
const UnitTypeImpl_1 = require("./UnitTypeImpl");
const DataTypeImpl_1 = require("./DataTypeImpl");
const DataTypeConstructorMap = {
    boolean: BooleanTypeImpl_1.BooleanTypeImpl,
    float: FloatTypeImpl_1.FloatTypeImpl,
    image: ImageTypeImpl_1.ImageTypeImpl,
    integer: IntegerTypeImpl_1.IntegerTypeImpl,
    string: StringTypeImpl_1.StringTypeImpl,
    time: TimeTypeImpl_1.TimeTypeImpl,
    unit: UnitTypeImpl_1.UnitTypeImpl,
    url: URLTypeImpl_1.URLTypeImpl,
    currency: CurrencyTypeImpl_1.CurrencyTypeImpl,
    date: DateTypeImpl_1.DateTypeImpl,
};
function data(value, type) {
    const constr = DataTypeConstructorMap[type];
    return new constr(value instanceof DataTypeImpl_1.DataTypeImpl ? value.valueOf() : value, type);
}
exports.data = data;
class BaseEntry {
}
exports.BaseEntry = BaseEntry;
function Scrapiloo(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(`${config.endpoint}?dataset=${config.dataset}`);
        const apiOutput = (yield response.json());
        const entries = apiOutput.data;
        const schema = apiOutput.schema;
        function all() {
            return Array.from(new Set(Object.keys(entries).map((key) => key.split(":")[0])).values()).map((key) => {
                return get(key);
            });
        }
        function deepAssign(obj, path, value) {
            var _a;
            const sub = path.split(":");
            let target = obj;
            for (const s of sub.slice(0, -1)) {
                target[s] = (_a = target[s]) !== null && _a !== void 0 ? _a : {};
                target = target[s];
            }
            target[sub[sub.length - 1]] = value;
            return obj;
        }
        function get(key) {
            const res = new config.prototype();
            res.__key = entries[`${key}:__key`];
            for (const [ref, def] of Object.entries(schema)) {
                const entryKey = `${key}:${ref}`;
                let $data = data(entryKey in entries ? entries[entryKey] : def.default, def.type);
                $data = !$data.isNull() ? $data : data(def.default, def.type);
                deepAssign(res, ref, $data);
            }
            return res;
        }
        return { get, all };
    });
}
exports.default = Scrapiloo;
//# sourceMappingURL=index.js.map