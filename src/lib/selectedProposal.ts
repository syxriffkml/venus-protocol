import { writable } from 'svelte/store';

function createPersistedStore(key: any, startValue: any) {
    const isBrowser = typeof window !== 'undefined';
    const storedValue = isBrowser ? localStorage.getItem(key) : null;
    const initial = storedValue ? JSON.parse(storedValue) : startValue;

    const store = writable(initial);

    if (isBrowser) {
        store.subscribe(value => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }

    return {
        subscribe: store.subscribe,
        set: (value: any) => new Promise<void>((resolve) => {
            store.set(value);
            resolve();
        }),
        update: store.update
    };
}

export const selectedProposal = createPersistedStore('selectedProposal', null);