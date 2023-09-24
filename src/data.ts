import {BooleanTypeImpl} from "./classes/BooleanTypeImpl";
import {CurrencyTypeImpl} from "./classes/CurrencyTypeImpl";
import {DataTypeImpl} from "./classes/DataTypeImpl";
import {DateTypeImpl} from "./classes/DateTypeImpl";
import {FloatTypeImpl} from "./classes/FloatTypeImpl";
import {ImageTypeImpl} from "./classes/ImageTypeImpl";
import {IntegerTypeImpl} from "./classes/IntegerTypeImpl";
import {StringTypeImpl} from "./classes/StringTypeImpl";
import {TimeTypeImpl} from "./classes/TimeTypeImpl";
import {URLTypeImpl} from "./classes/URLTypeImpl";
import {UnitTypeImpl} from "./classes/UnitTypeImpl";
import type {DataType, DataTypeMap, TypeName} from "./types";

export const getConstructor = {
  boolean: () => BooleanTypeImpl,
  float: () => FloatTypeImpl,
  image: () => ImageTypeImpl,
  integer: () => IntegerTypeImpl,
  string: () => StringTypeImpl,
  time: () => TimeTypeImpl,
  unit: () => UnitTypeImpl,
  url: () => URLTypeImpl,
  currency: () => CurrencyTypeImpl,
  date: () => DateTypeImpl,
};

/**
 * Creates a DataType instance.
 * @param value Value
 * @param type Type name
 * @returns
 */

export function data<TN extends TypeName, T extends DataTypeMap[TN]["value"]>(
  value: T | DataType,
  type: TN
): DataTypeMap[TN] {
  const constr = getConstructor[type]() as unknown as {
    new (value: T, type: TN): DataTypeMap[TN];
  };
  return new constr(
    value instanceof DataTypeImpl ? value.valueOf() : value,
    type
  ) as unknown as DataTypeMap[TN];
}

export default data;
