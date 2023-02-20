<script lang="ts">
  import { prompts, responses } from "./store";
  let prompt: string = "";
  let currPromptIndex = 0;

  function doThing() {
    // make API call
    prompts.update((prompts) => [...prompts, prompt]);
  }
</script>

<div>
  <textarea bind:value={prompt} />
  <button on:click={doThing}>Submit</button>
</div>
<div>
  <ol>
    {#each $prompts as p}
      <li>{p}</li>
    {/each}
  </ol>
</div>
