/**
 * Co Dien Binh An - Main Client Scripts
 */

document.addEventListener("DOMContentLoaded", function () {
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
  const slides = document.querySelectorAll(".hero-slide-item");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slides.length) return;

  let currentSlide = 0;
  let autoTimer = null;
  // Slide 1 (Bóc tách khối lượng) hiển thị 7.5s, các slide khác 5s
  const getSlideDuration = (slideIndex) => (slideIndex === 0 ? 7500 : 5000);

  function goToSlide(targetIndex) {
    // Tính toán vòng lặp vô tận: 0 -> 1 -> 2 -> 0 -> 1 -> 2
    currentSlide = (targetIndex + slides.length) % slides.length;

    // Chuyển đổi class active để kích hoạt CSS Cross-Fade êm ái
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    // Cập nhật dot phân trang
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
    startAutoPlay();
  }

  function startAutoPlay() {
    stopAutoPlay();
    const duration = getSlideDuration(currentSlide);
    autoTimer = setTimeout(nextSlide, duration);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }
  }

  // Sự kiện click Dot chọn slide nhanh
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
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
  const section = document.querySelector("#san-pham");
  if (!section) return;

  const buttons = section.querySelectorAll(".product-tab-btn");
  const products = section.querySelectorAll(".product-item-col");
  const maxVisibleProducts = 16;

  function filterProducts(filter) {
    buttons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    let visibleCount = 0;
    products.forEach((product) => {
      const matches = filter === "all" || product.dataset.category === filter;
      const visible = matches && visibleCount < maxVisibleProducts;
      product.hidden = !visible;
      if (visible) visibleCount++;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () =>
      filterProducts(button.dataset.filter),
    );
  });

  section
    .querySelector("[data-product-show-all]")
    ?.addEventListener("click", () => {
      filterProducts("all");
    });

  filterProducts(
    section.querySelector(".product-tab-btn.active")?.dataset.filter || "all",
  );
}

/**
 * News carousel simple navigation simulation
 */
function initNewsNavigation() {
  const prevBtn = document.getElementById("newsPrevBtn");
  const nextBtn = document.getElementById("newsNextBtn");
  const newsRow = document.getElementById("newsContainer");

  if (!prevBtn || !nextBtn || !newsRow) return;

  prevBtn.addEventListener("click", () => {
    newsRow.style.opacity = "0.5";
    setTimeout(() => {
      newsRow.style.opacity = "1";
    }, 200);
  });

  nextBtn.addEventListener("click", () => {
    newsRow.style.opacity = "0.5";
    setTimeout(() => {
      newsRow.style.opacity = "1";
    }, 200);
  });
}

/**
 * Handle subscription form submission
 */
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (!name || !phone) {
      alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại!");
      return;
    }

    alert(
      `Cảm ơn Quý khách ${name}! Cơ Điện Bình An đã tiếp nhận thông tin và sẽ liên hệ sớm nhất.`,
    );
    form.reset();
  });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
