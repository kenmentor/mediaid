<script lang="ts">
  // Proof, rebuilt as a ledger   the mission accounted for, line by line.
  // One memorable figure (reach), the rest as ledger rows with provenance.
  // Light paper breaks the dark run from the evidence rail. No platitudes.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { formatCount, formatDate } from '../../data/medicaid-campaign';
  import MButton from '../UI/MButton.svelte';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;

  function daysBetween(a: string, b: string) {
    return Math.max(
      1,
      Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000) + 1
    );
  }

  $: reach =
    campaign.targetBeneficiaries !== null ? formatCount(campaign.targetBeneficiaries) : 'Open';
  $: reachNote =
    campaign.targetBeneficiaries !== null ? 'people to be reached' : 'intake   everyone listed welcome';

  $: rows = [
    {
      v: String(campaign.scopes.length || ' '),
      what: campaign.scopes.length === 1 ? 'Care area, one programme' : 'Care areas, one programme',
      from:
        campaign.scopes.length > 0
          ? campaign.scopes
              .map((s) => s[0].toUpperCase() + s.slice(1))
              .join(', ')
              .replace(/, ([^,]*)$/, ' and $1') + '.'
          : 'Scope to be published.'
    },
    campaign.phases
      ? {
          v: `${daysBetween(campaign.phases.screening.start, campaign.phases.screening.end)} days`,
          what: 'Screening window',
          from: `${formatDate(campaign.phases.screening.start)} – ${formatDate(campaign.phases.screening.end)} · 08:00–17:00 daily`
        }
      : null,
    campaign.phases
      ? {
          v: `${daysBetween(campaign.phases.mission.start, campaign.phases.mission.end)} days`,
          what: 'Mission week',
          from: `${formatDate(campaign.phases.mission.start)} – ${formatDate(campaign.phases.mission.end)} · booked beneficiaries only`
        }
      : null,
    {
      v: 'Free',
      what: 'No cost, at any point',
      from: 'Sponsor-funded · consent recorded in plain words · every access logged'
    }
  ].filter(Boolean) as Array<{ v: string; what: string; from: string }>;
</script>

<section class="section-screen bg-white" aria-label="The mission, accounted for">
  <div class="section-shell">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p class="eyebrow text-primary">Accounted for</p>
        <p class="font-display mt-6 text-[5.5rem] font-medium leading-none tracking-[-0.02em] md:text-[8rem]">{reach}</p>
        <p class="mt-4 text-lg leading-relaxed text-ink-muted">{reachNote}, before a single patient is seen.</p>
        <div class="mt-8">
          <MButton variant="dark" href={campaign.links.beneficiary}>Register free</MButton>
        </div>
      </Reveal>

      <div>
        {#each rows as r, i}
          <Reveal delay={i * 0.06}>
            <div class="grid gap-2 border-t border-border py-8 last:border-b md:grid-cols-[auto_1fr] md:items-baseline md:gap-8 md:py-9">
              <p class="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">{r.v}</p>
              <div>
                <p class="text-[16.5px] font-medium leading-snug">{r.what}</p>
                <p class="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{r.from}</p>
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
    </div>
  </div>
</section>
