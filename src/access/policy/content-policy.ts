import { SummaryContentPolicy } from './summary-content-policy';

export interface ContentPolicy {
    article: string;
    summaries: SummaryContentPolicy[];
}
