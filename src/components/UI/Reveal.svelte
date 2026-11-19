<script lang="ts">
  import { onMount } from 'svelte';
  export let delay: number = 0;
  export let className: string = '';
  let el: HTMLDivElement;
  let visible = false;

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        }
      },
      { rootMargin: '-80px' }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  });
</script>

<div bind:this={el} class={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={delay ? `transition-delay:${delay}s` : ''}>
  <slot />
</div>
