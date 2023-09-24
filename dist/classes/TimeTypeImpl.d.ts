import type { TimeType } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class TimeTypeImpl extends DataTypeImpl<string, "time"> implements TimeType {
    getHour(): number;
    getMinute(): number;
    isNull(): boolean;
    pretty(): string;
    getDuration(end: TimeType): {
        readonly minutes: number;
        readonly hours: number;
    };
}
