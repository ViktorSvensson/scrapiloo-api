import {data} from ".";
/**
 * @author     Carl Viktor Svensson
 * @author     Kelsie Maria Enqvist
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */

describe("IntegerType: Convert", () => {
  test("Can make unit conversions from year", () => {
    const x = data(3, "integer").setConfig({unit: "year"});

    expect(x.convert("year", "year").valueOf()).toEqual(3);
    expect(x.convert("year", "month").valueOf()).toEqual(12 * 3);
    expect(x.convert("year", "day").valueOf()).toEqual(365 * 3);
    expect(x.convert("year", "week").valueOf()).toEqual(52 * 3);
  });
  test("Can make unit conversions from day", () => {
    const x = data(365, "integer").setConfig({unit: "day"});

    expect(x.convert("day", "day").valueOf()).toEqual(365);
    expect(x.convert("day", "month").valueOf()).toEqual(12);
    expect(x.convert("day", "year").valueOf()).toEqual(1);
    expect(x.convert("day", "week").valueOf()).toEqual(52);
  });
  test("Can make unit conversions from month", () => {
    const x = data(12, "integer").setConfig({unit: "month"});

    expect(x.convert("month", "month").valueOf()).toEqual(12);
    expect(x.convert("month", "day").valueOf()).toEqual(365);
    expect(x.convert("month", "year").valueOf()).toEqual(1);
    expect(x.convert("month", "week").valueOf()).toEqual(52);
  });
});

describe("IntegerType: Interval", () => {
  test("Can change interval from year", () => {
    const x = data(10000, "integer").setConfig({unit: "year"});
    expect(x.changeInterval("year", "year").valueOf()).toEqual(10000);
    expect(x.changeInterval("year", "month").valueOf()).toEqual(833);
    expect(x.changeInterval("year", "day").valueOf()).toEqual(27);
    expect(x.changeInterval("year", "week").valueOf()).toEqual(192);
  });
  test("Can change interval from day", () => {
    const x = data(10000, "integer").setConfig({unit: "day"});
    expect(x.changeInterval("day", "day").valueOf()).toEqual(10000);
    expect(x.changeInterval("day", "month").valueOf()).toEqual(10000 * 30.4);
    expect(x.changeInterval("day", "year").valueOf()).toEqual(10000 * 365);
    expect(x.changeInterval("day", "week").valueOf()).toEqual(10000 * 7);
  });
  test("Can change interval from month", () => {
    const x = data(10000, "integer").setConfig({unit: "month"});
    expect(x.changeInterval("month", "month").valueOf()).toEqual(10000);
    expect(x.changeInterval("month", "day").valueOf()).toEqual(329);
    expect(x.changeInterval("month", "year").valueOf()).toEqual(120000);
    expect(x.changeInterval("month", "week").valueOf()).toEqual(2303);
  });
});

describe("FloatType: Convert", () => {
  test("Can make unit conversions from year", () => {
    const x = data(3, "float").setConfig({unit: "year"});
    expect(x.convert("year", "year").valueOf()).toBeCloseTo(3);
    expect(x.convert("year", "month").valueOf()).toBeCloseTo(12 * 3);
    expect(x.convert("year", "day").valueOf()).toBeCloseTo(365 * 3);
    expect(x.convert("year", "week").valueOf()).toBeCloseTo(52 * 3);
  });
  test("Can make unit conversions from day", () => {
    const x = data(365, "float").setConfig({unit: "day"});
    expect(x.convert("day", "day").valueOf()).toBeCloseTo(365);
    expect(x.convert("day", "month").valueOf()).toBeCloseTo(12.006);
    expect(x.convert("day", "year").valueOf()).toBeCloseTo(1);
    expect(x.convert("day", "week").valueOf()).toBeCloseTo(52.1428);
  });
  test("Can make unit conversions from month", () => {
    const x = data(12, "float").setConfig({unit: "month"});
    expect(x.convert("month", "month").valueOf()).toBeCloseTo(12);
    expect(x.convert("month", "day").valueOf()).toBeCloseTo(364.8);
    expect(x.convert("month", "year").valueOf()).toBeCloseTo(1);
    expect(x.convert("month", "week").valueOf()).toBeCloseTo(52.1142);
  });
});

describe("Performs math operations", () => {
  test("Can multiply", () => {
    expect(data(100, "float").mul(data(10, "float")).valueOf()).toBeCloseTo(
      1000
    );
    expect(data(120, "integer").mul(data(5, "integer")).valueOf()).toBeCloseTo(
      600
    );
    expect(data(100, "integer").mul(data(10, "float")).valueOf()).toBeCloseTo(
      1000
    );
    expect(data(120, "float").mul(data(5, "integer")).valueOf()).toBeCloseTo(
      600
    );
    expect(data(1.22, "float").mul(data(10, "float")).valueOf()).toBeCloseTo(
      12.2
    );
    expect(
      data(1.22, "integer").mul(data(10, "integer")).valueOf()
    ).toBeCloseTo(12);
    expect(data(1.22, "integer").mul(data(10, "float")).valueOf()).toBeCloseTo(
      12
    );
    expect(data(1.22, "float").mul(data(10, "integer")).valueOf()).toBeCloseTo(
      12.2
    );
  });
  test("Can divide", () => {
    expect(data(100, "float").div(data(10, "float")).valueOf()).toBeCloseTo(
      100 / 10
    );
    expect(data(120, "integer").div(data(5, "integer")).valueOf()).toBeCloseTo(
      120 / 5
    );
    expect(data(100, "integer").div(data(10, "float")).valueOf()).toBeCloseTo(
      100 / 10
    );
    expect(data(120, "float").div(data(5, "integer")).valueOf()).toBeCloseTo(
      120 / 5
    );
    expect(data(1.22, "float").div(data(10, "float")).valueOf()).toBeCloseTo(
      1.22 / 10
    );
    expect(
      data(1.22, "integer").div(data(10, "integer")).valueOf()
    ).toBeCloseTo(0);
    expect(data(1.22, "integer").div(data(10, "float")).valueOf()).toBeCloseTo(
      0
    );
    expect(data(1.22, "float").div(data(10, "integer")).valueOf()).toBeCloseTo(
      0.122
    );
  });
  test("Can subtract", () => {
    expect(data(100, "float").sub(data(10, "float")).valueOf()).toBeCloseTo(90);
    expect(data(120, "integer").sub(data(5, "integer")).valueOf()).toBeCloseTo(
      115
    );
    expect(data(100, "integer").sub(data(10, "float")).valueOf()).toBeCloseTo(
      90
    );
    expect(data(120, "float").sub(data(5, "integer")).valueOf()).toBeCloseTo(
      115
    );
    expect(data(11.22, "float").sub(data(10, "float")).valueOf()).toBeCloseTo(
      1.22
    );
    expect(
      data(11.22, "integer").sub(data(10, "integer")).valueOf()
    ).toBeCloseTo(1);
    expect(data(11.22, "integer").sub(data(10, "float")).valueOf()).toBeCloseTo(
      1
    );
    expect(data(11.22, "float").sub(data(10, "integer")).valueOf()).toBeCloseTo(
      1.22
    );
  });
  test("Can add", () => {
    expect(data(100, "float").add(data(10, "float")).valueOf()).toBeCloseTo(
      110
    );
    expect(data(120, "integer").add(data(5, "integer")).valueOf()).toBeCloseTo(
      125
    );
    expect(data(100, "integer").add(data(10, "float")).valueOf()).toBeCloseTo(
      110
    );
    expect(data(120, "float").add(data(5, "integer")).valueOf()).toBeCloseTo(
      125
    );
    expect(data(1.22, "float").add(data(10, "float")).valueOf()).toBeCloseTo(
      11.22
    );
    expect(
      data(1.22, "integer").add(data(10, "integer")).valueOf()
    ).toBeCloseTo(11);
    expect(data(1.22, "integer").add(data(10, "float")).valueOf()).toBeCloseTo(
      11
    );
    expect(data(1.22, "float").add(data(10, "integer")).valueOf()).toBeCloseTo(
      11.22
    );
  });
});

describe("Performs logical operations", () => {
  test("Can use greaterThan", () => {
    const x = data(3, "float").setConfig({unit: "year"});
    expect(x.convert("year", "year").valueOf()).toBeCloseTo(3);
    expect(x.convert("year", "month").valueOf()).toBeCloseTo(12 * 3);
    expect(x.convert("year", "day").valueOf()).toBeCloseTo(365 * 3);
    expect(x.convert("year", "week").valueOf()).toBeCloseTo(52 * 3);
  });
  test("Can use lessThan", () => {
    const x = data(365, "float").setConfig({unit: "day"});
    expect(x.convert("day", "day").valueOf()).toBeCloseTo(365);
    expect(x.convert("day", "month").valueOf()).toBeCloseTo(12.006);
    expect(x.convert("day", "year").valueOf()).toBeCloseTo(1);
    expect(x.convert("day", "week").valueOf()).toBeCloseTo(52.1428);
  });
});
