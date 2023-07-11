import { CurrencyType } from "./CurrencyType";
import { DataType } from "./DataType";
import { NumericType } from "./NumericType";
import { UnitName, UnitType } from "./UnitType";
export interface IntegerTypeConfig {
    /**
     * Number of decimals.
     */
    decimals: number;
    /**
     * Unit to be used when pretty printing. If both
     * unit and currency are set, only currency will be
     * displayed.
     */
    unit: UnitName | UnitType;
    /**
     * Time interval to be used, e.g. `price / month`.
     */
    interval: UnitName | UnitType;
    /**
     * Currency to be used when pretty printing. If both
     * unit and currency are set, only currency will be
     * displayed.
     */
    currency: CurrencyType | string;
    /**
     * If set to true, the `pretty()` and `toString()`
     * methods displays unit.
     * @default true
     */
    displayUnit: boolean;
    /**
     * If set to true, the `pretty()` and `toString()`
     * methods displays interval.
     * @default false
     */
    displayInterval: boolean;
}
export interface IntegerType extends DataType<number>, NumericType {
    readonly value: number;
    readonly type: "integer";
    readonly config: IntegerTypeConfig;
    /**
     * Converts `value` from `fromUnit` to `toUnit`. Returns a new object,
     * i.e. **does not mutate the original object**.
     * @param originalUnit
     * @param targetUnit
     */
    convert(originalUnit: UnitType | UnitName, targetUnit: UnitName): IntegerType;
    /**
     * Converts `value` from `originalUnit` to the unit from `targetUnitOptions` that
     * yields the smallest `value` ≥ `smallestValue`. Returns a new object, i.e. **does
     * not mutate the original object**.
     * @param originalUnit
     * @param targetUnitOptions
     * @param smallestValue @default 1 If `value` is < `smallestValue`, use a larger unit
     */
    setFlexibleUnit(originalUnit: UnitType | UnitName, targetUnitOptions: UnitName[], smallestValue?: number): IntegerType;
    /**
     * Converts `value` from `originalInterval` to `targetInterval`. Returns
     * a new object, i.e. **does not mutate the original object**.
     * @param originalUnit
     * @param targetUnit
     */
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): IntegerType;
    /**
     * Pretty prints value.
     * @param displayUnit @default true
     */
    pretty(displayUnit?: boolean): string;
}
