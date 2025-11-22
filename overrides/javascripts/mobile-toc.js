// Mobile Table of Contents - Floating button with drawer
document.addEventListener("DOMContentLoaded", function() {
  // Only run on mobile devices (screen width < 76.25em = 1220px, Material's tablet breakpoint)
  function isMobile() {
    return window.matchMedia("(max-width: 76.1875em)").matches;
  }

  // Only proceed if we're on mobile
  if (!isMobile()) return;

  // Get all headings from the content area
  function getHeadings() {
    const content = document.querySelector('.md-content__inner');
    if (!content) return [];

    const headings = content.querySelectorAll('h2, h3, h4');
    return Array.from(headings).filter(h => h.id); // Only headings with IDs
  }

  // Create the floating TOC button
  function createTocButton() {
    const button = document.createElement('button');
    button.className = 'mobile-toc-button';
    button.setAttribute('aria-label', '目次を開く');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/>
      </svg>
    `;
    document.body.appendChild(button);
    return button;
  }

  // Create the TOC drawer
  function createTocDrawer(headings) {
    const drawer = document.createElement('div');
    drawer.className = 'mobile-toc-drawer';

    const header = document.createElement('div');
    header.className = 'mobile-toc-header';
    header.innerHTML = `
      <h3>目次</h3>
      <button class="mobile-toc-close" aria-label="目次を閉じる">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    `;

    const nav = document.createElement('nav');
    nav.className = 'mobile-toc-nav';

    const list = document.createElement('ul');

    headings.forEach(heading => {
      const li = document.createElement('li');
      li.className = `toc-${heading.tagName.toLowerCase()}`;

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;

      // Close drawer when clicking a link
      link.addEventListener('click', () => {
        closeDrawer();
      });

      li.appendChild(link);
      list.appendChild(li);
    });

    nav.appendChild(list);
    drawer.appendChild(header);
    drawer.appendChild(nav);
    document.body.appendChild(drawer);

    return drawer;
  }

  // Create backdrop
  function createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-toc-backdrop';
    document.body.appendChild(backdrop);
    return backdrop;
  }

  // Open drawer
  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  // Close drawer
  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Initialize
  const headings = getHeadings();

  // Only show TOC button if there are headings
  if (headings.length === 0) return;

  const button = createTocButton();
  const drawer = createTocDrawer(headings);
  const backdrop = createBackdrop();

  // Event listeners
  button.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);

  const closeButton = drawer.querySelector('.mobile-toc-close');
  closeButton.addEventListener('click', closeDrawer);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // If switched to desktop, hide everything
      if (!isMobile()) {
        button.style.display = 'none';
        closeDrawer();
      } else {
        button.style.display = 'flex';
      }
    }, 250);
  });
});
