import { Plan } from './billing/plan';
import { Email } from './email/email';

export interface Access {
    emails: Email[];
    plans: Plan[];
}
