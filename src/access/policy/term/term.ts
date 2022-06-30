import { ContentTerm } from './content-term';

export interface Term {
    contents: ContentTerm[];
    effectiveDate: Date;
    update: Date;
    version: string;
}
