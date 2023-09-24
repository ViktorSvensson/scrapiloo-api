import type { StringType } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class StringTypeImpl extends DataTypeImpl<string, "string"> implements StringType {
    pretty(): string;
    isNull(): boolean;
}
