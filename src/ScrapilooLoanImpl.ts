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

import type {
  BooleanType,
  CurrencyType,
  DateType,
  FloatType,
  IntegerType,
  StringType,
  TimeType,
  UnitType,
  URLType,
} from ".";

export class ScrapilooLoanImpl {
  readonly __key?: string;
  /**
   * Accepts customers with bad credit rating
   */
  readonly accepts_bad_credit_rating?: BooleanType;
  readonly administration_fee?: {
    /**
     * Administration fee
     */
    readonly amount?: FloatType;
    /**
     * Administration fee currency
     */
    readonly currency?: CurrencyType;
    /**
     * Administration fee interval
     * @default "month"
     */
    readonly interval?: UnitType;
    /**
     * Maximum administration fee
     */
    readonly max?: FloatType;
    /**
     * Minimum administration fee
     */
    readonly min?: FloatType;
  };
  readonly age_limit?: {
    /**
     * Maximum age
     */
    readonly max?: IntegerType;
    /**
     * Minimum age
     * @default 18
     */
    readonly min?: IntegerType;
  };
  readonly amortization_free?: {
    /**
     * Amortization free time
     */
    readonly time?: IntegerType;
    /**
     * Unit of amortization free time
     */
    readonly unit?: UnitType;
  };
  readonly annual_interest?: {
    /**
     * Interval used when presenting annual interest
     * @default "year"
     */
    readonly interval?: UnitType;
    /**
     * Minimum annual interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum annual interest rate
     */
    readonly min?: FloatType;
  };
  /**
   * Calculation example
   */
  readonly calculation_example?: StringType;
  readonly cancellation_period?: {
    /**
     * Agreement cancellation period
     * @default 14
     */
    readonly time?: IntegerType;
    /**
     * Unit of cancellation period time
     * @default "day"
     */
    readonly unit?: UnitType;
  };
  /**
   * Category
   * @default "privatlan"
   */
  readonly category?: StringType;
  readonly connected_banks?: {
    readonly bank?: {
      readonly avida?: BooleanType;
      readonly banknorwegian?: BooleanType;
      readonly banky?: BooleanType;
      readonly bigbank?: BooleanType;
      readonly brixo?: BooleanType;
      readonly brocc?: BooleanType;
      readonly cashbuddy?: BooleanType;
      readonly collector?: BooleanType;
      readonly coop?: BooleanType;
      readonly credento?: BooleanType;
      readonly credway?: BooleanType;
      readonly facitbank?: BooleanType;
      readonly ferratum?: BooleanType;
      readonly gfmoney?: BooleanType;
      readonly goodcash?: BooleanType;
      readonly icabanken?: BooleanType;
      readonly ikanobank?: BooleanType;
      readonly instabank?: BooleanType;
      readonly klicklan?: BooleanType;
      readonly konsumentkredit?: BooleanType;
      readonly lansparbank?: BooleanType;
      readonly leabank?: BooleanType;
      readonly loanstep?: BooleanType;
      readonly lumify?: BooleanType;
      readonly lunar?: BooleanType;
      readonly marginalenbank?: BooleanType;
      readonly moank?: BooleanType;
      readonly moneygo?: BooleanType;
      readonly morrow?: BooleanType;
      readonly nordax?: BooleanType;
      readonly nordnet?: BooleanType;
      readonly northmill?: BooleanType;
      readonly nstart?: BooleanType;
      readonly primalcapital?: BooleanType;
      readonly remember?: BooleanType;
      readonly resurs?: BooleanType;
      readonly risicum?: BooleanType;
      readonly saldo?: BooleanType;
      readonly santander?: BooleanType;
      readonly seb?: BooleanType;
      readonly sevenday?: BooleanType;
      readonly spendwise?: BooleanType;
      readonly sveabank?: BooleanType;
      readonly tfbank?: BooleanType;
      readonly thorn?: BooleanType;
      readonly tryggkredit?: BooleanType;
      readonly viaconto?: BooleanType;
      readonly wasakredit?: BooleanType;
      readonly wastgotafinans?: BooleanType;
    };
    /**
     * Number of connected banks
     */
    readonly number?: IntegerType;
  };
  readonly credit_amount?: {
    /**
     * Credit amount currency
     */
    readonly currency?: CurrencyType;
    /**
     * Maximum credit amount
     */
    readonly max?: IntegerType;
    /**
     * Minimum credit amount
     */
    readonly min?: IntegerType;
  };
  readonly credit_report_agency?: {
    /**
     * Uses Bisnode as credit report agency
     */
    readonly bisnode?: BooleanType;
    /**
     * Uses Creditsafe as credit report agency
     */
    readonly creditsafe?: BooleanType;
    /**
     * Uses Syna
     */
    readonly syna?: BooleanType;
    /**
     * Uses UC as credit report agency
     * @default true
     */
    readonly uc?: BooleanType;
  };
  readonly debt_free?: {
    /**
     * Debt free time
     */
    readonly time?: IntegerType;
    /**
     * Debt free time unit
     */
    readonly unit?: UnitType;
  };
  readonly direct_payout?: {
    readonly available?: BooleanType;
    readonly bank?: {
      readonly danskebank?: BooleanType;
      readonly handelsbanken?: BooleanType;
      readonly nordea?: BooleanType;
      readonly sbab?: BooleanType;
      readonly seb?: BooleanType;
      readonly swedbank?: BooleanType;
    };
    readonly evenings?: BooleanType;
    /**
     * Direct payout requires additional payment
     */
    readonly requires_payment?: BooleanType;
    readonly weekends?: BooleanType;
  };
  /**
   * Primary email address
   */
  readonly email?: StringType;
  readonly extension_fee?: {
    /**
     * Extension fee amount
     */
    readonly amount?: FloatType;
    /**
     * Extension fee currency
     */
    readonly currency?: CurrencyType;
  };
  readonly identification_method?: {
    readonly bankid?: BooleanType;
  };
  readonly interest_free?: {
    /**
     * Interest free time
     * @default 0
     */
    readonly time?: IntegerType;
    /**
     * Unit of interest free time
     * @default "day"
     */
    readonly unit?: UnitType;
  };
  readonly interest?: {
    /**
     * Interval of interest payments
     * @default "year"
     */
    readonly interval?: UnitType;
    /**
     * Last interest revision date
     */
    readonly last_revision?: DateType;
    /**
     * Maximum interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum interest rate
     */
    readonly min?: FloatType;
  };
  /**
   * Is high cost credit, according to Swedish definition
   * @default false
   */
  readonly is_high_cost_credit?: BooleanType;
  readonly late_payment_fee?: {
    /**
     * Late payment fee amount
     */
    readonly amount?: FloatType;
    /**
     * Late payment fee currency
     */
    readonly currency?: CurrencyType;
  };
  readonly late_payment_interest?: {
    /**
     * Late payment interest interval
     * @default "year"
     */
    readonly interval?: UnitType;
    /**
     * Additional interest when late with payments
     */
    readonly is_additional?: BooleanType;
    /**
     * Late payment interest percentage rate
     */
    readonly rate?: FloatType;
  };
  readonly loan_insurance?: {
    /**
     * Loan insurance is available
     */
    readonly available?: BooleanType;
    /**
     * Fee associated with loan insurance
     */
    readonly fee?: FloatType;
    /**
     * E.g. "monthly_payment" or "credit_amount"
     * @default "monthly_payment"
     */
    readonly fee_basis?: StringType;
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
  readonly metrics?: {
    readonly approval?: FloatType;
  };
  readonly minimum_payment?: {
    /**
     * Minimum payment amount
     */
    readonly amount?: FloatType;
    /**
     * Currency of minimum payment
     */
    readonly currency?: CurrencyType;
    /**
     * Interval of minimum payments
     */
    readonly interval?: UnitType;
    /**
     * Minimum payment percentage
     */
    readonly percent?: FloatType;
  };
  readonly name?: StringType;
  readonly offer_validity?: {
    /**
     * How long an offer is valid
     */
    readonly time?: IntegerType;
    /**
     * Unit of offer validity time
     * @default "day"
     */
    readonly unit?: UnitType;
  };
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
  readonly payment_pause?: {
    /**
     * Payment pause interval, e.g. "1 month per _year_"
     * @default "year"
     */
    readonly interval?: UnitType;
    /**
     * Max payment pause time
     */
    readonly time?: IntegerType;
    /**
     * Unit of payment pause time
     */
    readonly unit?: UnitType;
  };
  readonly payment_reminder_fee?: {
    /**
     * Payment reminder fee amount
     * @default 60
     */
    readonly amount?: FloatType;
    /**
     * Payment reminder fee currency
     */
    readonly currency?: CurrencyType;
  };
  /**
   * Phone number
   */
  readonly phone?: StringType;
  readonly processing_time?: {
    /**
     * Maximum processing time
     */
    readonly max?: IntegerType;
    /**
     * Minimum processing time
     */
    readonly min?: IntegerType;
    /**
     * Processing time unit
     */
    readonly unit?: UnitType;
  };
  readonly required_income?: {
    readonly amount?: IntegerType;
    readonly currency?: CurrencyType;
    /**
     * Interval of required income
     * @default "month"
     */
    readonly interval?: UnitType;
  };
  readonly residency_requirement?: {
    /**
     * Minimum national residency required
     */
    readonly time?: IntegerType;
    /**
     * Unit of minimum residency
     */
    readonly unit?: UnitType;
  };
  readonly setup_fee?: {
    readonly amount?: FloatType;
    readonly currency?: CurrencyType;
    /**
     * Maximum setup fee
     */
    readonly max?: FloatType;
    /**
     * Minimum setup fee
     */
    readonly min?: FloatType;
  };
  readonly status?: {
    /**
     * Is active
     * @default true
     */
    readonly active?: BooleanType;
    /**
     * Key of other entry that this entry has been merged with
     */
    readonly merged_with?: StringType;
  };
  readonly term?: {
    /**
     * Loan term (in days)
     */
    readonly max?: IntegerType;
    /**
     * Loan term (in days)
     */
    readonly min?: IntegerType;
    /**
     * Loan term unit (days, years, months etc.)
     * @default "year"
     */
    readonly unit?: UnitType;
  };
  readonly tracking?: {
    readonly active?: BooleanType;
    readonly main?: URLType;
  };
  readonly withdrawal_fee?: {
    /**
     * Cost of money withdrawal
     */
    readonly amount?: FloatType;
    /**
     * Currency of withdrawal fee
     */
    readonly currency?: CurrencyType;
    /**
     * Withdrawal fee percentage
     */
    readonly percent?: FloatType;
  };
  /**
   * Does not require any security
   * @default true
   */
  readonly without_security?: BooleanType;
}
