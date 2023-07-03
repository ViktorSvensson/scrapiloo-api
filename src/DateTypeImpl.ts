import {DataTypeImpl} from "./DataTypeImpl";
import {DateType} from "./DateType";

export class DateTypeImpl
  extends DataTypeImpl<string, "date">
  implements DateType
{
  getYear(): number {
    throw new Error("Method not implemented.");
  }
  getMonth(): number {
    throw new Error("Method not implemented.");
  }
  getDay(): number {
    throw new Error("Method not implemented.");
  }
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}
