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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatTypeImpl = void 0;
const _1 = require(".");
class FloatTypeImpl extends _1.DataTypeImpl {
    constructor() {
        super(...arguments);
        this.defaultConfig = {
            decimals: 2,
            unit: null,
            interval: null,
            currency: null,
            displayUnit: true,
            displayInterval: false,
        };
    }
    mul(x) {
        x = (0, _1.data)(x, "float");
        if (this.isNull() || x.isNull())
            return (0, _1.data)(null, this.type);
        return (0, _1.data)(this.value * x.value, this.type);
    }
    div(x) {
        x = (0, _1.data)(x, "float");
        if (this.isNull() || x.isNull())
            return (0, _1.data)(null, this.type);
        return (0, _1.data)(this.value / x.value, this.type);
    }
    add(x) {
        x = (0, _1.data)(x, "float");
        if (this.isNull() || x.isNull())
            return (0, _1.data)(null, this.type);
        return (0, _1.data)(this.value + x.value, this.type);
    }
    sub(x) {
        x = (0, _1.data)(x, "float");
        if (this.isNull() || x.isNull())
            return (0, _1.data)(null, this.type);
        return (0, _1.data)(this.value - x.value, this.type);
    }
    greaterThan(x) {
        x = (0, _1.data)(x, "float");
        return this.value > x.value;
    }
    lessThan(x) {
        x = (0, _1.data)(x, "float");
        return this.value < x.value;
    }
    setConfig(config) {
        if ("unit" in config) {
            config.unit =
                config.unit instanceof _1.UnitTypeImpl
                    ? config.unit
                    : (0, _1.data)(config.unit, "unit");
        }
        if ("interval" in config) {
            config.interval =
                config.interval instanceof _1.UnitTypeImpl
                    ? config.interval
                    : (0, _1.data)(config.interval, "unit");
        }
        return super.setConfig(config);
    }
    pretty() {
        var _a, _b, _c, _d;
        if (this.isNull())
            return "–";
        let val = Number(this.value).toLocaleString("sv-SE", {
            minimumFractionDigits: this.config.decimals,
            maximumFractionDigits: this.config.decimals,
            style: "decimal",
        });
        if (this.config.displayUnit &&
            (((_a = this.config.unit) === null || _a === void 0 ? void 0 : _a.valueOf()) || ((_b = this.config.currency) === null || _b === void 0 ? void 0 : _b.valueOf()))) {
            val = `${val} ${((_c = this.config.currency) === null || _c === void 0 ? void 0 : _c.valueOf())
                ? this.config.currency
                : this.config.unit}`;
        }
        if (this.config.displayInterval && ((_d = this.config.interval) === null || _d === void 0 ? void 0 : _d.valueOf())) {
            val = `${val}/${this.config.interval}`;
        }
        return val;
    }
    isNull() {
        return typeof this.valueOf() !== "number";
    }
    convert(fromUnit, toUnit) {
        fromUnit =
            fromUnit instanceof _1.UnitTypeImpl
                ? fromUnit
                : (0, _1.data)(fromUnit, "unit");
        return (0, _1.data)(this.isNull()
            ? null
            : this.valueOf() * fromUnit.getConversionFactor(toUnit), this.type)
            .setConfig(this.config)
            .setConfig({ unit: (0, _1.data)(toUnit, "unit") });
    }
    changeInterval(originalInterval, targetInterval) {
        if (!originalInterval)
            throw new Error(`Invalid originalInterval "${originalInterval}"`);
        if (!targetInterval)
            throw new Error(`Invalid targetInterval "${targetInterval}"`);
        originalInterval =
            originalInterval instanceof _1.UnitTypeImpl
                ? originalInterval
                : (0, _1.data)(originalInterval, "unit");
        return (0, _1.data)(this.isNull()
            ? null
            : this.valueOf() *
                (1 / originalInterval.getConversionFactor(targetInterval)), this.type)
            .setConfig(this.config)
            .setConfig({ interval: (0, _1.data)(targetInterval, "unit") });
    }
}
exports.FloatTypeImpl = FloatTypeImpl;
//# sourceMappingURL=FloatTypeImpl.js.map