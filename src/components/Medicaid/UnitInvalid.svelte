<script lang="ts">
  // Minimal invalid state   sharp, MButton dark.
  import { Tile, Tag } from 'carbon-components-svelte';
  import MButton from '../UI/MButton.svelte';
</script>

<section class="min-h-[80vh] flex items-center bg-background">
  <div class="mx-auto max-w-xl px-6 py-24 text-center w-full">
    <Tile class="!p-10 md:!p-12">
      <Tag type="red">Invalid link</Tag>
      <h1 class="mt-5 text-3xl md:text-4xl tracking-tight text-ink">This link is no longer valid.</h1>
      <p class="mt-4 text-[15px] text-ink-muted leading-relaxed">Ask the front desk for a fresh MediCaid link.</p>
      <div class="mt-8 flex justify-center">
        <MButton variant="dark" href="mailto:care@healthique.global">Contact care desk</MButton>
      </div>
    </Tile>
  </div>
</section>
