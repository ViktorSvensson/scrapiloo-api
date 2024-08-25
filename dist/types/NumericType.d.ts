import { IntegerType } from ".";
import { FloatType } from "./FloatType";
export interface NumericType {
    /**
     * Multiplies by x.
     * @param x
     */
    mul(x: IntegerType | FloatType | number): this;
    /**
     * Divides by x.
     * @param x
     */
    div(x: IntegerType | FloatType | number): this;
    /**
     * Adds x.
     * @param x
     */
    add(x: IntegerType | FloatType | number): this;
    /**
     * Subtracts x.
     * @param x
     */
    sub(x: IntegerType | FloatType | number): this;
    /**
     * Checks if value is greater than x.
     * @param x
     */
    greaterThan(x: IntegerType | FloatType | number): boolean;
    /**
     * Checks if value is less than x.
     * @param x
     */
    lessThan(x: IntegerType | FloatType | number): boolean;
    /**
     * Checks if value is greater than or equal to x.
     * @param x
     */
    greaterThanOrEqual(x: IntegerType | FloatType | number): boolean;
    /**
     * Checks if value is less than or equal to x.
     * @param x
     */
    lessThanOrEqual(x: IntegerType | FloatType | number): boolean;
    /**
     * Checks if value is equal to x.
     * @param x
     */
    equals(x: IntegerType | FloatType | number): boolean;
    equals(x: IntegerType | FloatType | number, precision: number): boolean;
}
