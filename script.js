document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Menu Toggle ──────────────────────────────────────────────────────
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── FAQ Accordion ───────────────────────────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

        // Close all others
        faqItems.forEach(other => {
          if (other !== item) {
            const otherBtn = other.querySelector('.faq-question');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherBtn && otherAnswer) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAnswer.style.maxHeight = null;
              other.classList.remove('active');
            }
          }
        });

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

  // ── Navbar shrink on scroll ─────────────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── Smooth scroll with navbar offset ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Room Image Carousels ────────────────────────────────────────────────────
  document.querySelectorAll('.room-carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsWrap = carousel.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    // Build dot buttons
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

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
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
    carousel.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        currentIndex = diff > 0
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      }
    }, { passive: true });

    // Initialise to slide 0
    updateCarousel();
  });

  // ── Gallery View More ───────────────────────────────────────────────────────
  const viewMoreBtn = document.getElementById('view-more-gallery');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.hidden-gallery-item').forEach(item => {
        const img = item.querySelector('img[data-src]');
        if (img) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        item.style.display = 'block';
        item.classList.remove('hidden-gallery-item');
      });
      const wrapper = viewMoreBtn.closest('.gallery-actions');
      if (wrapper) {
        wrapper.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'none';
      }
    });
  } // ← closing brace that was previously missing

  // ── 1BHK Switchable AC / Non-AC Selector ───────────────────────────────────
  const choiceBox = document.querySelector('[data-room-choice="1bhk-switchable"]');
  if (choiceBox) {
    const priceEl = choiceBox.querySelector('[data-dynamic-price]');
    const noteEl = choiceBox.querySelector('[data-choice-note]');
    const choiceBtns = choiceBox.querySelectorAll('.choice-btn');

    const roomCard = choiceBox.closest('.room-card');
    const whatsappBtn =
      roomCard?.querySelector('a[href*="wa.me"]') ||
      roomCard?.querySelector('.book-whatsapp') ||
      roomCard?.querySelector('.btn-book-room') ||
      roomCard?.querySelector('.btn-primary');

    const roomOptions = {
      'non-ac': {
        price: '₹1300',
        note: 'Non-AC selected: ₹1300 weekdays / ₹1500 Sat-Sun.',
        message: 'Hello Nahor Homestay, I want to book the 1BHK AC/Non-AC 3rd Floor with Non-AC option.\nFloor: 3rd Floor\nType: Non-AC\nPrice: ₹1300 weekdays / ₹1500 Sat-Sun.\nPlease share availability.'
      },
      ac: {
        price: '₹1500',
        note: 'AC selected: ₹1500 weekdays / ₹1700 Sat-Sun.',
        message: 'Hello Nahor Homestay, I want to book the 1BHK AC/Non-AC 3rd Floor with AC option.\nFloor: 3rd Floor\nType: AC\nPrice: ₹1500 weekdays / ₹1700 Sat-Sun.\nPlease share availability.'
      }
    };

    function updateChoice(choice) {
      const opt = roomOptions[choice];
      if (!opt) return;
      choiceBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.choice === choice));
      if (priceEl) priceEl.textContent = opt.price;
      if (noteEl) noteEl.textContent = opt.note;
      if (whatsappBtn) whatsappBtn.href = 'https://wa.me/919401709323?text=' + encodeURIComponent(opt.message);
    }

    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => updateChoice(btn.dataset.choice));
    });

    updateChoice('non-ac');
  }

}); // end DOMContentLoaded
