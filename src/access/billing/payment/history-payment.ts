import { Payment } from './payment';

export interface HistoryPayment extends Payment {
    receipt: string;
}
