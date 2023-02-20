<script lang="ts">
  import type { Response } from "./types";
  export let response: Response;
  $: colors = Object.entries(response);
</script>

<div class="palette">
  {#each colors as [name, hex]}
    <div class="palette-tile" style="background-color: {hex}">
      <span class="color-name">{name}</span>
    </div>
  {/each}
</div>

<style>
  .palette {
    display: inline-flex;
    flex-grow: 1;
  }
  .palette-tile {
    display: inline-flex;
    width: 5rem;
    height: 5rem;
    flex: 1 1;
    position: relative;
  }
  .color-name {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.1rem 0.3rem;
    font-size: 0.8rem;
    background-color: rgba(0, 0, 0, var(--translucent));
    color: var(--off-white);
  }
</style>
