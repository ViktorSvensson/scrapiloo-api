/**
 * @author     Carl Viktor Svensson
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */

import {
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

export interface ScrapilooLoan {
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
     * Minimum annual interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum annual interest rate
     */
    readonly min?: FloatType;
  };
  readonly connected_banks?: {
    readonly bank?: {
      readonly avida?: BooleanType;
      readonly bank_norwegian?: BooleanType;
      readonly brocc?: BooleanType;
      readonly coop?: BooleanType;
      readonly ica_banken?: BooleanType;
      readonly ikano_bank?: BooleanType;
      readonly konsument_kredit?: BooleanType;
      readonly lan_spar_bank?: BooleanType;
      readonly lunar?: BooleanType;
      readonly marginalen_bank?: BooleanType;
      readonly nordax?: BooleanType;
      readonly nstart?: BooleanType;
      readonly remember?: BooleanType;
      readonly resurs?: BooleanType;
      readonly santander?: BooleanType;
      readonly sevenday?: BooleanType;
      readonly wastgota_finans?: BooleanType;
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
     * Uses UC as credit report agency
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
  readonly interest?: {
    /**
     * Interval of interest payments
     */
    readonly interval?: UnitType;
    /**
     * Maximum interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum interest rate
     */
    readonly min?: FloatType;
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
  readonly payment_reminder_fee?: {
    /**
     * Payment reminder fee amount
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
  readonly score_adjustment?: {
    readonly availability?: FloatType;
    readonly experience?: FloatType;
    readonly safety?: FloatType;
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
     */
    readonly unit?: UnitType;
  };
  readonly tracking?: {
    readonly active?: BooleanType;
    readonly main?: URLType;
  };
}

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
     * Minimum annual interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum annual interest rate
     */
    readonly min?: FloatType;
  };
  readonly connected_banks?: {
    readonly bank?: {
      readonly avida?: BooleanType;
      readonly bank_norwegian?: BooleanType;
      readonly brocc?: BooleanType;
      readonly coop?: BooleanType;
      readonly ica_banken?: BooleanType;
      readonly ikano_bank?: BooleanType;
      readonly konsument_kredit?: BooleanType;
      readonly lan_spar_bank?: BooleanType;
      readonly lunar?: BooleanType;
      readonly marginalen_bank?: BooleanType;
      readonly nordax?: BooleanType;
      readonly nstart?: BooleanType;
      readonly remember?: BooleanType;
      readonly resurs?: BooleanType;
      readonly santander?: BooleanType;
      readonly sevenday?: BooleanType;
      readonly wastgota_finans?: BooleanType;
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
     * Uses UC as credit report agency
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
  readonly interest?: {
    /**
     * Interval of interest payments
     */
    readonly interval?: UnitType;
    /**
     * Maximum interest rate
     */
    readonly max?: FloatType;
    /**
     * Minimum interest rate
     */
    readonly min?: FloatType;
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
  readonly payment_reminder_fee?: {
    /**
     * Payment reminder fee amount
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
  readonly score_adjustment?: {
    readonly availability?: FloatType;
    readonly experience?: FloatType;
    readonly safety?: FloatType;
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
     */
    readonly unit?: UnitType;
  };
  readonly tracking?: {
    readonly active?: BooleanType;
    readonly main?: URLType;
  };
}