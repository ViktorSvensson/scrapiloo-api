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
export * from "./BooleanType";
export * from "./BooleanTypeImpl";
export * from "./CurrencyType";
export * from "./CurrencyTypeImpl";
export * from "./DataType";
export * from "./DataTypeImpl";
export * from "./DateType";
export * from "./DateTypeImpl";
export * from "./FloatType";
export * from "./FloatTypeImpl";
export * from "./ImageType";
export * from "./ImageTypeImpl";
export * from "./IntegerType";
export * from "./IntegerTypeImpl";
export * from "./StringType";
export * from "./StringTypeImpl";
export * from "./TimeType";
export * from "./TimeTypeImpl";
export * from "./URLType";
export * from "./URLTypeImpl";
export * from "./UnitType";
export * from "./UnitTypeImpl";
import { BooleanType, CurrencyType, DateType, FloatType, ImageType, IntegerType, StringType, TimeType, URLType, UnitType } from "./index";
import { DataType, TypeName } from "./DataType";
import { ScrapilooLoan } from "./scrapiloo-loans";
export interface DataTypeMap {
    boolean: BooleanType;
    float: FloatType;
    image: ImageType;
    integer: IntegerType;
    string: StringType;
    time: TimeType;
    unit: UnitType;
    url: URLType;
    currency: CurrencyType;
    date: DateType;
}
export declare function data<TN extends TypeName, T extends DataTypeMap[TN]["value"]>(value: T | DataType, type: TN): DataTypeMap[TN];
export declare class BaseEntry {
}
interface ScrapilooDatasetMap {
    loans: ScrapilooLoan;
}
export default function Scrapiloo<D extends keyof ScrapilooDatasetMap, B extends BaseEntry = BaseEntry, T extends ScrapilooDatasetMap[D] = ScrapilooDatasetMap[D]>(config: {
    dataset: D;
    endpoint: string;
    prototype: {
        new (): B;
    };
}): Promise<{
    get: (key: string) => T & B;
    all: () => (T & B)[];
}>;
