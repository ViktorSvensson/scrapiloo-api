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
import type { FloatType, FloatTypeConfig, IntegerType, UnitName, UnitType } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class FloatTypeImpl extends DataTypeImpl<number, "float", FloatTypeConfig> implements FloatType {
    protected defaultConfig: FloatTypeConfig;
    mul(x: FloatType | IntegerType | number): this & FloatType;
    div(x: FloatType | IntegerType | number): this & FloatType;
    add(x: FloatType | IntegerType | number): this & FloatType;
    sub(x: FloatType | IntegerType | number): this & FloatType;
    greaterThan(x: number | IntegerType | FloatType): boolean;
    lessThan(x: number | IntegerType | FloatType): boolean;
    greaterThanOrEqual(x: number | IntegerType | FloatType): boolean;
    lessThanOrEqual(x: number | IntegerType | FloatType): boolean;
    equals(x: number | IntegerType | FloatType, precision?: number): boolean;
    setConfig(config: Partial<FloatTypeConfig>): this;
    pretty(): string;
    isNull(): boolean;
    convert(fromUnit: UnitType | UnitName, toUnit: UnitName): this;
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): FloatType;
}
