<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: string;
  export let a = 0;
  export let b = 0;
  export let c = 0;

  const dispatch = createEventDispatcher();

  $: dispatch('update', { id, a, b, c });
</script>

<div class="node">
  <h3>Nœud #{id}</h3>
  <label>a: <input type="number" bind:value={a} /></label>
  <label>b: <input type="number" bind:value={b} /></label>
  <label>c: <input type="number" bind:value={c} /></label>
</div>

<style>
  .node {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 8px;
  }
  label {
    display: block;
    margin: 0.5em 0;
  }
</style>
