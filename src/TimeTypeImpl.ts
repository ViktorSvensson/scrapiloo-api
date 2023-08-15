import {DataTypeImpl} from "./DataTypeImpl";
import {TimeType} from "./TimeType";

export class TimeTypeImpl
  extends DataTypeImpl<string, "time">
  implements TimeType
{
  getHour(): number {
    if (this.isNull()) return null;
    const m = this.value.match(/^(?<h>\d{2}):(?<m>\d{2})/);
    if (!m || !m.groups?.h || !m.groups?.m)
      throw new Error(`Invalid time "${this.value}"`);
    return Number(m.groups.h);
  }

  getMinute(): number {
    if (this.isNull()) return null;
    const m = this.value.match(/^(?<h>\d{2}):(?<m>\d{2})/);
    if (!m || !m.groups?.h || !m.groups?.m)
      throw new Error(`Invalid time "${this.value}"`);
    return Number(m.groups.m);
  }

  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }

  pretty(): string {
    return this.value;
  }

  getDuration(end: TimeType): {
    readonly minutes: number;
    readonly hours: number;
  } {
    const startMin = this.getHour() * 60 + this.getMinute();
    const endMin = end.getHour() * 60 + end.getMinute();
    const durMin = endMin - startMin;
    return {
      get minutes() {
        return durMin;
      },
      get hours() {
        return durMin / 60;
      },
    };
  }
}
