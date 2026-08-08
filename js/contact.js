/**
 * THE HYENA HUB — Direct Contact & Webmail Module
 */

import { generateRandomID } from './utils.js';

export function initContactWizard() {
  const directForm = document.getElementById('directContactForm') || document.getElementById('directInquiryForm');
  const btnCopyGmail = document.getElementById('btnCopyGmail') || document.getElementById('btnCopyEmailInquiries');
  const confirmPanel = document.getElementById('contactConfirmPanel') || document.getElementById('inquiryConfirmPanel');
  const ticketRef = document.getElementById('contactTicketRef') || document.getElementById('inquiryTicketRef');
  const btnReset = document.getElementById('btnResetContactForm') || document.getElementById('btnResetInquiryForm');
  const btnConfirmGmailWeb = document.getElementById('btnConfirmGmailWeb') || document.getElementById('btnInquiryGmailWeb');
  const btnConfirmOutlookWeb = document.getElementById('btnConfirmOutlookWeb') || document.getElementById('btnInquiryMailto');

  const GMAIL_ADDRESS = 'Thehyenahub@gmail.com';

  // 1. Copy Email to Clipboard
  if (btnCopyGmail) {
    btnCopyGmail.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(GMAIL_ADDRESS);
        } else {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = GMAIL_ADDRESS;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = btnCopyGmail.textContent;
        btnCopyGmail.textContent = '✓ Copied!';
        btnCopyGmail.style.borderColor = 'var(--color-gold)';
        btnCopyGmail.style.color = 'var(--color-gold)';

        setTimeout(() => {
          btnCopyGmail.textContent = originalText;
          btnCopyGmail.style.borderColor = '';
          btnCopyGmail.style.color = '';
        }, 2500);
      } catch (err) {
        console.warn('Failed to copy email: ', err);
      }
    });
  }

  // 2. Direct Contact & Inquiry Form Submission -> Direct Webmail Launcher
  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('contactName') || document.getElementById('inquiryName'))?.value || '';
      const email = (document.getElementById('contactEmail') || document.getElementById('inquiryEmail'))?.value || '';
      const inquiry = (document.getElementById('inquiryType') || document.getElementById('inquirySubject'))?.value || 'General Inquiry';
      const company = (document.getElementById('contactCompany') || document.getElementById('inquiryCompany'))?.value || '';
      const message = (document.getElementById('contactMessage') || document.getElementById('inquiryMessage'))?.value || '';

      const subjectRaw = `[${inquiry}] Direct Inquiry from ${name}${company ? ' (' + company + ')' : ''}`;
      const bodyRaw = `Name: ${name}\nEmail: ${email}\nCompany/Organization: ${company || 'N/A'}\nInquiry Category: ${inquiry}\n\nMessage:\n${message}`;

      const subject = encodeURIComponent(subjectRaw);
      const body = encodeURIComponent(bodyRaw);

      // Direct Webmail URLs & Mailto Fallback
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}&su=${subject}&body=${body}`;
      const mailtoUrl = `mailto:${GMAIL_ADDRESS}?subject=${subject}&body=${body}`;

      // Update confirmation links
      if (btnConfirmGmailWeb) btnConfirmGmailWeb.href = gmailWebUrl;
      if (btnConfirmOutlookWeb) btnConfirmOutlookWeb.href = mailtoUrl;

      // Generate Reference Ticket
      const refID = generateRandomID('THH', 'INQ');
      if (ticketRef) ticketRef.textContent = refID;

      // Open directly in web Gmail (currently logged-in account in browser)
      window.open(gmailWebUrl, '_blank');

      // Show confirmation screen
      directForm.style.display = 'none';
      if (confirmPanel) confirmPanel.style.display = 'block';
    });
  }

  // 3. Reset Form Button
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (directForm) {
        directForm.reset();
        directForm.style.display = 'block';
      }
      if (confirmPanel) confirmPanel.style.display = 'none';
    });
  }
}
