import type { Response } from './types';
import { buildPromptString } from './utils/prompt'

interface OpenAIResponse { // partial, only what we care about
  choices: [
    {
      text: string,
      // "finish_reason": "length"
      // todo: error on truncation here?
    }
  ],
  usage: {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
  }
}

export async function getPromptResponse({
  context,
  exampleInput,
  exampleOutput,
  prompt,
}: {
  context: string,
  exampleInput: string,
  exampleOutput: string,
  prompt: string,
}): Promise<Response> {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + import.meta.env.OPENAI_KEY
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: buildPromptString({
          context,
          exampleInput,
          exampleOutput,
          prompt
        }),
        max_tokens: 100,
        temperature: 0
      })
    });
    const body: OpenAIResponse = await response.json();

    if (response.ok) {
      // todo: handle malformed response
      return JSON.parse(body.choices[0].text);
    }
  } catch (error) {
    return {
      black: "#000000",
      white: "#ffffff",
      "dark grey": "#666666",
    };
    // if (error instanceof Error) {
    //   throw error
    // }
  }
}
