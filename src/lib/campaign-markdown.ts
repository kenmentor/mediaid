import MarkdownIt from 'markdown-it';

// Mirrors the handoff rule: markdown-it with html:false. Never use {@html}
// on raw stored content — always pass through this renderer.
const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true
});

md.validateLink = (url: string) => {
  const u = url.trim().toLowerCase();
  return (
    u.startsWith('http://') ||
    u.startsWith('https://') ||
    u.startsWith('mailto:') ||
    u.startsWith('#') ||
    u.startsWith('/')
  );
};

const defaultRender =
  md.renderer.rules.link_open ||
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet('target', '_blank');
  tokens[idx].attrSet('rel', 'noopener noreferrer');
  return defaultRender(tokens, idx, options, env, self);
};

export function renderCampaignMarkdown(source: string): string {
  return md.render(source ?? '');
}
