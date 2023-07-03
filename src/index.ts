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

import axios from "axios";
import {BooleanTypeImpl} from "./BooleanTypeImpl";
import {CurrencyTypeImpl} from "./CurrencyTypeImpl";
import {DateTypeImpl} from "./DateTypeImpl";
import {FloatTypeImpl} from "./FloatTypeImpl";
import {ImageTypeImpl} from "./ImageTypeImpl";
import {IntegerTypeImpl} from "./IntegerTypeImpl";
import {StringTypeImpl} from "./StringTypeImpl";
import {TimeTypeImpl} from "./TimeTypeImpl";
import {URLTypeImpl} from "./URLTypeImpl";
import {UnitTypeImpl} from "./UnitTypeImpl";
import {
  BooleanType,
  CurrencyType,
  DateType,
  FloatType,
  ImageType,
  IntegerType,
  StringType,
  TimeType,
  URLType,
  UnitType,
} from "./index";

import {DataType, TypeName} from "./DataType";
import {DataTypeImpl} from "./DataTypeImpl";
import {ScrapilooLoan} from "./scrapiloo-loans";

const DataTypeConstructorMap = {
  boolean: BooleanTypeImpl,
  float: FloatTypeImpl,
  image: ImageTypeImpl,
  integer: IntegerTypeImpl,
  string: StringTypeImpl,
  time: TimeTypeImpl,
  unit: UnitTypeImpl,
  url: URLTypeImpl,
  currency: CurrencyTypeImpl,
  date: DateTypeImpl,
};

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

export function data<TN extends TypeName, T extends DataTypeMap[TN]["value"]>(
  value: T | DataType,
  type: TN
): DataTypeMap[TN] {
  const constr = DataTypeConstructorMap[type] as unknown as {
    new (value: T, type: TN): DataTypeMap[TN];
  };
  return new constr(
    value instanceof DataTypeImpl ? value.valueOf() : value,
    type
  ) as unknown as DataTypeMap[TN];
}

export class BaseEntry {}

interface ScrapilooDatasetMap {
  loans: ScrapilooLoan;
}

export default async function Scrapiloo<
  D extends keyof ScrapilooDatasetMap,
  B extends BaseEntry = BaseEntry,
  T extends ScrapilooDatasetMap[D] = ScrapilooDatasetMap[D]
>(dataset: D, prototype: {new (): B}) {
  const apiOutput = await axios.get(
    `http://localhost:1337/api/entries?dataset=${dataset}`
  );
  const entries: {[key: string]: string | number | boolean} =
    apiOutput.data.data;
  const schema: {
    [key: string]: {type: TypeName; default: string | number | boolean};
  } = apiOutput.data.schema;

  function all(): (T & B)[] {
    return Array.from(
      new Set(Object.keys(entries).map((key) => key.split(":")[0])).values()
    ).map((key) => {
      return get(key);
    });
  }

  function deepAssign(obj: any, path: string, value: any) {
    const sub = path.split(":");
    let target = obj;
    for (const s of sub.slice(0, -1)) {
      target[s] = target[s] ?? {};
      target = target[s];
    }
    target[sub[sub.length - 1]] = value;
    return obj;
  }

  function get(key: string): T & B {
    const res: any = new prototype();
    res.__key = entries[`${key}:__key`];
    for (const [ref, def] of Object.entries(schema)) {
      const entryKey = `${key}:${ref}`;

      let $data = data(
        entryKey in entries ? entries[entryKey] : def.default,
        def.type
      );

      $data = !$data.isNull() ? $data : data(def.default, def.type);

      deepAssign(res, ref, $data);
    }

    return res;
  }

  return {get, all};
}
