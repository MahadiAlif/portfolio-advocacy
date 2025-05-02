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
////////////////////////////////////////////////////////////////////

    const images = [
      "achievementGallery/image1.jpg",
      "achievementGallery/image2.jpg",
      "achievementGallery/image3.jpg",
      "achievementGallery/image4.jpg",
      "achievementGallery/image5.jpg",
      "achievementGallery/image6.jpg",
      "photos/eyen.jpg",
      "photos/dbt.jpg",
  ];

  let currentIndex = 0;

  // Function to cycle through images
    function cycleImages() {
        const imgElement = document.getElementById("cycling-image");
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back
        imgElement.src = images[currentIndex];
    }

    // Set interval to change the image every 3 seconds
    setInterval(cycleImages, 3000);

/////////////////////////////////////////////////////////////////////
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
