// Self-hosted, art-directed mission photography.
// One grade: soft daylight, cool shadows, real people. No external requests.
export interface MissionImage {
  src: string;
  alt: string;
  focal: string; // object-position for art-directed cropping
}

export const IMG: Record<string, string> = {
  heroMain: '/images/hero-mission.jpg',
  screening: '/images/screening.jpg',
  ward: '/images/ward.jpg',
  lab: '/images/lab.jpg',
  careTeam: '/images/care-team.jpg',
  facility: '/images/facility.jpg'
};

export const IMG_META: Record<string, MissionImage> = {
  heroMain: {
    src: '/images/hero-mission.jpg',
    alt: 'Clinician reviewing a patient record at the bedside during a mission screening day',
    focal: '50% 35%'
  },
  screening: {
    src: '/images/screening.jpg',
    alt: 'Doctor consulting with a patient during free screening',
    focal: '50% 40%'
  },
  ward: {
    src: '/images/ward.jpg',
    alt: 'Calm, prepared hospital ward ready for mission admissions',
    focal: '50% 50%'
  },
  lab: {
    src: '/images/lab.jpg',
    alt: 'Diagnostic laboratory processing mission screening samples',
    focal: '50% 45%'
  },
  careTeam: {
    src: '/images/care-team.jpg',
    alt: 'Surgical and nursing team coordinating in the operating theatre',
    focal: '50% 35%'
  },
  facility: {
    src: '/images/facility.jpg',
    alt: 'Mission hospital facility exterior',
    focal: '50% 50%'
  }
};
