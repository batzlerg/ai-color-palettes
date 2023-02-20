<script lang="ts">
  import {
    prompts,
    promptContext,
    exampleInput,
    exampleOutput,
    responses,
  } from "./store";
  import { getPromptResponse } from "./service";
  let prompt: string = "";

  function doThing() {
    // make API call

    getPromptResponse({
      context: $promptContext,
      exampleInput: $exampleInput,
      exampleOutput: $exampleOutput,
      prompt,
    })
      .then((response) => {
        prompts.update((prompts) => [...prompts, prompt]);
        responses.update((responses) => [...responses, response]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
</script>

<div>
  <textarea bind:value={prompt} />
  <button on:click={doThing}>Submit</button>
</div>
