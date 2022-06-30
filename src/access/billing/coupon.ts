import { Promotion } from './promotion';

export interface Coupon {
    code: string;
    end: Date;
    promotions: Promotion[];
    star: Date;
}
