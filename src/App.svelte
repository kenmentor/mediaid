<script lang="ts">
  import UnitPage from './components/Medicaid/UnitPage.svelte';
  import { Theme } from 'carbon-components-svelte';
  import MButton from './components/UI/MButton.svelte';
  import { DEMO_CAMPAIGN, PARTIAL_CAMPAIGN, type PublicCampaign } from './data/medicaid-campaign';

  // MediCaid-only home on Carbon. No CliniQx landing index.
  // ?variant=full|partial|invalid  token simulation for review.
  // Demo switcher only renders with ?demo in the URL  never in production.
  let variant: 'full' | 'partial' | 'invalid' = 'full';
  let demo = false;

  function parseUrl() {
    const q = new URLSearchParams(window.location.search);
    const v = q.get('variant');
    variant = v === 'partial' || v === 'invalid' ? v : 'full';
    if (q.get('token') === 'expired' || q.get('token') === 'archived') variant = 'invalid';
    demo = q.has('demo');
  }

  function goVariant(v: 'full' | 'partial' | 'invalid') {
    variant = v;
    const url = new URL(window.location.href);
    url.searchParams.set('variant', v);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0 });
  }

  $: campaign = variant === 'invalid' ? null : variant === 'partial' ? PARTIAL_CAMPAIGN : DEMO_CAMPAIGN;
  $: _campaign = campaign as PublicCampaign | null;

  import { onMount } from 'svelte';
  onMount(() => {
    parseUrl();
    window.addEventListener('popstate', parseUrl);
    return () => window.removeEventListener('popstate', parseUrl);
  });
</script>

<Theme theme="white">
  <UnitPage campaign={_campaign} />

  {#if demo}
    <!-- Review switcher  ?demo only, never in production -->
    <div class="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 border border-border bg-white/95 backdrop-blur px-3 py-2 shadow-lift text-[13px]">
      <span class="px-2 text-ink-muted uppercase tracking-[0.14em] text-[11px]">Demo:</span>
      <MButton size="sm" variant={variant === 'full' ? 'dark' : 'outline-dark'} on:click={() => goVariant('full')}>Full</MButton>
      <MButton size="sm" variant={variant === 'partial' ? 'dark' : 'outline-dark'} on:click={() => goVariant('partial')}>Partial</MButton>
      <MButton size="sm" variant={variant === 'invalid' ? 'dark' : 'outline-dark'} on:click={() => goVariant('invalid')}>Invalid</MButton>
    </div>
  {/if}
</Theme>
