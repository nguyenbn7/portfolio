import { appData } from '$lib/app-data/global';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    return appData;
}