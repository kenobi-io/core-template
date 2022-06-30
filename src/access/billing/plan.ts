import { PolicyTermUrl } from '../policy/policy-term-url';
import { Billing } from './billing';

export interface Plan {
    billings: Billing[];
    policyTermUrls: PolicyTermUrl[];
    summary: string;
    totalAmount: string;
}
