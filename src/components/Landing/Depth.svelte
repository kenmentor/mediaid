<script lang="ts">
  import SectionHeading from '../UI/SectionHeading.svelte';
  import Reveal from '../UI/Reveal.svelte';
  import { IMPACTS } from '../../data/cliniqx';
  import { IMG } from '../../data/images';
  const MARKET_CARDS = [
    { title: 'Your clinic & family doctor', text: 'Everyday visits, check-ups and repeat prescriptions   with your history already on screen.', img: IMG.consult, alt: 'Doctor consulting with a patient and reviewing records together' },
    { title: 'Your hospital', text: 'Admission to discharge without lost files   wards, theatre and pharmacy reading the same story.', img: IMG.facility, alt: 'Modern hospital facility exterior and entrance' },
    { title: 'Bills & insurance, settled', text: 'One itemised statement, receipts kept, insurance processed without you carrying papers between desks.', img: IMG.billing, alt: 'Clear billing statement being explained at a hospital desk' },
    { title: 'Video visits & follow-ups', text: 'See your doctor from home when a physical visit is not needed   with the same record in front of them.', img: IMG.research, alt: 'Doctor following up with a patient over a video call' }
  ];
</script>

<section id="who" class="section-air bg-background">
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <SectionHeading no="03" eyebrow="Where you will find it" title="From your local clinic to the teaching hospital."
      lead="Starting in one hospital, growing across its network   your record recognised everywhere it operates." />
    <div class="mt-16 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2">
      {#each MARKET_CARDS as m, i}
        <Reveal delay={i * 0.06}>
          <div class="h-full overflow-hidden rounded-lg border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div class="relative h-60 md:h-72 overflow-hidden">
              <img src={m.img} alt={m.alt} loading="lazy" class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"></div>
              <span class="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-md bg-white/95 text-primary shadow-soft">◈</span>
            </div>
            <div class="p-9 md:p-11">
              <h3 class="text-xl md:text-2xl text-ink tracking-tight">{m.title}</h3>
              <p class="mt-4 text-[15.5px] leading-relaxed text-ink-muted">{m.text}</p>
            </div>
          </div>
        </Reveal>
      {/each}
    </div>
    <Reveal className="mt-10 text-center">
      <p class="text-[15px] text-ink-muted">Ask at reception whether your hospital is connected yet.</p>
    </Reveal>
  </div>
</section>

<section id="impact" class="section-air bg-white border-b border-border">
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <SectionHeading no="04" eyebrow="What improves" title="What you will notice, visit after visit."
      lead="Not promises about systems   small differences you can feel at the desk, in the ward, and at the bill counter." />
    <div class="mx-auto mt-16 md:mt-20 max-w-4xl divide-y divide-border border-y border-border">
      {#each IMPACTS as im, i}
        <Reveal delay={i * 0.04}>
          <div class="grid items-center gap-4 py-9 md:grid-cols-[64px_1fr_1.4fr] md:gap-8 md:py-10">
            <span class="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">✓</span>
            <h3 class="text-xl tracking-tight text-ink md:text-2xl">{im.title}</h3>
            <p class="text-[15.5px] leading-relaxed text-ink-muted">{im.text}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
