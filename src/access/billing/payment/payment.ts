import { MethodPayment } from './method-payment';

export interface Payment {
    id: number;
    amount: string;
    due: Date;
    last: Date;
    methods: MethodPayment[];
    next: Date;
}
