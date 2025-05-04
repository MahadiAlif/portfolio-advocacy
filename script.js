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
    
    // Image container for getting the images
    const images = [
      {src: "achievementGallery/image1.jpg", title: "Image 1"},
      {src: "achievementGallery/image2.jpg", title: "Image 2"},
      {src: "achievementGallery/image3.jpg", title: "Image 3"},
      {src: "achievementGallery/image4.jpg", title: "Image 4"},
      {src: "achievementGallery/image5.jpg", title: "Image 5"},
      {src: "achievementGallery/image6.jpg", title: "Image 6"},
      {src: "photos/eyen.jpg", title: "Image 7"},
      {src: "photos/dbt.jpg", title: "Image 8"},
  ];

    const context = [
      {title: "Image 1", subtitle: "This is the first image"},
      {title: "Image 2", subtitle: "This is the second image"},
      {title: "Image 3", subtitle: "This is the third image"},
      {title: "Image 4", subtitle: "This is the fourth image"},
      {title: "Image 5", subtitle: "This is the fifth image"},
      {title: "Image 6", subtitle: "This is the sixth image"},
      {title: "Image 7", subtitle: "This is the seventh image"},
      {title: "Image 8", subtitle: "This is the eighth image"},
    ]  

  const cyclingImage = document.getElementById("cycling-image");    // calls the image id from the html file
  const achievementTitle = document.getElementById("achievement-title");  // calls the title id from the html file
  const achievementSubtitle = document.getElementById("achievement-subtitle");  // calls the subtext id from the html file
  let currentIndex = 0;   // Initialize current index
  updateContent(currentIndex);  // Initialize with the first image and title
  

  // Function to update the image and title
  function updateContent(index) {
    cyclingImage.src = images[index].src;
    achievementTitle.textContent = context[index].title; // Update title text
    achievementSubtitle.textContent = context[index].subtitle; // Update subtitle text
  }

  // Function to cycle through images
    function cycleImages() {
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back
        cyclingImage.src = images[currentIndex];
        updateContent(currentIndex); // Update title
    };

    // Set interval to change the image every 3 seconds
    setInterval(cycleImages, 3000);

    function nextCycle() {
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back
        cyclingImage.src = images[currentIndex];
        updateContent(currentIndex); // Update title
    }

    function prevCycle() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index and loop back
        cyclingImage.src = images[currentIndex];
        updateContent(currentIndex); // Update title
    }

    document.getElementById("next-button").addEventListener("click", nextCycle);
    document.getElementById("prev-button").addEventListener("click", prevCycle);

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