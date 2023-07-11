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
export * from "./NumericType";
export * from "./StringType";
export * from "./StringTypeImpl";
export * from "./TimeType";
export * from "./TimeTypeImpl";
export * from "./URLType";
export * from "./URLTypeImpl";
export * from "./UnitType";
export * from "./UnitTypeImpl";
export * from "./scrapiloo-loans";
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
/**
 * Creates a DataType instance.
 * @param value Value
 * @param type Type name
 * @returns
 */
export declare function data<TN extends TypeName, T extends DataTypeMap[TN]["value"]>(value: T | DataType, type: TN): DataTypeMap[TN];
export declare class BaseEntry {
}
interface ScrapilooDatasetMap {
    loans: ScrapilooLoan;
}
/**
 * Creates an API data source.
 * @param config
 * @returns
 */
export default function Scrapiloo<D extends keyof ScrapilooDatasetMap, B extends BaseEntry = BaseEntry, T extends ScrapilooDatasetMap[D] = ScrapilooDatasetMap[D]>(config: {
    /**
     * Dataset key.
     */
    dataset: D;
    /**
     * Implementation of the `fetch` API that should be used
     * to make requests. Provide a specific function in order
     * to intercept requests for caching purposes etc.
     */
    fetch?: typeof fetch;
    /**
     * API endpoint URL.
     */
    endpoint: string;
    /**
     * A class prototype that all attributes will be assigned
     * to.
     */
    prototype: {
        new (): B;
    };
}): Promise<{
    get: (key: string) => T & B;
    all: () => (T & B)[];
}>;
