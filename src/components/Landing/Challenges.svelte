<script lang="ts">
  import SectionHeading from '../UI/SectionHeading.svelte';
  import Reveal from '../UI/Reveal.svelte';
  import { CHALLENGES } from '../../data/cliniqx';
</script>

<section id="why" class="section-air bg-background">
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <SectionHeading no="01" eyebrow="Why this matters" title="Getting care should not feel this hard."
      lead="You, your family and your doctors all want the same thing  the full story, in one place, at the right moment. Today it is scattered across files, buildings and bills." />
    <div class="mt-16 md:mt-24 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each CHALLENGES as c, i}
        <Reveal delay={Math.min(i * 0.06, 0.3)}>
          <div class="h-full rounded-lg border border-border bg-white p-9 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10">
            <span class="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">◈</span>
            <h3 class="mt-6 text-xl leading-snug text-ink">{c.title}</h3>
            <p class="mt-4 text-[15.5px] leading-relaxed text-ink-muted">{c.text}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
