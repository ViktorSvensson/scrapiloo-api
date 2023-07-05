import { DataTypeImpl } from "./DataTypeImpl";
import { UnitName, UnitType, UnitTypeConfig } from "./UnitType";
export declare class UnitTypeImpl extends DataTypeImpl<UnitName, "unit", UnitTypeConfig> implements UnitType {
    protected defaultConfig: UnitTypeConfig;
    getConversionFactor(toUnit: UnitName): number;
    pretty(): string;
    toString(): string;
    isNull(): boolean;
}
