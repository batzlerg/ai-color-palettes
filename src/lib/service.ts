import type { Response } from './types';
import { buildPromptString } from './utils/prompt';
import { sanitizeResponse } from './utils/response';

interface OpenAIResponse { // partial, only what we care about
  choices: Array<{ text: string }>,
  usage: {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
  }
}

// const OPENAI_COMPLETION_URL = 'https://example.com/v1/completions'
const OPENAI_COMPLETION_URL = 'https://api.openai.com/v1/completions'

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
    const response = await fetch(OPENAI_COMPLETION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + import.meta.env.VITE_OPENAI_KEY
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
      return JSON.parse(sanitizeResponse(body.choices[0].text));
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
  }
}
