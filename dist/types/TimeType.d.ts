import { DataType } from "./DataType";
export interface TimeType extends DataType<string> {
    readonly type: "time";
    readonly value: string;
    /**
     * Returns the `hour` component of the time.
     */
    getHour(): number;
    /**
     * Returns the `minute` component of the time.
     */
    getMinute(): number;
    /**
     * Calculates the duration between this time and
     * the provided `end` time.
     * @param end End time
     */
    getDuration(end: TimeType): {
        readonly minutes: number;
        readonly hours: number;
    };
}
