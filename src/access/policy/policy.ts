import { ContentPolicy } from './content-policy';

export interface Policy {
    contents: ContentPolicy[];
    effectiveDate: Date;
    updateDate: Date;
    version: string;
}
