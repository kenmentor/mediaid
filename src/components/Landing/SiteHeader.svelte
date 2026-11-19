<script lang="ts">
  import { NAV_LINKS } from '../../data/cliniqx';
  import Button from '../UI/Button.svelte';
  export let onNavigateUnit: () => void;
  let scrolled = false;
  let open = false;

  function onScroll() {
    scrolled = window.scrollY > 24;
  }
</script>

<svelte:window on:scroll={onScroll} />

<header class={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <div class="flex h-[76px] items-center justify-between gap-3 md:gap-6">
      <a href="#top" class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white text-lg font-medium shadow-soft">C</span>
        <span class="leading-tight">
          <span class="block text-[17px] tracking-tight text-ink">ClinIQx</span>
          <span class="block text-[11px] tracking-[0.22em] uppercase text-ink-muted">by HealthIQue</span>
        </span>
      </a>
      <nav class="hidden lg:flex items-center gap-9">
        {#each NAV_LINKS as l}
          <a href={l.href} class="text-[15px] text-ink-muted hover:text-ink transition-colors">{l.label}</a>
        {/each}
      </nav>
      <div class="hidden lg:flex items-center gap-3">
        <Button variant="ghost" size="sm" href="#stories">Patient stories</Button>
        <button on:click={onNavigateUnit} class="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 bg-primary text-white shadow-lift hover:bg-[#0e7fd8] hover:-translate-y-0.5 px-5 py-2 text-sm">
          View MediCaid unit
        </button>
      </div>
      <button class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-ink" on:click={() => (open = !open)} aria-label="Toggle menu">
        {#if open}✕{:else}☰{/if}
      </button>
    </div>
  </div>
  {#if open}
    <div class="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-5">
        {#each NAV_LINKS as l}
          <a href={l.href} on:click={() => (open = false)} class="text-lg text-ink py-3 border-b border-muted last:border-0">{l.label}</a>
        {/each}
        <button on:click={onNavigateUnit} class="inline-flex items-center justify-center gap-2 font-medium rounded-lg bg-primary text-white px-7 py-3 text-[15px] w-full">View MediCaid unit</button>
      </div>
    </div>
  {/if}
</header>
