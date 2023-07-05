import { DataTypeImpl } from "./DataTypeImpl";
import { TimeType } from "./TimeType";
export declare class TimeTypeImpl extends DataTypeImpl<string, "time"> implements TimeType {
    getHour(): number;
    getMinute(): number;
    isNull(): boolean;
}
