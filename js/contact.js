/**
 * THE HYENA HUB — Creator Intake & Contact Wizard Module
 */

import { generateRandomID, formatFileSize } from './utils.js';

export function initContactWizard() {
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

  if (!creatorForm) return;

  let currentStep = 1;

  function updateStepUI(targetStep) {
    currentStep = targetStep;

    // Update Step Nodes
    stepNodes.forEach(node => {
      const nodeStep = parseInt(node.getAttribute('data-step'));
      node.classList.remove('active', 'completed');
      if (nodeStep === currentStep) {
        node.classList.add('active');
      } else if (nodeStep < currentStep) {
        node.classList.add('completed');
      }
    });

    // Update Progress Bar Line
    const fillPercent = ((currentStep - 1) / (stepNodes.length - 1)) * 100;
    if (progressLineFill) {
      progressLineFill.style.width = `${fillPercent}%`;
    }

    // Update Form Panels
    stepPanels.forEach(panel => panel.classList.remove('active'));
    const activePanel = document.getElementById(`stepPanel${currentStep}`);
    if (activePanel) activePanel.classList.add('active');
  }

  btnNext1?.addEventListener('click', () => {
    const creatorName = document.getElementById('creatorName')?.value;
    const creatorEmail = document.getElementById('creatorEmail')?.value;
    if (!creatorName || !creatorEmail) {
      alert('Please provide your full name and business email before proceeding.');
      return;
    }
    updateStepUI(2);
  });

  btnPrev2?.addEventListener('click', () => updateStepUI(1));
  btnNext2?.addEventListener('click', () => updateStepUI(3));
  btnPrev3?.addEventListener('click', () => updateStepUI(2));
  btnNext3?.addEventListener('click', () => updateStepUI(4));
  btnPrev4?.addEventListener('click', () => updateStepUI(3));

  // File Upload Drag & Drop Simulation
  const dropzone = document.getElementById('uploadDropzone');
  const fileInput = document.getElementById('pitchFileInput');
  const filePreviewArea = document.getElementById('filePreviewArea');

  dropzone?.addEventListener('click', () => fileInput?.click());

  fileInput?.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0 && filePreviewArea) {
      const file = files[0];
      filePreviewArea.innerHTML = `
        <div style="background:var(--color-charcoal); border:1px solid var(--color-border-gold); padding:1rem; border-radius:var(--radius-sm); margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="color:var(--color-white);">${file.name}</strong>
            <span style="font-size:0.75rem; color:var(--color-text-muted); margin-left:8px;">(${formatFileSize(file.size)})</span>
          </div>
          <span style="color:var(--color-gold); font-size:0.8rem; font-weight:600;">✓ Encrypted Ready</span>
        </div>
      `;
    }
  });

  // Form Submission
  creatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const trackingID = generateRandomID('HYN', '2026');
    if (confirmationTicket) {
      confirmationTicket.textContent = trackingID;
    }

    stepPanels.forEach(p => p.classList.remove('active'));
    const confirmPanel = document.getElementById('stepPanelConfirm');
    if (confirmPanel) confirmPanel.classList.add('active');

    if (progressLineFill) progressLineFill.style.width = '100%';
  });
}
