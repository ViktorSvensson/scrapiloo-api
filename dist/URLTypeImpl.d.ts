import { DataTypeImpl } from "./DataTypeImpl";
import { URLType } from "./URLType";
export declare class URLTypeImpl extends DataTypeImpl<`https://${string}`, "url"> implements URLType {
    isNull(): boolean;
}
