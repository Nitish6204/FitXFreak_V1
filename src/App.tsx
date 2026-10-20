/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  BRANCH_OWNERS,
  BRAND_ASSETS,
  EQUIPMENT_CATALOG,
  EquipmentItem,
  FAQ_ITEMS,
  GALLERY_ITEMS,
  GalleryItem,
  LOCATIONS,
  LocationBranch,
  MEMBERSHIP_PLANS,
  SUCCESS_STORIES,
  TRAINERS,
  WHY_US_FEATURES,
} from './data/gymData';

type EquipmentCategory = 'all' | 'cardio' | 'strength' | 'functional' | 'legs';
type SelectedLocationId = 'alkapuri' | 'vasna';

type NavSection =
  | 'home'
  | 'locations'
  | 'trainers'
  | 'equipment'
  | 'membership'
  | 'gallery'
  | 'faq'
  | 'contact';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavSection>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global Location Selection: default to Alkapuri Elite ('alkapuri') or Vasna-Bhayli ('vasna')
  const [selectedBranchId, setSelectedBranchId] = useState<SelectedLocationId>('alkapuri');

  const [equipmentFilter, setEquipmentFilter] = useState<EquipmentCategory>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [conciergeDrawerOpen, setConciergeDrawerOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Countdown timer state (05D : 12H : 45M : 30S)
  const [secondsLeft, setSecondsLeft] = useState(
    5 * 86400 + 12 * 3600 + 45 * 60 + 30
  );

  // Lead form state
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('Alkapuri Elite Club');
  const [interestedIn, setInterestedIn] = useState('Standard Membership');
  const [preferredTime, setPreferredTime] = useState('Morning (06:00 AM - 11:00 AM)');
  const [messageGoals, setMessageGoals] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active branch metadata
  const currentBranch = LOCATIONS.find((b) => b.id === selectedBranchId) || LOCATIONS[0];
  const currentOwner = BRANCH_OWNERS[selectedBranchId];

  // Location-based filtered data
  const branchTrainers = TRAINERS.filter((t) => t.branchId === selectedBranchId);
  const branchEquipments = EQUIPMENT_CATALOG.filter((eq) => {
    const matchesBranch = eq.branchId === selectedBranchId;
    const matchesCat = equipmentFilter === 'all' || eq.category === equipmentFilter;
    return matchesBranch && matchesCat;
  });
  const branchPlans = MEMBERSHIP_PLANS.filter((p) => p.branchId === selectedBranchId);
  const branchGallery = GALLERY_ITEMS.filter((g) => g.branchId === selectedBranchId);
  const branchStories = SUCCESS_STORIES.filter((s) => s.branchId === selectedBranchId);

  // Countdown tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 5 * 86400 + 12 * 3600 + 45 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update preferredLocation in form when user switches active branch
  useEffect(() => {
    setPreferredLocation(currentBranch.name);
  }, [selectedBranchId, currentBranch.name]);

  // Scroll spy for navigation highlight
  useEffect(() => {
    const sectionIds: NavSection[] = [
      'home',
      'locations',
      'equipment',
      'trainers',
      'membership',
      'gallery',
      'faq',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNav(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const days = String(Math.floor(secondsLeft / 86400)).padStart(2, '0');
  const hours = String(Math.floor((secondsLeft % 86400) / 3600)).padStart(2, '0');
  const mins = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  const scrollToSection = (
    sectionId: NavSection,
    prefillOptions?: {
      location?: string;
      interest?: string;
      goalNote?: string;
    }
  ) => {
    setActiveNav(sectionId);
    setMobileMenuOpen(false);

    if (prefillOptions?.location) {
      setPreferredLocation(prefillOptions.location);
    }
    if (prefillOptions?.interest) {
      setInterestedIn(prefillOptions.interest);
    }
    if (prefillOptions?.goalNote) {
      setMessageGoals(prefillOptions.goalNote);
      setFormSubmitted(false);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppChat = (customText?: string) => {
    const text = customText || 'Hello FIT X FREAK, I would like to inquire about memberships, training, and club access.';
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916204103572?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = [
      `*NEW FIT X FREAK VADODARA ENQUIRY*`,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${fullName || 'Not provided'}`,
      `📱 *Mobile:* ${mobileNumber || 'Not provided'}`,
      `✉️ *Email:* ${emailAddress || 'Not provided'}`,
      `📍 *Location:* ${preferredLocation}`,
      `🎯 *Interested In:* ${interestedIn}`,
      `⏰ *Preferred Time:* ${preferredTime}`,
      messageGoals ? `💬 *Goals / Notes:* ${messageGoals}` : '',
      `━━━━━━━━━━━━━━━━━━━`,
      `_Sent via FIT X FREAK Vadodara Portal_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/916204103572?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    setPreferredLocation(currentBranch.name);
    setInterestedIn('Standard Membership');
    setPreferredTime('Morning (06:00 AM - 11:00 AM)');
    setMessageGoals('');
    setFormSubmitted(false);
  };

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'locations', label: 'Locations' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'membership', label: 'Membership' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface dark">
      {/* HEADER (Note: User profile icon removed as requested) */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/15">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-space-md focus:outline-none"
          >
            <img
              alt="FIT X FREAK Logo"
              className="h-8 w-auto object-contain"
              src={BRAND_ASSETS.logo}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-on-surface uppercase tracking-wider leading-none">
                FIT X FREAK
              </span>
              <span className="text-[10px] text-primary tracking-widest uppercase font-semibold">
                Vadodara's #1 Best Gym
              </span>
            </div>
          </a>

          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-space-lg">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={
                    isActive
                      ? 'transition-colors bg-primary text-on-primary font-bold px-2 py-0.5 rounded-sm text-body-md whitespace-nowrap'
                      : 'text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap'
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-md">
            {/* Quick Location Switcher in Header */}
            <div className="hidden md:flex items-center gap-1 p-1 bg-surface-container-high rounded-lg border border-outline-variant/20">
              <button
                type="button"
                onClick={() => setSelectedBranchId('alkapuri')}
                className={`px-2.5 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all cursor-pointer ${
                  selectedBranchId === 'alkapuri'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                title="Switch to Alkapuri Elite Club (Vadodara)"
              >
                Alkapuri
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranchId('vasna')}
                className={`px-2.5 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all cursor-pointer ${
                  selectedBranchId === 'vasna'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                title="Switch to Vasna-Bhayli Iron Hub (Vadodara)"
              >
                Vasna-Bhayli
              </button>
            </div>

            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('membership');
              }}
              className="inline-flex items-center px-space-lg py-space-sm bg-gradient-to-r from-primary-container to-secondary-container text-on-secondary-container font-label-lg rounded-lg uppercase shadow-[0_0_20px_rgba(255,51,51,0.25)] hover:brightness-110 transition-all whitespace-nowrap"
            >
              Join Now
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container border-b border-outline-variant/30 px-gutter py-space-md flex flex-col gap-space-sm">
            <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20 mb-space-xs">
              <span className="text-xs uppercase text-primary font-bold">Select Active Location:</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setSelectedBranchId('alkapuri')}
                  className={`px-2 py-0.5 text-xs rounded uppercase font-semibold ${
                    selectedBranchId === 'alkapuri' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  Alkapuri
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBranchId('vasna')}
                  className={`px-2 py-0.5 text-xs rounded uppercase font-semibold ${
                    selectedBranchId === 'vasna' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  Vasna-Bhayli
                </button>
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`py-space-xs px-space-sm rounded text-body-md uppercase tracking-wider ${
                  activeNav === item.id
                    ? 'bg-primary text-on-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section
            id="home"
            className="relative min-h-[921px] flex items-center justify-center -mt-20 pt-20 px-gutter overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center z-0 scale-105"
              role="img"
              aria-label="High energy luxury gym interior with dark charcoal walls, striking neon red lighting accents, state of the art black matte fitness equipment."
              style={{
                backgroundImage: `url('${BRAND_ASSETS.heroBg}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/40 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,84,76,0.15)_0,transparent_70%)] z-10" />

            <div className="relative z-20 max-w-7xl mx-auto w-full py-space-xl flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md mb-space-md border border-outline-variant/30 shadow-[0_0_15px_rgba(255,180,172,0.1)]">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span className="text-label-sm uppercase tracking-wider text-on-surface">
                  Elite Performance &amp; Luxury Fitness · {currentBranch.name}
                </span>
              </div>

              <h1 className="font-headline-hero text-on-surface uppercase tracking-wider max-w-5xl mb-space-md">
                BUILD YOUR{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
                  STRONGEST
                </span>{' '}
                VERSION
              </h1>

              <p className="text-body-lg text-on-surface-variant max-w-2xl mb-space-xl font-body-md">
                Uncompromising athletic drive meets high-end luxury equipment. Push your absolute
                limits in an environment crafted for champions.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-xl">
                <a
                  href="#membership"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('membership');
                  }}
                  className="px-space-xl py-space-md bg-gradient-to-r from-primary-container to-secondary-container text-on-secondary-container font-label-lg rounded-lg uppercase shadow-[0_0_30px_rgba(255,84,76,0.3)] hover:scale-105 transition-all"
                >
                  Join {currentBranch.name.split(' ')[0]}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact', {
                      location: currentBranch.name,
                      interest: 'Free Trial Session',
                      goalNote: `I would like to book a complimentary 1-day VIP trial pass at ${currentBranch.name}.`,
                    });
                  }}
                  className="px-space-xl py-space-md bg-surface-container-high/80 backdrop-blur-md text-on-surface font-label-lg rounded-lg uppercase border border-outline-variant/50 hover:bg-surface-container-highest transition-all"
                >
                  Book a Free Trial
                </a>
              </div>

              {/* Quick Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md w-full max-w-4xl mt-space-lg">
                <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/20 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-primary mb-space-xs tabular-nums">02</span>
                  <span className="text-label-sm uppercase text-on-surface-variant">Locations</span>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/20 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-primary mb-space-xs tabular-nums">
                    25+
                  </span>
                  <span className="text-label-sm uppercase text-on-surface-variant">
                    Professional Trainers
                  </span>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/20 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-primary mb-space-xs tabular-nums">
                    150+
                  </span>
                  <span className="text-label-sm uppercase text-on-surface-variant">
                    Premium Equipment
                  </span>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/20 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-primary mb-space-xs tabular-nums">
                    1000+
                  </span>
                  <span className="text-label-sm uppercase text-on-surface-variant">
                    Active Members
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ANNOUNCEMENT BANNER */}
          <section
            aria-label="Fitness Challenge Announcement"
            className="w-full bg-gradient-to-r from-secondary-container to-primary-container py-space-md px-gutter relative z-30 shadow-[0_0_25px_rgba(215,59,0,0.3)]"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
              <button
                type="button"
                onClick={() =>
                  scrollToSection('contact', {
                    interest: 'Personal Training',
                    goalNote: `Registering for the upcoming FIT X FREAK Transformation Challenge at ${currentBranch.name}.`,
                  })
                }
                className="flex items-center gap-space-md text-left cursor-pointer hover:opacity-95 transition-opacity"
              >
                <span className="material-symbols-outlined text-on-secondary-container animate-bounce">
                  local_fire_department
                </span>
                <span className="font-headline-sm uppercase text-on-secondary-container tracking-wider">
                  NEW FITNESS CHALLENGE STARTING SOON — REGISTER NOW ({currentBranch.name.toUpperCase()})
                </span>
              </button>
              <div
                className="flex items-center gap-space-sm font-label-lg text-on-secondary-container bg-surface/20 px-space-md py-space-xs rounded-lg backdrop-blur-sm tabular-nums"
                id="countdown"
              >
                <span>{days}D</span> : <span>{hours}H</span> : <span>{mins}M</span> :{' '}
                <span id="secs">{secs}</span>S
              </div>
            </div>
          </section>

          {/* WHY FIT X FREAK */}
          <section className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Uncompromising Standards
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">WHY FIT X FREAK</h2>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {WHY_US_FEATURES.map((feat) => (
                <article
                  key={feat.title}
                  className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md hover:translate-y-[-4px] transition-all group border border-outline-variant/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <span className="material-symbols-outlined">{feat.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-on-surface uppercase">{feat.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{feat.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* OUR LOCATIONS (Master Branch Selector Hub) */}
          <section id="locations" className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Sanctuaries of Power
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">OUR LOCATIONS</h2>
              <p className="text-body-md text-on-surface-variant max-w-xl mt-space-xs">
                Select your preferred branch below to view its dedicated Equipment, Trainers, Owners, Gallery, and Membership Plans.
              </p>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
              {LOCATIONS.map((branch) => {
                const isSelected = selectedBranchId === branch.id;
                return (
                  <article
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-space-xl rounded-xl bg-surface-container flex flex-col gap-space-lg border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-primary ring-2 ring-primary/30 shadow-[0_0_25px_rgba(255,84,76,0.2)]'
                        : 'border-outline-variant/20 hover:border-outline-variant/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-md uppercase text-on-surface">{branch.name}</h3>
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded bg-primary text-on-primary text-xs font-bold uppercase tracking-wider">
                              Active Selected
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary font-medium">{branch.city}</span>
                      </div>
                      <span
                        className={
                          branch.isFlagship
                            ? 'px-space-md py-space-xs rounded-full bg-primary/20 text-primary text-label-sm uppercase'
                            : 'px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant text-label-sm uppercase'
                        }
                      >
                        {branch.badge}
                      </span>
                    </div>

                    <div className="w-full h-48 rounded-lg overflow-hidden bg-surface-container-lowest">
                      <img
                        src={branch.mapImage}
                        alt={branch.mapAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-space-sm text-body-md text-on-surface-variant">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">schedule</span>
                        <span>{branch.hoursSummary}</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span>{branch.highlights}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-space-md pt-space-md mt-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBranchId(branch.id);
                        }}
                        className={`flex-1 py-space-sm text-center font-label-lg rounded-lg uppercase transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-on-primary font-bold shadow-md'
                            : 'bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary'
                        }`}
                      >
                        {isSelected ? '✓ Browsing This Branch' : 'Select This Location'}
                      </button>
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-space-lg py-space-sm bg-surface-container-high text-on-surface font-label-lg rounded-lg uppercase hover:bg-surface-container-highest transition-all flex items-center justify-center gap-space-xs"
                      >
                        <span className="material-symbols-outlined text-[18px]">directions</span>{' '}
                        Directions
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* DYNAMIC LOCATION BANNER INDICATOR */}
          <section className="max-w-7xl mx-auto px-gutter w-full">
            <div className="p-space-md rounded-xl bg-surface-container-high/60 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-primary tracking-widest font-bold block">
                    Now Viewing Location-Specific Content
                  </span>
                  <span className="font-headline-sm uppercase text-on-surface">
                    {currentBranch.name} · {currentBranch.city}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBranchId('alkapuri')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBranchId === 'alkapuri'
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Alkapuri Elite
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBranchId('vasna')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBranchId === 'vasna'
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Vasna-Bhayli Hub
                </button>
              </div>
            </div>
          </section>

          {/* FEATURED EQUIPMENT & CATALOG (LOCATION SPECIFIC) */}
          <section id="equipment" className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
              <div>
                <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs block">
                  Hardware Suite · {currentBranch.name}
                </span>
                <h2 className="font-headline-lg uppercase text-on-surface">EQUIPMENT CATALOG</h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-space-sm" id="eq-filters" role="tablist">
                {(
                  [
                    { id: 'all', label: 'All' },
                    { id: 'cardio', label: 'Cardio' },
                    { id: 'strength', label: 'Strength' },
                    { id: 'functional', label: 'Functional' },
                    { id: 'legs', label: 'Legs' },
                  ] as { id: EquipmentCategory; label: string }[]
                ).map((tab) => {
                  const active = equipmentFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setEquipmentFilter(tab.id)}
                      className={`eq-filter-btn px-space-md py-space-xs rounded-lg text-label-sm uppercase transition-all cursor-pointer ${
                        active
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg"
              id="equipment-grid"
            >
              {branchEquipments.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedEquipment(item)}
                  className="eq-card p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <div className="h-44 rounded-lg overflow-hidden bg-surface-container-lowest relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-on-surface uppercase text-base">{item.name}</h3>
                    <span className="px-space-sm py-space-xs rounded bg-primary/10 text-primary text-label-sm uppercase text-[10px]">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant text-xs line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/20 text-xs text-on-surface-variant mt-auto">
                    <span>Target: {item.target}</span>
                    <span className="text-primary font-bold">{item.branch}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* PERSONAL TRAINERS (LOCATION SPECIFIC) */}
          <section id="trainers" className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Master Your Craft · {currentBranch.name}
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">
                ELITE PERSONAL TRAINERS
              </h2>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-space-lg max-w-4xl mx-auto">
              {branchTrainers.map((trainer) => (
                <article
                  key={trainer.id}
                  className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md border border-outline-variant/20"
                >
                  <div className="h-64 rounded-lg overflow-hidden bg-surface-container-lowest">
                    <img
                      src={trainer.image}
                      alt={trainer.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-on-surface uppercase">{trainer.name}</h3>
                    <span className="text-primary font-bold text-label-sm">
                      {trainer.experience}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-body-md text-primary font-label-sm uppercase">
                      {trainer.role}
                    </p>
                    <span className="text-xs text-on-surface-variant">{trainer.branchName}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{trainer.bio}</p>
                  <div className="flex flex-wrap gap-space-xs pt-space-xs">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-space-sm py-space-xs rounded bg-surface-container-high text-on-surface-variant text-label-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Trainer Instagram profile link */}
                  <div className="pt-space-xs">
                    <a
                      href={trainer.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high hover:bg-gradient-to-r hover:from-[#833ab4]/30 hover:to-[#fd1d1d]/30 text-on-surface hover:text-primary transition-all text-xs font-medium border border-outline-variant/30"
                      title={`${trainer.name} on Instagram`}
                    >
                      <svg
                        className="w-4 h-4 fill-current text-[#E1306C]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span>{trainer.instagramHandle}</span>
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact', {
                        location: trainer.branchName,
                        interest: 'Personal Training',
                        goalNote: `I would like to book a 1-on-1 assessment with ${trainer.name} (${trainer.role}) at ${trainer.branchName}.`,
                      });
                    }}
                    className="w-full mt-space-sm py-space-sm text-center bg-surface-container-high text-on-surface font-label-lg rounded-lg uppercase hover:bg-primary hover:text-on-primary transition-all"
                  >
                    Book a Session
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* OWNER / DIRECTOR SECTION (LOCATION SPECIFIC) */}
          <section className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="p-space-xl rounded-2xl bg-surface-container flex flex-col lg:flex-row items-center gap-space-xl border border-outline-variant/20">
              <div className="w-full lg:w-1/2 h-[450px] rounded-xl overflow-hidden bg-surface-container-lowest">
                <img
                  src={currentOwner.image}
                  alt={currentOwner.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="text-label-sm uppercase tracking-widest text-primary">
                    Location Leadership · {currentOwner.branchName}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs uppercase font-bold">
                    {currentBranch.city}
                  </span>
                </div>
                <h2 className="font-headline-lg uppercase text-on-surface">{currentOwner.name}</h2>
                <p className="text-body-lg text-on-surface font-body-md font-semibold">
                  {currentOwner.quote}
                </p>
                <p className="text-body-md text-on-surface-variant">
                  {currentOwner.bio}
                </p>
                <div className="pt-space-md border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-sm">
                  <div>
                    <span className="font-headline-sm uppercase text-on-surface block">
                      {currentOwner.name}
                    </span>
                    <span className="text-label-sm uppercase text-primary">
                      {currentOwner.title}
                    </span>
                  </div>

                  {/* Owner Instagram link */}
                  <div className="flex items-center gap-space-sm">
                    <a
                      href={currentOwner.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-gradient-to-r hover:from-[#833ab4]/30 hover:to-[#fd1d1d]/30 text-on-surface hover:text-primary transition-all text-xs font-semibold border border-outline-variant/30"
                      title={`${currentOwner.name} on Instagram`}
                    >
                      <svg
                        className="w-4 h-4 fill-current text-[#E1306C]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span>{currentOwner.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MEMBERSHIP SECTION (LOCATION SPECIFIC) */}
          <section id="membership" className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Investment in Excellence · {currentBranch.name}
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">MEMBERSHIP PLANS</h2>
              <p className="text-body-md text-on-surface-variant max-w-md mt-space-xs">
                Custom pricing and privileged amenities engineered for {currentBranch.name}.
              </p>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {branchPlans.map((plan) => (
                <article
                  key={plan.id}
                  className={
                    plan.popular
                      ? 'p-space-lg rounded-xl bg-surface-container flex flex-col justify-between border border-primary relative shadow-[0_0_20px_rgba(255,84,76,0.15)]'
                      : 'p-space-lg rounded-xl bg-surface-container flex flex-col justify-between border border-outline-variant/20 hover:border-primary transition-all'
                  }
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-space-xs bg-primary text-on-primary text-label-sm uppercase rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="flex flex-col gap-space-md">
                    <span className="text-label-sm uppercase text-primary">{plan.tier}</span>
                    <h3 className="font-headline-md uppercase text-on-surface">{plan.name}</h3>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-hero text-on-surface tabular-nums">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-body-md text-on-surface-variant">/ month</span>
                    </div>
                    <ul className="flex flex-col gap-space-sm text-body-md text-on-surface-variant mt-space-md">
                      {plan.features.map((feat) => (
                        <li
                          key={feat.label}
                          className={`flex items-center gap-space-sm ${
                            feat.included ? '' : 'opacity-40'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[18px] ${
                              feat.included ? 'text-primary' : ''
                            }`}
                          >
                            {feat.included ? 'check' : 'close'}
                          </span>
                          <span>{feat.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact', {
                        location: plan.branchName,
                        interest: plan.formInterestValue,
                        goalNote: `Selected the ${plan.name} (${plan.tier} - ₹${plan.price.toLocaleString('en-IN')}/month) plan at ${plan.branchName}.`,
                      });
                    }}
                    className={
                      plan.popular
                        ? 'mt-space-xl w-full py-space-sm text-center bg-primary text-on-primary font-label-lg rounded-lg uppercase hover:brightness-110 transition-all'
                        : 'mt-space-xl w-full py-space-sm text-center bg-surface-container-high text-on-surface font-label-lg rounded-lg uppercase hover:bg-primary hover:text-on-primary transition-all'
                    }
                  >
                    Choose Plan
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* GYM TIMINGS */}
          <section className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Operating Hours
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">
                GYM TIMINGS &amp; STATUS
              </h2>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
              {LOCATIONS.map((branch) => {
                const isActive = selectedBranchId === branch.id;
                return (
                  <div
                    key={`${branch.id}-timings`}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-space-xl rounded-xl bg-surface-container flex flex-col gap-space-md border transition-all cursor-pointer ${
                      isActive
                        ? 'border-primary ring-1 ring-primary/40'
                        : 'border-outline-variant/20 hover:border-outline-variant/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline-md uppercase text-on-surface">{branch.name}</h3>
                        <span className="text-xs text-primary font-medium">{branch.city}</span>
                      </div>
                      <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary/20 text-primary text-label-sm uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Open Now
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-sm pt-space-md">
                      {branch.timings.map((slot, idx) => (
                        <div
                          key={slot.day}
                          className={`flex justify-between text-body-md text-on-surface-variant pb-space-xs ${
                            idx < branch.timings.length - 1
                              ? 'border-b border-outline-variant/20'
                              : ''
                          }`}
                        >
                          <span>{slot.day}</span>
                          <span className="text-on-surface font-bold tabular-nums">{slot.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* TRANSFORMATION / SUCCESS STORIES */}
          <section className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Proven Results · {currentBranch.name}
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">SUCCESS STORIES</h2>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-space-lg max-w-4xl mx-auto">
              {branchStories.map((story) => (
                <article
                  key={story.id}
                  className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md border border-outline-variant/20"
                >
                  <div className="h-48 rounded-lg overflow-hidden bg-surface-container-lowest">
                    <img
                      src={story.image}
                      alt={story.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-on-surface uppercase">{story.name}</h3>
                    <span className="text-primary font-bold text-label-sm">{story.duration}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{story.quote}</p>
                </article>
              ))}
            </div>
          </section>

          {/* GALLERY (LOCATION SPECIFIC) */}
          <section id="gallery" className="py-space-xl px-gutter max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Visual Showcase · {currentBranch.name}
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">GYM GALLERY</h2>
              <p className="text-body-md text-on-surface-variant max-w-md mt-space-xs">
                Experience the authentic interior atmosphere and equipment floor at {currentBranch.name}.
              </p>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {branchGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="h-64 rounded-xl overflow-hidden bg-surface-container-lowest hover:scale-[1.02] transition-all cursor-pointer relative group"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-space-md">
                    <span className="text-label-sm uppercase text-primary">{item.category}</span>
                    <span className="font-headline-sm uppercase text-on-surface text-base">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEO FAQ SECTION (Targeting: Vadodara Best Gym, Best Gym, Gym, Near Gym) */}
          <section id="faq" className="py-space-xl px-gutter max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Common Questions &amp; Answers
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">
                FREQUENTLY ASKED QUESTIONS – VADODARA BEST GYM
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl mt-space-xs">
                Everything you need to know about joining FIT X FREAK, the highest rated luxury fitness club &amp; gym in Vadodara.
              </p>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="flex flex-col gap-space-md">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <article
                    key={item.question}
                    className="rounded-xl bg-surface-container border border-outline-variant/20 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-space-lg flex items-center justify-between text-left cursor-pointer hover:bg-surface-container-high/60 transition-colors"
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-[11px] uppercase tracking-wider text-primary font-bold">
                          {item.category}
                        </span>
                        <h3 className="font-headline-sm uppercase text-on-surface text-base sm:text-lg">
                          {item.question}
                        </h3>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px] transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          expand_more
                        </span>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-space-lg pb-space-lg pt-0 text-body-md text-on-surface-variant border-t border-outline-variant/15 mt- space-xs pt-space-sm leading-relaxed">
                        <p>{item.answer}</p>
                        <div className="mt-space-md pt-space-xs flex flex-wrap items-center gap-space-md text-xs">
                          <button
                            type="button"
                            onClick={() => openWhatsAppChat(`Hi, I have a question regarding: "${item.question}"`)}
                            className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px]">chat</span> Ask on WhatsApp ({BRAND_ASSETS.phoneNumber})
                          </button>
                          <a
                            href="tel:+916204103572"
                            className="text-primary hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span className="material-symbols-outlined text-[16px]">call</span> Call Gym: {BRAND_ASSETS.phoneFormatted}
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          {/* CONTACT / LEAD GENERATION */}
          <section id="contact" className="py-space-xl px-gutter max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-space-xl">
              <span className="text-label-sm uppercase tracking-widest text-primary mb-space-xs">
                Take Action
              </span>
              <h2 className="font-headline-lg uppercase text-on-surface">START YOUR JOURNEY</h2>
              <p className="text-body-md text-on-surface-variant max-w-md mt-space-xs">
                Submissions automatically dispatch your request directly to WhatsApp on{' '}
                <strong className="text-on-surface font-mono">{BRAND_ASSETS.phoneNumber}</strong>.
              </p>
              <div className="w-24 h-1 bg-primary mt-space-sm rounded-full" />
            </div>

            <div className="p-space-xl rounded-2xl bg-surface-container border border-outline-variant/20 relative">
              {!formSubmitted ? (
                <form
                  className="flex flex-col gap-space-lg"
                  id="lead-form"
                  onSubmit={handleFormSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="full-name"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Full Name *
                      </label>
                      <input
                        id="full-name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                        placeholder="Alex Johnson"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="mobile-number"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="mobile-number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                        placeholder="+91 6204103572"
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="email-address"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email-address"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                        placeholder="alex@example.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="preferred-location"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Preferred Location *
                      </label>
                      <select
                        id="preferred-location"
                        value={preferredLocation}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPreferredLocation(val);
                          if (val.includes('Alkapuri')) setSelectedBranchId('alkapuri');
                          else setSelectedBranchId('vasna');
                        }}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                      >
                        <option value="Alkapuri Elite Club">Alkapuri Elite Club (R.C. Dutt Rd, Vadodara)</option>
                        <option value="Vasna-Bhayli Iron Hub">Vasna-Bhayli Iron Hub (Bhayli Main Rd, Vadodara)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="interested-in"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Interested In *
                      </label>
                      <select
                        id="interested-in"
                        value={interestedIn}
                        onChange={(e) => setInterestedIn(e.target.value)}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                      >
                        <option value="Standard Membership">Standard Membership</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="Free Trial Session">Free Trial Session</option>
                        <option value="VIP Premium Access">VIP Premium Access</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="preferred-time"
                        className="text-label-sm uppercase text-on-surface-variant"
                      >
                        Preferred Time *
                      </label>
                      <select
                        id="preferred-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                      >
                        <option value="Morning (06:00 AM - 11:00 AM)">
                          Morning (06:00 AM - 11:00 AM)
                        </option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">
                          Afternoon (12:00 PM - 04:00 PM)
                        </option>
                        <option value="Evening (05:00 PM - 11:00 PM)">
                          Evening (05:00 PM - 11:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label
                      htmlFor="message-goals"
                      className="text-label-sm uppercase text-on-surface-variant"
                    >
                      Message / Goals
                    </label>
                    <textarea
                      id="message-goals"
                      value={messageGoals}
                      onChange={(e) => setMessageGoals(e.target.value)}
                      className="w-full px-space-md py-space-md rounded-lg bg-surface border border-outline-variant/30 text-on-surface focus:border-primary outline-none transition-all"
                      placeholder="Tell us about your fitness goals..."
                      rows={4}
                    />
                  </div>

                  <button
                    className="w-full py-space-md bg-gradient-to-r from-primary-container to-secondary-container text-on-secondary-container font-label-lg rounded-lg uppercase shadow-[0_0_20px_rgba(255,84,76,0.3)] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span>Submit Enquiry &amp; Send to WhatsApp</span>
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                </form>
              ) : (
                <div
                  className="flex flex-col items-center justify-center text-center py-space-xl gap-space-md"
                  id="form-success"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[32px]">
                    <span className="material-symbols-outlined text-[36px]">done</span>
                  </div>
                  <h3 className="font-headline-md uppercase text-on-surface">Enquiry Received!</h3>
                  <p className="text-body-lg text-on-surface-variant max-w-md">
                    Thank you, <span className="text-on-surface font-semibold">{fullName}</span>!
                    Your enquiry for <span className="text-primary">{interestedIn}</span> at{' '}
                    <span className="text-on-surface">{preferredLocation}</span> has been dispatched to WhatsApp on{' '}
                    <strong className="text-on-surface font-mono">{BRAND_ASSETS.phoneFormatted}</strong>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
                    <button
                      type="button"
                      onClick={() => openWhatsAppChat(`Hi FIT X FREAK, following up on my enquiry for ${fullName} (${mobileNumber}).`)}
                      className="px-space-lg py-space-sm bg-[#25D366] text-white font-label-lg rounded-lg uppercase hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(37,211,102,0.35)]"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Open Chat on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-space-lg py-space-sm bg-surface-container-high text-on-surface font-label-lg rounded-lg uppercase hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* FLOATING QUICK ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-space-sm">
        <a
          aria-label="Call FIT X FREAK on 6204103572"
          className="flex items-center justify-center w-12 h-12 bg-surface-container-high text-on-surface rounded-full shadow-[0_0_15px_rgba(255,180,172,0.15)] hover:bg-primary hover:text-on-primary transition-all group relative"
          href="tel:+916204103572"
          title="Call Now: 6204103572"
        >
          <span className="material-symbols-outlined">call</span>
        </a>
        <button
          type="button"
          aria-label="Open WhatsApp Chat on 6204103572"
          onClick={() => openWhatsAppChat(`Hi FIT X FREAK, I am inquiring about ${currentBranch.name}. Please send membership details.`)}
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:brightness-110 hover:scale-105 transition-all cursor-pointer relative"
          title="Chat on WhatsApp: 6204103572"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Open VIP Concierge Support"
          onClick={() => setConciergeDrawerOpen(!conciergeDrawerOpen)}
          className="flex items-center justify-center w-12 h-12 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(255,84,76,0.4)] hover:scale-105 transition-all cursor-pointer"
          title="VIP Concierge"
        >
          <span className="material-symbols-outlined">support_agent</span>
        </button>
      </div>

      {/* VIP CONCIERGE POPUP CARD */}
      {conciergeDrawerOpen && (
        <div className="fixed bottom-24 right-20 z-50 w-80 rounded-xl bg-surface-container border border-primary/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] p-space-lg flex flex-col gap-space-md">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
              <span className="font-headline-sm uppercase text-on-surface text-base">
                VIP Desk Online
              </span>
            </div>
            <button
              type="button"
              onClick={() => setConciergeDrawerOpen(false)}
              className="text-on-surface-variant hover:text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <p className="text-body-md text-on-surface-variant">
            Assisting with <strong className="text-on-surface">{currentBranch.name}</strong> tours, private training, and memberships.
          </p>
          <div className="flex flex-col gap-space-xs text-body-md">
            <a
              href="tel:+916204103572"
              className="flex items-center gap-space-sm text-primary hover:underline font-mono"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              {BRAND_ASSETS.phoneFormatted}
            </a>
            <button
              type="button"
              onClick={() => openWhatsAppChat(`Hi FIT X FREAK Concierge Desk, I am reaching out for VIP assistance at ${currentBranch.name}.`)}
              className="flex items-center gap-space-sm text-[#25D366] hover:underline cursor-pointer text-left"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat on WhatsApp ({BRAND_ASSETS.phoneNumber})
            </button>
            <a
              href="mailto:concierge@fitxfreak.com"
              className="flex items-center gap-space-sm text-on-surface hover:text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              concierge@fitxfreak.com
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              setConciergeDrawerOpen(false);
              scrollToSection('contact', {
                location: currentBranch.name,
                interest: 'Free Trial Session',
              });
            }}
            className="w-full py-space-sm bg-gradient-to-r from-primary-container to-secondary-container text-on-secondary-container font-label-lg rounded-lg uppercase text-center cursor-pointer"
          >
            Schedule Tour at {currentBranch.name.split(' ')[0]}
          </button>
        </div>
      )}

      {/* EQUIPMENT SPECS MODAL */}
      {selectedEquipment && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-gutter"
          onClick={() => setSelectedEquipment(null)}
        >
          <div
            className="max-w-lg w-full rounded-2xl bg-surface-container border border-outline-variant/30 overflow-hidden p-space-xl flex flex-col gap-space-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 rounded-xl overflow-hidden bg-surface-container-lowest">
              <img
                src={selectedEquipment.image}
                alt={selectedEquipment.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-headline-md uppercase text-on-surface">
                {selectedEquipment.name}
              </h3>
              <span className="px-space-sm py-space-xs rounded bg-primary/15 text-primary text-label-sm uppercase">
                {selectedEquipment.categoryLabel}
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant">{selectedEquipment.description}</p>
            <div className="border-t border-outline-variant/20 pt-space-sm flex flex-col gap-space-xs">
              <span className="text-label-sm uppercase text-primary">Hardware Specifications</span>
              <ul className="grid grid-cols-1 gap-space-xs text-body-md text-on-surface">
                {selectedEquipment.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      check_circle
                    </span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between pt-space-md border-t border-outline-variant/20">
              <span className="text-body-md text-on-surface-variant">
                Location:{' '}
                <strong className="text-primary">{selectedEquipment.branch}</strong>
              </span>
              <div className="flex gap-space-sm">
                <button
                  type="button"
                  onClick={() => setSelectedEquipment(null)}
                  className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-label-sm uppercase cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const branchFullName =
                      selectedEquipment.branchId === 'alkapuri'
                        ? 'Alkapuri Elite Club'
                        : 'Vasna-Bhayli Iron Hub';
                    setSelectedEquipment(null);
                    scrollToSection('contact', {
                      location: branchFullName,
                      interest: 'Free Trial Session',
                      goalNote: `Interested in testing the ${selectedEquipment.name} at ${branchFullName}.`,
                    });
                  }}
                  className="px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-label-sm uppercase cursor-pointer"
                >
                  Try at Branch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX MODAL */}
      {selectedGalleryItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-gutter"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="max-w-3xl w-full rounded-2xl bg-surface-container border border-outline-variant/30 overflow-hidden p-space-lg flex flex-col gap-space-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[420px] rounded-xl overflow-hidden bg-surface-container-lowest">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-label-sm uppercase text-primary block">
                  {selectedGalleryItem.branchName} · {selectedGalleryItem.category}
                </span>
                <h3 className="font-headline-md uppercase text-on-surface">
                  {selectedGalleryItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedGalleryItem(null)}
                className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-label-sm uppercase hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-md">
              <img
                alt="FIT X FREAK Logo"
                className="h-8 w-auto object-contain"
                src={BRAND_ASSETS.logo}
                referrerPolicy="no-referrer"
              />
              <span className="font-headline-sm text-on-surface uppercase">FIT X FREAK</span>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Elite performance, luxury fitness, and uncompromising athletic drive across all flagship destinations.
            </p>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg uppercase text-on-surface">Quick Links</span>
            <a
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#locations"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('locations');
              }}
            >
              Locations
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#trainers"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('trainers');
              }}
            >
              Trainers
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#equipment"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('equipment');
              }}
            >
              Equipment
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('membership');
              }}
            >
              Membership
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
            >
              Gallery
            </a>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg uppercase text-on-surface">Vadodara Locations</span>
            <button
              type="button"
              onClick={() => {
                setSelectedBranchId('alkapuri');
                scrollToSection('equipment');
              }}
              className={`text-left text-body-md transition-colors cursor-pointer ${
                selectedBranchId === 'alkapuri' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              • Alkapuri Elite, R.C. Dutt Rd (Vadodara)
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedBranchId('vasna');
                scrollToSection('equipment');
              }}
              className={`text-left text-body-md transition-colors cursor-pointer ${
                selectedBranchId === 'vasna' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              • Vasna-Bhayli Iron Hub, Bhayli Rd (Vadodara)
            </button>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg uppercase text-on-surface">Contact &amp; Social</span>
            <a
              href="mailto:concierge@fitxfreak.com"
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              concierge@fitxfreak.com
            </a>
            <a
              href="tel:+916204103572"
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors font-mono"
            >
              {BRAND_ASSETS.phoneFormatted}
            </a>
            <button
              type="button"
              onClick={() => openWhatsAppChat('Hello FIT X FREAK, I would like to get more information.')}
              className="text-left text-body-md text-[#25D366] hover:brightness-110 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Us
            </button>
            <div className="flex items-center gap-space-md mt-space-sm">
              <a
                aria-label="FIT X FREAK Instagram Profile"
                className="text-on-surface-variant hover:text-[#E1306C] transition-colors"
                href={BRAND_ASSETS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: @fitxfreak_official"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                aria-label="FIT X FREAK YouTube Channel"
                className="text-on-surface-variant hover:text-[#FF0000] transition-colors"
                href={BRAND_ASSETS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube: @fitxfreak"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                aria-label="FIT X FREAK Facebook"
                className="text-on-surface-variant hover:text-[#1877F2] transition-colors"
                href={BRAND_ASSETS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook: fitxfreak"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                aria-label="WhatsApp Contact"
                className="text-on-surface-variant hover:text-[#25D366] transition-colors"
                href={`https://wa.me/916204103572`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp: 6204103572"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-gutter mt-space-xl pt-space-md border-t border-outline-variant/30 text-center text-on-surface-variant text-body-md">
          © 2024 FIT X FREAK. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
