import { Observable } from 'rxjs';

export type HttpRequest<K> = (...req: unknown[]) => Observable<K>;
