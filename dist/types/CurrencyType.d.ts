import { DataType } from "./DataType";
export interface CurrencyType extends DataType<string> {
    readonly type: "currency";
    readonly value: string;
}
