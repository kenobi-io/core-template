import { Subscription } from 'rxjs';

export const unsubscribing = (subscriptions: Subscription[] | undefined): void => {
    subscriptions?.forEach((subscription) => {
        subscription.unsubscribe();
    });
    subscriptions = undefined;
};
