/**
 * THE HYENA HUB — Navigation & Mobile Drawer Module
 */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  if (!navbar) return;

  // Store page-level active links so scroll-spy doesn't override them on subpages
  const pageActiveLinks = document.querySelectorAll('.nav-link.active');
  const isHomePage = window.location.pathname.endsWith('index.html') || 
                     window.location.pathname.endsWith('/') ||
                     window.location.pathname === '';

  // Create drawer overlay backdrop
  let drawerOverlay = document.querySelector('.drawer-overlay');
  if (!drawerOverlay) {
    drawerOverlay = document.createElement('div');
    drawerOverlay.className = 'drawer-overlay';
    document.body.appendChild(drawerOverlay);
  }

  // Scroll listener for sticky translucent navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Only run scroll-spy highlighting on the homepage where sections map to nav links
    if (isHomePage) {
      highlightNavOnScroll();
    }
  });

  // Toggle mobile drawer with scroll lock and overlay
  function openDrawer() {
    mobileDrawer?.classList.add('open');
    hamburgerBtn?.classList.add('active');
    drawerOverlay?.classList.add('active');
    document.body.classList.add('scroll-locked');
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    hamburgerBtn?.classList.remove('active');
    drawerOverlay?.classList.remove('active');
    document.body.classList.remove('scroll-locked');
  }

  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Close drawer on overlay click
  drawerOverlay?.addEventListener('click', closeDrawer);

  // Close mobile drawer when clicking links
  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Highlight current section in navbar (only on homepage)
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
}
