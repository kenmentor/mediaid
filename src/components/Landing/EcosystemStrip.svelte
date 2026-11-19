<script lang="ts">
  import Reveal from '../UI/Reveal.svelte';
  const items = ['Hospitals', 'Clinics', 'Diagnostics', 'Pharmacies', 'Insurers', 'Emergency'];
</script>

<section class="bg-white border-y border-border">
  <div class="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-16">
    <Reveal className="text-center">
      <p class="eyebrow text-ink-muted">Everyone involved in your care   finally connected</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
        {#each items as b}
          <span class="text-xl md:text-2xl tracking-tight text-ink/35 font-medium">{b}</span>
        {/each}
      </div>
    </Reveal>
  </div>
</section>
