/**
 * Co Dien Binh An - Main Client Scripts
 */

document.addEventListener('DOMContentLoaded', function () {
  initHeroSlider();
  initProductFilter();
  initNewsNavigation();
  initNewsletterForm();
  initSmoothScroll();
});

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
 * Handle subscription form submission
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (!name || !phone) {
      alert('Vui lòng nhập đầy đủ Họ tên và Số điện thoại!');
      return;
    }

    alert(`Cảm ơn Quý khách ${name}! Cơ Điện Bình An đã tiếp nhận thông tin và sẽ liên hệ sớm nhất.`);
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
