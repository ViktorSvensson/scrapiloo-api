/**
 * @author     Carl Viktor Svensson
 * @author     Kelsie Maria Enqvist
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */
import { ReactNode } from "react";
import type { DataType, TypeName } from "../types";
export declare abstract class DataTypeImpl<T extends string | number | boolean | null = string | number | boolean | null, TN extends TypeName = TypeName, C extends {} = {}> implements DataType<T, C> {
    #private;
    readonly value: T;
    readonly type: TN;
    protected defaultConfig: C;
    get config(): C;
    constructor(value: T, type: TN);
    setConfig(config: this["config"]): this;
    clone(): this;
    get [Symbol.toStringTag](): string;
    valueOf(): T;
    pretty(): string | ReactNode;
    toString(): string;
    isNull(): boolean;
    toSortable(): number;
    toJSON(): object;
}
