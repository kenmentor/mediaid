<script lang="ts">
  import Reveal from '../UI/Reveal.svelte';
  import { IMG } from '../../data/images';
  export let onNavigateUnit: () => void;
</script>

<section id="cta" class="relative overflow-hidden bg-ink text-white">
  <img src={IMG.facility} alt="" aria-hidden="true" loading="lazy" class="absolute inset-0 h-full w-full object-cover opacity-20" />
  <div class="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36 text-center">
    <Reveal className="mx-auto max-w-3xl">
      <p class="eyebrow text-secondary">Your next visit can be different</p>
      <h2 class="mt-6 text-4xl md:text-6xl tracking-tight leading-[1.08]">Bring your whole health story with you.</h2>
      <p class="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65">Ask whether your hospital is connected  or view the live MediCaid unit page and register as a beneficiary or volunteer.</p>
      <div class="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button on:click={onNavigateUnit} class="inline-flex items-center justify-center gap-2 font-medium rounded-lg bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-lift px-9 py-4 text-base">
          View MediCaid unit <span aria-hidden="true">→</span>
        </button>
        <a href="#platform" class="inline-flex items-center justify-center gap-2 font-medium rounded-lg border border-white/30 text-white hover:bg-white/10 backdrop-blur px-9 py-4 text-base">How it protects you</a>
      </div>
      <p class="mt-9 text-sm text-white/40">Your records are shared only with your permission. Always.</p>
    </Reveal>
  </div>
</section>

<footer class="bg-ink text-white border-t border-white/10">
  <div class="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
    <div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-md bg-white text-ink text-lg">C</span>
          <span class="leading-tight">
            <span class="block text-[17px]">ClinIQx</span>
            <span class="block text-[11px] tracking-[0.22em] uppercase text-white/50">by HealthIQue</span>
          </span>
        </div>
        <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">One secure record for your visits, results, prescriptions and bills  recognised everywhere care finds you.</p>
        <p class="mt-6 text-[13px] tracking-[0.22em] uppercase text-white/40">One world · Connected healthcare</p>
      </div>
      <div>
        <p class="text-sm tracking-[0.18em] uppercase text-white/40">Care</p>
        <ul class="mt-5 space-y-3 text-[15px] text-white/70">
          <li><a href="#platform" class="hover:text-white">Your visits</a></li>
          <li><a href="#who" class="hover:text-white">Where to find it</a></li>
          <li><a href="#impact" class="hover:text-white">What improves</a></li>
          <li><a href="#stories" class="hover:text-white">Patient stories</a></li>
        </ul>
      </div>
      <div>
        <p class="text-sm tracking-[0.18em] uppercase text-white/40">Trust</p>
        <ul class="mt-5 space-y-3 text-[15px] text-white/70">
          <li>Your consent first</li>
          <li>Private by design</li>
          <li>Clear bills</li>
          <li>Named accountability</li>
        </ul>
      </div>
      <div>
        <p class="text-sm tracking-[0.18em] uppercase text-white/40">Contact</p>
        <ul class="mt-5 space-y-3 text-[15px] text-white/70">
          <li><a href="#impact" class="hover:text-white">What improves</a></li>
          <li><a href="#stories" class="hover:text-white">Stories</a></li>
          <li><button on:click={onNavigateUnit} class="hover:text-white">MediCaid unit</button></li>
        </ul>
      </div>
    </div>
    <div class="mt-14 border-t border-white/10 pt-8">
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] uppercase tracking-[0.18em] text-white/40">
        <span>Privacy-first</span><span aria-hidden="true" class="text-white/20">·</span>
        <span>Consent-led</span><span aria-hidden="true" class="text-white/20">·</span>
        <span>Access recorded</span><span aria-hidden="true" class="text-white/20">·</span>
        <span>Bills itemised</span>
      </div>
      <div class="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
        <span>© 2026 ClinIQx · HealthIQue · One world, connected care</span>
        <span>Your health story  shared only with your permission</span>
      </div>
    </div>
  </div>
</footer>
