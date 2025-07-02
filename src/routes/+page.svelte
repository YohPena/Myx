<script>
  import Node from '$lib/Node.svelte';
  import { goto } from '$app/navigation';
  let value1 = 0;
  let value2 = 0;

  function handleUpdate1(event) {
    value1 = event.detail.value;
  }

  function handleUpdate2(event) {
    value2 = event.detail.value;
  }
</script>

<h1>Page d’accueil</h1>
<h1>Mindmap interactive simple</h1>

<Node on:update={handleUpdate1} />
<Node on:update={handleUpdate2} />

<p>Valeur 1 : {value1}</p>
<p>Valeur 2 : {value2}</p>
<p>Somme : {value1 + value2}</p>

  



<!-- Ou bouton avec navigation programmatique -->
<button on:click={() => goto('/equation')}>
  Aller à l'équation du 2nd degré
</button>
