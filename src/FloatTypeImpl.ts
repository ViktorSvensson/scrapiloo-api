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

import {
  DataTypeImpl,
  FloatType,
  FloatTypeConfig,
  IntegerType,
  UnitName,
  UnitType,
  UnitTypeImpl,
  data,
} from ".";

export class FloatTypeImpl
  extends DataTypeImpl<number, "float", FloatTypeConfig>
  implements FloatType
{
  protected defaultConfig: FloatTypeConfig = {
    decimals: 2,
    unit: null,
    interval: null,
    currency: null,
    displayUnit: true,
    displayInterval: false,
  };

  mul(x: FloatType | IntegerType | number): this & FloatType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value * x.value, this.type) as this;
  }

  div(x: FloatType | IntegerType | number): this & FloatType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value / x.value, this.type) as this;
  }

  add(x: FloatType | IntegerType | number): this & FloatType {
    x = data(x, "float");
    if (this.isNull() || x.isNull()) return data(null, this.type) as this;
    return data(this.value + x.value, this.type) as this;
  }

  sub(x: FloatType | IntegerType | number): this & FloatType {
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

  setConfig(config: Partial<FloatTypeConfig>): this {
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
    return super.setConfig(config as any);
  }

  pretty(): string {
    if (this.isNull()) return "–";
    let val = Number(this.value).toLocaleString("sv-SE", {
      minimumFractionDigits: this.config.decimals,
      maximumFractionDigits: this.config.decimals,
      style: "decimal",
    });
    if (
      this.config.displayUnit &&
      (this.config.unit?.valueOf() || this.config.currency?.valueOf())
    ) {
      val = `${val} ${
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
  isNull() {
    return typeof this.valueOf() !== "number";
  }

  convert(fromUnit: UnitType | UnitName, toUnit: UnitName): this {
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
      .setConfig({unit: data(toUnit, "unit")}) as this;
  }

  changeInterval(
    originalInterval: UnitType | UnitName,
    targetInterval: UnitName
  ): FloatType {
    if (!originalInterval)
      throw new Error(`Invalid originalInterval "${originalInterval}"`);
    if (!targetInterval)
      throw new Error(`Invalid targetInterval "${targetInterval}"`);

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
    )
      .setConfig(this.config)
      .setConfig({interval: data(targetInterval, "unit")});
  }
}
