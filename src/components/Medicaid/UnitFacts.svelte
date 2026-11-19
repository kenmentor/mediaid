<script lang="ts">
  // Evidence rail   the numbers printed on photography. Full-screen, drifts left,
  // neighbours peek. Proof you can see, not claims you must believe.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { formatCount } from '../../data/medicaid-campaign';
  import { IMG_META } from '../../data/images';
  export let campaign: PublicCampaign;
  $: hasMeta = campaign.location || campaign.targetBeneficiaries !== null || campaign.scopes.length > 0;
  let paused = false;
  let viewport: HTMLDivElement;

  function skip(dir: 1 | -1) {
    // Manual control takes over: hold the drift, glide one card.
    paused = true;
    const card = viewport?.querySelector('figure');
    const step = (card as HTMLElement | null)?.offsetWidth ?? 400;
    viewport?.scrollBy({ left: dir * (step + 20), behavior: 'smooth' });
  }

  $: cards = [
    campaign.location
      ? {
          img: IMG_META.ward,
          label: 'Where',
          big: `${campaign.location.state} · ${campaign.location.lga}`,
          sub: campaign.location.country
        }
      : null,
    {
      img: IMG_META.screening,
      label: "Who it's for",
      big:
        campaign.targetBeneficiaries !== null
          ? `${formatCount(campaign.targetBeneficiaries)} people`
          : 'Everyone listed',
      sub: 'Free to attend · consent-led'
    },
    campaign.scopes.length
      ? {
          img: IMG_META.lab,
          label: 'Care covered',
          big: `${campaign.scopes.length} care ${campaign.scopes.length === 1 ? 'area' : 'areas'}`,
          sub: null as string | null,
          tags: campaign.scopes
        }
      : null
  ].filter(Boolean) as Array<{
    img: (typeof IMG_META)['ward'];
    label: string;
    big: string;
    sub: string | null;
    tags?: string[];
  }>;
</script>

{#if hasMeta}
  <section class="section-screen overflow-hidden bg-background" aria-label="Key details in evidence">
    <div class="w-full py-20 md:py-24">
      <div class="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4 px-6 md:px-8">
        <div>
          <p class="eyebrow text-ink-muted">Evidence, not promises</p>
          <h2 class="font-display mt-4 max-w-xl text-3xl font-medium leading-tight md:text-4xl">The mission, on the ground</h2>
        </div>
        <button
          type="button"
          on:click={() => (paused = !paused)}
          aria-pressed={paused}
          class="h-11 min-h-[44px] border border-border bg-white px-5 text-[13px] font-medium tracking-wide text-ink transition-colors hover:border-ink"
        >
          {paused ? 'Resume motion' : 'Pause motion'}
        </button>
      </div>

      <div class="group/rail relative mt-10">
        <button
          type="button"
          on:click={() => skip(-1)}
          aria-label="Previous evidence card"
          class="font-display absolute left-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-border bg-white text-2xl text-ink shadow-lift transition-all hover:border-ink hover:bg-ink hover:text-white md:left-6"
        >
          ←
        </button>
        <button
          type="button"
          on:click={() => skip(1)}
          aria-label="Next evidence card"
          class="font-display absolute right-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-border bg-white text-2xl text-ink shadow-lift transition-all hover:border-ink hover:bg-ink hover:text-white md:right-6"
        >
          →
        </button>
        <div class="rail-viewport overflow-x-auto" bind:this={viewport}>
        <div class="rail-track flex w-max items-stretch gap-5 pr-5" class:rail-paused={paused}>
          {#each [0, 1] as copy}
            <div class="flex items-stretch gap-5" aria-hidden={copy === 1 ? 'true' : 'false'}>
              {#each cards as c}
                <figure class="relative flex min-h-[440px] w-[min(80vw,360px)] flex-col justify-end overflow-hidden bg-ink text-white md:min-h-[480px] md:w-[440px]">
                  <img
                    src={c.img.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 h-full w-full object-cover"
                    style={`object-position: ${c.img.focal};`}
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden="true"></div>
                  <figcaption class="relative p-8 md:p-10">
                    <p class="eyebrow text-white/60">{c.label}</p>
                    <p class="font-display mt-3 text-2xl font-medium leading-snug md:text-[1.75rem]">{c.big}</p>
                    {#if c.tags}
                      <div class="mt-4 flex flex-wrap gap-2">
                        {#each c.tags as t}
                          <span class="bg-white px-3 py-1 text-[13px] font-medium capitalize text-ink">{t}</span>
                        {/each}
                      </div>
                    {:else if c.sub}
                      <p class="mt-2 text-[15px] text-white/70">{c.sub}</p>
                    {/if}
                  </figcaption>
                </figure>
              {/each}
            </div>
          {/each}
        </div>
        </div>
      </div>

      <div class="mx-auto max-w-5xl px-6 md:px-8">
        <p class="mt-8 text-[13px] tracking-wide text-ink-muted">Photographed at mission sites   drifts on its own, use the arrows to step through</p>
      </div>
    </div>
  </section>
{/if}

<style>
  .rail-viewport {
    scrollbar-width: none;
    -ms-overflow-style: none;
    mask-image: linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%);
  }
  .rail-viewport::-webkit-scrollbar {
    display: none;
  }
  .rail-track {
    animation: medicaid-rail 40s linear infinite;
  }
  .rail-viewport:hover .rail-track,
  .rail-viewport:focus-within .rail-track,
  .rail-paused {
    animation-play-state: paused;
  }
  @keyframes medicaid-rail {
    to {
      transform: translateX(-50%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .rail-track {
      animation: none;
      flex-wrap: wrap;
    }
  }
</style>
