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
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
