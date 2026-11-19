<script lang="ts">
  // Flagship cinematic hero   one message, full-bleed graded image, calm overlay.
  // Hierarchy: eyebrow (mission window) → display title → hospital → meta → actions.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { IMG, IMG_META } from '../../data/images';
  import MButton from '../UI/MButton.svelte';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;
  $: banner = campaign.bannerUrl ?? IMG.heroMain;
  $: art = IMG_META.heroMain;
  $: eyebrow = campaign.location
    ? `Free surgical mission · ${campaign.location.state}`
    : 'Free surgical mission';
</script>

<section class="relative flex min-h-[92vh] min-h-[92svh] items-end overflow-hidden bg-ink text-white" aria-label="Mission introduction">
  <img
    src={banner}
    alt={campaign.bannerUrl ? `${campaign.title}   mission banner` : art.alt}
    fetchpriority="high"
    loading="eager"
    decoding="async"
    class="absolute inset-0 h-full w-full object-cover object-[50%_22%] md:object-[50%_35%]"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" aria-hidden="true"></div>

  <div class="relative w-full">
    <div class="mx-auto max-w-5xl px-6 pb-16 pt-40 md:px-8 md:pb-24">
      <Reveal>
        <p class="eyebrow text-white/70">{eyebrow}</p>
        <h1 class="font-display mt-5 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.02em] md:text-[3.75rem]">{campaign.title}</h1>
        <p class="mt-4 text-lg leading-relaxed text-white/85">{campaign.hospital}</p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <MButton variant="primary" size="lg" href={campaign.links.beneficiary}>Register free</MButton>
          <MButton variant="outline-light" size="lg" href={campaign.links.volunteer}>Volunteer</MButton>
        </div>
      </Reveal>
    </div>
  </div>
</section>
