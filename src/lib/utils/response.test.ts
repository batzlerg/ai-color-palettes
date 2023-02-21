import { describe, expect, test } from "vitest";
import { sanitizeResponse } from "./response";

const dirtyStrings = [
  ' {\n "orange": "#ffa500",\n "red": "#ff0000",\n "dark purple": "#800080",\n "light purple": "#b3b3b3",\n "violet": "#eee868",\n "indigo": "#4b0082",\n "green": "#006400",\n "cyan": "#00ffff",\n "light blue": "#0000ff",\n ',
  ' {\n "black": "#000000",\n "dark grey": "#666666",\n "green": "#008000",\n "grey": "#808080",\n "tan": "#a3a3a3",\n "white": "#ffffff",\n}'
]

describe('sanitizeResponse', () => {
  test.each(dirtyStrings)('removes newlines if found', (str) => {
    const cleanString = sanitizeResponse(str)
    expect(cleanString.includes('\n')).toBe(false);
  });

  test.each(dirtyStrings)('attempts to recover from truncated input', (str) => {
    console.log(sanitizeResponse(str))
    expect(() => JSON.parse(sanitizeResponse(str))).not.toThrowError();
  });
})