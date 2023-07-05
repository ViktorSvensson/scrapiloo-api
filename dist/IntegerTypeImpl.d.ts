import { DataTypeImpl } from "./DataTypeImpl";
import { IntegerType, IntegerTypeConfig } from "./IntegerType";
import { UnitName, UnitType } from "./UnitType";
export declare class IntegerTypeImpl extends DataTypeImpl<number, "integer", IntegerTypeConfig> implements IntegerType {
    protected defaultConfig: IntegerTypeConfig;
    setConfig(config: Partial<IntegerTypeConfig>): this;
    pretty(): string;
    isNull(): boolean;
    convert(fromUnit: UnitType | UnitName, toUnit: UnitName): IntegerType;
    setFlexibleUnit(originalUnit: UnitType | UnitName, targetUnitOptions: UnitName[], smallestValue?: number): IntegerType;
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): IntegerType;
}
