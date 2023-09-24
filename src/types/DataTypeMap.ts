import type {BooleanType} from "./BooleanType";
import type {CurrencyType} from "./CurrencyType";
import type {DateType} from "./DateType";
import type {FloatType} from "./FloatType";
import type {ImageType} from "./ImageType";
import type {IntegerType} from "./IntegerType";
import type {StringType} from "./StringType";
import type {TimeType} from "./TimeType";
import type {URLType} from "./URLType";
import type {UnitType} from "./UnitType";

export interface DataTypeMap {
  boolean: BooleanType;
  float: FloatType;
  image: ImageType;
  integer: IntegerType;
  string: StringType;
  time: TimeType;
  unit: UnitType;
  url: URLType;
  currency: CurrencyType;
  date: DateType;
}
