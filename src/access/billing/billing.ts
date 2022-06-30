import { Account } from '../../account/account';
import { Coupon } from './coupon';
import { DurationBilling } from './duration-billing';
import { HistoryPayment } from './payment/history-payment';
import { Payment } from './payment/payment';

export interface Billing {
    accounts: Account[];
    coupons: Coupon[];
    durations: DurationBilling[];
    histories: HistoryPayment[];
    payments: Payment[];
}
