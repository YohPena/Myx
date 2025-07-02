<script lang="ts">
  import katex from 'katex';
  import { onMount, afterUpdate } from 'svelte';

  export let tex = '';

  let container: HTMLSpanElement;

  function render() {
    try {
      katex.render(tex, container, {
        throwOnError: false,
      });
    } catch (e) {
      if (e instanceof Error) {
        container.textContent = e.message;
      } else {
        container.textContent = String(e);
      }
    }
  }

  // Au premier montage
  onMount(() => {
    render();
  });

  // À chaque mise à jour (notamment quand tex change)
  afterUpdate(() => {
    render();
  });
</script>

<span bind:this={container}></span>
