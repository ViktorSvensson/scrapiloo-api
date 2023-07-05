import { DataTypeImpl } from "./DataTypeImpl";
import { DateType } from "./DateType";
export declare class DateTypeImpl extends DataTypeImpl<string, "date"> implements DateType {
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    isNull(): boolean;
}
