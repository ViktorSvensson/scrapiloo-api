"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerTypeImpl = void 0;
const _1 = require(".");
const DataTypeImpl_1 = require("./DataTypeImpl");
const UnitTypeImpl_1 = require("./UnitTypeImpl");
class IntegerTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    constructor() {
        super(...arguments);
        this.defaultConfig = {
            decimals: 0,
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
                config.unit instanceof UnitTypeImpl_1.UnitTypeImpl
                    ? config.unit
                    : (0, _1.data)(config.unit, "unit");
        }
        if ("interval" in config) {
            config.interval =
                config.interval instanceof UnitTypeImpl_1.UnitTypeImpl
                    ? config.interval
                    : (0, _1.data)(config.interval, "unit");
        }
        return super.setConfig(config);
    }
    pretty() {
        var _a;
        if (this.isNull())
            return "–";
        return [
            Math.round(this.value).toLocaleString("sv-SE", {
                style: "decimal",
                maximumFractionDigits: this.config.decimals,
            }),
            !this.config.displayUnit ? "" : (_a = this.config.currency) !== null && _a !== void 0 ? _a : this.config.unit,
            !this.config.displayInterval ? "" : this.config.interval,
        ]
            .filter((str) => str !== null &&
            typeof str !== undefined &&
            String(str !== null && str !== void 0 ? str : "").length > 0)
            .join(" ");
    }
    valueOf() {
        return Math.round(this.value);
    }
    isNull() {
        return typeof this.valueOf() !== "number";
    }
    convert(fromUnit, toUnit) {
        fromUnit =
            fromUnit instanceof UnitTypeImpl_1.UnitTypeImpl
                ? fromUnit
                : (0, _1.data)(fromUnit, "unit");
        return (0, _1.data)(this.isNull() ? null : this.value * fromUnit.getConversionFactor(toUnit), this.type)
            .setConfig(this.config)
            .setConfig({ unit: (0, _1.data)(toUnit, "unit") });
    }
    setFlexibleUnit(originalUnit, targetUnitOptions, smallestValue = 1) {
        if (this.isNull())
            return this;
        originalUnit = (0, _1.data)(originalUnit, "unit");
        let selectedValue = this.value;
        let selectedUnit = originalUnit.valueOf();
        for (const option of targetUnitOptions) {
            const converted = Math.round(originalUnit.getConversionFactor(option) * this.value);
            if (converted >= smallestValue &&
                (converted < selectedValue || selectedValue < smallestValue)) {
                selectedValue = converted;
                selectedUnit = option;
            }
        }
        return this.convert(originalUnit, selectedUnit)
            .setConfig(this.config)
            .setConfig({ unit: (0, _1.data)(selectedUnit, "unit") });
    }
    changeInterval(originalInterval, targetInterval) {
        originalInterval =
            originalInterval instanceof UnitTypeImpl_1.UnitTypeImpl
                ? originalInterval
                : (0, _1.data)(originalInterval, "unit");
        return (0, _1.data)(this.isNull()
            ? null
            : this.value *
                (1 / originalInterval.getConversionFactor(targetInterval)), this.type).setConfig(Object.assign(Object.assign({}, this.config), { interval: (0, _1.data)(targetInterval, "unit") }));
    }
}
exports.IntegerTypeImpl = IntegerTypeImpl;
//# sourceMappingURL=IntegerTypeImpl.js.map