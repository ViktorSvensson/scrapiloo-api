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
import type { DataType } from "./DataType";
import type { IntegerTypeConfig } from "./IntegerType";
import type { NumericType } from "./NumericType";
import type { UnitName, UnitType } from "./UnitType";
export interface FloatTypeConfig extends IntegerTypeConfig {
}
export interface FloatType extends DataType<number, FloatTypeConfig>, NumericType {
    readonly type: "float";
    readonly value: number;
    readonly config: FloatTypeConfig;
    setConfig(config: Partial<FloatTypeConfig>): this;
    /**
     * Converts `value` from `fromUnit` to `toUnit`. Returns a new object,
     * i.e. **does not mutate the original object**.
     * @param originalUnit
     * @param targetUnit
     */
    convert(originalUnit: UnitType | UnitName, targetUnit: UnitName): this;
    /**
     * Converts `value` from `originalInterval` to `targetInterval`. Returns
     * a new object, i.e. **does not mutate the original object**.
     * @param originalUnit
     * @param targetUnit
     */
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): FloatType;
}
