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
  initScrollSpy();
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
 * Smooth scrolling for anchor links with sticky header offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const header = document.getElementById('siteHeader');
        const headerHeight = header ? (header.offsetHeight || 110) : 110;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 15);
        window.scrollTo({
          top: Math.max(0, targetPos),
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Scrollspy: Tự động đánh dấu màu đỏ mục menu tương ứng khi lướt qua các section
 */
function initScrollSpy() {
  const sectionIds = ['trang-chu', 'gioi-thieu', 'dich-vu', 'san-pham', 'tin-tuc', 'lien-he'];
  const sections = sectionIds.map(id => ({
    id: id,
    el: document.getElementById(id)
  })).filter(s => s.el !== null);

  const mainItems = document.querySelectorAll('.main-nav-item');
  const drawerItems = document.querySelectorAll('.drawer-nav-item');

  function updateActive(activeId) {
    mainItems.forEach(item => {
      const a = item.querySelector('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href === '#' + activeId || (activeId === 'trang-chu' && (href === '#' || href === '#trang-chu'))) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    drawerItems.forEach(item => {
      const a = item.querySelector('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href === '#' + activeId || (activeId === 'trang-chu' && (href === '#' || href === '#trang-chu'))) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  let ticking = false;
  function checkScrollPosition() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Khi cuộn xuống sát đáy trang -> Đánh dấu Liên hệ
    if (scrollPos + windowHeight >= docHeight - 80) {
      updateActive('lien-he');
      ticking = false;
      return;
    }

    const header = document.getElementById('siteHeader');
    const headerOffset = header ? (header.offsetHeight + 40) : 150;

    let current = sections[0]?.id || 'trang-chu';
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const top = sec.el.getBoundingClientRect().top + scrollPos - headerOffset;
      if (scrollPos >= top) {
        current = sec.id;
      }
    }

    updateActive(current);
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(checkScrollPosition);
      ticking = true;
    }
  }, { passive: true });

  // Kiểm tra vị trí ngay khi trang load
  checkScrollPosition();
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
    if (scrollY > 20) {
      if (!header.classList.contains('is-scrolled')) {
        header.classList.add('is-scrolled');
      }
    } else {
      if (header.classList.contains('is-scrolled')) {
        header.classList.remove('is-scrolled');
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
