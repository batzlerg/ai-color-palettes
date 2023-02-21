import { writable } from "svelte/store";
import type { Response } from './types';

// config data
export const promptContext = writable(
  `Return a JSON color palette of 3-7 items that matches the mood of the prompt phrase. Include the color as a hex code and a name for the color.`);
export const exampleInput = writable(`film noir`)
export const exampleOutput = writable(`{
  "black": "#000000",
  "dark grey": "#666666",
  "white": "#ffffff",
}`);

// initialize our previous response state backed by LS so we preserve history between page loads
// todo: allow clearing via UI
let cachedHistory = [];
try {
  const rawLSData = window.localStorage.getItem('color_palette_history');
  if (rawLSData !== undefined) {
    cachedHistory = JSON.parse(rawLSData);
  }
  if (cachedHistory.length) {
    console.log(`Restored ${cachedHistory.length} history items from localStorage.`)
  }
} catch (err) {
  console.error(err);
}
export const history = writable<[string, Response][]>(cachedHistory ?? []);

history.subscribe((value) => localStorage.setItem('color_palette_history', JSON.stringify(value)));