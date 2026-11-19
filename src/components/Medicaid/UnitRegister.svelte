<script lang="ts">
  // Registration   beneficiary + volunteer forms with inline validation
  // and received-states. Pooled from the reference campaign: name, phone,
  // household size / role select. Front-end demo: no backend post yet.
  import type { PublicCampaign } from '../../data/medicaid-campaign';
  import { formatDate } from '../../data/medicaid-campaign';
  import { Tile } from 'carbon-components-svelte';
  import MButton from '../UI/MButton.svelte';
  import Reveal from '../UI/Reveal.svelte';
  export let campaign: PublicCampaign;

  const showBeneficiary = campaign.intakeOptions.includes('beneficiary-registration');
  const showVolunteer = campaign.intakeOptions.includes('volunteer-registration');

  const roles = ['Medical doctor', 'Nurse', 'Optometrist', 'Pharmacist', 'Community mobiliser', 'Logistics support'];

  // Beneficiary form state
  let bName = '';
  let bPhone = '';
  let bPeople = '1';
  let bErrors: string[] = [];
  let bDone = false;

  // Volunteer form state
  let vName = '';
  let vPhone = '';
  let vRole = '';
  let vErrors: string[] = [];
  let vDone = false;

  function validPhone(p: string) {
    return p.replace(/\D/g, '').length >= 7;
  }

  function submitBeneficiary() {
    bErrors = [];
    if (!bName.trim()) bErrors.push('Enter your full name.');
    if (!validPhone(bPhone)) bErrors.push('Enter a phone number we can reach you on.');
    const n = Number(bPeople);
    if (!Number.isInteger(n) || n < 1 || n > 12) bErrors.push('People registering must be between 1 and 12.');
    if (!bErrors.length) bDone = true;
  }

  function submitVolunteer() {
    vErrors = [];
    if (!vName.trim()) vErrors.push('Enter your full name.');
    if (!validPhone(vPhone)) vErrors.push('Enter a phone number the team can call.');
    if (!vRole) vErrors.push('Choose the role you are applying for.');
    if (!vErrors.length) vDone = true;
  }

  $: slotWindow =
    campaign.phases != null
      ? `between ${formatDate(campaign.phases.screening.start)} and ${formatDate(campaign.phases.screening.end)}`
      : 'during the screening window';

  const inputCls =
    'h-12 min-h-[48px] w-full border border-border bg-white px-4 text-[15px] text-ink placeholder:text-ink-muted/60 hover:border-ink-muted focus:border-primary focus:outline-2 focus:outline-primary';
  const labelCls = 'mb-2 block text-[13px] font-medium tracking-wide text-ink';
  const hintCls = 'mt-2 block text-[13px] leading-relaxed text-ink-muted';
</script>

<section id="register-beneficiary" class="section-screen border-t border-border bg-white" aria-label="Register">
  <div class="section-shell">
    <Reveal className="mx-auto max-w-2xl text-center">
      <p class="eyebrow text-primary">Take part</p>
      <h2 class="font-display mt-4 text-3xl font-medium leading-tight md:text-[2.75rem]">Two ways to join</h2>
      {#if campaign.location}
        <p class="mt-4 text-[17px] text-ink-muted">{campaign.location.state} · {campaign.location.lga}   free to attend</p>
      {/if}
    </Reveal>

    <div class="mx-auto mt-12 grid max-w-5xl items-start gap-5 md:grid-cols-2">
      {#if showBeneficiary}
        <Reveal>
          <Tile id="beneficiary" class="!p-8 md:!p-10">
            {#if !bDone}
              <p class="eyebrow text-primary">Beneficiary · Register for care</p>
              <h3 class="font-display mt-3 text-2xl font-medium">Register yourself or household</h3>
              <p class="mt-2 text-[14.5px] text-ink-muted">All fields are required.</p>
              {#if bErrors.length}
                <div role="alert" class="mt-5 border-l-4 border-primary bg-background p-4">
                  <p class="text-[13px] font-semibold uppercase tracking-[0.12em]">Check these fields:</p>
                  <ul class="mt-2 list-disc space-y-1 pl-5 text-[14.5px]">
                    {#each bErrors as e}<li>{e}</li>{/each}
                  </ul>
                </div>
              {/if}
              <form class="mt-6 space-y-5" on:submit|preventDefault={submitBeneficiary} novalidate>
                <div>
                  <label class={labelCls} for="b-name">Full name</label>
                  <input id="b-name" class={inputCls} type="text" autocomplete="name" bind:value={bName} />
                </div>
                <div>
                  <label class={labelCls} for="b-phone">Phone number</label>
                  <input id="b-phone" class={inputCls} type="tel" autocomplete="tel" bind:value={bPhone} />
                  <span class={hintCls}>We call this number to confirm your screening slot.</span>
                </div>
                <div>
                  <label class={labelCls} for="b-people">People registering</label>
                  <input id="b-people" class={inputCls} type="number" min="1" max="12" bind:value={bPeople} />
                  <span class={hintCls}>Include yourself. Register up to 12 people at a time.</span>
                </div>
                <div class="flex flex-col gap-3 pt-1 sm:flex-row">
                  <MButton variant="dark">Send registration</MButton>
                </div>
                <p class="text-[13px] text-ink-muted">Or walk in from 8:00am   no appointment needed.</p>
              </form>
            {:else}
              <div class="py-4 text-center" role="status">
                <p class="eyebrow text-primary">Registration received</p>
                <h3 class="font-display mt-4 text-2xl font-medium">We will call your number</h3>
                <p class="mx-auto mt-3 max-w-sm text-[15.5px] leading-relaxed text-ink-muted">
                  …to confirm your screening slot {slotWindow}. Bring a valid ID and any previous records.
                </p>
                <div class="mt-7 flex justify-center">
                  <MButton variant="outline-dark" on:click={() => ((bDone = false), (bName = ''), (bPhone = ''), (bPeople = '1'))}>Done</MButton>
                </div>
              </div>
            {/if}
          </Tile>
        </Reveal>
      {/if}

      {#if showVolunteer}
        <Reveal delay={0.08}>
          <div id="register-volunteer" class="h-full">
            <Tile class="h-full !bg-ink !p-8 !text-white md:!p-10">
              {#if !vDone}
                <p class="eyebrow text-secondary">Volunteer · Join the mission</p>
                <h3 class="font-display mt-3 text-2xl font-medium text-white">Apply your skill</h3>
                <p class="mt-2 text-[14.5px] text-white/60">All fields are required.</p>
                {#if vErrors.length}
                  <div role="alert" class="mt-5 border-l-4 border-secondary bg-white/10 p-4">
                    <p class="text-[13px] font-semibold uppercase tracking-[0.12em] text-white">Check these fields:</p>
                    <ul class="mt-2 list-disc space-y-1 pl-5 text-[14.5px] text-white/85">
                      {#each vErrors as e}<li>{e}</li>{/each}
                    </ul>
                  </div>
                {/if}
                <form class="mt-6 space-y-5" on:submit|preventDefault={submitVolunteer} novalidate>
                  <div>
                    <label class={`${labelCls} !text-white`} for="v-name">Full name</label>
                    <input id="v-name" class={`${inputCls} !border-white/25 !bg-transparent !text-white placeholder:!text-white/50 hover:!border-white focus:!border-secondary`} type="text" autocomplete="name" bind:value={vName} />
                  </div>
                  <div>
                    <label class={`${labelCls} !text-white`} for="v-phone">Phone number</label>
                    <input id="v-phone" class={`${inputCls} !border-white/25 !bg-transparent !text-white placeholder:!text-white/50 hover:!border-white focus:!border-secondary`} type="tel" autocomplete="tel" bind:value={vPhone} />
                    <span class={`${hintCls} !text-white/60`}>The team calls this number before the screening week.</span>
                  </div>
                  <div>
                    <label class={`${labelCls} !text-white`} for="v-role">Role you are applying for</label>
                    <select id="v-role" class={`${inputCls} !border-white/25 !bg-transparent !text-white focus:!border-secondary`} bind:value={vRole}>
                      <option value="" class="text-ink">Select a role</option>
                      {#each roles as r}<option value={r} class="text-ink">{r}</option>{/each}
                    </select>
                  </div>
                  <div class="flex flex-col gap-3 pt-1 sm:flex-row">
                    <MButton variant="light">Send application</MButton>
                  </div>
                  <p class="text-[13px] text-white/50">Certificate of service afterwards.</p>
                </form>
              {:else}
                <div class="py-4 text-center" role="status">
                  <p class="eyebrow text-secondary">Application received</p>
                  <h3 class="font-display mt-4 text-2xl font-medium text-white">We will call your number</h3>
                  <p class="mx-auto mt-3 max-w-sm text-[15.5px] leading-relaxed text-white/70">
                    …about your role on the screening and mission days.
                  </p>
                  <div class="mt-7 flex justify-center">
                    <button type="button" on:click={() => ((vDone = false), (vName = ''), (vPhone = ''), (vRole = ''))} class="mbtn font-display inline-flex h-12 min-h-[48px] items-center justify-center border border-white/80 bg-transparent px-7 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">Done</button>
                  </div>
                </div>
              {/if}
            </Tile>
          </div>
        </Reveal>
      {/if}
    </div>
  </div>
</section>
