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
export class ScrapilooLoanImpl {
    __key;
    /**
     * Accepts customers with bad credit rating
     */
    accepts_bad_credit_rating;
    administration_fee;
    age_limit;
    amortization_free;
    annual_interest;
    /**
     * Calculation example
     */
    calculation_example;
    cancellation_period;
    /**
     * Category
     * @default "privatlan"
     */
    category;
    connected_banks;
    credit_amount;
    credit_report_agency;
    debt_free;
    direct_payout;
    /**
     * Primary email address
     */
    email;
    extension_fee;
    identification_method;
    interest_free;
    interest;
    /**
     * Is high cost credit, according to Swedish definition
     * @default false
     */
    is_high_cost_credit;
    late_payment_fee;
    late_payment_interest;
    loan_insurance;
    location;
    metrics;
    minimum_payment;
    name;
    offer_validity;
    opening_hours;
    /**
     * Organization number
     */
    organization_number;
    payment_pause;
    payment_reminder_fee;
    /**
     * Phone number
     */
    phone;
    processing_time;
    required_income;
    residency_requirement;
    setup_fee;
    status;
    term;
    tracking;
    withdrawal_fee;
    /**
     * Does not require any security
     * @default true
     */
    without_security;
}
