// Make the header site name clickable and link to homepage
document.addEventListener("DOMContentLoaded", function() {
  // Find the first header topic (site name) within the header title
  const siteName = document.querySelector('.md-header__title .md-header__topic:first-child');

  // Find the logo link to get the homepage URL
  const logoLink = document.querySelector('.md-header__button.md-logo');

  if (siteName && logoLink) {
    // Make the site name clickable
    siteName.style.cursor = 'pointer';

    // Add click event to navigate to homepage using the same URL as the logo
    siteName.addEventListener('click', function(e) {
      // Use the same href as the logo (relative path to homepage)
      const homeUrl = logoLink.getAttribute('href') || './';
      window.location.href = homeUrl;
    });
  }
});
