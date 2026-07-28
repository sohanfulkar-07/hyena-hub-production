/**
 * THE HYENA HUB — Interactive Cinematic Engine
 * Handles navigation, interactive pipeline, slate filters, video theater state,
 * multi-step onboarding wizard, modal overlays, and viewport scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. STICKY NAVBAR & MOBILE MENU DRAWER
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightNavOnScroll();
  });

  hamburgerBtn?.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      mobileDrawer.classList.remove('open');
      hamburgerBtn?.classList.remove('active');
    });
  });

  function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. PIPELINE INTERACTIVE 3-STAGE TIMELINE
     -------------------------------------------------------------------------- */
  const pipelineCards = document.querySelectorAll('.pipeline-card');
  const pipelinePanelTitle = document.getElementById('pipelinePanelTitle');
  const pipelinePanelDesc = document.getElementById('pipelinePanelDesc');
  const pipelineBullets = document.getElementById('pipelineBullets');
  const pipelineStatVal1 = document.getElementById('pipelineStatVal1');
  const pipelineStatLbl1 = document.getElementById('pipelineStatLbl1');
  const pipelineStatVal2 = document.getElementById('pipelineStatVal2');
  const pipelineStatLbl2 = document.getElementById('pipelineStatLbl2');

  const pipelineData = {
    1: {
      title: "Stage 01: Genesis & Intellectual Property Design",
      desc: "Architecting world-class screenplays, narrative bibles, and visual treatments calibrated for prestigious global festivals and international co-production partners.",
      bullets: [
        "In-depth screenplay development with award-winning dramaturgs.",
        "World-building visual bibles & high-concept pitch packaging.",
        "Legal chain-of-title verification & international optioning."
      ],
      stat1Val: "12 - 18 Wks",
      stat1Lbl: "Development Cycle",
      stat2Val: "Top 1%",
      stat2Lbl: "Script Curation Rate"
    },
    2: {
      title: "Stage 02: Execution & Precision Production",
      desc: "Festival-calibrated cinematography utilizing anamorphic glass, 65mm sensor arrays, and bespoke orchestral score composition recorded on international sound stages.",
      bullets: [
        "65mm & 8K digital sensor workflow calibrated for Dolby Vision.",
        "On-location principal photography across 14 global territories.",
        "Integrated sound architecture & original symphonic score."
      ],
      stat1Val: "8K HDR",
      stat1Lbl: "Mastering Standard",
      stat2Val: "100%",
      stat2Lbl: "Color & ACES Certified"
    },
    3: {
      title: "Stage 03: Distribution & The Private Theater",
      desc: "Direct-to-platform syndication, A-list festival circuit strategies, and exclusive private theater screening rooms for key buyers, curators, and studio executives.",
      bullets: [
        "Global premiere positioning (Cannes, Venice, Berlinale, Toronto).",
        "Direct-to-OTT & global theatrical distribution agreements.",
        "Encrypted Private Theater screenings with custom DRM control."
      ],
      stat1Val: "40+ Countries",
      stat1Lbl: "Distribution Reach",
      stat2Val: "Direct",
      stat2Lbl: "Platform Syndication"
    }
  };

  pipelineCards.forEach(card => {
    card.addEventListener('click', () => {
      const stageId = card.getAttribute('data-stage');
      
      pipelineCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const data = pipelineData[stageId];
      if (data) {
        pipelinePanelTitle.textContent = data.title;
        pipelinePanelDesc.textContent = data.desc;
        
        pipelineBullets.innerHTML = data.bullets.map(bullet => `
          <li class="panel-bullet-item">
            <div class="panel-bullet-icon">✓</div>
            <span>${bullet}</span>
          </li>
        `).join('');

        pipelineStatVal1.textContent = data.stat1Val;
        pipelineStatLbl1.textContent = data.stat1Lbl;
        pipelineStatVal2.textContent = data.stat2Val;
        pipelineStatLbl2.textContent = data.stat2Lbl;
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. OUR SLATE CATEGORY FILTERS
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const slateCards = document.querySelectorAll('.slate-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      slateCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     4. CASE STUDY & TRAILER MODAL SYSTEM
     -------------------------------------------------------------------------- */
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const caseStudyBtns = document.querySelectorAll('.open-case-study');

  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalLogline = document.getElementById('modalLogline');
  const modalDirector = document.getElementById('modalDirector');
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalFormat = document.getElementById('modalFormat');
  const modalSound = document.getElementById('modalSound');
  const modalStatus = document.getElementById('modalStatus');

  const slateModalData = {
    "echoes-of-empires": {
      title: "Echoes of Empires",
      category: "Feature Length | Historical Drama",
      logline: "An intimate political epic documenting the final 48 hours of an ancient dynasty as warring factions maneuver for throne control under celestial omens.",
      director: "Director: Marcus Vance | Cinematography: Elena Rostova",
      format: "65mm Anamorphic",
      sound: "Dolby Atmos 7.1",
      status: "Festival Circuit 2026",
      img: "assets/slate_film1.png"
    },
    "chronos-horizon": {
      title: "Chronos Horizon",
      category: "Feature Length | Sci-Fi Thriller",
      logline: "When deep-space temporal anomalies begin fracturing human perception, an orbital station engineer must outrun time itself to prevent extinction.",
      director: "Director: Kaelen Voss | Visual FX: Nebula Studios",
      format: "8K Digital IMAX",
      sound: "DTS:X Surround",
      status: "In Post-Production",
      img: "assets/hero_cinematic.png"
    },
    "the-last-nomads": {
      title: "The Last Nomads",
      category: "Short Films | Editorial Documentary",
      logline: "A poignant visual symphony exploring the vanishing migratory routes of Eurasian mountain herders confronting climate shifts.",
      director: "Director: Sophia Lin | Editing: Tariq Al-Mansoor",
      format: "Super 35mm Film",
      sound: "Binaural Spatial",
      status: "Official Selection Cannes",
      img: "assets/slate_film1.png"
    },
    "sovereign-noir": {
      title: "Sovereign Noir",
      category: "Commercials | High Fashion Cinema",
      logline: "An opulent, high-contrast visual study for a Paris couture house featuring shadow geometry and architectural precision.",
      director: "Creative Dir: Julian Thorne",
      format: "4K RAW",
      sound: "Stereo Mastered",
      status: "Worldwide Campaign",
      img: "assets/hero_cinematic.png"
    },
    "silent-sovereigns": {
      title: "Silent Sovereigns",
      category: "TV & Web Series | Political Drama",
      logline: "Inside the secretive corridors of international central banking and shadow diplomacy during a global fiscal crisis.",
      director: "Showrunner: Arthur Pendelton",
      format: "4K HDR Dolby Vision",
      sound: "Dolby 5.1",
      status: "Season 1 Streaming",
      img: "assets/slate_film1.png"
    }
  };

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const filmKey = btn.getAttribute('data-film');
      const filmInfo = slateModalData[filmKey];

      if (filmInfo) {
        modalTitle.textContent = filmInfo.title;
        modalCategory.textContent = filmInfo.category;
        modalLogline.textContent = filmInfo.logline;
        modalDirector.textContent = filmInfo.director;
        modalFormat.textContent = filmInfo.format;
        modalSound.textContent = filmInfo.sound;
        modalStatus.textContent = filmInfo.status;
        if (filmInfo.img && modalHeroImg) {
          modalHeroImg.src = filmInfo.img;
        }

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* --------------------------------------------------------------------------
     5. THE PRIVATE THEATER LIGHT SWITCH & PLAYER CONTROLS
     -------------------------------------------------------------------------- */
  const theaterToggle = document.getElementById('theaterLightToggle');
  const theaterPlayBtn = document.getElementById('theaterPlayBtn');
  const theaterOverlay = document.getElementById('theaterOverlay');
  const timeProgress = document.getElementById('timeProgress');
  const muteBtn = document.getElementById('muteBtn');

  let isPlaying = false;
  let isMuted = false;

  theaterToggle?.addEventListener('click', () => {
    document.body.classList.toggle('theater-mode-active');
  });

  theaterPlayBtn?.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      theaterOverlay.style.opacity = '0';
      theaterOverlay.style.pointerEvents = 'none';
      startScrubberAnimation();
    } else {
      theaterOverlay.style.opacity = '1';
      theaterOverlay.style.pointerEvents = 'auto';
    }
  });

  let scrubberInterval;
  function startScrubberAnimation() {
    let currentPct = 35;
    clearInterval(scrubberInterval);
    scrubberInterval = setInterval(() => {
      currentPct += 0.2;
      if (currentPct > 100) currentPct = 0;
      if (timeProgress) timeProgress.style.width = `${currentPct}%`;
    }, 200);
  }

  muteBtn?.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.style.color = isMuted ? 'var(--color-gold)' : 'var(--color-white)';
  });

  /* --------------------------------------------------------------------------
     6. CREATOR INTAKE FORM MULTI-STEP WIZARD
     -------------------------------------------------------------------------- */
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const stepPanels = document.querySelectorAll('.form-step-panel');
  const progressLineFill = document.getElementById('progressLineFill');

  const btnNext1 = document.getElementById('btnNext1');
  const btnPrev2 = document.getElementById('btnPrev2');
  const btnNext2 = document.getElementById('btnNext2');
  const btnPrev3 = document.getElementById('btnPrev3');
  const btnNext3 = document.getElementById('btnNext3');
  const btnPrev4 = document.getElementById('btnPrev4');
  const creatorForm = document.getElementById('creatorIntakeForm');
  const confirmationTicket = document.getElementById('confirmationTicket');

  let currentStep = 1;

  function updateStepUI(targetStep) {
    currentStep = targetStep;

    // Update Nodes
    stepNodes.forEach(node => {
      const nodeStep = parseInt(node.getAttribute('data-step'));
      node.classList.remove('active', 'completed');
      if (nodeStep === currentStep) {
        node.classList.add('active');
      } else if (nodeStep < currentStep) {
        node.classList.add('completed');
      }
    });

    // Update Progress Line Fill
    const fillPercent = ((currentStep - 1) / (stepNodes.length - 1)) * 100;
    if (progressLineFill) {
      progressLineFill.style.width = `${fillPercent}%`;
    }

    // Update Panels
    stepPanels.forEach(panel => {
      panel.classList.remove('active');
    });
    const activePanel = document.getElementById(`stepPanel${currentStep}`);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  }

  btnNext1?.addEventListener('click', () => {
    const creatorName = document.getElementById('creatorName').value;
    const creatorEmail = document.getElementById('creatorEmail').value;
    if (!creatorName || !creatorEmail) {
      alert('Please provide your name and contact email.');
      return;
    }
    updateStepUI(2);
  });

  btnPrev2?.addEventListener('click', () => updateStepUI(1));
  btnNext2?.addEventListener('click', () => updateStepUI(3));
  btnPrev3?.addEventListener('click', () => updateStepUI(2));
  btnNext3?.addEventListener('click', () => updateStepUI(4));
  btnPrev4?.addEventListener('click', () => updateStepUI(3));

  // Drag and Drop File Upload Simulator
  const dropzone = document.getElementById('uploadDropzone');
  const fileInput = document.getElementById('pitchFileInput');
  const filePreviewArea = document.getElementById('filePreviewArea');

  dropzone?.addEventListener('click', () => fileInput.click());

  fileInput?.addEventListener('change', handleFileSelect);

  function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      filePreviewArea.innerHTML = `
        <div class="file-preview-item">
          <div>
            <strong>${file.name}</strong>
            <span style="font-size:0.75rem; color:var(--color-text-muted); margin-left:8px;">(${(file.size/1024/1024).toFixed(2)} MB)</span>
          </div>
          <span style="color:var(--color-gold); font-size:0.8rem;">Ready for encrypt</span>
        </div>
      `;
    }
  }

  creatorForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate random intake tracking ID
    const randomID = Math.floor(1000 + Math.random() * 9000);
    if (confirmationTicket) {
      confirmationTicket.textContent = `HYN-2026-${randomID}`;
    }

    // Show confirmation step
    stepPanels.forEach(p => p.classList.remove('active'));
    document.getElementById('stepPanelConfirm').classList.add('active');
    
    // Fill full progress bar
    if (progressLineFill) progressLineFill.style.width = '100%';
  });

  /* --------------------------------------------------------------------------
     7. INTERSECTION OBSERVER FOR FADE-IN-UP VIEWPORT ANIMATIONS
     -------------------------------------------------------------------------- */
  const animatedElements = document.querySelectorAll('.fade-in-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appeared');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

});
