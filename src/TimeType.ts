import {DataType} from "./DataType";

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
}
