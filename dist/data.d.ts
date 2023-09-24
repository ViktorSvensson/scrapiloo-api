import { BooleanTypeImpl } from "./classes/BooleanTypeImpl";
import { CurrencyTypeImpl } from "./classes/CurrencyTypeImpl";
import { DateTypeImpl } from "./classes/DateTypeImpl";
import { FloatTypeImpl } from "./classes/FloatTypeImpl";
import { ImageTypeImpl } from "./classes/ImageTypeImpl";
import { IntegerTypeImpl } from "./classes/IntegerTypeImpl";
import { StringTypeImpl } from "./classes/StringTypeImpl";
import { TimeTypeImpl } from "./classes/TimeTypeImpl";
import { URLTypeImpl } from "./classes/URLTypeImpl";
import { UnitTypeImpl } from "./classes/UnitTypeImpl";
import type { DataType, DataTypeMap, TypeName } from "./types";
export declare const getConstructor: {
    boolean: () => typeof BooleanTypeImpl;
    float: () => typeof FloatTypeImpl;
    image: () => typeof ImageTypeImpl;
    integer: () => typeof IntegerTypeImpl;
    string: () => typeof StringTypeImpl;
    time: () => typeof TimeTypeImpl;
    unit: () => typeof UnitTypeImpl;
    url: () => typeof URLTypeImpl;
    currency: () => typeof CurrencyTypeImpl;
    date: () => typeof DateTypeImpl;
};
/**
 * Creates a DataType instance.
 * @param value Value
 * @param type Type name
 * @returns
 */
export declare function data<TN extends TypeName, T extends DataTypeMap[TN]["value"]>(value: T | DataType, type: TN): DataTypeMap[TN];
export default data;
