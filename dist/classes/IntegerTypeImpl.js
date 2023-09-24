import { data } from "../data";
import { DataTypeImpl } from "./DataTypeImpl";
import { UnitTypeImpl } from "./UnitTypeImpl";
export class IntegerTypeImpl extends DataTypeImpl {
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
        let val = Math.round(this.value).toLocaleString("sv-SE", {
            style: "decimal",
            maximumFractionDigits: this.config.decimals,
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
    valueOf() {
        return Math.round(this.value);
    }
    isNull() {
        return typeof this.valueOf() !== "number";
    }
    convert(fromUnit, toUnit) {
        fromUnit =
            fromUnit instanceof UnitTypeImpl
                ? fromUnit
                : data(fromUnit, "unit");
        return data(this.isNull() ? null : this.value * fromUnit.getConversionFactor(toUnit), this.type).setConfig({ unit: data(toUnit, "unit") });
    }
    setFlexibleUnit(originalUnit, targetUnitOptions, smallestValue = 0.95) {
        if (this.isNull())
            return this;
        originalUnit = data(originalUnit, "unit");
        let selectedValue = this.value;
        let selectedUnit = originalUnit.valueOf();
        for (const option of targetUnitOptions) {
            const converted = originalUnit.getConversionFactor(option) * this.value;
            if (converted >= smallestValue &&
                (converted < selectedValue || selectedValue < smallestValue)) {
                selectedValue = Math.round(converted);
                selectedUnit = option;
            }
        }
        return this.clone()
            .convert(originalUnit, selectedUnit)
            .setConfig({ unit: data(selectedUnit, "unit") });
    }
    changeInterval(originalInterval, targetInterval) {
        originalInterval =
            originalInterval instanceof UnitTypeImpl
                ? originalInterval
                : data(originalInterval, "unit");
        return data(this.isNull()
            ? null
            : this.value *
                (1 / originalInterval.getConversionFactor(targetInterval)), this.type).setConfig({ ...this.config, interval: data(targetInterval, "unit") });
    }
}
