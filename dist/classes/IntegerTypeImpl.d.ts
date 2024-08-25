import type { FloatType, IntegerType, IntegerTypeConfig, UnitName, UnitType } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class IntegerTypeImpl extends DataTypeImpl<number, "integer", IntegerTypeConfig> implements IntegerType {
    mul(x: FloatType | IntegerType | number): this & IntegerType;
    div(x: FloatType | IntegerType | number): this & IntegerType;
    add(x: FloatType | IntegerType | number): this & IntegerType;
    sub(x: FloatType | IntegerType | number): this & IntegerType;
    greaterThan(x: number | IntegerType | FloatType): boolean;
    lessThan(x: number | IntegerType | FloatType): boolean;
    greaterThanOrEqual(x: number | IntegerType | FloatType): boolean;
    lessThanOrEqual(x: number | IntegerType | FloatType): boolean;
    equals(x: number | IntegerType | FloatType): boolean;
    protected defaultConfig: IntegerTypeConfig;
    setConfig(config: Partial<IntegerTypeConfig>): this;
    pretty(): string;
    valueOf(): number;
    isNull(): boolean;
    convert(fromUnit: UnitType | UnitName, toUnit: UnitName): IntegerType;
    setFlexibleUnit(originalUnit: UnitType | UnitName, targetUnitOptions: UnitName[], smallestValue?: number): IntegerType;
    changeInterval(originalInterval: UnitType | UnitName, targetInterval: UnitName): IntegerType;
}
