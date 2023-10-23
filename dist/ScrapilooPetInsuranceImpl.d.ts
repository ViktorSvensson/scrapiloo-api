import { BooleanType, CurrencyType, IntegerType, StringType, TimeType, URLType, UnitType } from ".";
export declare class ScrapilooPetInsuranceImpl {
    readonly __key?: string;
    readonly compensation?: {
        readonly currency?: CurrencyType;
        readonly max?: IntegerType;
        readonly min?: IntegerType;
    };
    readonly deductible_period?: {
        readonly time?: IntegerType;
        readonly unit?: UnitType;
    };
    readonly deductible?: {
        readonly fixed?: {
            readonly currency?: CurrencyType;
            readonly max?: IntegerType;
            readonly min?: IntegerType;
        };
        readonly variable?: {
            readonly max?: IntegerType;
            readonly min?: IntegerType;
            readonly unit?: UnitType;
        };
    };
    readonly direct_settlement?: BooleanType;
    /**
     * Primary email address
     */
    readonly email?: StringType;
    /**
     * online vet appointments included
     */
    readonly free_vet_consultation?: BooleanType;
    readonly grace_period?: {
        readonly time?: IntegerType;
        readonly unit?: UnitType;
    };
    readonly hidden_fault_insurance?: BooleanType;
    readonly life_insurance?: {
        readonly available?: BooleanType;
        readonly compensation?: {
            readonly max?: IntegerType;
            readonly min?: IntegerType;
        };
    };
    readonly location?: {
        /**
         * Street address
         */
        readonly address?: StringType;
        /**
         * City
         */
        readonly city?: StringType;
        /**
         * Country
         */
        readonly country?: StringType;
        /**
         * ZIP code
         */
        readonly zip?: StringType;
    };
    readonly name?: StringType;
    readonly opening_hours?: {
        readonly friday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly monday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly saturday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly sunday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly thursday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly tuesday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
        readonly wednesday?: {
            readonly from?: TimeType;
            readonly to?: TimeType;
        };
    };
    /**
     * Organization number
     */
    readonly organization_number?: StringType;
    /**
     * Phone number
     */
    readonly phone?: StringType;
    readonly tracking?: {
        readonly active?: BooleanType;
        readonly main?: URLType;
    };
}
