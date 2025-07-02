<script>
  export let a = 0, b = 0, delta = 0;
  export let positif = true;

  $: racine = delta >= 0
    ? (-b + (positif ? 1 : -1) * Math.sqrt(delta)) / (2 * a)
    : 'Pas de solution';
</script>

<div class="node">
  <h3>{positif ? 'x₂' : 'x₁'}</h3>
  <p>{racine}</p>
</div>

<style>
  .node { border: 1px solid #ccc; padding: 1em; margin-bottom: 1em; border-radius: 8px; }
</style>
