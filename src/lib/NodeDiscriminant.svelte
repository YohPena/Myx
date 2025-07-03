<script lang="ts">
  export let a = 0, b = 0, c = 0;
  export let onUpdate: (d: number) => void = () => {};

  $: discriminant = b * b - 4 * a * c;
  $: onUpdate(discriminant);
</script>

<div class="node">
  <h3>Discriminant</h3>
  <p>Δ = {discriminant}</p>
</div>

<style>
  .node { border: 1px solid #ccc; padding: 1em; margin-bottom: 1em; border-radius: 8px; }
</style>
