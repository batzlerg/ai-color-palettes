import { INPUT_LABEL, OUTPUT_LABEL } from "../constants";

export function _buildExample({
  inputLabel,
  outputLabel,
  exampleInput,
  exampleOutput
}) {
  return `${inputLabel}: ${exampleInput}` + '\n' + `${outputLabel}: ${exampleOutput}`;
}

export function _buildPromptString({
  context,
  exampleInput,
  exampleOutput,
  prompt
}: {
  context: string,
  exampleOutput: string,
  exampleInput: string,
  prompt: string
}) {
  return `${context} Here is an example.
${_buildExample({ exampleInput, exampleOutput, inputLabel: INPUT_LABEL, outputLabel: OUTPUT_LABEL })}

${INPUT_LABEL}: ${prompt}
${OUTPUT_LABEL}:`;
}