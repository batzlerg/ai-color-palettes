<script lang="ts">
  import Input from "./lib/Input.svelte";
  import Output from "./lib/Output.svelte";
  import Config from "./lib/Config.svelte";
</script>

<main>
  <Config />
  <h1>AI Color Palettes</h1>
  <h2>Input vibes, output color palettes</h2>

  <div class="card">
    <Input />
  </div>

  <div class="card">
    <Output />
  </div>
</main>

<style>
  h2 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    padding: 0;
    opacity: 0.7;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
</style>
