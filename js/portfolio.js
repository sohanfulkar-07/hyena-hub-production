/**
 * THE HYENA HUB — Portfolio Slate & Interactive Pipeline Module
 */

export function initPortfolio() {
  // 1. Pipeline Stage Switcher
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
      if (data && pipelinePanelTitle) {
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

  // 2. Slate Category Filter
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

  // 3. Case Study Modal Dialog System
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
      img: "assets/images/hero/slate_film1.png"
    },
    "chronos-horizon": {
      title: "Chronos Horizon",
      category: "Feature Length | Sci-Fi Thriller",
      logline: "When deep-space temporal anomalies begin fracturing human perception, an orbital station engineer must outrun time itself to prevent extinction.",
      director: "Director: Kaelen Voss | Visual FX: Nebula Studios",
      format: "8K Digital IMAX",
      sound: "DTS:X Surround",
      status: "In Post-Production",
      img: "assets/images/hero/hero_cinematic.png"
    },
    "the-last-nomads": {
      title: "The Last Nomads",
      category: "Short Films | Editorial Documentary",
      logline: "A poignant visual symphony exploring the vanishing migratory routes of Eurasian mountain herders confronting climate shifts.",
      director: "Director: Sophia Lin | Editing: Tariq Al-Mansoor",
      format: "Super 35mm Film",
      sound: "Binaural Spatial",
      status: "Official Selection Cannes",
      img: "assets/images/hero/slate_film1.png"
    },
    "sovereign-noir": {
      title: "Sovereign Noir",
      category: "Commercials | High Fashion Cinema",
      logline: "An opulent, high-contrast visual study for a Paris couture house featuring shadow geometry and architectural precision.",
      director: "Creative Dir: Julian Thorne",
      format: "4K RAW",
      sound: "Stereo Mastered",
      status: "Worldwide Campaign",
      img: "assets/images/hero/hero_cinematic.png"
    },
    "silent-sovereigns": {
      title: "Silent Sovereigns",
      category: "TV & Web Series | Political Drama",
      logline: "Inside the secretive corridors of international central banking and shadow diplomacy during a global fiscal crisis.",
      director: "Showrunner: Arthur Pendelton",
      format: "4K HDR Dolby Vision",
      sound: "Dolby 5.1",
      status: "Season 1 Streaming",
      img: "assets/images/hero/slate_film1.png"
    }
  };

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const filmKey = btn.getAttribute('data-film');
      const filmInfo = slateModalData[filmKey];

      if (filmInfo && modalBackdrop) {
        if (modalTitle) modalTitle.textContent = filmInfo.title;
        if (modalCategory) modalCategory.textContent = filmInfo.category;
        if (modalLogline) modalLogline.textContent = filmInfo.logline;
        if (modalDirector) modalDirector.textContent = filmInfo.director;
        if (modalFormat) modalFormat.textContent = filmInfo.format;
        if (modalSound) modalSound.textContent = filmInfo.sound;
        if (modalStatus) modalStatus.textContent = filmInfo.status;
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
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if (modalBackdrop) modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}
