import { Coupon } from './coupon';

export interface Promotion {
    coupons: Coupon[];
    end: Date;
    name: string;
    start: Date;
}
