<script>
  export let delta = 0;
</script>

{#if delta < 0}
  <div class="node">
    <p>⚠️ Pas de solution réelle (Δ &lt; 0)</p>
  </div>
{/if}

<style>
  .node { border: 1px solid red; padding: 1em; border-radius: 8px; background: #fee; margin-bottom: 1em; }
</style>
