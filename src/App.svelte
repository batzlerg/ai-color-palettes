<script lang="ts">
  import Input from "./lib/Input.svelte";
  import Output from "./lib/Output.svelte";
  import Config from "./lib/Config.svelte";
</script>

<main>
  <Config />
  <h1>Structured Chat</h1>

  <div class="card">
    <Input />
  </div>

  <div class="card">
    <Output />
  </div>
</main>

<style>
</style>
