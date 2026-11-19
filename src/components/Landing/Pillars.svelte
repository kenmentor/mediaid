<script lang="ts">
  import SectionHeading from '../UI/SectionHeading.svelte';
  import Reveal from '../UI/Reveal.svelte';
  import { IMG } from '../../data/images';
  const PILLARS = [
    { title: 'Your visits, remembered', text: 'Consultations, lab results, prescriptions and nursing notes land in one story your doctors can actually follow.', points: ['History that travels with you', 'Test results without the chase', 'Prescriptions that make sense'], img: IMG.clinical, alt: 'Physician in a hospital ward reviewing a patient file' },
    { title: 'Your hospital stay, organised', text: 'Beds, theatre slots, staff and medicines arranged around you   fewer delays, fewer repeated questions.', points: ['Shorter, calmer queues', 'Staff who already know your case', 'Discharge papers that are clear'], img: IMG.operations, alt: 'Calm modern hospital ward prepared for patients' },
    { title: 'Your next step, arranged', text: 'Referrals sent ahead, video visits where possible, insurance and bills settled in one understandable statement.', points: ['Referrals that arrive before you', 'Video visits from home', 'One bill, fully explained'], img: IMG.connected, alt: 'Doctor speaking with a patient over a video consultation' }
  ];
</script>

<section id="platform" class="section-air bg-white border-y border-border">
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <SectionHeading no="02" eyebrow="What changes for you" title="Three ways care finally feels like one."
      lead="Not another app to learn. The hospital itself works differently   behind the desk, so your visit feels simple in front of it." />
    <div class="mt-16 md:mt-24 grid gap-6 md:gap-8 lg:grid-cols-3">
      {#each PILLARS as p, i}
        <Reveal delay={i * 0.08}>
          <div class={`h-full overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1 ${i === 1 ? 'bg-ink text-white border-ink shadow-lift' : 'bg-background border-border shadow-soft hover:shadow-lift'}`}>
            <div class="relative h-56 md:h-60 overflow-hidden">
              <img src={p.img} alt={p.alt} loading="lazy" class="h-full w-full object-cover" />
              <div class={`absolute inset-0 ${i === 1 ? 'bg-gradient-to-t from-ink via-ink/20 to-transparent' : 'bg-gradient-to-t from-ink/50 via-transparent to-transparent'}`}></div>
            </div>
            <div class="p-8 md:p-9">
              <h3 class={`text-2xl tracking-tight ${i === 1 ? 'text-white' : 'text-ink'}`}>{p.title}</h3>
              <p class={`mt-4 text-[15.5px] leading-relaxed ${i === 1 ? 'text-white/70' : 'text-ink-muted'}`}>{p.text}</p>
              <ul class="mt-7 space-y-3.5">
                {#each p.points as pt}
                  <li class="flex items-start gap-3 text-[15px]">
                    <span class={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${i === 1 ? 'bg-white/10 text-secondary' : 'bg-primary/10 text-primary'}`}>✓</span>
                    <span class={i === 1 ? 'text-white/85' : 'text-ink'}>{pt}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </Reveal>
      {/each}
    </div>
    <Reveal className="mx-auto mt-14 md:mt-16 max-w-2xl text-center">
      <p class="text-lg text-ink-muted leading-relaxed">One world, connected care   starting with your next visit.</p>
    </Reveal>
  </div>
</section>
