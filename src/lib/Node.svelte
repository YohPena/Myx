<script>
  import { createEventDispatcher } from 'svelte';

  let expression = '2 + 3';
  let result = 0;
  const dispatch = createEventDispatcher();

  // recalculer à chaque changement d'expression
  $: {
    try {
      // eslint-disable-next-line no-new-func
      result = new Function(`return (${expression})`)();
      dispatch('update', { value: result });
    } catch {
      result = 'Erreur';
    }
  }
</script>

<div class="node">
  <input type="text" bind:value={expression} />
  <div>Résultat : {result}</div>
</div>

<style>
  .node {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 200px;
    margin-bottom: 1em;
  }

  input {
    width: 100%;
    font-size: 1em;
    margin-bottom: 0.5em;
  }
</style>
