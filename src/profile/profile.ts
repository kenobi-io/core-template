import { Access } from '../access/access';
import { Account } from '../account/account';

export interface Profile {
    accesses: Access[];
    accounts: Account[];
}
