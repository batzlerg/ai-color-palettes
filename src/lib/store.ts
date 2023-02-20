import { derived, writable } from "svelte/store";
import type { Response } from './types';

// config data
export const promptContext = writable(
  `Return a color palette in JSON that matches the mood of the prompt phrase. Include the color as a hex code and a name for the color.`);
export const exampleInput = writable(`film noir`)
export const exampleOutput = writable(`{
  "black": "#000000",
  "dark grey": "#666666",
  "white": "#ffffff",
}`);
export const prompts = writable<string[]>([]);
export const responses = writable<Response[]>([]);
export const history = derived([prompts, responses], ([prompts, responses]) => {
  return prompts.map((p, index) => [p, responses[index]]).reverse() as [string, Response][]
});