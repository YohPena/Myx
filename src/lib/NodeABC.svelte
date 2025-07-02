<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let a = 1;
  let b = -3;
  let c = 2;

  $: dispatch('update', { a, b, c });
</script>

<div class="node">
  <h3>Entrée des coefficients</h3>
  <label>a: <input type="number" bind:value={a} /></label>
  <label>b: <input type="number" bind:value={b} /></label>
  <label>c: <input type="number" bind:value={c} /></label>
</div>

<style>
  .node { border: 1px solid #ccc; padding: 1em; margin-bottom: 1em; border-radius: 8px; }
  label { display: block; margin-bottom: 0.5em; }
</style>
