import { Location } from './location';

export interface Account {
    additionalName: string;
    bio: string;
    company: string;
    firstName: string;
    lastName: string;
    location: Location[];
    nick: string;
    publicEmail: string;
    site: string;
    social: string;
}
