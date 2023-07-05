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
        var _a;
        if (this.isNull())
            return "–";
        let val = Number(this.value).toLocaleString("sv-SE", {
            minimumFractionDigits: this.config.decimals,
            maximumFractionDigits: this.config.decimals,
            style: "decimal",
        });
        if (this.config.displayUnit) {
            val = `${val} ${((_a = this.config.currency) === null || _a === void 0 ? void 0 : _a.valueOf())
                ? this.config.currency
                : this.config.unit}`;
        }
        if (this.config.displayInterval) {
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