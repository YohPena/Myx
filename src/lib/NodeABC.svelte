<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MathJax from '$lib/Math.svelte';  // Renommé ici

  export let a: number;
  export let b: number;
  export let c: number;

  const dispatch = createEventDispatcher();

  $: bTex = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;  // Ici Math.abs c'est l'objet global
  $: cTex = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;

  $: equationTex = `${a}x^2 ${bTex}x ${cTex} = 0`;

  $: dispatch('update', { a, b, c });
</script>

<div class="node">
  <h3>Equation : <MathJax tex={equationTex} /></h3>

  <h3>Entrée des coefficients</h3>
  <label>a: <input type="number" bind:value={a} /></label>
  <label>b: <input type="number" bind:value={b} /></label>
  <label>c: <input type="number" bind:value={c} /></label>
</div>

<style>
  /* ... tes styles ... */
</style>
