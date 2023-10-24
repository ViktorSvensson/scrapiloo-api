import { DataType } from "./DataType";
export interface UnitTypeConfig {
    /**
     * Determines which form of the unit should be used; `singular`,
     * `plural` or `abbr`.
     *
     * ```
     * singular: 'minute'
     * plural: 'minutes'
     * abbr: 'min'
     * ```
     */
    form: "singular" | "plural" | "abbr";
    translations: {
        [k in UnitName]?: {
            abbr: string;
            singular: string;
            plural?: string;
        };
    };
}
export interface UnitType extends DataType<UnitName> {
    readonly type: "unit";
    readonly value: UnitName;
    readonly config: UnitTypeConfig;
    /**
     * Calculates the conversion factor when converting this unit
     * to another unit. If `toUnit` is not available to convert to,
     * an error is thrown.
     * @param toUnit Target unit
     */
    getConversionFactor(toUnit: UnitName): number;
}
export type UnitName = "kilometer" | "meter" | "centimeter" | "millimeter" | "gram" | "kilogram" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year" | "kbps" | "mbps" | "gbps" | "percent";
