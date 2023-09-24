import { BooleanTypeImpl } from "./classes/BooleanTypeImpl";
import { CurrencyTypeImpl } from "./classes/CurrencyTypeImpl";
import { DataTypeImpl } from "./classes/DataTypeImpl";
import { DateTypeImpl } from "./classes/DateTypeImpl";
import { FloatTypeImpl } from "./classes/FloatTypeImpl";
import { ImageTypeImpl } from "./classes/ImageTypeImpl";
import { IntegerTypeImpl } from "./classes/IntegerTypeImpl";
import { StringTypeImpl } from "./classes/StringTypeImpl";
import { TimeTypeImpl } from "./classes/TimeTypeImpl";
import { URLTypeImpl } from "./classes/URLTypeImpl";
import { UnitTypeImpl } from "./classes/UnitTypeImpl";
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
export function data(value, type) {
    const constr = getConstructor[type]();
    return new constr(value instanceof DataTypeImpl ? value.valueOf() : value, type);
}
export default data;
