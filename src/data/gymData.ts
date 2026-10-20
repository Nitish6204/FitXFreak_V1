export interface EquipmentItem {
  id: string;
  name: string;
  category: 'cardio' | 'strength' | 'functional' | 'legs';
  categoryLabel: string;
  description: string;
  target: string;
  branchId: 'alkapuri' | 'vasna';
  branch: 'Alkapuri Elite Club' | 'Vasna-Bhayli Iron Hub';
  image: string;
  alt: string;
  specs: string[];
}

export interface LocationBranch {
  id: 'alkapuri' | 'vasna';
  name: string;
  city: string;
  locality: string;
  badge: string;
  isFlagship: boolean;
  address: string;
  hoursSummary: string;
  highlights: string;
  mapImage: string;
  mapAlt: string;
  googleMapsUrl: string;
  timings: {
    day: string;
    hours: string;
  }[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  experience: string;
  role: string;
  bio: string;
  certifications: string[];
  image: string;
  alt: string;
  instagramHandle: string;
  instagramUrl: string;
  branchId: 'alkapuri' | 'vasna';
  branchName: string;
}

export interface BranchOwner {
  id: string;
  branchId: 'alkapuri' | 'vasna';
  branchName: string;
  name: string;
  title: string;
  quote: string;
  bio: string;
  image: string;
  alt: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface MembershipPlan {
  id: string;
  tier: string;
  name: string;
  price: number;
  popular?: boolean;
  branchId: 'alkapuri' | 'vasna';
  branchName: string;
  features: {
    label: string;
    included: boolean;
  }[];
  formInterestValue: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  duration: string;
  quote: string;
  image: string;
  alt: string;
  branchId: 'alkapuri' | 'vasna';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  branchId: 'alkapuri' | 'vasna';
  branchName: string;
}

export const BRAND_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ886W6MA2BseQqptXr1bSDT15Pp1DJlMi2FRWpTVhwYIrLFsGs-uB6_iw5HxTZz93Sd_Rv23EOCT5kvIocBuKKXdoZfaL679JeJgALHEJflcuG0dWjm49d7Fvcq3-3SpTyIc_HJ6UW9DIodprsXJaQ0idQBmxVY-SRK2HW42TXcB6GjmtO1LBJU8RzOFteFu_UR3Qt84Y_hfTSAyxChAI4jtT_eDOtUF53G_w-7jkidgKzztoi0MRwg',
  heroBg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB0k_qWigK5zZcWVrb5l_ifC8Z8e84Yi9uGHIgpYvZGrO4nisnN-gJnGg8PJmV84SDxL-3o5LyRBO36LpntHF2-j5q2ASJUi3iO4S4m5cg-SDUtHRcHvmSTghRC-1ve8A8d2E-d22VqXAGwACgZppOKfUuvUDsTotC24vyygLl2JuXcNk9J-48iDHjYParYjRYCbdWnQBbWASfAE7kksdZkKDJcDBKFnDBpybIu_3O5pjajpwcwJ3bDuw',
  phoneNumber: '6204103572',
  phoneFormatted: '+91 6204103572',
  whatsappUrl: 'https://wa.me/916204103572',
  instagramUrl: 'https://instagram.com/fitxfreak_vadodara',
  instagramHandle: '@fitxfreak_vadodara',
  youtubeUrl: 'https://youtube.com/@fitxfreak',
  facebookUrl: 'https://facebook.com/fitxfreakvadodara',
};

export const WHY_US_FEATURES = [
  {
    icon: 'fitness_center',
    title: 'Olympic & Imported Equipment',
    description:
      'Vadodara’s highest-grade biomechanical machines, Eleiko competition barbells, and calibrated rubber hex dumbbells.',
  },
  {
    icon: 'verified',
    title: 'Certified Personal Trainers',
    description:
      'Gold-medal winning coaches & certified nutritionists dedicated to fast-tracking your transformation in Vadodara.',
  },
  {
    icon: 'bolt',
    title: 'Luxury Obsidian Atmosphere',
    description:
      'Acoustically tuned, immersive neon lighting, and high-energy workout environment engineered for intense focus.',
  },
  {
    icon: 'schedule',
    title: '24/7 Flexible Timings',
    description:
      'Round-the-clock secure biometric entry for elite members. Train anytime dawn, evening, or midnight.',
  },
  {
    icon: 'group',
    title: 'Custom Transformation Programs',
    description:
      'Targeted tracks for fat loss, muscle hypertrophy, powerlifting, functional HIIT, and bridal fitness.',
  },
  {
    icon: 'sanitizer',
    title: 'Ultra-Hygienic & Air Conditioned',
    description:
      'Hospital-grade HEPA air filtration and continuous sanitization protocols across both Vadodara clubs.',
  },
];

export const LOCATIONS: LocationBranch[] = [
  {
    id: 'alkapuri',
    name: 'Alkapuri Elite Club',
    city: 'Vadodara, Gujarat',
    locality: 'Alkapuri / RC Dutt Road',
    badge: 'Vadodara Flagship · 24/7 Open',
    isFlagship: true,
    address: '4th Floor, Prestige Tower, RC Dutt Road, Alkapuri, Vadodara, Gujarat 390007',
    hoursSummary: 'Mon - Sun: 24 Hours Open (Biometric Access)',
    highlights: 'Olympic Lifting Platforms, Infrared Sauna, Rooftop Functional Sprint Track',
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmAeeRyQizVdVFnZTm8fvZmqShYiSp1yTZmJBj9MegMG9gEdB4djdNWGyX_0q5kiCfjeWtys9RDM_3qMwQj5NHgSiE27GpIIJzXpmOL1HxI5pia5VD7-JWuqbZYoz1WHUQZAJhlh7vQ9UgnHPMRr5ivGSvw0mN_LcAN9r1wir7r9HrrvbfG4aKXWU1N99muOgC3YTJdsfkt6lJeqdDRrnnxsfsdvqVi3BQrllLWKrxLXJGqQTT17PvtA',
    mapAlt: 'Map view of FIT X FREAK Best Gym in Alkapuri Vadodara',
    googleMapsUrl: 'https://maps.google.com/?q=Alkapuri+Vadodara+Gym',
    timings: [
      { day: 'Monday - Friday', hours: '24 Hours Open' },
      { day: 'Saturday', hours: '24 Hours Open' },
      { day: 'Sunday', hours: '24 Hours Open' },
    ],
  },
  {
    id: 'vasna',
    name: 'Vasna-Bhayli Iron Hub',
    city: 'Vadodara, Gujarat',
    locality: 'Vasna - Bhayli Canal Road',
    badge: 'Bhayli Athletic & Recovery Center',
    isFlagship: false,
    address: 'Signature Plaza, Main Bhayli Canal Road, Vasna, Vadodara, Gujarat 391410',
    hoursSummary: 'Mon - Sun: 05:00 AM - 12:00 AM Midnight',
    highlights: 'Heavy Dumbbells up to 150 lbs, Cold Plunge Ice Baths, Protein & Juice Bar',
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC78NFgKosCBM00OP_6BXqL99nI5cahk-v2HdPCpLE6Jq_GTYfgAfqATztA8jDiRMjNrSf7w78b8baoHcU8wswb_Ab4RiOzqB8Dd2IttnWMcj0lEiUfwNEmgOousvexFFwHege5lLr10ZGpGyY21xPuLO-PCKBmS5Rx9vhz9tHQxHmhJKDoQ71cOg1D3mur7e4Uk_iH1nyoxkqi8ShQSBFqc7xu9bt_abVzIpjA8F0VIMIBmq5GG63LIQ',
    mapAlt: 'Map view of FIT X FREAK Best Gym in Vasna Bhayli Vadodara',
    googleMapsUrl: 'https://maps.google.com/?q=Vasna+Bhayli+Road+Vadodara+Gym',
    timings: [
      { day: 'Monday - Friday', hours: '05:00 AM - 12:00 AM' },
      { day: 'Saturday', hours: '06:00 AM - 11:00 PM' },
      { day: 'Sunday', hours: '07:00 AM - 10:00 PM' },
    ],
  },
];

export const BRANCH_OWNERS: Record<'alkapuri' | 'vasna', BranchOwner> = {
  alkapuri: {
    id: 'owner-alkapuri',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club (Vadodara)',
    name: 'Alex Volkov',
    title: 'Founder & Chief Athletic Coach · Vadodara Flagship',
    quote: '"Vadodara’s Fitness Standard Reimagined: Pure Raw Power, Zero Compromise."',
    bio: 'Alex established FIT X FREAK Alkapuri to provide Vadodara with an international-caliber gym experience. Eliminating crowded commercial gym shortcomings, he created an uncompromising training sanctuary combining world-class Eleiko lifting platforms with luxury amenities.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcPCD6TiVENQwRO5yPV7HiZpmQ1A-wkwjp2-NHEue0-HEWVxlozl--jjQztBinY5sDv58QFZmZg57HdW6wl-XlTK9KkBMZAdJ-qAdz6jxanx8JbS8yf7u-dzQTrEHJUxybJC5wgoDv0D69wzy1nrOUzhmeuhSL5ySMM-9akwmS04TByrJ-zlv9ZCdISKPo1ogtE7cd7cmhYfSQ22LldmejT5yInHAw-7amCBh8-u2sIVcgOHgCQHqmpA',
    alt: 'Vadodara Gym Founder Alex Volkov inside FIT X FREAK Alkapuri',
    instagramHandle: '@alexvolkov_vadodara',
    instagramUrl: 'https://instagram.com/alexvolkov_freak',
  },
  vasna: {
    id: 'owner-vasna',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub (Vadodara)',
    name: 'Viktor Kane & Sofia Rossi',
    title: 'Co-Founders & Sports Recovery Directors · Vasna-Bhayli',
    quote: '"High-Intensity Hypertrophy Meets Science-Backed Cold Recovery in Bhayli."',
    bio: 'Viktor Kane and Sofia Rossi expanded FIT X FREAK to Vasna-Bhayli Road to offer Vadodara athletes heavy lifting capacity paired with cryotherapy, contrast recovery baths, and personalized metabolic training programs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJHSw0kjI4MmB4JC_2-Z4qMBuHV3rhXjy9B7H9zHH2iOrW8sXO0tKFsmevuh2hSu2XTvOdwcvwb0H6Ji1oLNSp0iA9e2vdrH_0ETWSlEbGd_vE8Qgg4aqVVb0EoEufoRkc1Yy8IbxcA9fn4gvIrEh_ISyCf_mjpNYj-c9bLaSKMBhelBoHOBxVIEDSgiugPEBwuHn7FwEDF_NZVomcR8Fb8O5iIBUegczCeH6eUCP0gUPSfu3QlvMZxg',
    alt: 'FIT X FREAK Vasna Bhayli Vadodara Gym Owners Viktor Kane and Sofia Rossi',
    instagramHandle: '@viktorkane_vadodara',
    instagramUrl: 'https://instagram.com/fitxfreak_official',
  },
};

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  // Alkapuri Vadodara Equipment
  {
    id: 'eq-alk-1',
    name: 'Pro Treadmill X9 Sprint Suite',
    category: 'cardio',
    categoryLabel: 'Cardio',
    description:
      'Commercial grade curved & motorized treadmill with incline up to 20% for fat-burning HIIT cardio in Alkapuri.',
    target: 'Cardio & Full Body Shred',
    branchId: 'alkapuri',
    branch: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBrYBMjBzn7GyIJBOILgWabw1iRUfKdTXK9aD4tGNRlFh31fvgIqftKZ6re900TKEzSikJ26w8XyqcOWWlEqTbxUy3QJcZgHNjzr2DoRJjuCVNhH12_3Ws4oGwmCRL9XmXlhcuIeqXHHpco3GUUd4PVBkJS7qwQWuGgEZ04XSVkL_oOk6wUeA8Bay8p-YUYPhAGauTZ4yPtKpv4KTbNC_Mk-2LUuDdwx6xTE96pZgPI1VGDk8a6wl3IQ',
    alt: 'Commercial treadmill in best gym Alkapuri Vadodara FIT X FREAK',
    specs: ['0–20% Motorized Incline', '25 km/h Peak Sprint Speed', 'Orthopedic Cushioning Belt'],
  },
  {
    id: 'eq-alk-2',
    name: 'Cable Crossover 8-Stack Tower',
    category: 'functional',
    categoryLabel: 'Functional',
    description:
      'Multi-angle pulleys with dual precision weight stacks for isolated chest flyes, arms, and athletic movements.',
    target: 'Chest, Arms & Core',
    branchId: 'alkapuri',
    branch: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Vtu6Z0sib7LXPi1TCvuiuNRAb16GyL1k7QxI0rvBNTA1KlR9VL9HhvrRxy1aNN0icvxalY2v59SkvpNyZ0D1lWYuJ0evfvyU3SydI0st_jkVSZv5chd3DMFL1Z-iv7dsqgy0m0xsqwp4ez9bdc78JnpeCQ7h0Ql-BcXQVryoU_0KDY6U2i_yjPiuzpZ586AJcfZL9WcJCuB-LIjGMXNA6MlVXcvVV4Q-BII3YUlVD96F2m_L827I5g',
    alt: 'Cable crossover machine in top gym near Alkapuri Vadodara',
    specs: ['Dual 220 lb Stacks', '32 Vertical Adjustable Positions', 'Multi-Grip Chin-Up Station'],
  },
  {
    id: 'eq-alk-3',
    name: 'Iso-Lateral Converging Chest Press',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Biomechanical converging axis arms mimicking natural dumbbell press paths for maximum pectoral activation.',
    target: 'Pectorals & Triceps',
    branchId: 'alkapuri',
    branch: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-gn40OUKJbKPMVruCfGBNZJDaAWWl3dp1dxSm-HJMAgGNPLKk51Va1NosluNumjsAokJFRvMmOBoXI-jyj27I_PnifW9Iz4JHLJeqk_SHeBOUkYwKln7GooVjfHnJ2QCedaWilZeqb1Z95IZPlXvZXN2BmtZpfp22ECZihrE8sUE8TZU1yUTkspm9leNhgQCAsqmCJ7KNI_M9o-jMfsX3AHYXFNQDvyFSelPz8HVw4Rjn6u5iADSMwg',
    alt: 'Chest press machine in Vadodara best gym Alkapuri',
    specs: ['Independent Iso-Lateral Arms', 'Pneumatic Quick Seat Lift', '300 lb Selectorized Weight'],
  },
  {
    id: 'eq-alk-4',
    name: 'Eleiko Competition Lifting Platform',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'IWF-certified Olympic deadlift & squat platform with calibrated steel bumper plates and knurled barbells.',
    target: 'Deadlifts, Squats & Powerlifting',
    branchId: 'alkapuri',
    branch: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHCKV0uYJRPq6xP8NokNFooz2PND8-EhyA8BBC-VZky-_zk1TFIJLla87HTsMCupRDrGmMZBoAV8DsFck_4Lovw4s-9vo0-_1-Z6FcCbu4l0ayGuj034tkqYOfgNrDbvoIGO6IaLXQCUMLb6ie_ZPbJ3vRLhyAOkCQdPJQulrqwGI1qARqRCReGXKWaHEK1EE6GXabKhCrDupagxFci2Zurk97APfFugX2BgkOtf4dCQQCDRMmou8z7Q',
    alt: 'Olympic barbell plates in top powerlifting gym Vadodara',
    specs: ['Shock-Absorbing Oakwood Platform', 'IWF Calibrated Discs', 'Competition 20kg Barbells'],
  },

  // Vasna Bhayli Vadodara Equipment
  {
    id: 'eq-vas-1',
    name: 'Olympic Smith Machine Pro',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Ultra-smooth linear bearing guided barbell for safe heavy squats, lunges, and overhead presses in Bhayli.',
    target: 'Legs, Shoulders & Chest',
    branchId: 'vasna',
    branch: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDynUBb8cLmp6_nPQvrPPtaxFE0pkK3xuYOW4bJHeMTYpbFvXcVd-aaXTpszER7fgCVnNzFHpWaFdonkjA86_VgJ3FmEYkDBN7kor3gIem_i6fNR-eMdx2QvS3A7GlaiLHmCgcHx-mnyJiVkE0bKDUJ6Yh6Z4h8S2FGLssBR8aknQ-K4MdzNOo23HhiOXD0VXlA14oaSqHBd6nUPQa5HVGp08_RhsNmQ-SAPCN7dKoOOTq4VYEvPT29-A',
    alt: 'Smith Machine in best gym Vasna Bhayli Vadodara',
    specs: ['Counter-Balanced 15 lb Bar', 'Solid Hard-Chrome Guide Rods', '1000 lb Frame Rating'],
  },
  {
    id: 'eq-vas-2',
    name: '45° Heavy Leg Press Sled',
    category: 'legs',
    categoryLabel: 'Legs',
    description:
      'Industrial 45-degree angled sled engineered for maximal lower body quad and glute mass development.',
    target: 'Quads, Hamstrings & Glutes',
    branchId: 'vasna',
    branch: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChF-baipJlTmOvk9sDQ0kcdg4JIIRrsaPchaH7Y1PryfMLepKTqSt-F9IrrAx2Ov1sDbSi_uggVxFuZ07FPqXrxeQFDf2kOeK8aghCdwL7gtNB6rW0C168ibSpW3Ry4DgvKuF07If2SRXWf_UU6U0cxSgiJ80bO1nggj5XyxMVuh7SEkbKr28WkV3Gs4OzLJ-QaDzNhI6djeqnGE5f5h788jNlwviYf9thkIH5us82mFLoR4P-oG42zw',
    alt: 'Heavy Leg Press in gym near Bhayli Vadodara',
    specs: ['1500 lb Plate Load Capacity', 'Extra-Wide Non-Slip Plate', 'Triple Safety Catch Hooks'],
  },
  {
    id: 'eq-vas-3',
    name: 'Dual Lat Pulldown & Seated Row',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Independent cable pulldowns and low row station with ergonomic Mag-Grip bars for deep lat hypertrophy.',
    target: 'Lats, Rhomboids & Upper Back',
    branchId: 'vasna',
    branch: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0JOP3v48d-F4IZNsSVtGWup7UrrNlcRJaCEozOEojuVVKqTltm_FLT6lpDSLX9ukG16EhVhvSt2yuimm_KWnBtUOnY5OghuNvAIdKzK16ZGkVc4AQJMxyOyiQ7vimghwZFVHCxYttWrj90vkNbnFLEy3juvbsgeVu4qHOfTySiQ4e7wXmukYSTzLTcYkbxMYUsNWPTUm4Y7zx8dJXyJgASRcM0bSGf_CdsHW21WFw0WBPTXFjhElwTg',
    alt: 'Lat pulldown machine in Vadodara fitness center',
    specs: ['Dual Heavy Weight Stack (310 lbs)', 'Adjustable Thigh Rollers', 'Ergonomic Lat Attachments'],
  },
  {
    id: 'eq-vas-4',
    name: 'Functional Turf & Prowler Drag Track',
    category: 'functional',
    categoryLabel: 'Functional',
    description:
      'Sprint turf with weighted push sleds, battle ropes, and kettlebells for athletic conditioning in Vadodara.',
    target: 'Cardio, Stamina & Explosive Power',
    branchId: 'vasna',
    branch: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIDc8TF9_r7960mBfWBTSbQnNT3vx2uR9dL2qU83dn1WPu-HDn3rxUmAEC_UIBvr5rgTfktzP7NNyN11sasUKe2IPwYOCjQAVDwCZc1mQA2Av_9rFvq_EiMx10XWHgAJvnBxnchl60jd0emXmNlJpPuvYI7HhM1KcxrBDHOgj89DkyaobsKgiwcWJyGZ0mk6bwjFiWSQEHzbEnJuUrRe4cBGEA98rHqp7NmfpHYvaKr1u-o0cgIIXpbQ',
    alt: 'Battle ropes and turf in gym near me Vadodara',
    specs: ['Heavy Prowler Sleds', '50mm Braided Battle Ropes', 'High-Density Turf Shock Padding'],
  },
];

export const TRAINERS: TrainerProfile[] = [
  // Alkapuri Vadodara Trainers
  {
    id: 'tr-1',
    name: 'Marcus Vance',
    experience: '8 Yrs Exp',
    role: 'Head Strength & Conditioning Coach',
    bio: 'Specialist in powerlifting biomechanics, muscle hypertrophy, and posture correction in Alkapuri Vadodara.',
    certifications: ['CSCS Certified', 'USA Weightlifting Coach'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyC1-GRFw2ssxC0B8QwIIlE_RWHi_YglBhXA3oLDF3CmtjGSoGulg0EU19Kau-ATEpOQMdGXyjjsSTOW8HvtmpeDmJ-txM-ACfUHTVTtAsH6L_j7kMoH0MfLeZVfFINzzHKpD8-iIT6zpl-DUXxnlBe6o2dSzAanTiEA7egU-A3gYkvgsgew7-bn5wpQougm5M5ENJzZywGg2RoJhtctGhockj3mEM06mU_dgUp9HMyV7OLUZmI7aJuw',
    alt: 'Personal trainer Marcus Vance at best gym in Alkapuri Vadodara',
    instagramHandle: '@marcus.vance_lift',
    instagramUrl: 'https://instagram.com/marcus.vance_lift',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
  },
  {
    id: 'tr-2',
    name: 'Elena Rostova',
    experience: '6 Yrs Exp',
    role: 'Fat Loss & Women Fitness Specialist',
    bio: 'Dedicated transformation specialist expert in HIIT fat shredding, core conditioning, and bridal workouts in Vadodara.',
    certifications: ['NASM-CPT', 'Kettlebell Master Level 2'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByzR-p1tV-1aDBtxq1HKzwv9aq12zQ477xUuGzoezUiaGpIF1OrRh8V875bLRhAMoOk3k3g42Nrro3hAQfB3yiK68MPAv2iDREUlOdURbcQy2UHY2I26rCWUPUUOD1DfdH1fRCPTyiU0Ij8iS1b3exzPVgW0zExZuAFNmpuq1-DA7vdPUYtGs-YGcsfkWtuyWww9dABub3a9gDcva-plVGZzeEwzWa3jkT-gQNNIcUQI-jynXmC6ubQw',
    alt: 'Female fitness trainer Elena Rostova at FIT X FREAK Vadodara gym',
    instagramHandle: '@elena_rostovafit',
    instagramUrl: 'https://instagram.com/elena_rostovafit',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
  },

  // Vasna Bhayli Vadodara Trainers
  {
    id: 'tr-3',
    name: 'Dante Thorne',
    experience: '10 Yrs Exp',
    role: 'Bodybuilding & Physique Coach',
    bio: 'Stage coach & transformation guru specializing in contest preparation, muscle density, and macro periodization.',
    certifications: ['IFBB Pro Coach', 'ISSN Sports Nutritionist'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA31jCsgAlHeHucl66Xd7LLPULa97mfH4HFrG-k5Zhgd8R66CWglbFqGTz4cSbjmJJrMVlV_HUbFRThKcpIdB_YfZG5DXYZlorTTvpWx4vvzna9txGI6VXam9NTUjDOskKPXQ7MFwXuYcJkAkBJQTTAwJu3XPowE0n8-HnjECFvb9sZ4f9LHzcUtqBA6lUmeFDiN7jL2620UrAc33KgPVaG-uoJ2KeA7r5iI6yRpsnnvHOc0r71feoMKw',
    alt: 'Bodybuilding trainer Dante Thorne in best gym Vasna Bhayli Vadodara',
    instagramHandle: '@dante_thorne_ifbb',
    instagramUrl: 'https://instagram.com/dante_thorne_ifbb',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
  },
  {
    id: 'tr-4',
    name: 'Maya Sterling',
    experience: '7 Yrs Exp',
    role: 'Athletic Agility & Rehab Coach',
    bio: 'Functional strength trainer specializing in joint mobility, post-injury rehab, and explosive sports agility.',
    certifications: ['EXOS Performance', 'FMS Certified'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4aGXz_MmgShME0o-Mp7t_aNFPC_j6Lk368pYCfRPtjEmMjhLCh3KKjJqVkAD2frIOMfbLpF2bxifuNhJk2rJyYBfff5W4lrTOvxLDdgSPB9V9dOjRFaUq7hT5j0uAYWQxY_krpCzXI2wo73KaCljRV3vZCMjgDz55De4DVy3QZIhWCGMTc7AQOFkdWRsoGnCEbE9HOk0Z_MYKruVVuncbC0i66dlvERYKc8ZpIzVrvyAEst1gw67D2g',
    alt: 'Athletic coach Maya Sterling at FIT X FREAK Vadodara',
    instagramHandle: '@maya_sterling_fit',
    instagramUrl: 'https://instagram.com/maya_sterling_fit',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // Alkapuri Vadodara Membership Plans
  {
    id: 'alk-plan-basic',
    tier: 'Alkapuri Starter',
    name: 'Alkapuri Fitness Pass',
    price: 1999,
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
    formInterestValue: 'Alkapuri Fitness Pass (₹1,999/mo)',
    features: [
      { label: 'Access to Alkapuri Club Floor', included: true },
      { label: 'Imported Biomechanical Equipment', included: true },
      { label: 'Luxury Locker & Steam Room', included: true },
      { label: 'Personal Trainer Sessions', included: false },
    ],
  },
  {
    id: 'alk-plan-standard',
    tier: 'Alkapuri 24/7 Elite',
    name: 'Alkapuri 24/7 All-Access',
    price: 2999,
    popular: true,
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
    formInterestValue: 'Alkapuri 24/7 All-Access (₹2,999/mo)',
    features: [
      { label: '24/7 Biometric Entry Anytime', included: true },
      { label: 'Full Access to Alkapuri & Bhayli Clubs', included: true },
      { label: 'Infrared Sauna & Recovery Lounge', included: true },
      { label: 'Monthly InBody Composition Scan', included: true },
    ],
  },
  {
    id: 'alk-plan-premium',
    tier: 'VIP Black Card',
    name: 'Vadodara VIP Black Card',
    price: 4499,
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
    formInterestValue: 'Vadodara VIP Black Card (₹4,499/mo)',
    features: [
      { label: '24/7 Dual-Club VIP Privileges', included: true },
      { label: 'Daily Post-Workout Whey Protein Shake', included: true },
      { label: 'Reserved Powerlifting Platform Slot', included: true },
      { label: 'Complimentary Monthly Diet Consultation', included: true },
    ],
  },
  {
    id: 'alk-plan-pt',
    tier: 'Personal Transformation',
    name: '1-on-1 Personal Training Pro',
    price: 7999,
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club',
    formInterestValue: '1-on-1 Personal Training Pro (₹7,999/mo)',
    features: [
      { label: 'All VIP Black Card Inclusions', included: true },
      { label: '12 One-on-One Dedicated Trainer Sessions', included: true },
      { label: 'Custom Macro & Nutrition Meal Plan', included: true },
      { label: 'WhatsApp Direct Support with Head Coach', included: true },
    ],
  },

  // Vasna Bhayli Vadodara Membership Plans
  {
    id: 'vas-plan-basic',
    tier: 'Bhayli General',
    name: 'Bhayli Iron Pass',
    price: 1899,
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
    formInterestValue: 'Bhayli Iron Pass (₹1,899/mo)',
    features: [
      { label: 'Floor Access (05:00 AM - 12:00 AM)', included: true },
      { label: 'Free Weights & Dumbbells up to 150 lbs', included: true },
      { label: 'Executive Shower & Lockers', included: true },
      { label: 'Cold Plunge Ice Bath Access', included: false },
    ],
  },
  {
    id: 'vas-plan-standard',
    tier: 'Bhayli Best Value',
    name: 'Bhayli Iron & Ice Bath',
    price: 2799,
    popular: true,
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
    formInterestValue: 'Bhayli Iron & Ice Bath (₹2,799/mo)',
    features: [
      { label: 'Full Gym Access + Functional Turf Zone', included: true },
      { label: 'Unlimited Cold Plunge Recovery Baths', included: true },
      { label: 'Metabolic Group Classes & Cardio Suite', included: true },
      { label: '2 Free Guest Passes Every Month', included: true },
    ],
  },
  {
    id: 'vas-plan-premium',
    tier: 'Bhayli Athletic Luxe',
    name: 'Bhayli Athletic Cryo Pass',
    price: 4299,
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
    formInterestValue: 'Bhayli Athletic Cryo Pass (₹4,299/mo)',
    features: [
      { label: 'Full Dual Club Vadodara Access', included: true },
      { label: 'Hydro-Massage & Contrast Recovery Baths', included: true },
      { label: 'Electrolyte & Protein Bar Credits', included: true },
      { label: 'Bi-Weekly Body Composition Analytics', included: true },
    ],
  },
  {
    id: 'vas-plan-pt',
    tier: 'Bhayli Pro Coach',
    name: 'Bhayli Elite PT Package',
    price: 7499,
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub',
    formInterestValue: 'Bhayli Elite PT Package (₹7,499/mo)',
    features: [
      { label: 'All Athletic Cryo Pass Benefits', included: true },
      { label: '12 Personalized Coaching Sessions', included: true },
      { label: 'Targeted Body Fat Shredding Nutrition Plan', included: true },
      { label: '24/7 Trainer WhatsApp Hotline', included: true },
    ],
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Rahul Patel (Alkapuri)',
    duration: 'Duration: 6 Months',
    quote:
      '"Joined FIT X FREAK Alkapuri to lose fat. Dropped 16 kgs in 6 months with the best trainers in Vadodara! Equipment and environment are top tier."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDPkEa4JCzcxRfnkcOxoEAperIijKiLsyP4G5sHyXE-2b02N3VZ688zf6RgwXTht7NnWiBnHv_EeRnAXRyj6twDdInhOQ3KKwXszYtUlM7cDCR1h7FntSJvZ-Iry1-km72IpJn2AqkuxEBclO2vJ9olVUT_bQnzUbJ6PGx4PMFf5YQ-v0qeiEWvkqkQSW5L9SiyS69z_n5jB36FqFdwHFvAtCESPcr4ygmATiQtBookXAaRA5lRvlC_g',
    alt: 'Best Gym Vadodara transformation Rahul Patel weight loss at FIT X FREAK',
    branchId: 'alkapuri',
  },
  {
    id: 'story-2',
    name: 'Pooja Shah (Vasna-Bhayli)',
    duration: 'Duration: 4 Months',
    quote:
      '"The cold plunge baths and functional training at Bhayli completely cured my back pain and toned my physique. Truly the best gym near me in Vadodara."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3gBnPo_emWuvcZ2i6VsIhnNYh1wCbbAUTit0-XtoyWSDgHc1lh42GMCL8naBS5E5CQnFHEPReGR-hgEHdilzi_Uo1w0j8QGblraVnAZh1c1mZplYF32hU3ZMxFTpIhfl0wp6H48BB_YrK_JxPLf8s6k75yGdX4rvQjn9G1O8S0e6P2sdkYJd3M7Aqlj3N-HtcThy-A_SqVVKLxFL_ufoQpxioysr9ArWdG6I912dHimMH8SIlaJtosg',
    alt: 'Female transformation in best gym Vadodara Pooja Shah',
    branchId: 'vasna',
  },
  {
    id: 'story-3',
    name: 'Amit Dave (Vadodara)',
    duration: 'Duration: 12 Months',
    quote:
      '"FIT X FREAK gives you the international gym standard right here in Vadodara. The 24/7 access fits my busy executive schedule perfectly."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmX7025pIu_M7GHKHP1WoZ-LjAg9qbMlR46fkn8jgh20yzzDUbEGztHcnjp1hdh6s8FY16_7bBI7ScT5ZbefXrYFOYHVSa_cLEtT-8JSrBVMXgZZIXwI92H6MzohWkXXpGFY5--2JB_xhkJzGipxXQZUfcgReNC6XZmudZXYVPaFHU1AnZa30ErPTstD9zYhnijEx9dS38yPy2l1Fwxpy0tGjYMkwQxN51d9BwcCHpGRd-L2-07CQJsQ',
    alt: 'Muscle building transformation at best gym in Vadodara',
    branchId: 'alkapuri',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Alkapuri Vadodara Gallery
  {
    id: 'gal-alk-1',
    title: 'Main Obsidian Training Floor',
    category: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy_K7DYzU1X1pQ78o8mutIgik9yJFUcsrHCnmosUPBbln79gZQ3FDseMVwtcvvsyRot_RZ34nnCibEbrMDS1gV4lFUYtrQPs30lnHqomXYbqzWEHlqjE-AI3ti3dhgR4iaayn_roVpfRqVF302o5VtxSnCoqk8anv38IkNUlJCqMQzWB8EhOd4CNRWKq3s7-opvDIlXxvoSuwhyUv4nDxWOZSqqkAjJroHzRbwVhaGM0-cP2i-JntoBw',
    alt: 'Interior view of best gym in Vadodara FIT X FREAK Alkapuri',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club (Vadodara)',
  },
  {
    id: 'gal-alk-2',
    title: 'Eleiko Competition Weightlifting Bay',
    category: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHCKV0uYJRPq6xP8NokNFooz2PND8-EhyA8BBC-VZky-_zk1TFIJLla87HTsMCupRDrGmMZBoAV8DsFck_4Lovw4s-9vo0-_1-Z6FcCbu4l0ayGuj034tkqYOfgNrDbvoIGO6IaLXQCUMLb6ie_ZPbJ3vRLhyAOkCQdPJQulrqwGI1qARqRCReGXKWaHEK1EE6GXabKhCrDupagxFci2Zurk97APfFugX2BgkOtf4dCQQCDRMmou8z7Q',
    alt: 'Olympic barbell plates in Vadodara gym',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club (Vadodara)',
  },
  {
    id: 'gal-alk-3',
    title: 'Skyline Cardio Suite (RC Dutt Road View)',
    category: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0AcAfKSaEVjoSoZuljsL7flYmJtYNV2FSyCRhZn4Ld6DN79bdKEgqLVF5KKIjNdXa_BxFIrnaPqIVfCZCwVszMIZJngMAEsnUbQRC7NaPzzUE9pzsgGQqMrldeFl3pZrBn6pWsg99uJpQZ1T6NzIhMoNzhrkuO8MNCUqHyqVQ6hCX-fl1cA-vFlAq4oBw0aRpWHU4ljISbRktRTJE-6FOQnjkp5tp8kwJbGHVijqfnObzvNLGMEs-bg',
    alt: 'Cardio floor at FIT X FREAK Best Gym near Alkapuri Vadodara',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club (Vadodara)',
  },
  {
    id: 'gal-alk-4',
    title: 'Luxury Obsidian Lockers & Steam Room',
    category: 'Alkapuri Elite Club',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGlJ6RaEvWSlz7v1SOw6l8R3e98g8uHO1JeBws6VwEyrIqfrK4-ZT49aDghAMb9bT0dGI7Q4F9lVBwhtUK1-BUTD3XI7Gk6Km4Bv7a7cqZZgVz8iPXt1wzOOFblCHdKLvvJbUnbmejD0a5rQefVQwyLAnjx_u7xxElXjpxz3Rx3bRp7ogQUHzgqbGC8T0mjbTitBYwR2RBp9-qvUVBKQl_zFbW64U_3yjccNx-D5DNtBYHhTvC225yyg',
    alt: 'Luxury locker room in top gym in Vadodara',
    branchId: 'alkapuri',
    branchName: 'Alkapuri Elite Club (Vadodara)',
  },

  // Vasna Bhayli Vadodara Gallery
  {
    id: 'gal-vas-1',
    title: 'High-Octane Functional Conditioning Arena',
    category: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4aGXz_MmgShME0o-Mp7t_aNFPC_j6Lk368pYCfRPtjEmMjhLCh3KKjJqVkAD2frIOMfbLpF2bxifuNhJk2rJyYBfff5W4lrTOvxLDdgSPB9V9dOjRFaUq7hT5j0uAYWQxY_krpCzXI2wo73KaCljRV3vZCMjgDz55De4DVy3QZIhWCGMTc7AQOFkdWRsoGnCEbE9HOk0Z_MYKruVVuncbC0i66dlvERYKc8ZpIzVrvyAEst1gw67D2g',
    alt: 'HIIT and group fitness classes in best gym Bhayli Vadodara',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub (Vadodara)',
  },
  {
    id: 'gal-vas-2',
    title: '50-Yard Sled Sprint Turf & Battle Ropes',
    category: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIDc8TF9_r7960mBfWBTSbQnNT3vx2uR9dL2qU83dn1WPu-HDn3rxUmAEC_UIBvr5rgTfktzP7NNyN11sasUKe2IPwYOCjQAVDwCZc1mQA2Av_9rFvq_EiMx10XWHgAJvnBxnchl60jd0emXmNlJpPuvYI7HhM1KcxrBDHOgj89DkyaobsKgiwcWJyGZ0mk6bwjFiWSQEHzbEnJuUrRe4cBGEA98rHqp7NmfpHYvaKr1u-o0cgIIXpbQ',
    alt: 'Functional training turf in gym near me Bhayli Vadodara',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub (Vadodara)',
  },
  {
    id: 'gal-vas-3',
    title: 'Cold Plunge Recovery Spa & Juice Bar',
    category: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg6UIF0ed1t7OGc0aQWMEfR4gZje_fmz3-44TzG7xXouS6iP_Vy5guDFybXqzkOmezct7cl6in4IHFpBre1qklqNQeEMfOCsY-VnkPOWn2ifcPsYyG96vdyGroMEnDD3s6Hziy5z0Fa-_AW-jOOrSCI_yifteeeBQaUuxHRqM7SeRCrnmRjACIBx6CZ35V5hSxhlArST43k84dV6EFGdNj-cdSQaoqlaovJTVVr84gLRcSNU6YUTr4VA',
    alt: 'Ice bath recovery and protein shake bar in Vadodara gym',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub (Vadodara)',
  },
  {
    id: 'gal-vas-4',
    title: 'Personal Training & Biomechanics Zone',
    category: 'Vasna-Bhayli Iron Hub',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJHSw0kjI4MmB4JC_2-Z4qMBuHV3rhXjy9B7H9zHH2iOrW8sXO0tKFsmevuh2hSu2XTvOdwcvwb0H6Ji1oLNSp0iA9e2vdrH_0ETWSlEbGd_vE8Qgg4aqVVb0EoEufoRkc1Yy8IbxcA9fn4gvIrEh_ISyCf_mjpNYj-c9bLaSKMBhelBoHOBxVIEDSgiugPEBwuHn7FwEDF_NZVomcR8Fb8O5iIBUegczCeH6eUCP0gUPSfu3QlvMZxg',
    alt: 'Personal coach training client at FIT X FREAK Vadodara gym',
    branchId: 'vasna',
    branchName: 'Vasna-Bhayli Iron Hub (Vadodara)',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Vadodara Best Gym',
    question: 'Which is the best gym in Vadodara for muscle building and fitness transformation?',
    answer:
      'FIT X FREAK is widely recognized as the #1 Best Gym in Vadodara. With dual ultra-luxury clubs in Alkapuri (R.C. Dutt Road) and Vasna-Bhayli, we offer Olympic-grade Eleiko & Hammer Strength equipment, certified master strength coaches, dedicated steam baths, cold plunge recovery, and scientific nutrition planning.',
  },
  {
    category: 'Gym Near Me',
    question: 'How do I find a FIT X FREAK gym near me in Vadodara?',
    answer:
      'FIT X FREAK operates two flagship facilities conveniently located in prime areas of Vadodara: 1) Alkapuri Elite Club situated on R.C. Dutt Road (near Central Square), and 2) Vasna-Bhayli Iron Hub located on Bhayli Main Road. Both locations provide dedicated valet parking and 24/7 keycard access.',
  },
  {
    category: 'Membership & Fees',
    question: 'What are the gym membership charges at FIT X FREAK Vadodara?',
    answer:
      'FIT X FREAK memberships start at ₹3,499/month for standard off-peak club access, with our all-inclusive 24/7 VIP Black Pass at ₹6,999/month (featuring multi-club access, private locker, unlimited steam & sauna, and free guest passes). We also offer customized 1-on-1 Personal Training plans.',
  },
  {
    category: 'Personal Training',
    question: 'Are certified personal trainers available in Vadodara at FIT X FREAK?',
    answer:
      'Yes. Our trainer roster includes internationally certified specialists (ACSM, CSCS, K11, IFBB Pro League, and Functional Movement Screen certified coaches). They customize your progressive overload, postural biomechanics, cardio programming, and diet macros to ensure guaranteed transformations.',
  },
  {
    category: 'Equipment & Safety',
    question: 'What type of equipment is installed at FIT X FREAK Vadodara?',
    answer:
      'We house over 150+ imported commercial machines including Hammer Strength plate-loaded racks, Eleiko calibrated powerlifting bars, Woodway non-motorized curved treadmills, StairMaster Gauntlets, dual cable functional cross-trainers, and 50-yard sprint turf with prowler sleds.',
  },
  {
    category: 'Free Trial',
    question: 'How can I get a 1-day free VIP trial pass at FIT X FREAK Vadodara?',
    answer:
      'You can book your complimentary 1-day workout trial pass instantly by submitting the form on this website or calling our VIP concierge desk on +91-6204103572 or texting us on WhatsApp at 6204103572.',
  },
];
