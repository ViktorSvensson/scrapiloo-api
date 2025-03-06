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
  FloatType,
  UnitType,
  BooleanType,
  IntegerType,
  CurrencyType,
  StringType,
  TimeType,
  ImageType,
  DateType,
  URLType,
  TypeName,
} from ".";

export class ScrapilooCardImpl {
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
  readonly card_issuance_fee?: {
    /**
     * Card issuance fee
     */
    readonly amount?: FloatType;
    /**
     * Currency of card issuance fee
     */
    readonly currency?: CurrencyType;
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
  readonly currency_exchange_fee?: {
    /**
     * Fixed currency exchange fee amount
     */
    readonly amount?: FloatType;
    /**
     * Currency of currency exchange fee
     */
    readonly currency?: CurrencyType;
    /**
     * Currency exchange fee, percentage
     */
    readonly percentage?: FloatType;
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
  /**
   * Primary email address
   */
  readonly email?: StringType;
  readonly extra_card_fee?: {
    /**
     * Cost of having an extra card
     */
    readonly amount?: FloatType;
    /**
     * Currency of extra card fee
     */
    readonly currency?: CurrencyType;
    /**
     * Interval of extra card fee payments
     */
    readonly interval?: UnitType;
  };
  /**
   * Applicable law for agreement
   */
  readonly governing_law?: StringType;
  readonly identification_method?: {
    readonly bankid?: BooleanType;
  };
  readonly image?: {
    /**
     * Thumbnail image URL
     */
    readonly thumbnail?: URLType;
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
  readonly invoice_fee?: {
    readonly e_invoice?: {
      /**
       * E-invoice fee
       */
      readonly amount?: FloatType;
      /**
       * Currency of e-invoice fee
       */
      readonly currency?: CurrencyType;
    };
    readonly paper?: {
      /**
       * Paper invoice fee
       */
      readonly amount?: FloatType;
      /**
       * Currency of paper invoice fee
       */
      readonly currency?: CurrencyType;
    };
  };
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
  readonly mobile_app?: {
    /**
     * Has an Android app
     */
    readonly android?: BooleanType;
    /**
     * Has an iOS app
     */
    readonly ios?: BooleanType;
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
  readonly overdraft_fee?: {
    /**
     * Overdraft fee
     */
    readonly amount?: FloatType;
    /**
     * Currency of overdraft fee
     */
    readonly currency?: CurrencyType;
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
  readonly statement_copy_fee?: {
    /**
     * Statement copy fee
     */
    readonly amount?: FloatType;
    /**
     * Currency of statement copy fee
     */
    readonly currency?: CurrencyType;
  };
  readonly subscription_fee?: {
    /**
     * Subscription fee
     */
    readonly amount?: FloatType;
    /**
     * Interval of subscription fee
     */
    readonly interval?: UnitType;
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
