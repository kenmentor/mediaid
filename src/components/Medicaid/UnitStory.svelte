<script lang="ts">
  // Story   editorial reading column, then a calm 3-step strip.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { renderCampaignMarkdown } from '../../lib/campaign-markdown';
  import { Tile } from 'carbon-components-svelte';
  import { IMG_META } from '../../data/images';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;
  $: html = renderCampaignMarkdown(campaign.description);
  const steps = [
    { n: '01', t: 'Register or walk in', d: 'Two minutes online, or from 8:00am daily on site.' },
    { n: '02', t: 'Free assessment', d: 'Labs, review and a clear plan   in one visit.' },
    { n: '03', t: 'Booked care + follow-up', d: 'Surgery, ward care and a scheduled review date.' }
  ];
</script>

<section class="section-screen bg-background" aria-label="What to expect">
  <div class="reading-shell">
    <Reveal>
      <p class="eyebrow text-center text-primary">The mission</p>
      <h2 class="font-display mt-4 text-center text-3xl font-medium leading-tight md:text-[2.75rem]">What to expect</h2>
      <p class="mx-auto mt-4 max-w-xl text-center text-[17px] leading-relaxed text-ink-muted">
        Screening, surgery and after-care   one organised programme, no cost to you.
      </p>
    </Reveal>
    <Reveal delay={0.06} className="mt-10">
      <figure class="relative overflow-hidden bg-ink">
        <img
          src={IMG_META.careTeam.src}
          alt={IMG_META.careTeam.alt}
          loading="lazy"
          decoding="async"
          class="h-[240px] w-full object-cover md:h-[320px]"
          style={`object-position: ${IMG_META.careTeam.focal};`}
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true"></div>
        <figcaption class="absolute bottom-0 left-0 right-0 p-6 text-[14px] font-medium text-white md:p-8">
          One team, one record   your whole mission journey in a single programme
        </figcaption>
      </figure>
      <Tile class="!p-8 md:!p-12">
        <div class="campaign-md">{@html html}</div>
      </Tile>
    </Reveal>
    <div class="mt-5 grid gap-5 sm:grid-cols-3">
      {#each steps as s, i}
        <Reveal delay={i * 0.06}>
          <Tile class="h-full !p-8 text-center">
            <p class="font-display text-[13px] font-semibold tracking-[0.16em] text-primary">{s.n}</p>
            <p class="font-display mt-3 text-[17px] font-medium">{s.t}</p>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">{s.d}</p>
          </Tile>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
