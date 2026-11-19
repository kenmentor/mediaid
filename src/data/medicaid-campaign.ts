// Public MediCaid campaign view model.
// Mirrors the handoff data contract exactly. Never add contact PII or
// contribution amounts here — they are intentionally excluded.
export type ClinIQxCampaignScope =
  | 'screening'
  | 'surgery'
  | 'maternal'
  | ' diagnostics'
  | 'diagnostics'
  | 'pharmacy'
  | 'outreach';

export type ClinIQxCampaignPartnerCategory =
  | 'hospital'
  | 'diagnostic'
  | 'pharmacy'
  | 'ngo'
  | 'insurer'
  | 'logistics'
  | 'other';

export type ClinIQxCampaignSponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'community';

export interface CampaignLocation {
  country: string;
  state: string;
  lga: string;
}

export interface CampaignPhase {
  start: string;
  end: string;
}

export interface CampaignPartner {
  name: string;
  category: ClinIQxCampaignPartnerCategory;
  description: string;
  logoUrl: string | null;
}

export interface CampaignSponsor {
  name: string;
  tier: ClinIQxCampaignSponsorTier;
  logoUrl: string | null;
}

export interface CampaignLinks {
  home: string;
  beneficiary: string;
  volunteer: string;
  login: string;
  admin: string;
}

export interface PublicCampaign {
  code: string;
  title: string;
  description: string; // Markdown source
  scopes: string[];
  location: CampaignLocation | null;
  targetBeneficiaries: number | null;
  phases: { screening: CampaignPhase; mission: CampaignPhase } | null;
  partners: CampaignPartner[];
  sponsors: CampaignSponsor[];
  bannerUrl: string | null;
  hospital: string;
  unit: string;
  intakeOptions: string[];
  links: CampaignLinks;
}

export const DEMO_CAMPAIGN: PublicCampaign = {
  code: 'MD-LAG-2026-014',
  title: 'Free Surgical Mission: Hernias, Fibroids & Cataracts',
  hospital: 'Lagos University Teaching Hospital',
  unit: 'MediCaid Unit 4 — Surgical Outreach',
  description: [
    '## Care comes to you — at no cost to you.',
    '',
    'This MediCaid mission brings **screening, surgery and after-care** together in one organised programme. If you live in **Surulere, Ajeromi or Ojo**, come for free screening and find out in one visit whether you qualify.',
    '',
    '### Screening includes',
    '',
    '- General and surgical review with a consultant',
    '- Free labs and imaging where the doctor requests them',
    '- Clear written result — qualifying patients are booked the same day',
    '',
    '### Who surgery is for',
    '',
    'Hernia repair, fibroid surgery and cataract surgery are offered to residents whose screening confirms an operable condition. Each case is reviewed by a consultant before a theatre date is confirmed.',
    '',
    '> Bring any hospital card, past test results, your routine medication list and a phone number we can reach you on. Screening takes about 40 minutes.',
    '',
    'Transport support is available for residents who cannot arrange their own. Ask at the registration desk during screening.',
    '',
    '---',
    '',
    'Doors open **8:00am daily** at the screening centre. Walk in, or register below so we can prepare your file before you arrive.'
  ].join('\n'),
  scopes: ['screening', 'surgery', 'diagnostics', 'pharmacy'],
  location: { country: 'Nigeria', state: 'Lagos', lga: 'Surulere' },
  targetBeneficiaries: 2500,
  phases: {
    screening: { start: '2026-12-01', end: '2026-12-12' },
    mission: { start: '2027-01-12', end: '2027-01-23' }
  },
  partners: [
    {
      name: 'Prime Diagnostics Lagos',
      category: 'diagnostic',
      description: 'Free labs and imaging for screened beneficiaries.',
      logoUrl: null
    },
    {
      name: 'CareCycle Pharmacy',
      category: 'pharmacy',
      description: 'Mission medicines and discharge packs.',
      logoUrl: null
    },
    {
      name: 'HopeBridge Foundation',
      category: 'ngo',
      description: 'Community mobilisation and follow-up visits.',
      logoUrl: null
    }
  ],
  sponsors: [
    { name: 'HealthIQue Trust', tier: 'platinum', logoUrl: null },
    { name: 'Lagos Care Fund', tier: 'gold', logoUrl: null },
    { name: 'Surulere Community Assoc.', tier: 'community', logoUrl: null }
  ],
  bannerUrl: null,
  intakeOptions: ['walk-in', 'beneficiary-registration', 'volunteer-registration'],
  links: {
    home: '#top',
    beneficiary: '#register-beneficiary',
    volunteer: '#register-volunteer',
    login: '#login',
    admin: '#admin'
  }
};

export const PARTIAL_CAMPAIGN: PublicCampaign = {
  ...DEMO_CAMPAIGN,
  code: 'MD-OG-2026-003',
  title: 'Maternal & Child Outreach Weekend',
  hospital: 'Ogun State General Hospital',
  unit: 'MediCaid Unit 2 — Maternal Care',
  bannerUrl: null,
  location: { country: 'Nigeria', state: 'Ogun', lga: 'Ifo' },
  targetBeneficiaries: null,
  phases: null,
  partners: [],
  sponsors: []
};

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** Compact same-month range: "1–12 Dec 2026". Falls back to full range otherwise. */
export function formatRange(start: string, end: string): string {
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return `${start} – ${end}`;
  const sameMonth = s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth();
  if (sameMonth) {
    const monthYear = e.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    return `${s.getDate()}–${e.getDate()} ${monthYear}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function formatCount(n: number): string {
  return n.toLocaleString('en-US');
}
