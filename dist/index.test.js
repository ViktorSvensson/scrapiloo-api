"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("IntegerType: Convert", () => {
    test("Can make unit conversions from year", () => {
        const x = (0, _1.data)(3, "integer").setConfig({ unit: "year" });
        expect(x.convert("year", "year").valueOf()).toEqual(3);
        expect(x.convert("year", "month").valueOf()).toEqual(12 * 3);
        expect(x.convert("year", "day").valueOf()).toEqual(365 * 3);
        expect(x.convert("year", "week").valueOf()).toEqual(52 * 3);
    });
    test("Can make unit conversions from day", () => {
        const x = (0, _1.data)(365, "integer").setConfig({ unit: "day" });
        expect(x.convert("day", "day").valueOf()).toEqual(365);
        expect(x.convert("day", "month").valueOf()).toEqual(12);
        expect(x.convert("day", "year").valueOf()).toEqual(1);
        expect(x.convert("day", "week").valueOf()).toEqual(52);
    });
    test("Can make unit conversions from month", () => {
        const x = (0, _1.data)(12, "integer").setConfig({ unit: "month" });
        expect(x.convert("month", "month").valueOf()).toEqual(12);
        expect(x.convert("month", "day").valueOf()).toEqual(365);
        expect(x.convert("month", "year").valueOf()).toEqual(1);
        expect(x.convert("month", "week").valueOf()).toEqual(52);
    });
});
describe("IntegerType: Flexible unit", () => {
    test("Can set flexible unit", () => {
        expect((0, _1.data)(6, "integer")
            .setFlexibleUnit("month", ["day", "month", "year"])
            .pretty()).toEqual("6 mån");
        expect((0, _1.data)(13, "integer")
            .setFlexibleUnit("month", ["day", "month", "year"])
            .pretty()).toEqual("1 år");
        expect((0, _1.data)(2, "integer")
            .setFlexibleUnit("year", ["day", "month", "year"])
            .pretty()).toEqual("2 år");
        expect((0, _1.data)(13.4, "integer")
            .setFlexibleUnit("year", ["day", "month", "year"])
            .pretty()).toEqual("13 år");
        expect((0, _1.data)(13.5, "integer")
            .setFlexibleUnit("year", ["day", "month", "year"])
            .pretty()).toEqual("14 år");
        expect((0, _1.data)(364, "integer")
            .setFlexibleUnit("day", ["day", "month", "year"])
            .pretty()).toEqual("1 år");
        expect((0, _1.data)(370, "integer")
            .setFlexibleUnit("day", ["day", "month", "year"])
            .pretty()).toEqual("1 år");
    });
});
describe("IntegerType: Interval", () => {
    test("Can change interval from year", () => {
        const x = (0, _1.data)(10000, "integer").setConfig({ unit: "year" });
        expect(x.changeInterval("year", "year").valueOf()).toEqual(10000);
        expect(x.changeInterval("year", "month").valueOf()).toEqual(833);
        expect(x.changeInterval("year", "day").valueOf()).toEqual(27);
        expect(x.changeInterval("year", "week").valueOf()).toEqual(192);
    });
    test("Can change interval from day", () => {
        const x = (0, _1.data)(10000, "integer").setConfig({ unit: "day" });
        expect(x.changeInterval("day", "day").valueOf()).toEqual(10000);
        expect(x.changeInterval("day", "month").valueOf()).toEqual(10000 * 30.4);
        expect(x.changeInterval("day", "year").valueOf()).toEqual(10000 * 365);
        expect(x.changeInterval("day", "week").valueOf()).toEqual(10000 * 7);
    });
    test("Can change interval from month", () => {
        const x = (0, _1.data)(10000, "integer").setConfig({ unit: "month" });
        expect(x.changeInterval("month", "month").valueOf()).toEqual(10000);
        expect(x.changeInterval("month", "day").valueOf()).toEqual(329);
        expect(x.changeInterval("month", "year").valueOf()).toEqual(120000);
        expect(x.changeInterval("month", "week").valueOf()).toEqual(2303);
    });
    test("Can pretty print with interval and currency", () => {
        const x = (0, _1.data)(10000, "integer")
            .changeInterval("year", "year")
            .setConfig({ currency: "kr", displayInterval: true, displayUnit: true });
        expect(x.changeInterval("month", "month").pretty()).toEqual(`10 000 kr/mån`);
    });
});
describe("FloatType: Convert", () => {
    test("Can make unit conversions from year", () => {
        const x = (0, _1.data)(3, "float").setConfig({ unit: "year" });
        expect(x.convert("year", "year").valueOf()).toBeCloseTo(3);
        expect(x.convert("year", "month").valueOf()).toBeCloseTo(12 * 3);
        expect(x.convert("year", "day").valueOf()).toBeCloseTo(365 * 3);
        expect(x.convert("year", "week").valueOf()).toBeCloseTo(52 * 3);
    });
    test("Can make unit conversions from day", () => {
        const x = (0, _1.data)(365, "float").setConfig({ unit: "day" });
        expect(x.convert("day", "day").valueOf()).toBeCloseTo(365);
        expect(x.convert("day", "month").valueOf()).toBeCloseTo(12.006);
        expect(x.convert("day", "year").valueOf()).toBeCloseTo(1);
        expect(x.convert("day", "week").valueOf()).toBeCloseTo(52.1428);
    });
    test("Can make unit conversions from month", () => {
        const x = (0, _1.data)(12, "float").setConfig({ unit: "month" });
        expect(x.convert("month", "month").valueOf()).toBeCloseTo(12);
        expect(x.convert("month", "day").valueOf()).toBeCloseTo(364.8);
        expect(x.convert("month", "year").valueOf()).toBeCloseTo(1);
        expect(x.convert("month", "week").valueOf()).toBeCloseTo(52.1142);
    });
});
describe("Performs math operations", () => {
    test("Can multiply", () => {
        expect((0, _1.data)(100, "float").mul((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(1000);
        expect((0, _1.data)(120, "integer").mul((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(600);
        expect((0, _1.data)(100, "integer").mul((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(1000);
        expect((0, _1.data)(120, "float").mul((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(600);
        expect((0, _1.data)(1.22, "float").mul((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(12.2);
        expect((0, _1.data)(1.22, "integer").mul((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(12);
        expect((0, _1.data)(1.22, "integer").mul((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(12);
        expect((0, _1.data)(1.22, "float").mul((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(12.2);
    });
    test("Can divide", () => {
        expect((0, _1.data)(100, "float").div((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(100 / 10);
        expect((0, _1.data)(120, "integer").div((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(120 / 5);
        expect((0, _1.data)(100, "integer").div((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(100 / 10);
        expect((0, _1.data)(120, "float").div((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(120 / 5);
        expect((0, _1.data)(1.22, "float").div((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(1.22 / 10);
        expect((0, _1.data)(1.22, "integer").div((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(0);
        expect((0, _1.data)(1.22, "integer").div((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(0);
        expect((0, _1.data)(1.22, "float").div((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(0.122);
    });
    test("Can subtract", () => {
        expect((0, _1.data)(100, "float").sub((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(90);
        expect((0, _1.data)(120, "integer").sub((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(115);
        expect((0, _1.data)(100, "integer").sub((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(90);
        expect((0, _1.data)(120, "float").sub((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(115);
        expect((0, _1.data)(11.22, "float").sub((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(1.22);
        expect((0, _1.data)(11.22, "integer").sub((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(1);
        expect((0, _1.data)(11.22, "integer").sub((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(1);
        expect((0, _1.data)(11.22, "float").sub((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(1.22);
    });
    test("Can add", () => {
        expect((0, _1.data)(100, "float").add((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(110);
        expect((0, _1.data)(120, "integer").add((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(125);
        expect((0, _1.data)(100, "integer").add((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(110);
        expect((0, _1.data)(120, "float").add((0, _1.data)(5, "integer")).valueOf()).toBeCloseTo(125);
        expect((0, _1.data)(1.22, "float").add((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(11.22);
        expect((0, _1.data)(1.22, "integer").add((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(11);
        expect((0, _1.data)(1.22, "integer").add((0, _1.data)(10, "float")).valueOf()).toBeCloseTo(11);
        expect((0, _1.data)(1.22, "float").add((0, _1.data)(10, "integer")).valueOf()).toBeCloseTo(11.22);
    });
});
describe("FloatType: Performs logical operations", () => {
    test("Can use greaterThan", () => {
        expect((0, _1.data)(3, "float").greaterThan(4)).toEqual(false);
        expect((0, _1.data)(3, "float").greaterThan(2)).toEqual(true);
        expect((0, _1.data)(3, "float").greaterThan(3)).toEqual(false);
        expect((0, _1.data)(3, "float").greaterThan((0, _1.data)(4, "integer"))).toEqual(false);
        expect((0, _1.data)(3, "float").greaterThan((0, _1.data)(2, "float"))).toEqual(true);
        expect((0, _1.data)(3, "float").greaterThan((0, _1.data)(3, "float"))).toEqual(false);
    });
    test("Can use lessThan", () => {
        expect((0, _1.data)(3, "float").lessThan(4)).toEqual(true);
        expect((0, _1.data)(3, "float").lessThan(2)).toEqual(false);
        expect((0, _1.data)(3, "float").lessThan(3)).toEqual(false);
        expect((0, _1.data)(3, "float").lessThan((0, _1.data)(4, "integer"))).toEqual(true);
        expect((0, _1.data)(3, "float").lessThan((0, _1.data)(2, "float"))).toEqual(false);
        expect((0, _1.data)(3, "float").lessThan((0, _1.data)(3, "float"))).toEqual(false);
    });
});
describe("IntegerType: Performs logical operations", () => {
    test("Can use greaterThan", () => {
        expect((0, _1.data)(3, "integer").greaterThan(4)).toEqual(false);
        expect((0, _1.data)(3, "integer").greaterThan(2)).toEqual(true);
        expect((0, _1.data)(3, "integer").greaterThan(3)).toEqual(false);
        expect((0, _1.data)(3, "integer").greaterThan((0, _1.data)(4, "integer"))).toEqual(false);
        expect((0, _1.data)(3, "integer").greaterThan((0, _1.data)(2, "float"))).toEqual(true);
        expect((0, _1.data)(3, "integer").greaterThan((0, _1.data)(3, "float"))).toEqual(false);
    });
    test("Can use lessThan", () => {
        expect((0, _1.data)(3, "integer").lessThan(4)).toEqual(true);
        expect((0, _1.data)(3, "integer").lessThan(2)).toEqual(false);
        expect((0, _1.data)(3, "integer").lessThan(3)).toEqual(false);
        expect((0, _1.data)(3, "integer").lessThan((0, _1.data)(4, "integer"))).toEqual(true);
        expect((0, _1.data)(3, "integer").lessThan((0, _1.data)(2, "float"))).toEqual(false);
        expect((0, _1.data)(3, "integer").lessThan((0, _1.data)(3, "float"))).toEqual(false);
    });
});
describe("TimeType: Can calculate duration", () => {
    test("Can calculate hours between two timestamps", () => {
        expect((0, _1.data)("12:00", "time").getDuration((0, _1.data)("14:00", "time")).hours).toEqual(2);
        expect((0, _1.data)("12:00", "time").getDuration((0, _1.data)("14:30", "time")).hours).toEqual(2.5);
        expect((0, _1.data)("00:00", "time").getDuration((0, _1.data)("09:45", "time")).hours).toEqual(9.75);
    });
    test("Can calculate minutes between two timestamps", () => {
        expect((0, _1.data)("12:00", "time").getDuration((0, _1.data)("14:00", "time")).minutes).toEqual(2 * 60);
        expect((0, _1.data)("12:00", "time").getDuration((0, _1.data)("14:30", "time")).minutes).toEqual(2 * 60 + 30);
        expect((0, _1.data)("00:00", "time").getDuration((0, _1.data)("09:45", "time")).minutes).toEqual(9 * 60 + 45);
    });
});
//# sourceMappingURL=index.test.js.map