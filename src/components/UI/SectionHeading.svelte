<script lang="ts">
  // Section heading built on Carbon type + Tag + Grid spacing.
  // Carbon principle: hierarchy via type scale, eyebrow via Tag/label.
  import { Tag, Grid, Row, Column } from 'carbon-components-svelte';
  import Reveal from './Reveal.svelte';
  export let eyebrow: string;
  export let title: string;
  export let lead: string = '';
  export let align: 'center' | 'left' = 'center';
  export let no: string = '';
</script>

<Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}>
  <Grid>
    <Row>
      <Column>
        <Tag type="blue">{#if no}{no} · {/if}{eyebrow}</Tag>
        <h2 class="bx--type-productive-heading-05 mt-5 text-3xl md:text-5xl leading-[1.15] tracking-tight text-ink font-medium">
          {title}
        </h2>
        {#if lead}
          <p class="bx--type-body-long-02 mt-6 text-lg md:text-xl leading-relaxed text-ink-muted">{lead}</p>
        {/if}
      </Column>
    </Row>
  </Grid>
</Reveal>
