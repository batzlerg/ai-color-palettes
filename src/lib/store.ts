import { writable } from "svelte/store";


// config data
export const promptPrefix = writable("");


// thing 

interface Response {
  [key: string]: `#${string}` // hex code
}

export const prompts = writable<string[]>([]);
export const responses = writable<Response[]>([]);