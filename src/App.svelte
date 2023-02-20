<script lang="ts">
  import Prompt from "./lib/Prompt.svelte";
  import Config from "./lib/Config.svelte";
  import { promptPrefix } from "./lib/store";
</script>

<main>
  <Config />
  <h1>Structured Chat</h1>

  <div class="card">
    <Prompt />
  </div>

  <div>
    {$promptPrefix}
  </div>
</main>

<style>
</style>
