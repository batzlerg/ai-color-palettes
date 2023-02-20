<script lang="ts">
  import { promptPrefix } from "./store";
  let isConfigMenuOpen = false;

  function toggleConfigMenu() {
    isConfigMenuOpen = !isConfigMenuOpen;
  }
</script>

<div class="config">
  <!-- <div class="config"> -->
  <button on:click={toggleConfigMenu}>
    {#if isConfigMenuOpen}
      X
    {:else}
      config
    {/if}
  </button>
  {#if isConfigMenuOpen}
    <div class="config-menu">
      <label>
        Prompt Prefix
        <textarea bind:value={$promptPrefix} />
      </label>
    </div>
  {/if}
  <!-- </div> -->
</div>

<style>
  .config {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
  .config-menu {
    text-align: left;
    position: absolute;
    top: 3rem;
    left: 0rem;
  }
</style>
