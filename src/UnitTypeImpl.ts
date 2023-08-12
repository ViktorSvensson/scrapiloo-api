import {DataTypeImpl} from "./DataTypeImpl";
import {UnitName, UnitType, UnitTypeConfig} from "./UnitType";

export class UnitTypeImpl
  extends DataTypeImpl<UnitName, "unit", UnitTypeConfig>
  implements UnitType
{
  protected defaultConfig: UnitTypeConfig = {
    form: "abbr",
    translations: {
      day: {abbr: "d", singular: "dag", plural: "dagar"},
      month: {abbr: "mån", singular: "månad", plural: "månader"},
      year: {abbr: "år", singular: "år", plural: "år"},
      week: {abbr: "v", singular: "vecka", plural: "veckor"},
      percent: {abbr: "%", singular: "%", plural: "%"},
    },
  };

  getConversionFactor(toUnit: UnitName): number {
    return unitConversion(this.valueOf(), toUnit);
  }

  pretty(): string {
    return this.toString();
  }

  toString(): string {
    if (this.value in this.config.translations) {
      return this.config.translations[this.value][this.config.form];
    }
    return this.value;
  }

  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

function unitConversion(from: UnitName, to: UnitName) {
  if (from === to) return 1;

  if (from === "year") {
    switch (to) {
      case "month":
        return 12;
      case "day":
        return 365;
      case "week":
        return 52;
    }
  }

  if (from === "month") {
    switch (to) {
      case "year":
        return 1 / 12;
      case "day":
        return 30.4;
      case "week":
        return 30.4 / 7;
    }
  }

  if (from === "day") {
    switch (to) {
      case "year":
        return 1 / 365;
      case "month":
        return 1 / 30.4;
      case "week":
        return 1 / 7;
    }
  }

  if (from === "week") {
    switch (to) {
      case "year":
        return 1 / 52;
      case "month":
        return 1 / (30.4 / 7);
      case "day":
        return 7;
    }
  }

  throw new Error(
    `Conversions between "${from}" and "${to}" are not implemented`
  );
}
