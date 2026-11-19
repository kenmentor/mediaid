<script lang="ts">
  // Phases   two windows, dates in display face. Quiet card + ink-solid card.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { formatRange } from '../../data/medicaid-campaign';
  import { Tile, Tag } from 'carbon-components-svelte';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;
</script>

{#if campaign.phases}
  <section class="section-screen border-y border-border bg-white" aria-label="Mission dates">
    <div class="section-shell">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p class="eyebrow text-primary">Dates</p>
        <h2 class="font-display mt-4 text-3xl font-medium leading-tight md:text-[2.75rem]">Two windows, one journey</h2>
        <p class="mt-4 text-[17px] leading-relaxed text-ink-muted">
          Attend screening first, and your file moves with you into mission week.
        </p>
      </Reveal>
      <div class="mt-12 grid items-stretch gap-5 md:grid-cols-3">
        <Reveal>
          <Tile class="h-full !p-8 md:!p-12">
            <Tag type="blue" size="sm">01 · Screening</Tag>
            <p class="font-display mt-5 whitespace-nowrap text-2xl font-medium leading-snug md:text-[1.9rem]">{formatRange(campaign.phases.screening.start, campaign.phases.screening.end)}</p>
            <p class="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-ink-muted">08:00–17:00 daily · Screening centre</p>
              <p class="mt-4 text-[16px] leading-relaxed text-ink-muted">
                Free assessment, labs and booking. Walk in   no appointment or referral needed.
                Expect about 40 minutes from arrival to result.
              </p>
          </Tile>
        </Reveal>
        <Reveal delay={0.08}>
          <Tile class="h-full !bg-ink !p-8 !text-white md:!p-12">
            <Tag type="high-contrast" size="sm">02 · Mission week</Tag>
              <p class="font-display mt-5 whitespace-nowrap text-2xl font-medium leading-snug md:text-[1.9rem]">{formatRange(campaign.phases.mission.start, campaign.phases.mission.end)}</p>
              <p class="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-secondary">08:00–16:00 daily · Theatre suites</p>
              <p class="mt-4 text-[16px] leading-relaxed text-white/70">
                Surgical dates for people diagnosed at screening. A consultant reviews each
                case and confirms the theatre day with you.
              </p>
          </Tile>
        </Reveal>
        <Reveal delay={0.16}>
          <Tile class="flex h-full flex-col !p-8 md:!p-10">
            <p class="eyebrow text-ink-muted">What to bring</p>
            <ul class="mt-5 flex-1 space-y-4 text-[15px] leading-relaxed text-ink">
              <li class="flex gap-3"><span class="font-display font-semibold text-primary"> </span>Any hospital card you already have</li>
              <li class="flex gap-3"><span class="font-display font-semibold text-primary"> </span>Past test results or prescriptions</li>
              <li class="flex gap-3"><span class="font-display font-semibold text-primary">—</span>Nothing else — nothing to pay</li>
            </ul>
            <p class="mt-6 border-t border-border pt-5 text-[13.5px] leading-relaxed text-ink-muted">
              Doors open 8:00am daily at the screening centre.
            </p>
          </Tile>
        </Reveal>
      </div>
    </div>
  </section>
{/if}
