import type { UnitName, UnitType, UnitTypeConfig } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class UnitTypeImpl extends DataTypeImpl<UnitName, "unit", UnitTypeConfig> implements UnitType {
    protected defaultConfig: UnitTypeConfig;
    getConversionFactor(toUnit: UnitName): number;
    pretty(): string;
    toString(): string;
    isNull(): boolean;
}
