<script context="module" lang="ts">
  export interface Link {
    from: string;
    to: string;
    label?: string;
  }
</script>

<script lang="ts">
  export let links: Link[] = [];
</script>

<h3>Liens</h3>
<ul>
  {#each links as link, i}
    <li>
      De <strong>{link.from}</strong> vers <strong>{link.to}</strong>
      {#if link.label} (label: {link.label}){/if}
    </li>
  {/each}
  {#if links.length === 0}
    <li>Aucun lien pour le moment.</li>
  {/if}
</ul>
