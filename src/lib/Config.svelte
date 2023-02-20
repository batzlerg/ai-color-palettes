<script lang="ts">
  import { promptContext, exampleInput, exampleOutput } from "./store";
  let isConfigMenuOpen = false;

  function toggleConfigMenu() {
    isConfigMenuOpen = !isConfigMenuOpen;
  }
</script>

<div class="config">
  <button on:click={toggleConfigMenu}>
    {#if isConfigMenuOpen}
      &#10006;
    {:else}
      &#9881;
    {/if}
  </button>
  {#if isConfigMenuOpen}
    <div class="config-menu">
      <label>
        Prompt Setup
        <textarea bind:value={$promptContext} rows={5} cols={40} />
      </label>
      <label>
        Prompt Example
        <textarea bind:value={$exampleInput} rows={2} cols={40} />
      </label>
      <label>
        Response Example
        <textarea bind:value={$exampleOutput} rows={10} cols={40} />
      </label>
    </div>
  {/if}
</div>

<style>
  .config {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .config-menu {
    text-align: left;
    position: absolute;
    top: 3rem;
    right: 0rem;
    padding: 1rem;
    background-color: var(--secondary-color);
    z-index: 1000;
    border: 1px solid var(--primary-color);
    border-radius: var(--radius);
  }
  .config-menu label {
    display: flex;
    flex-direction: column;
  }
</style>
