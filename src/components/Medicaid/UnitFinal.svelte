<script lang="ts">
  // Final call   the dates, one last time. Then the choice.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { formatDate } from '../../data/medicaid-campaign';
  import MButton from '../UI/MButton.svelte';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;

  $: headline = campaign.phases
    ? `Screening runs ${formatDate(campaign.phases.screening.start)} – ${formatDate(campaign.phases.screening.end)}`
    : 'Screening is open';
</script>

<section class="bg-ink text-white" aria-label="Final call">
  <div class="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
    <Reveal className="mx-auto max-w-2xl text-center">
      <p class="eyebrow text-secondary">Registration is open</p>
      <h2 class="font-display mt-4 text-3xl font-medium leading-tight md:text-5xl">{headline}</h2>
      <p class="mt-4 text-[17px] leading-relaxed text-white/70">
        Walk in without an appointment   or register ahead and the team will call you to confirm a slot.
      </p>
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <MButton variant="primary" href={campaign.links.beneficiary}>Register for care</MButton>
        <MButton variant="outline-light" href={campaign.links.volunteer}>Join the mission</MButton>
      </div>
    </Reveal>
  </div>
</section>
