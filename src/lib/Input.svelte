<script lang="ts">
  import { promptContext, exampleInput, exampleOutput, history } from "./store";
  import { getPromptResponse } from "./service";
  let prompt: string = "";
  let loading = false;

  function doThing() {
    // make API call
    loading = true;

    getPromptResponse({
      context: $promptContext,
      exampleInput: $exampleInput,
      exampleOutput: $exampleOutput,
      prompt,
    })
      .then((response) => {
        // prepend so the most recent items are at the top
        history.update((history) => [[prompt, response], ...history]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => (loading = false));
  }
</script>

<div class="prompt">
  <input bind:value={prompt} placeholder="Enter a short, descriptive prompt" />
  <button on:click={doThing}>
    {#if loading}...{:else}Submit{/if}
  </button>
</div>

<style>
  .prompt {
    display: flex;
    place-items: center;
    align-items: center;
  }
  .prompt input {
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .prompt button {
    width: 6rem;
  }
</style>
