<script lang="ts">
  // MediCaid signature button — corporate, symmetric, sharp.
  // Rectangle locked (radius 0), equal left/right padding, fixed heights.
  // Full state set: hover, active (pressed), focus-visible, disabled.
  export let variant: 'primary' | 'dark' | 'light' | 'outline-light' | 'outline-dark' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | null = null;
  export let fullWidth = false;
  export let disabled = false;

  const base =
    'mbtn font-display inline-flex items-center justify-center gap-2 font-medium no-underline select-none ' +
    'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128ef3] ' +
    'active:translate-y-px disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0';

  const variants: Record<string, string> = {
    primary:
      'bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active',
    dark: 'bg-ink text-white border border-ink hover:bg-ink-soft hover:border-ink-soft active:bg-black active:border-black',
    light: 'bg-white text-ink border border-white hover:bg-primary-tint hover:border-primary-tint active:bg-[#d6e9fd] active:border-[#d6e9fd]',
    'outline-light':
      'bg-transparent text-white border border-white hover:bg-white hover:text-ink hover:border-white active:bg-primary-tint',
    'outline-dark':
      'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white active:bg-black'
  };

  const sizes: Record<string, string> = {
    sm: 'h-10 min-h-[40px] px-5 text-sm min-w-[140px]',
    md: 'h-12 min-h-[48px] px-7 text-[15px] min-w-[180px]',
    lg: 'h-14 min-h-[56px] px-9 text-base min-w-[220px]'
  };

  $: cls = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${$$props.class ?? ''}`;
</script>

<style>
  .mbtn {
    border-radius: 0 !important;
    letter-spacing: 0.01em;
    line-height: 1;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  .mbtn:hover {
    text-decoration: none;
  }
</style>

{#if href && !disabled}
  <a {href} class={cls}><slot /></a>
{:else}
  <button class={cls} {disabled} on:click><slot /></button>
{/if}
