<script lang="ts">
  import Button from '../UI/Button.svelte';
  import { IMG } from '../../data/images';
  export let onNavigateUnit: () => void;
</script>

<section id="top" class="relative overflow-hidden bg-background">
  <div class="hero-grid absolute inset-0" aria-hidden="true"></div>
  <div class="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
    style="background: radial-gradient(closest-side, #75c6fc 0%, #128ef322 55%, transparent 100%)" aria-hidden="true"></div>

  <div class="relative mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-20 md:pb-28">
    <div class="mx-auto max-w-4xl text-center">
      <p class="eyebrow text-ink-muted mb-6">HealthIQue · One world · Connected healthcare</p>
      <h1 class="text-4xl leading-[1.08] tracking-tight text-ink font-medium sm:text-6xl md:text-7xl md:leading-[1.05]">
        Your health story,<br class="hidden sm:block" /> wherever care <span class="text-primary">finds you.</span>
      </h1>
      <p class="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
        ClinIQx keeps your visits, test results, prescriptions and bills in one secure record   so every doctor you meet already knows your story.
      </p>
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button on:click={onNavigateUnit} class="inline-flex items-center justify-center gap-2 font-medium rounded-lg bg-primary text-white shadow-lift hover:bg-[#0e7fd8] hover:-translate-y-0.5 px-9 py-4 text-base">
          Find a connected hospital <span aria-hidden="true">→</span>
        </button>
        <Button variant="secondary" size="lg" href="#platform">See how it cares for you</Button>
      </div>
      <div class="mt-10 flex items-center justify-center gap-2 text-sm text-ink-muted">
        <span class="text-primary">◈</span> Private by design · You approve who sees what
      </div>
    </div>

    <div class="mx-auto mt-16 md:mt-20 max-w-6xl">
      <div class="grid gap-6 lg:grid-cols-[1.35fr_1fr] items-stretch">
        <div class="relative overflow-hidden rounded-lg border border-border shadow-lift bg-ink min-h-[340px] md:min-h-[440px]">
          <img src={IMG.heroMain} alt="Clinician reviewing a unified patient record on a tablet at the bedside" class="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"></div>
          <div class="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-7 flex flex-wrap gap-3">
            <span class="inline-flex items-center gap-2 rounded-md bg-white/95 px-4 py-2 text-[13px] text-ink shadow-soft">◉ Your file follows you</span>
            <span class="inline-flex items-center gap-2 rounded-md bg-white/95 px-4 py-2 text-[13px] text-ink shadow-soft">▦ Visits, tests & bills together</span>
          </div>
          <span class="absolute left-5 top-5 md:left-7 md:top-6 rounded-md bg-ink/70 backdrop-blur px-4 py-1.5 text-[12px] tracking-[0.18em] uppercase text-white">Now welcoming our first hospitals</span>
        </div>
        <div class="flex flex-col gap-6">
          <div class="relative flex-1 overflow-hidden rounded-lg border border-border shadow-soft min-h-[220px] bg-white">
            <img src={IMG.heroTeam} alt="Surgical and nursing team coordinating in a modern operating theatre" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
            <p class="absolute bottom-5 left-5 right-5 text-[15px] leading-snug text-white">Your whole care team   finally on the same page.</p>
          </div>
          <div class="rounded-lg border border-border bg-white shadow-soft overflow-hidden">
            <div class="border-b border-border px-6 py-4">
              <p class="text-[12px] uppercase tracking-[0.18em] text-ink-muted">Example visit summary</p>
              <p class="mt-1 text-[15px] text-ink">Tuesday · General outpatient</p>
            </div>
            <div class="divide-y divide-border text-left">
              {#each [{ k: 'Seen & recorded', v: 'Consultation notes filed to your story' }, { k: 'Result received', v: 'Lab sent ahead   no repeat test' }, { k: 'Bill settled', v: 'Itemised, receipted, insurance filed' }] as c}
                <div class="flex items-center gap-4 px-6 py-4">
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">✓</span>
                  <span>
                    <span class="block text-[14px] font-medium text-ink">{c.k}</span>
                    <span class="block text-[13px] text-ink-muted">{c.v}</span>
                  </span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <p class="mt-8 text-center text-sm tracking-wide text-ink-muted">One story of your health   shared only with your permission.</p>
    </div>
  </div>

  <div class="relative border-t border-border bg-white/70 backdrop-blur">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-9 sm:grid-cols-3 md:px-10">
      {#each [{ t: 'Permission first', d: 'Nothing is shared without your approval. Ever.' }, { t: 'Every view recorded', d: 'Who saw your file, and when   written down.' }, { t: 'Bills in plain words', d: 'Every charge itemised. Every payment receipted.' }] as a}
        <div class="flex items-start gap-4">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">✓</span>
          <span>
            <span class="block text-[15px] font-medium text-ink">{a.t}</span>
            <span class="mt-1 block text-[14px] leading-relaxed text-ink-muted">{a.d}</span>
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
