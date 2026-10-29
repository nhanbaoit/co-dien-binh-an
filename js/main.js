/**
 * Co Dien Binh An - Main Client Scripts
 */

function initAllComponents() {
  initHeaderScrollAndDrawer();
  initHeroSlider();
  initProductFilter();
  initNewsNavigation();
  initNewsletterForm();
  initSmoothScroll();
  initBackToTop();
}

let initialized = false;
function safeInit() {
  if (initialized) return;
  if (document.querySelector('.hero-slide-item')) {
    initialized = true;
    initAllComponents();
  }
}

// Support both dynamically loaded sections and standard DOMContentLoaded
document.addEventListener('sectionsLoaded', function() {
  initialized = true;
  initAllComponents();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}

/**
 * Hero Slider Controller (Auto-play, Dots, Prev/Next)
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide-item');
  const dots = document.querySelectorAll('.hero-dot');

  if (!slides.length) return;

  let currentSlide = 0;
  let autoTimer = null;
  const slideDuration = 5000; // 5.0 giây chuyển slide êm ái

  function goToSlide(targetIndex) {
    // Tính toán vòng lặp vô tận: 0 -> 1 -> 2 -> 0 -> 1 -> 2
    currentSlide = (targetIndex + slides.length) % slides.length;

    // Chuyển đổi class active để kích hoạt CSS Cross-Fade êm ái
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Cập nhật dot phân trang
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Sự kiện click Dot chọn slide nhanh
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      startAutoPlay();
    });
  });

  // Khởi động chạy tự động vòng lặp vô tận
  startAutoPlay();
}

/**
 * Filter products based on selected category tab
 */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.product-tab-btn');
  const productCards = document.querySelectorAll('.product-item-col');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      filterBtns.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      productCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * News carousel simple navigation simulation
 */
function initNewsNavigation() {
  const prevBtn = document.getElementById('newsPrevBtn');
  const nextBtn = document.getElementById('newsNextBtn');
  const newsRow = document.getElementById('newsContainer');

  if (!prevBtn || !nextBtn || !newsRow) return;

  prevBtn.addEventListener('click', () => {
    newsRow.style.opacity = '0.5';
    setTimeout(() => {
      newsRow.style.opacity = '1';
    }, 200);
  });

  nextBtn.addEventListener('click', () => {
    newsRow.style.opacity = '0.5';
    setTimeout(() => {
      newsRow.style.opacity = '1';
    }, 200);
  });
}

/**
 * Handle subscription form submission with Bootstrap Success Modal
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = form.querySelector('input[type="text"]');
    const name = nameInput ? nameInput.value.trim() : '';

    // Cập nhật tên khách hàng vào modal nếu có
    const nameDisplay = document.getElementById('successCustomerName');
    if (nameDisplay) {
      nameDisplay.textContent = name ? ` ${name}` : '';
    }

    // Hiển thị Bootstrap Modal Popup thông báo thành công
    const modalEl = document.getElementById('newsletterSuccessModal');
    if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const successModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      successModal.show();
    } else {
      alert(`Đăng ký thành công! Cảm ơn Quý khách ${name} đã quan tâm.`);
    }

    form.reset();
  });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

/**
 * Header Scroll & Sticky Behavior, Mobile Drawer Navigation (SOLNOVA style)
 */
function initHeaderScrollAndDrawer() {
  const header = document.getElementById('siteHeader');
  const toggleBtn = document.getElementById('headerNavToggle');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!header) return;

  // Xử lý sticky khi cuộn trang
  let ticking = false;
  let headerHeight = header.offsetHeight || 110;

  function updateSticky() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // Khi cuộn qua 70px: chuyển sang dạng sticky compact header (Hình 2)
    if (scrollY > 70) {
      if (!header.classList.contains('is-sticky')) {
        header.classList.add('is-sticky');
      }
    } else {
      if (header.classList.contains('is-sticky')) {
        header.classList.remove('is-sticky');
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateSticky);
      ticking = true;
    }
  }, { passive: true });

  updateSticky();

  // Mở Drawer panel (Hình 3)
  function openDrawer() {
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    document.body.style.overflow = 'hidden';
  }

  // Đóng Drawer panel
  function closeDrawer() {
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Đóng khi nhấn phím Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Tự động đóng drawer khi click vào menu item bên trong drawer
  if (drawer) {
    const links = drawer.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        closeDrawer();
      });
    });
  }
}

/**
 * Back To Top Button Controller
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  function toggleBackToTop() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 280) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
