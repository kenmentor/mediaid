<script lang="ts">
  // Partners as a responsibility ledger   who does what for you, line by line.
  // Left-aligned sticky heading breaks the centered-everything monotony.
  // Categories translated to patient language; sponsors collapse to one funded-by line.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;

  const roleLabel: Record<string, string> = {
    hospital: 'Treatment',
    diagnostic: 'Test results',
    pharmacy: 'Medicines',
    ngo: 'Community guides',
    insurer: 'Coverage',
    logistics: 'Transport',
    other: 'Support'
  };

  const tierLabel: Record<string, string> = {
    platinum: 'Lead sponsor',
    gold: 'Partner',
    silver: 'Supporter',
    bronze: 'Supporter',
    community: 'Community backer'
  };
</script>

{#if campaign.partners.length || campaign.sponsors.length}
  <section class="section-screen bg-background" aria-label="Partners and sponsors">
    <div class="section-shell">
      <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p class="eyebrow text-primary">Delivered together</p>
          <h2 class="font-display mt-4 text-3xl font-medium leading-tight md:text-[2.75rem]">Everyone behind this mission</h2>
          <p class="mt-4 max-w-md text-[17px] leading-relaxed text-ink-muted">
            Each organisation is accountable for a clear part of your care   named here, responsible on the day.
          </p>
          {#if campaign.sponsors.length}
            <p class="mt-8 border-t border-border pt-6 text-[14px] leading-relaxed text-ink-muted">
              Sponsor-funded, so care stays free. Identities only   amounts and contacts are never published.
            </p>
          {/if}
        </Reveal>

        <div>
          {#if campaign.partners.length}
            {#each campaign.partners as p, i}
              <Reveal delay={i * 0.06}>
                <div class="grid gap-4 border-t border-border py-8 last:border-b md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:py-9">
                  {#if p.logoUrl}
                    <img src={p.logoUrl} alt={`${p.name} logo`} loading="lazy" decoding="async" class="h-14 w-14 border border-border bg-white object-contain" />
                  {:else}
                    <span class="font-display flex h-14 w-14 shrink-0 items-center justify-center bg-ink text-xl font-semibold text-white">{p.name.charAt(0)}</span>
                  {/if}
                  <div>
                    <h3 class="font-display text-xl font-medium leading-snug">{p.name}</h3>
                    <p class="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{p.description}</p>
                  </div>
                  <p class="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary md:text-right">{roleLabel[p.category] ?? p.category}</p>
                </div>
              </Reveal>
            {/each}
          {/if}

          {#if campaign.sponsors.length}
            <Reveal delay={0.1}>
              <div class="flex flex-wrap gap-x-8 gap-y-3 border-t border-border py-8 last:border-b">
                {#each campaign.sponsors as s}
                  <div>
                    <p class="text-[15.5px] font-medium">{s.name}</p>
                    <p class="mt-0.5 text-[12.5px] tracking-wide text-ink-muted">{tierLabel[s.tier] ?? s.tier}</p>
                  </div>
                {/each}
              </div>
            </Reveal>
          {/if}
        </div>
      </div>
    </div>
  </section>
{/if}
