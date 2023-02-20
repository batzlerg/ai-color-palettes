<script>
  import { history } from "./store";
  import Palette from "./Palette.svelte";

  function copyOutput(index) {
    const copiedString = JSON.stringify($history[index][1]);
    console.info(
      `Copied %c${copiedString}%c` + `to the clipboard`,
      "color:white;background-color:black;"
    );
    // Copy the text inside the text field
    navigator.clipboard.writeText(copiedString);
  }

  function resetToPriorPrompt(index) {
    // prompts.set
  }
</script>

{#if $history.length}
  <div class="history-table">
    {#each $history as [input, output], index}
      <div class="history-table-row">
        <div class="prompt">{input}</div>
        <div class="response">
          <Palette response={output} />
          <button class="copy-output" on:click={() => copyOutput(index)}>
            &#128203;
          </button>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="default">
    <ul class="suggestions">
      <li>"A starry night"</li>
      <li>"Rosy sunset by the beach"</li>
      <li>"The feeling of lonely introspection"</li>
    </ul>
  </div>
{/if}

<!-- todo: slick transitions -->
<style>
  .history-table {
    display: grid;
    gap: 1.5rem;
    min-width: 100%;
  }
  .prompt {
    text-align: left;
    padding-bottom: 0.6rem;
  }
  .response {
    display: flex;
    place-items: center;
    position: relative;
  }
  .response * {
    display: inline-block;
  }
  .copy-output {
    position: absolute;
    visibility: hidden;
    font-size: 0.8rem;
    padding: 0;
    width: 2rem;
    height: 2rem;
    top: 0.2rem;
    right: 0.2rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .response:hover .copy-output {
    visibility: visible;
  }
  .default * {
    text-align: center;
    font-weight: 400;
  }
  .suggestions {
    padding: 0;
  }
  .suggestions li {
    list-style-type: none;
    font-style: italic;
    padding-bottom: 1rem;
  }
</style>
