<script lang="ts">
  // Gallery   the mission in pictures. Editorial asymmetric grid, self-hosted,
  // graded photography. Calm captions, no clutter.
  import { IMG_META } from '../../data/images';
  import Reveal from '../UI/Reveal.svelte';

  const shots = [
    { key: 'screening', span: 'tall', caption: 'Screening day   assessment in one visit' },
    { key: 'careTeam', span: 'wide', caption: 'One team, one record, one plan' },
    { key: 'ward', span: 'std', caption: 'Wards prepared before you arrive' },
    { key: 'lab', span: 'std', caption: 'Labs reported back the same day' },
    { key: 'facility', span: 'wide', caption: 'Your mission hospital' }
  ];
</script>

<section class="section-screen bg-white" aria-label="Mission gallery">
  <div class="section-shell">
    <Reveal className="mx-auto max-w-2xl text-center">
      <p class="eyebrow text-primary">In pictures</p>
      <h2 class="font-display mt-4 text-3xl font-medium leading-tight md:text-[2.75rem]">Care you can see</h2>
      <p class="mt-4 text-[17px] leading-relaxed text-ink-muted">
        Screening rooms, theatres, wards and labs   prepared around the mission week.
      </p>
    </Reveal>

    <div class="mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[240px] lg:grid-cols-4">
      {#each shots as s, i}
        {@const meta = IMG_META[s.key]}
        <Reveal
          delay={(i % 4) * 0.06}
          className={s.span === 'tall'
            ? 'sm:row-span-2'
            : s.span === 'wide'
              ? 'sm:col-span-2'
              : ''}
        >
          <figure class="group relative h-full min-h-[220px] w-full overflow-hidden bg-ink md:min-h-[240px]">
            <img
              src={meta.src}
              alt={meta.alt}
              loading="lazy"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={`object-position: ${meta.focal};`}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden="true"></div>
            <figcaption class="absolute bottom-0 left-0 right-0 p-5 text-[14px] font-medium leading-snug text-white">
              {s.caption}
            </figcaption>
          </figure>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .group img {
      transition: none;
    }
  }
</style>
