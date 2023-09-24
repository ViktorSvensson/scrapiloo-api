import { DataType } from "./DataType";
export interface StringType extends DataType<string> {
    readonly type: "string";
    readonly value: string;
}
