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
  <table class="history-table">
    {#each $history as [input, output], index}
      <tr class="history-table-row">
        <td class="prompt">{input}</td>
        <td class="response">
          <Palette response={output} />
          <button class="copy-output" on:click={() => copyOutput(index)}>
            &#128203;
          </button>
        </td>
      </tr>
    {/each}
  </table>
{/if}

<style>
  .history-table {
    min-width: 100%;
    margin-left: 2rem;
    /* offset hover copy button */
  }
  .history-table-row {
    padding-bottom: 1rem;
  }
  .prompt {
    max-width: 10rem;
    text-align: left;
    padding-right: 1rem;
  }
  .response {
    display: flex;
    place-items: center;
  }
  .response * {
    display: inline-block;
  }
  .copy-output {
    visibility: hidden;
    font-size: 0.7rem;
    padding: 0;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
  }
  .response:hover .copy-output {
    visibility: visible;
  }
</style>
