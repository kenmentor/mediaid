<script lang="ts">
  // MediCaid header   clean, semi-transparent, floats over the banner.
  // Transparent + white text on hero, frosted white + ink text after scroll.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { Theme, Content } from 'carbon-components-svelte';
  import MButton from '../UI/MButton.svelte';
  import UnitHero from './UnitHero.svelte';
  import UnitFacts from './UnitFacts.svelte';
  import UnitStats from './UnitStats.svelte';
  import UnitStory from './UnitStory.svelte';
  import UnitPhases from './UnitPhases.svelte';
  import UnitGallery from './UnitGallery.svelte';
  import UnitPartners from './UnitPartners.svelte';
  import UnitFaq from './UnitFaq.svelte';
  import UnitRegister from './UnitRegister.svelte';
  import UnitFinal from './UnitFinal.svelte';
  import UnitInvalid from './UnitInvalid.svelte';
  import { onMount } from 'svelte';
  export let campaign: PublicCampaign | null;

  let scrolled = false;
  function onScroll() {
    scrolled = window.scrollY > 32;
  }
  onMount(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<Theme theme="white">
  {#if !campaign}
    <UnitInvalid />
  {:else}
    <div class="min-w-[280px] min-h-screen bg-background text-ink antialiased">
      <a href="#main" class="skip-link">Skip to mission content</a>
      <header
        class={`fixed inset-x-0 top-0 z-50 transition-all duration-[400ms] ${
          scrolled
            ? 'border-b border-border bg-white/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
          <div class="flex items-center gap-2.5">
            <span class={`flex h-8 w-8 items-center justify-center font-display text-[14px] font-semibold ${scrolled ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-white/40'}`}>M</span>
            <span class={`font-display text-[15px] font-medium tracking-tight ${scrolled ? 'text-ink' : 'text-white'}`}>MediCaid</span>
          </div>
          <MButton variant="primary" size="sm" href={campaign.links.beneficiary}>Register free</MButton>
        </div>
      </header>
      <Content class="p-0">
        <main id="main">
          <UnitHero {campaign} />
          <UnitFacts {campaign} />
          <UnitStats {campaign} />
          <UnitStory {campaign} />
          <UnitPhases {campaign} />
          <UnitGallery />
          <UnitPartners {campaign} />
          <UnitFaq />
          <UnitRegister {campaign} />
          <UnitFinal {campaign} />
        </main>
        <footer class="border-t border-border bg-white">
          <div class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-8 md:py-16">
            <div class="flex items-start gap-3">
              <span class="font-display flex h-9 w-9 items-center justify-center bg-ink text-[15px] font-semibold text-white">M</span>
              <div>
                <p class="font-display text-[15px] font-medium">{campaign.hospital}</p>
                <p class="mt-1 text-[13px] text-ink-muted">{campaign.unit}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-x-8 gap-y-2 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              <span>Privacy-first</span><span>Consent-led</span><span>Free to attend</span>
            </div>
            <div class="md:text-right">
              <a href="mailto:care@healthique.global" class="text-[14px] font-medium text-primary hover:underline hover:underline-offset-4">care@healthique.global</a>
              <p class="mx-auto mt-2 max-w-xs text-[12.5px] leading-relaxed text-ink-muted md:ml-auto">
                This page opens through a signed campaign link   please share only the link you were given.
              </p>
            </div>
          </div>
        </footer>
      </Content>
    </div>
  {/if}
</Theme>
