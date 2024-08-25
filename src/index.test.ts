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

import type {ReactNode} from "react";
import {data} from ".";

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

describe("IntegerType: Flexible unit", () => {
  test("Can set flexible unit", () => {
    expect(
      data(6, "integer")
        .setFlexibleUnit("month", ["day", "month", "year"])
        .pretty()
    ).toEqual("6 mån");
    expect(
      data(13, "integer")
        .setFlexibleUnit("month", ["day", "month", "year"])
        .pretty()
    ).toEqual("1 år");
    expect(
      data(2, "integer")
        .setFlexibleUnit("year", ["day", "month", "year"])
        .pretty()
    ).toEqual("2 år");
    expect(
      data(13.4, "integer")
        .setFlexibleUnit("year", ["day", "month", "year"])
        .pretty()
    ).toEqual("13 år");
    expect(
      data(13.5, "integer")
        .setFlexibleUnit("year", ["day", "month", "year"])
        .pretty()
    ).toEqual("14 år");
    expect(
      data(364, "integer")
        .setFlexibleUnit("day", ["day", "month", "year"])
        .pretty()
    ).toEqual("1 år");
    expect(
      data(370, "integer")
        .setFlexibleUnit("day", ["day", "month", "year"])
        .pretty()
    ).toEqual("1 år");
  });
});

describe("IntegerType: Interval", () => {
  test("Can change interval from year", () => {
    const x = data(10_000, "integer").setConfig({unit: "year"});
    expect(x.changeInterval("year", "year").valueOf()).toEqual(10_000);
    expect(x.changeInterval("year", "month").valueOf()).toEqual(833);
    expect(x.changeInterval("year", "day").valueOf()).toEqual(27);
    expect(x.changeInterval("year", "week").valueOf()).toEqual(192);
  });
  test("Can change interval from day", () => {
    const x = data(10_000, "integer").setConfig({unit: "day"});
    expect(x.changeInterval("day", "day").valueOf()).toEqual(10_000);
    expect(x.changeInterval("day", "month").valueOf()).toEqual(10_000 * 30.4);
    expect(x.changeInterval("day", "year").valueOf()).toEqual(10_000 * 365);
    expect(x.changeInterval("day", "week").valueOf()).toEqual(10_000 * 7);
  });
  test("Can change interval from month", () => {
    const x = data(10_000, "integer").setConfig({unit: "month"});
    expect(x.changeInterval("month", "month").valueOf()).toEqual(10_000);
    expect(x.changeInterval("month", "day").valueOf()).toEqual(329);
    expect(x.changeInterval("month", "year").valueOf()).toEqual(120_000);
    expect(x.changeInterval("month", "week").valueOf()).toEqual(2303);
  });
  test("Can pretty print with interval and currency", () => {
    const x = data(10_000, "integer").setConfig({
      currency: "kr",
      displayInterval: true,
      displayUnit: true,
    });
    expect(x.changeInterval("month", "month").pretty()).toEqual(
      `10 000 kr/mån`
    );
  });
  test("Does not print unit when unit and currency is null", () => {
    const x = data(10_000, "integer").setConfig({
      displayInterval: true,
      displayUnit: true,
    });
    expect(x.changeInterval("month", "month").pretty()).toEqual(`10 000/mån`);
  });
  test("Does not print interval when interval is null", () => {
    const x = data(10_000, "integer").setConfig({
      currency: "kr",
      displayInterval: true,
      displayUnit: true,
    });
    expect(x.pretty()).toEqual(`10 000 kr`);
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

describe("FloatType: Performs logical operations", () => {
  test("Can use greaterThan", () => {
    expect(data(3, "float").greaterThan(4)).toEqual(false);
    expect(data(3, "float").greaterThan(2)).toEqual(true);
    expect(data(3, "float").greaterThan(3)).toEqual(false);
    expect(data(3, "float").greaterThan(data(4, "integer"))).toEqual(false);
    expect(data(3, "float").greaterThan(data(2, "float"))).toEqual(true);
    expect(data(3, "float").greaterThan(data(3, "float"))).toEqual(false);
  });
  test("Can use lessThan", () => {
    expect(data(3, "float").lessThan(4)).toEqual(true);
    expect(data(3, "float").lessThan(2)).toEqual(false);
    expect(data(3, "float").lessThan(3)).toEqual(false);
    expect(data(3, "float").lessThan(data(4, "integer"))).toEqual(true);
    expect(data(3, "float").lessThan(data(2, "float"))).toEqual(false);
    expect(data(3, "float").lessThan(data(3, "float"))).toEqual(false);
  });

  test("Can use greaterThanOrEqual", () => {
    expect(data(4.4, "float").greaterThanOrEqual(3.1)).toEqual(true);
    expect(data(3.5, "float").greaterThanOrEqual(3.5)).toEqual(true);
    expect(data(3.5, "float").greaterThanOrEqual(4)).toEqual(false);
  });

  test("Can use lessThanOrEqual", () => {
    expect(data(3.3, "float").lessThanOrEqual(3.5)).toEqual(true);
    expect(data(3.5, "float").lessThanOrEqual(3.5)).toEqual(true);
    expect(data(3.5, "float").lessThanOrEqual(3.4)).toEqual(false);
  });
});

describe("IntegerType: Performs logical operations", () => {
  test("Can use greaterThan", () => {
    expect(data(3, "integer").greaterThan(4)).toEqual(false);
    expect(data(3, "integer").greaterThan(2)).toEqual(true);
    expect(data(3, "integer").greaterThan(3)).toEqual(false);
    expect(data(3, "integer").greaterThan(data(4, "integer"))).toEqual(false);
    expect(data(3, "integer").greaterThan(data(2, "float"))).toEqual(true);
    expect(data(3, "integer").greaterThan(data(3, "float"))).toEqual(false);
  });
  test("Can use lessThan", () => {
    expect(data(3, "integer").lessThan(4)).toEqual(true);
    expect(data(3, "integer").lessThan(2)).toEqual(false);
    expect(data(3, "integer").lessThan(3)).toEqual(false);
    expect(data(3, "integer").lessThan(data(4, "integer"))).toEqual(true);
    expect(data(3, "integer").lessThan(data(2, "float"))).toEqual(false);
    expect(data(3, "integer").lessThan(data(3, "float"))).toEqual(false);
  });

  test("Can use greaterThanOrEqual", () => {
    expect(data(4, "integer").greaterThanOrEqual(4)).toEqual(true);
    expect(data(5, "integer").greaterThanOrEqual(6)).toEqual(false);
    expect(data(5, "integer").greaterThanOrEqual(5)).toEqual(true);
  });

  test("Can use lessThanOrEqual", () => {
    expect(data(3, "integer").lessThanOrEqual(4)).toEqual(true);
    expect(data(5, "integer").lessThanOrEqual(4)).toEqual(false);
    expect(data(5, "integer").lessThanOrEqual(5)).toEqual(true);
  });
});

describe("TimeType: Can calculate duration", () => {
  test("Can calculate hours between two timestamps", () => {
    expect(
      data("12:00", "time").getDuration(data("14:00", "time")).hours
    ).toEqual(2);
    expect(
      data("12:00", "time").getDuration(data("14:30", "time")).hours
    ).toEqual(2.5);
    expect(
      data("00:00", "time").getDuration(data("09:45", "time")).hours
    ).toEqual(9.75);
  });
  test("Can calculate minutes between two timestamps", () => {
    expect(
      data("12:00", "time").getDuration(data("14:00", "time")).minutes
    ).toEqual(2 * 60);
    expect(
      data("12:00", "time").getDuration(data("14:30", "time")).minutes
    ).toEqual(2 * 60 + 30);
    expect(
      data("00:00", "time").getDuration(data("09:45", "time")).minutes
    ).toEqual(9 * 60 + 45);
  });
});

describe("BooleanType: Printing", () => {
  test("Can pretty print boolean values", () => {
    expect(data(true, "boolean").pretty()).toEqual("Ja");
    expect(data(false, "boolean").pretty()).toEqual("Nej");
    expect(data(null, "boolean").pretty()).toEqual("–");
    expect(data(false, "boolean").pretty()).toEqual("Nej");
  });
  test("Can pretty print non-boolean values", () => {
    expect(data("aksdjaklsdjl" as any, "boolean").pretty()).toEqual("–");
    expect(data(123123123 as any, "boolean").pretty()).toEqual("–");
    expect(data(null, "boolean").pretty()).toEqual("–");
    expect(data(undefined, "boolean").pretty()).toEqual("–");
  });
});

describe("BooleanType: Label config", () => {
  test("Can use another trueLabel", () => {
    expect(
      data(true, "boolean").setConfig({trueLabel: "Oui"}).pretty()
    ).toEqual("Oui");
    expect(
      data(false, "boolean").setConfig({trueLabel: "Oui"}).pretty()
    ).toEqual("Nej");
  });
  test("Can use another falseLabel", () => {
    expect(
      data(false, "boolean").setConfig({falseLabel: "Never"}).pretty()
    ).toEqual("Never");
    expect(
      data(true, "boolean").setConfig({falseLabel: "Never"}).pretty()
    ).toEqual("Ja");
  });
  test("Can use both trueLabel and falseLabel", () => {
    expect(
      data(false, "boolean")
        .setConfig({trueLabel: "Oui", falseLabel: "Never"})
        .pretty()
    ).toEqual("Never");
    expect(
      data(true, "boolean")
        .setConfig({trueLabel: "Oui", falseLabel: "Never"})
        .pretty()
    ).toEqual("Oui");
  });

  test("Can use React Elements as labels", () => {
    const trueLabel: ReactNode = {
      children: "Yes",
      key: null,
      props: null,
      type: "div",
    };
    const falseLabel: ReactNode = {
      children: "No",
      key: null,
      props: null,
      type: "div",
    };

    expect(
      data(false, "boolean").setConfig({trueLabel, falseLabel}).pretty()
    ).toBe(falseLabel);
    expect(
      data(true, "boolean").setConfig({trueLabel, falseLabel}).pretty()
    ).toBe(trueLabel);
  });
});

describe("BooleanType: Negating", () => {
  test("Can negate boolean values", () => {
    expect(data(true, "boolean").negate().valueOf()).toStrictEqual(false);
    expect(data(false, "boolean").negate().valueOf()).toStrictEqual(true);
  });
  test("Can negate non-boolean values", () => {
    expect(data(null, "boolean").negate().valueOf()).toStrictEqual(true);
    expect(data(undefined, "boolean").negate().valueOf()).toStrictEqual(true);
  });
});

describe("Serialization", () => {
  test("Can serialize IntegerType", () => {
    const value = data(123, "integer").setConfig({
      unit: "day",
      displayInterval: true,
      displayUnit: true,
    });
    const json = JSON.stringify(value);
    expect(json).toEqual(
      '{"type":"integer","value":123,"config":{"unit":{"type":"unit","value":"day"},"displayInterval":true}}'
    );
    const unserialized = JSON.parse(json);
    const restored = data(unserialized?.value, "integer").setConfig(
      unserialized?.config ?? {}
    );
    expect(restored).toEqual(value);
  });
});
