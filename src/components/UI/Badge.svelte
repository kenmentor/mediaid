<script lang="ts">
  // CliniQx Badge — Carbon Tag. Type maps to Carbon Tag types.
  import { Tag } from 'carbon-components-svelte';
  export let className: string = '';
  export let type: 'blue' | 'teal' | 'green' | 'gray' | 'high-contrast' | 'outline' = 'blue';
</script>

<Tag {type} class={className}>
  <slot />
</Tag>
