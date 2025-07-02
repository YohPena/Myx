<script lang="ts">
  import Math from '$lib/Math.svelte';
  import { goto } from '$app/navigation';
  import NodeABC from '$lib/NodeABC.svelte';
  import DiscriminantPositif from '$lib/DiscriminantPositif.svelte';
  import DiscriminantNul from '$lib/DiscriminantNul.svelte';
  import DiscriminantNegatif from '$lib/DiscriminantNegatif.svelte';

  let a = 1;
  let b = -3;
  let c = 2;
  let delta = 0;

 function updateABC(event: any) {
  ({ a, b, c } = event.detail);
  delta = b * b - 4 * a * c;
}
</script>

<h1>Équation du second degré</h1>
<p>Une équation du second degré est une équation où la puissance de l'inconnue est 2, de la forme : <Math tex="ax^2 + bx + c = 0" />.</p>

<NodeABC on:update={updateABC} {a} {b} {c} />

{#if delta > 0}
  <DiscriminantPositif {a} {b} {delta} />
{:else if delta === 0}
  <DiscriminantNul {a} {b} />
{:else}
  <DiscriminantNegatif {a} {b} {delta} />
{/if}

<button on:click={() => goto('/')}>
  Retour à l'accueil
</button>