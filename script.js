document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });

    // Close mobile menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
        
        // Close other active items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherBtn = otherItem.querySelector('.faq-question');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherBtn && otherAnswer) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAnswer.style.maxHeight = null;
              otherItem.classList.remove('active');
            }
          }
        });

        // Toggle current item
        if (isExpanded) {
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
          item.classList.remove('active');
        } else {
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          item.classList.add('active');
        }
      });
    }
  });

  // Shrink navbar on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth Scroll offset adjustment for floating navbar
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset (navbar height + extra spacing)
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Room Image Carousels
  document.querySelectorAll('.room-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsWrap = carousel.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    // Hide nav if only one slide
    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dotsWrap) dotsWrap.style.display = 'none';
      return;
    }

    let currentIndex = 0;

    // Build dots
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        dotsWrap.appendChild(dot);
      });
    }

    const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.carousel-dot')) : [];

    // Load deferred images on demand
    function loadSlide(slide) {
      const img = slide.querySelector('img[data-src]');
      if (img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    }

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      // Load current + adjacent slides
      loadSlide(slides[currentIndex]);
      loadSlide(slides[(currentIndex + 1) % slides.length]);
      loadSlide(slides[(currentIndex - 1 + slides.length) % slides.length]);

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });
    }

    // Touch swipe support
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        currentIndex = diff > 0
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      }
    }, { passive: true });

    // Initialize
    updateCarousel();
  });

  // Gallery View More functionality
  const viewMoreBtn = document.getElementById('view-more-gallery');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const hiddenItems = document.querySelectorAll('.hidden-gallery-item');
      hiddenItems.forEach(item => {
        const img = item.querySelector('img[data-src]');
        if (img) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        item.style.display = 'block';
        item.classList.remove('hidden-gallery-item');
      });
      // Hide the view more button wrapper
      const wrapper = viewMoreBtn.closest('.gallery-actions');
      if (wrapper) {
        wrapper.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'none';
      }
    });
  // 1BHK switchable AC/Non-AC preference selector
  // Handled in a separate DOMContentLoaded listener below
});

document.addEventListener("DOMContentLoaded", () => {
  const choiceBox = document.querySelector('[data-room-choice="1bhk-switchable"]');

  if (!choiceBox) return;

  const priceEl = choiceBox.querySelector("[data-dynamic-price]");
  const noteEl = choiceBox.querySelector("[data-choice-note]");
  const buttons = choiceBox.querySelectorAll(".choice-btn");

  const roomCard = choiceBox.closest(".room-card");
  const whatsappBtn =
    roomCard?.querySelector('a[href*="wa.me"]') ||
    roomCard?.querySelector(".book-whatsapp") ||
    roomCard?.querySelector(".btn-book-room") ||
    roomCard?.querySelector(".btn-primary");

  const roomOptions = {
    "non-ac": {
      price: "₹1300",
      note: "Non-AC selected: ₹1300 weekdays / ₹1500 Sat-Sun.",
      message:
        "Hello Nahor Homestay, I want to book the 1BHK AC/Non-AC 3rd Floor with Non-AC option.\nFloor: 3rd Floor\nType: Non-AC\nPrice: ₹1300 weekdays / ₹1500 Sat-Sun.\nPlease share availability."
    },
    ac: {
      price: "₹1500",
      note: "AC selected: ₹1500 weekdays / ₹1700 Sat-Sun.",
      message:
        "Hello Nahor Homestay, I want to book the 1BHK AC/Non-AC 3rd Floor with AC option.\nFloor: 3rd Floor\nType: AC\nPrice: ₹1500 weekdays / ₹1700 Sat-Sun.\nPlease share availability."
    }
  };

  function updateChoice(choice) {
    const selectedOption = roomOptions[choice];

    if (!selectedOption) return;

    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.choice === choice);
    });

    if (priceEl) {
      priceEl.textContent = selectedOption.price;
    }

    if (noteEl) {
      noteEl.textContent = selectedOption.note;
    }

    if (whatsappBtn) {
      whatsappBtn.href =
        "https://wa.me/919401709323?text=" +
        encodeURIComponent(selectedOption.message);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      updateChoice(button.dataset.choice);
    });
  });

  updateChoice("non-ac");
});
