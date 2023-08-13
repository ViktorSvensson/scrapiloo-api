import { FloatType } from ".";
import { DataTypeImpl } from "./DataTypeImpl";
import { IntegerType, IntegerTypeConfig } from "./IntegerType";
import { UnitName, UnitType } from "./UnitType";
export declare class IntegerTypeImpl extends DataTypeImpl<number, "integer", IntegerTypeConfig> implements IntegerType {
    mul(x: FloatType | IntegerType | number): this & IntegerType;
    div(x: FloatType | IntegerType | number): this & IntegerType;
    add(x: FloatType | IntegerType | number): this & IntegerType;
    sub(x: FloatType | IntegerType | number): this & IntegerType;
    greaterThan(x: number | IntegerType | FloatType): boolean;
    lessThan(x: number | IntegerType | FloatType): boolean;
    protected defaultConfig: IntegerTypeConfig;
    setConfig(config: Partial<IntegerTypeConfig>): this;
    pretty(): string;
    valueOf(): number;
    isNull(): boolean;
    convert(fromUnit: UnitType | UnitName, toUnit: UnitName): IntegerType;
    setFlexibleUnit(originalUnit: UnitType | UnitName, targetUnitOptions: UnitName[], smallestValue?: number): IntegerType;
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): IntegerType;
}
