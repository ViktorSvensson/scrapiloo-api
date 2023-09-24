import type { URLType } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class URLTypeImpl extends DataTypeImpl<`https://${string}`, "url"> implements URLType {
    isNull(): boolean;
}
