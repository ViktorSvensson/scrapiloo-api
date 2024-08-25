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
import { data } from "../data";
import { DataTypeImpl } from "./DataTypeImpl";
import { UnitTypeImpl } from "./UnitTypeImpl";
export class FloatTypeImpl extends DataTypeImpl {
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
        x = data(x, "float");
        if (this.isNull() || x.isNull())
            return data(null, this.type);
        return data(this.value * x.value, this.type);
    }
    div(x) {
        x = data(x, "float");
        if (this.isNull() || x.isNull())
            return data(null, this.type);
        return data(this.value / x.value, this.type);
    }
    add(x) {
        x = data(x, "float");
        if (this.isNull() || x.isNull())
            return data(null, this.type);
        return data(this.value + x.value, this.type);
    }
    sub(x) {
        x = data(x, "float");
        if (this.isNull() || x.isNull())
            return data(null, this.type);
        return data(this.value - x.value, this.type);
    }
    greaterThan(x) {
        x = data(x, "float");
        return this.value > x.value;
    }
    lessThan(x) {
        x = data(x, "float");
        return this.value < x.value;
    }
    greaterThanOrEqual(x) {
        x = data(x, "float");
        return this.value >= x.value;
    }
    lessThanOrEqual(x) {
        x = data(x, "float");
        return this.value <= x.value;
    }
    equals(x, precision = 2) {
        x = data(x, "float");
        if (this.isNull() && x.isNull())
            return true;
        if (this.isNull() || x.isNull())
            return false;
        const factor = Math.pow(10, precision);
        return (Math.round(this.value * factor) === Math.round(x.value * factor) ||
            Math.abs(this.value - x.value) < 10 ** -precision);
    }
    setConfig(config) {
        if ("unit" in config) {
            config.unit =
                config.unit instanceof UnitTypeImpl
                    ? config.unit
                    : data(config.unit, "unit");
        }
        if ("interval" in config) {
            config.interval =
                config.interval instanceof UnitTypeImpl
                    ? config.interval
                    : data(config.interval, "unit");
        }
        return super.setConfig(config);
    }
    pretty() {
        if (this.isNull())
            return "–";
        let val = Number(this.value).toLocaleString("sv-SE", {
            minimumFractionDigits: this.config.decimals,
            maximumFractionDigits: this.config.decimals,
            style: "decimal",
        });
        if (this.config.displayUnit &&
            (this.config.unit?.valueOf() || this.config.currency?.valueOf())) {
            val = `${val} ${this.config.currency?.valueOf()
                ? this.config.currency
                : this.config.unit}`;
        }
        if (this.config.displayInterval && this.config.interval?.valueOf()) {
            val = `${val}/${this.config.interval}`;
        }
        return val;
    }
    isNull() {
        return typeof this.value !== "number";
    }
    convert(fromUnit, toUnit) {
        fromUnit =
            fromUnit instanceof UnitTypeImpl
                ? fromUnit
                : data(fromUnit, "unit");
        return data(this.isNull()
            ? null
            : this.valueOf() * fromUnit.getConversionFactor(toUnit), this.type)
            .setConfig(this.config)
            .setConfig({ unit: data(toUnit, "unit") });
    }
    changeInterval(originalInterval, targetInterval) {
        if (!originalInterval)
            throw new Error(`Invalid originalInterval "${originalInterval}"`);
        if (!targetInterval)
            throw new Error(`Invalid targetInterval "${targetInterval}"`);
        originalInterval =
            originalInterval instanceof UnitTypeImpl
                ? originalInterval
                : data(originalInterval, "unit");
        return data(this.isNull()
            ? null
            : this.valueOf() *
                (1 / originalInterval.getConversionFactor(targetInterval)), this.type)
            .setConfig(this.config)
            .setConfig({ interval: data(targetInterval, "unit") });
    }
}
