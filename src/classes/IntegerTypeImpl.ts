import {data} from "../data";
import type {
  FloatType,
  IntegerType,
  IntegerTypeConfig,
  UnitName,
  UnitType,
} from "../types";
import {DataTypeImpl} from "./DataTypeImpl";
import {UnitTypeImpl} from "./UnitTypeImpl";

export class IntegerTypeImpl
  extends DataTypeImpl<number, "integer", IntegerTypeConfig>
  implements IntegerType
{
  mul(x: FloatType | IntegerType | number): this & IntegerType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value * x.value, this.type) as this;
  }

  div(x: FloatType | IntegerType | number): this & IntegerType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value / x.value, this.type) as this;
  }

  add(x: FloatType | IntegerType | number): this & IntegerType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value + x.value, this.type) as this;
  }

  sub(x: FloatType | IntegerType | number): this & IntegerType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value - x.value, this.type) as this;
  }

  greaterThan(x: number | IntegerType | FloatType): boolean {
    x = data(x, "float");
    return this.value > x.value;
  }

  lessThan(x: number | IntegerType | FloatType): boolean {
    x = data(x, "float");
    return this.value < x.value;
  }

  greaterThanOrEqual(x: number | IntegerType | FloatType): boolean {
    x = data(x, "float");
    return this.value >= x.value;
  }

  lessThanOrEqual(x: number | IntegerType | FloatType): boolean {
    x = data(x, "float");
    return this.value <= x.value;
  }

  equals(x: number | IntegerType | FloatType): boolean {
    x = data(x, "integer");
    if (this.isNull() && x.isNull()) return true;
    if (this.isNull() || x.isNull()) return false;
    return this.valueOf() === x.valueOf();
  }

  protected defaultConfig: IntegerTypeConfig = {
    decimals: 0,
    unit: null,
    interval: null,
    currency: null,
    displayUnit: true,
    displayInterval: false,
  };

  setConfig(config: Partial<IntegerTypeConfig>): this {
    if ("unit" in config) {
      config.unit =
        config.unit instanceof UnitTypeImpl
          ? config.unit
          : data(config.unit as UnitName, "unit");
    }
    if ("interval" in config) {
      config.interval =
        config.interval instanceof UnitTypeImpl
          ? config.interval
          : data(config.interval as UnitName, "unit");
    }
    return super.setConfig(config as this["config"]);
  }

  pretty() {
    if (this.isNull()) return "–";
    let val = Math.round(this.value).toLocaleString("sv-SE", {
      style: "decimal",
      maximumFractionDigits: this.config.decimals,
    });
    if (
      this.config.displayUnit &&
      (this.config.unit?.valueOf() || this.config.currency?.valueOf())
    ) {
      val = `${val} ${
        this.config.currency?.valueOf()
          ? this.config.currency
          : this.config.unit
      }`;
    }
    if (this.config.displayInterval && this.config.interval?.valueOf()) {
      val = `${val}/${this.config.interval}`;
    }
    return val;
  }

  valueOf(): number {
    return Math.round(this.value);
  }

  isNull(): boolean {
    return typeof this.value !== "number";
  }
  convert(fromUnit: UnitType | UnitName, toUnit: UnitName): IntegerType {
    fromUnit =
      fromUnit instanceof UnitTypeImpl
        ? fromUnit
        : data(fromUnit as UnitName, "unit");
    return data(
      this.isNull() ? null : this.value * fromUnit.getConversionFactor(toUnit),
      this.type
    ).setConfig({unit: data(toUnit, "unit")});
  }
  setFlexibleUnit(
    originalUnit: UnitType | UnitName,
    targetUnitOptions: UnitName[],
    smallestValue: number = 0.95
  ): IntegerType {
    if (this.isNull()) return this as this & IntegerType;
    originalUnit = data(originalUnit as UnitName, "unit");
    let selectedValue = this.value;
    let selectedUnit = originalUnit.valueOf();
    for (const option of targetUnitOptions) {
      const converted = originalUnit.getConversionFactor(option) * this.value;
      if (
        converted >= smallestValue &&
        (converted < selectedValue || selectedValue < smallestValue)
      ) {
        selectedValue = Math.round(converted);
        selectedUnit = option;
      }
    }
    return this.clone()
      .convert(originalUnit, selectedUnit)
      .setConfig({unit: data(selectedUnit, "unit")});
  }

  changeInterval(
    originalInterval: UnitType | UnitName,
    targetInterval: UnitName
  ): IntegerType {
    originalInterval =
      originalInterval instanceof UnitTypeImpl
        ? originalInterval
        : data(originalInterval as UnitName, "unit");
    return data(
      this.isNull()
        ? null
        : this.value *
            (1 / originalInterval.getConversionFactor(targetInterval)),
      this.type
    ).setConfig({...this.config, interval: data(targetInterval, "unit")});
  }
}
