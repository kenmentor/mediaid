<script lang="ts">
  // CliniQx Button — thin wrapper over Carbon Button.
  // Carbon principle: reuse kinds/sizes, don't invent new button styles.
  import { Button as CarbonButton } from 'carbon-components-svelte';
  export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'ink' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | null = null;

  // Map CliniQx variants to Carbon kinds (slight mod: ink/white map to secondary/primary).
  $: kind = (
    variant === 'primary' || variant === 'ink' || variant === 'white'
      ? 'primary'
      : variant === 'ghost' || variant === 'outline'
        ? 'ghost'
        : 'secondary'
  ) as 'primary' | 'secondary' | 'ghost';
  $: carbonSize = (size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md') as 'sm' | 'md' | 'lg';
</script>

<CarbonButton {kind} size={carbonSize} href={href ?? undefined} on:click>
  <slot />
</CarbonButton>
