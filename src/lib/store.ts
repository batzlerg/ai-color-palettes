import { writable } from "svelte/store";
import type { Response } from './types';

window.localStorage.getItem('color_palette_responses')

// config data
export const promptContext = writable(
  `Return a color palette in JSON that matches the mood of the prompt phrase. Include the color as a hex code and a name for the color.`);
export const exampleInput = writable(`film noir`)
export const exampleOutput = writable(`{
  "black": "#000000",
  "dark grey": "#666666",
  "white": "#ffffff",
}`);
export const history = writable<[string, Response][]>([]);

history.subscribe((value) => localStorage.content = value)