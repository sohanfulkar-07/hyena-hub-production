/**
 * THE HYENA HUB — Main Application Orchestrator
 */

import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio } from './portfolio.js';
import { initContactWizard } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  initNavbar();
  initAnimations();
  initPortfolio();
  initContactWizard();

  // Private Theater Light Switch & Video Player State
  const theaterToggle = document.getElementById('theaterLightToggle');
  const theaterPlayBtn = document.getElementById('theaterPlayBtn');
  const theaterOverlay = document.getElementById('theaterOverlay');
  const timeProgress = document.getElementById('timeProgress');
  const muteBtn = document.getElementById('muteBtn');

  let isPlaying = false;
  let isMuted = false;
  let scrubberInterval;

  theaterToggle?.addEventListener('click', () => {
    document.body.classList.toggle('theater-mode-active');
  });

  theaterPlayBtn?.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      if (theaterOverlay) {
        theaterOverlay.style.opacity = '0';
        theaterOverlay.style.pointerEvents = 'none';
      }
      startScrubberAnimation();
    } else {
      if (theaterOverlay) {
        theaterOverlay.style.opacity = '1';
        theaterOverlay.style.pointerEvents = 'auto';
      }
      clearInterval(scrubberInterval);
    }
  });

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
});
