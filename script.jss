// Responsive navigation menu
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      if(window.innerWidth < 700) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const offset = document.querySelector(targetId).offsetTop - 60;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
});
