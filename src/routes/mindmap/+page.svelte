<script lang="ts">
  import GraphNode from '$lib/GraphNode.svelte';
  import LinkList from '$lib/LinkList.svelte';

  import type { Link, NodeData } from '$lib/types';

  let nodes: NodeData[] = [];
  let links: Link[] = [];

  let fromId = '';
  let toId = '';
  let label = '';

  function addNode() {
    nodes = [...nodes, { id: crypto.randomUUID(), a: 0, b: 0, c: 0 }];
  }

  function handleUpdate(event: CustomEvent<NodeData>) {
    const index = nodes.findIndex(n => n.id === event.detail.id);
    if (index !== -1) {
      nodes[index] = { ...event.detail };
    }
  }

  function addLink() {
    if (fromId && toId) {
      links = [...links, { from: fromId, to: toId, label }];
      fromId = '';
      toId = '';
      label = '';
    }
  }
</script>

<h1>Mindmap avec identifiants</h1>

<button on:click={addNode}>Ajouter un nœud</button>

{#each nodes as node (node.id)}
  <GraphNode
    id={node.id}
    a={node.a}
    b={node.b}
    c={node.c}
    on:update={handleUpdate}
  />
{/each}

<h3>Créer un lien :</h3>
<input placeholder="ID source" bind:value={fromId} />
<input placeholder="ID cible" bind:value={toId} />
<input placeholder="Label (optionnel)" bind:value={label} />
<button on:click={addLink}>Créer le lien</button>

<LinkList {links} />

<a href="/">Retour à l’accueil</a>
