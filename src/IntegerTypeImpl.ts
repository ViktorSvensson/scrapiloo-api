import {FloatType, data} from ".";
import {DataTypeImpl} from "./DataTypeImpl";
import {IntegerType, IntegerTypeConfig} from "./IntegerType";
import {UnitName, UnitType} from "./UnitType";
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
    return [
      Math.round(this.value).toLocaleString("sv-SE", {
        style: "decimal",
        maximumFractionDigits: this.config.decimals,
      }),
      !this.config.displayUnit ? "" : this.config.currency ?? this.config.unit,
      !this.config.displayInterval ? "" : this.config.interval,
    ]
      .filter(
        (str) =>
          str !== null &&
          typeof str !== undefined &&
          String(str ?? "").length > 0
      )
      .join(" ");
  }

  valueOf(): number {
    return Math.round(this.value);
  }

  isNull(): boolean {
    return typeof this.valueOf() !== "number";
  }
  convert(fromUnit: UnitType | UnitName, toUnit: UnitName): IntegerType {
    fromUnit =
      fromUnit instanceof UnitTypeImpl
        ? fromUnit
        : data(fromUnit as UnitName, "unit");
    return data(
      this.isNull()
        ? null
        : this.valueOf() * fromUnit.getConversionFactor(toUnit),
      this.type
    )
      .setConfig(this.config)
      .setConfig({unit: data(toUnit, "unit")});
  }
  setFlexibleUnit(
    originalUnit: UnitType | UnitName,
    targetUnitOptions: UnitName[],
    smallestValue: number = 1
  ): IntegerType {
    if (this.isNull()) return this as this & IntegerType;
    originalUnit =
      originalUnit instanceof UnitTypeImpl
        ? originalUnit
        : data(originalUnit as UnitName, "unit");
    let selectedValue = this.valueOf();
    let selectedUnit = originalUnit.valueOf();
    for (const option of targetUnitOptions) {
      const converted = Math.round(
        originalUnit.getConversionFactor(option) * this.valueOf()
      );
      if (
        converted >= smallestValue &&
        (converted < selectedValue || selectedValue < smallestValue)
      ) {
        selectedValue = converted;
        selectedUnit = option;
      }
    }
    return this.convert(originalUnit, selectedUnit)
      .setConfig(this.config)
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
        : this.valueOf() *
            (1 / originalInterval.getConversionFactor(targetInterval)),
      this.type
    ).setConfig({...this.config, interval: data(targetInterval, "unit")});
  }
}
