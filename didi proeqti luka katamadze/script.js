document.addEventListener("DOMContentLoaded", function () {
  
  // 1. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // 2. TAB SWITCHER (Index Page)
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // Add active class to clicked button and target content
      this.classList.add("active");
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

  // 3. BLOG POST FILTERING (Blog Page)
  const filterButtons = document.querySelectorAll(".blog-tab");
  const blogCards = document.querySelectorAll("#blogGrid .blog-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Update active button state
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter cards
      blogCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. NEWSLETTER FORM SUBMISSION
  const homeForm = document.getElementById("homeNewsletterForm");
  const homeFeedback = document.getElementById("formFeedback");

  if (homeForm) {
    homeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      homeFeedback.textContent = "You are in! Welcome to the mosh pit 🤘";
      homeFeedback.className = "form-feedback success";
      homeForm.reset();
    });
  }

  // 5. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById("mainContactForm");
  const contactFeedback = document.getElementById("contactFormFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactFeedback.textContent = "Message received — we will get back to you louder than ever! 🤘";
      contactFeedback.className = "form-feedback success";
      contactForm.reset();
    });
  }

});