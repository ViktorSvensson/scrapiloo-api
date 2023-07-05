import { DataTypeImpl } from "./DataTypeImpl";
import { StringType } from "./StringType";
export declare class StringTypeImpl extends DataTypeImpl<string, "string"> implements StringType {
    pretty(): string;
    isNull(): boolean;
}
