//This is a store to get the page's name from the sidebar button for displaying purposes

import { writable } from 'svelte/store';

export const currentTabName = writable('');