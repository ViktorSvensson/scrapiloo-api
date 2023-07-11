import {IntegerType} from ".";
import {FloatType} from "./FloatType";

export interface NumericType {
  /**
   * Multiplies two numeric types.
   * @param x
   */
  mul(x: IntegerType | FloatType): this;

  /**
   * Divides by another numeric type.
   * @param x
   */
  div(x: IntegerType | FloatType): this;

  /**
   * Adds another numeric type.
   * @param x
   */
  add(x: IntegerType | FloatType): this;

  /**
   * Subtracts another numeric type.
   * @param x
   */
  sub(x: IntegerType | FloatType): this;
}
