"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitTypeImpl = void 0;
const DataTypeImpl_1 = require("./DataTypeImpl");
class UnitTypeImpl extends DataTypeImpl_1.DataTypeImpl {
    constructor() {
        super(...arguments);
        this.defaultConfig = {
            form: "abbr",
            translations: {
                day: { abbr: "d", singular: "dag", plural: "dagar" },
                month: { abbr: "mån", singular: "månad", plural: "månader" },
                year: { abbr: "år", singular: "år", plural: "år" },
                week: { abbr: "v", singular: "vecka", plural: "veckor" },
                percent: { abbr: "%", singular: "%", plural: "%" },
            },
        };
    }
    getConversionFactor(toUnit) {
        return unitConversion(this.valueOf(), toUnit);
    }
    pretty() {
        return this.toString();
    }
    toString() {
        if (this.value in this.config.translations) {
            return this.config.translations[this.value][this.config.form];
        }
        return this.value;
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}
exports.UnitTypeImpl = UnitTypeImpl;
function unitConversion(from, to) {
    const factors = {};
    factors.second = {};
    factors.second.second = 1;
    factors.second.minute = 1 / 60;
    factors.second.hour = 1 / 3600;
    factors.second.day = 1 / (3600 * 24);
    factors.second.week = 1 / (3600 * 24 * 7);
    factors.second.month = 1 / (3600 * 24 * 30);
    factors.second.year = 1 / (3600 * 24 * 365);
    for (const f of ["minute", "hour", "day", "week", "month", "year"]) {
        factors[f] = {};
        factors[f][f] = 1;
        factors[f].second = 1 / factors.second[f];
        factors[f].minute = (1 / factors.second[f]) * 60;
        factors[f].hour = (1 / factors.second[f]) * 3600;
        factors[f].day = (1 / factors.second[f]) * 3600 * 24;
        factors[f].week = (1 / factors.second[f]) * 3600 * 24 * 7;
        factors[f].month = 1 / (factors.second[f] * 3600 * 24 * 30);
        factors[f].year = 1 / (factors.second[f] * 3600 * 24 * 365);
    }
    if (!(from in factors) || !(to in factors[from]))
        throw new Error(`Can not make unit conversion from "${from}" to "${to}".`);
    return factors[from][to];
}
//# sourceMappingURL=UnitTypeImpl.js.map