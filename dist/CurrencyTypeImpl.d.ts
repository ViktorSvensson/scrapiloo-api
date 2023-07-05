import { CurrencyType } from "./CurrencyType";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class CurrencyTypeImpl extends DataTypeImpl<string, "currency"> implements CurrencyType {
    isNull(): boolean;
}
