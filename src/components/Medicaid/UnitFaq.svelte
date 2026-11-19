<script lang="ts">
  // FAQ   the questions families actually ask. Native details/summary:
  // accessible, sharp, no dependencies.
  import Reveal from '../UI/Reveal.svelte';

  const faqs = [
    {
      q: 'Is it really free?',
      a: 'Yes. Screening, surgery, labs, medicines and the follow-up review are covered by the mission and its sponsors. You will never be asked to pay at any point   if anyone asks, report it to the care desk immediately.'
    },
    {
      q: 'Do I need a hospital card or referral to attend?',
      a: 'No. Walk in during screening days with anything you have   an old card, test results, prescriptions   or nothing at all. Registration online beforehand simply means your file is ready when you arrive.'
    },
    {
      q: 'What happens to my information and consent?',
      a: 'You are registered, examined and booked only with your explicit consent, recorded in plain words. Nothing is shared with anyone outside your care team without your permission, and every access to your file is recorded.'
    },
    {
      q: 'What happens after surgery?',
      a: 'Ward care, discharge medicines and a scheduled follow-up review are part of the programme. Community teams also check in on you after you go home   you are followed up, not discharged and forgotten.'
    },
    {
      q: 'Can I volunteer even if I am not a clinician?',
      a: 'Yes. Beyond clinical and nursing roles, missions need pharmacy, logistics, translation, mobilisation and administrative volunteers. Every volunteer gets a named shift, a supervisor and a certificate of service.'
    }
  ];

  let open = 0;
</script>

<section class="section-screen bg-background" aria-label="Frequently asked questions">
  <div class="reading-shell">
    <Reveal>
      <p class="eyebrow text-center text-primary">Good to know</p>
      <h2 class="font-display mt-4 text-center text-3xl font-medium leading-tight md:text-[2.75rem]">Questions, answered plainly</h2>
    </Reveal>
    <div class="mt-10">
      {#each faqs as f, i}
        <Reveal delay={Math.min(i * 0.05, 0.2)}>
          <details
            class="group border-b border-border bg-white px-6 py-0 first:border-t md:px-8"
            open={open === i}
            on:toggle={(e) => {
              open = e.currentTarget.open ? i : -1;
            }}
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden [&::-webkit-details-marker]:hidden">
              <span class="font-display text-[17px] font-medium leading-snug md:text-lg">{f.q}</span>
              <span class="font-display flex h-9 w-9 shrink-0 items-center justify-center border border-border text-lg leading-none transition-colors group-open:bg-ink group-open:text-white group-open:border-ink" aria-hidden="true">
                <span class="group-open:hidden">+</span>
                <span class="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p class="max-w-2xl pb-7 text-[15.5px] leading-relaxed text-ink-muted">{f.a}</p>
          </details>
        </Reveal>
      {/each}
    </div>
    <Reveal className="mt-8 text-center">
      <p class="text-[14px] text-ink-muted">
        Still unsure? <a href="mailto:care@healthique.global" class="font-medium text-primary hover:underline hover:underline-offset-4">Ask the care desk</a>
      </p>
    </Reveal>
  </div>
</section>
