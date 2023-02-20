import { describe, expect, test } from "vitest";
import { _buildExample, _buildPromptString } from "./prompt";

describe('_buildExample', () => {
  test("concatenates as expected", () => {
    const args = {
      inputLabel: '1',
      outputLabel: '2',
      exampleInput: '3',
      exampleOutput: '4',
    }
    const result = _buildExample(args);
    expect(result).toEqual("1: 3\n2: 4");
  })
})


describe('_buildPromptString', () => {
  test("concatenates as expected", () => {
    const args = {
      context: 'do a prompty thing.',
      prompt: 'dis da prompt',
      exampleInput: 'armageddon',
      exampleOutput: '{ annihilation: "#000000", death: "#000001" }',
    }
    const result = _buildPromptString(args);
    expect(result).toEqual(
      `do a prompty thing. Here is an example.
Prompt: armageddon
Response: { annihilation: "#000000", death: "#000001" }

Prompt: dis da prompt
Response:`
    );
  })
})