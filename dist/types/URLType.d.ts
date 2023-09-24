import { DataType } from "./DataType";
export interface URLType extends DataType<string> {
    readonly type: "url";
    readonly value: string;
}
