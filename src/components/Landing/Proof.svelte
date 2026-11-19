<script lang="ts">
  import SectionHeading from '../UI/SectionHeading.svelte';
  import Reveal from '../UI/Reveal.svelte';
  import { IMG } from '../../data/images';
  const STATS = [
    { v: '1', l: 'Health story, kept in one place' },
    { v: '6', l: 'Places connected: clinic to emergency' },
    { v: '3', l: 'Things settled: visits, bills, referrals' },
    { v: '100%', l: 'Shared only with your permission' }
  ];
  const VOICES = [
    { quote: 'I stopped carrying folders of old results. My doctor already had them   and explained what came next.', name: 'Amara O.', role: 'Patient · Follow-up care', img: IMG.avatar1 },
    { quote: 'Admission took minutes, not a morning. The ward knew my case before I reached the bed.', name: 'Daniel M.', role: 'Patient · Hospital stay', img: IMG.avatar2 },
    { quote: 'My referral letter arrived before I did. The specialist started from my story, not from zero.', name: 'Lena H.', role: 'Patient · Referred to specialist', img: IMG.avatar3 }
  ];
</script>

<section id="stories" class="bg-white border-y border-border">
  <div class="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
    <SectionHeading no="05" eyebrow="People already feeling it" title="Care that finally remembers you."
      lead="Early patients and families from the first connected wards   in their own words." />
    <div class="mt-14 grid grid-cols-2 gap-px border-y border-border bg-border lg:grid-cols-4">
      {#each STATS as s}
        <div class="bg-white px-6 py-10 text-center md:py-12">
          <p class="text-4xl tracking-tight text-ink md:text-5xl">{s.v}</p>
          <p class="mx-auto mt-3 max-w-[200px] text-[12.5px] uppercase leading-relaxed tracking-[0.14em] text-ink-muted">{s.l}</p>
        </div>
      {/each}
    </div>
    <div class="mt-8 grid gap-6 md:gap-8 lg:grid-cols-3">
      {#each VOICES as v, i}
        <Reveal delay={i * 0.07}>
          <figure class="relative h-full overflow-hidden rounded-lg border border-border bg-white p-8 shadow-soft flex flex-col md:p-9">
            <span aria-hidden="true" class="pointer-events-none absolute -top-3 left-6 text-[88px] leading-none text-primary/15">&ldquo;</span>
            <blockquote class="relative text-[15.5px] leading-relaxed text-ink flex-1">{v.quote}</blockquote>
            <figcaption class="mt-7 flex items-center gap-4 border-t border-border pt-6">
              <img src={v.img} alt={v.name} loading="lazy" class="h-12 w-12 rounded-full object-cover ring-2 ring-secondary/40" />
              <span>
                <span class="block text-[15px] text-ink">{v.name}</span>
                <span class="block text-[13.5px] text-ink-muted">{v.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      {/each}
    </div>
    <Reveal className="mt-8">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="relative overflow-hidden rounded-lg min-h-[260px] border border-border shadow-soft">
          <img src={IMG.emergency} alt="Emergency response team moving a patient through a hospital" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>
          <p class="absolute bottom-6 left-6 right-6 text-white text-lg leading-snug">When minutes matter   your blood group, allergies and history ready.</p>
        </div>
        <div class="relative overflow-hidden rounded-lg min-h-[260px] border border-border shadow-soft">
          <img src={IMG.lab} alt="Diagnostic laboratory supporting connected test results" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>
          <p class="absolute bottom-6 left-6 right-6 text-white text-lg leading-snug">Test once   every doctor you see reads the same result.</p>
        </div>
      </div>
    </Reveal>
  </div>
</section>
