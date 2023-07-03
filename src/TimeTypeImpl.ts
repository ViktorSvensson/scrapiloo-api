import {DataTypeImpl} from "./DataTypeImpl";
import {TimeType} from "./TimeType";

export class TimeTypeImpl
  extends DataTypeImpl<string, "time">
  implements TimeType
{
  getHour(): number {
    throw new Error("Method not implemented.");
  }
  getMinute(): number {
    throw new Error("Method not implemented.");
  }
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}
