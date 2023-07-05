import { DataType } from "./DataType";
export interface DateType extends DataType<string> {
    readonly type: "date";
    readonly value: string;
    /**
     * Returns the `year` component of the date.
     */
    getYear(): number;
    /**
     * Returns the `month` component of the date.
     */
    getMonth(): number;
    getDay(): number;
}
