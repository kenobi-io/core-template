import { OptionEmail } from './option-email';
import { PreferenceEmail } from './preference-email';
import { StatusEmail } from './status-email';

export interface Email {
    backupUrl: string;
    options: OptionEmail[];
    preferences: PreferenceEmail[];
    status: StatusEmail;
    url: string;
}
