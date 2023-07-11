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
import { DataTypeImpl, FloatType, FloatTypeConfig, IntegerType, UnitName, UnitType } from ".";
export declare class FloatTypeImpl extends DataTypeImpl<number, "float", FloatTypeConfig> implements FloatType {
    protected defaultConfig: FloatTypeConfig;
    mul(x: FloatType | IntegerType): this;
    div(x: FloatType | IntegerType): this;
    add(x: FloatType | IntegerType): this;
    sub(x: FloatType | IntegerType): this;
    setConfig(config: Partial<FloatTypeConfig>): this;
    pretty(): string;
    isNull(): boolean;
    convert(fromUnit: UnitType | UnitName, toUnit: UnitName): this;
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): FloatType;
}
