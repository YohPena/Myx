<script>
  import NodeABC from '$lib/NodeABC.svelte';
  import DiscriminantPositif from '$lib/DiscriminantPositif.svelte';
  import DiscriminantNul from '$lib/DiscriminantNul.svelte';
  import DiscriminantNegatif from '$lib/DiscriminantNegatif.svelte';

  let a = 1;
  let b = -3;
  let c = 2;
  let delta = 0;

  function updateABC(event) {
    ({ a, b, c } = event.detail);
    delta = b * b - 4 * a * c;
  }
</script>

<h1>Équation du second degré</h1>

<NodeABC on:update={updateABC} {a} {b} {c} />

{#if delta > 0}
  <DiscriminantPositif {a} {b} {delta} />
{:else if delta === 0}
  <DiscriminantNul {a} {b} />
{:else}
  <DiscriminantNegatif {a} {b} {delta} />
{/if}