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

import {ReactNode} from "react";
import {data} from "../data";
import type {DataType, TypeName} from "../types";

export abstract class DataTypeImpl<
  T extends string | number | boolean | null = string | number | boolean | null,
  TN extends TypeName = TypeName,
  C extends {} = {}
> implements DataType<T, C>
{
  #config: C;
  protected defaultConfig: C = {} as C;

  get config(): C {
    return {...(this.#config ?? this.defaultConfig)} as C;
  }

  constructor(readonly value: T, readonly type: TN) {}

  setConfig(config: this["config"]): this {
    const clone = this.clone();
    clone.#config = {...clone.#config, ...config};
    return clone;
  }

  clone(): this {
    const clone = data(this.valueOf(), this.type) as any as this;
    clone.#config = {...this.config};
    return clone;
  }

  get [Symbol.toStringTag]() {
    return `${this.value}`;
  }

  valueOf(): T {
    return this.value;
  }

  pretty(): string | ReactNode {
    throw new Error("Method not implemented.");
  }

  toString(): string {
    return this.pretty().toString();
  }

  isNull(): boolean {
    throw new Error("Method not implemented.");
  }

  toSortable(): number {
    throw new Error("Method not implemented.");
  }
}
