(function() {
  var el = document.getElementById('section-header');
  if (el) {
    el.outerHTML = `
<!-- =========================================================================
     1. HEADER (SOLNOVA Style: Top bar, Sticky Compact on scroll, Mobile Drawer)
     ========================================================================= -->
<header class="site-header" id="siteHeader">
  <!-- Top Utility Bar -->
  <div class="site-header-top py-2 py-md-3">
    <div class="custom-container">
      <div class="row align-items-center">
        <!-- Left: Search Box (Pill shape with icon on right - Hình 1 & 2) -->
        <div class="col-12 col-md-4 order-2 order-md-1 header-search-col">
          <div class="search-wrapper">
            <input 
              type="text" 
              placeholder="Nhập nội dung tìm kiếm ..." 
              class="search-input"
              aria-label="Tìm kiếm nội dung"
            />
            <button type="button" class="search-submit-btn" aria-label="Tìm kiếm">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <!-- Center: Branding Logo (Hình 1 & 2) -->
        <div class="col-8 col-md-4 text-start text-md-center order-1 order-md-2 header-logo-col">
          <a href="#" class="d-inline-flex align-items-center justify-content-md-center gap-2 gap-md-3 text-decoration-none">
            <img src="assets/images/logo-binh-an.png" alt="Logo Cơ Điện Bình An" class="brand-logo-img">
            <div class="text-start">
              <span class="d-block brand-company-sub">Công ty TNHH Đầu tư & Kỹ thuật</span>
              <span class="d-block brand-company-name">CƠ ĐIỆN BÌNH AN</span>
            </div>
          </a>
        </div>

        <!-- Right: Hotline (Desktop Standing) & Round Blue Hamburger Toggle (Scrolled & Mobile) -->
        <div class="col-4 col-md-4 order-3 order-md-3 text-end header-actions-col">
          <!-- Desktop Hotline (Visible when standing still - Hình 1) -->
          <div class="d-none d-md-flex justify-content-end align-items-center gap-3 header-hotline-wrap">
            <div class="hotline-icon-box">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="text-md-end">
              <span class="d-block hotline-label">Hotline</span>
              <a href="tel:0896555656" class="hotline-number text-decoration-none">0896 55 56 56</a>
            </div>
          </div>

          <!-- Round Blue Hamburger Button (Hình 2 & 3: Visible when scrolled OR on mobile) -->
          <button type="button" id="headerNavToggle" class="btn-header-toggle" aria-label="Mở menu" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Primary Navbar (Hình 1: Solid Brand Blue - visible when standing still on desktop) -->
  <nav class="main-navbar" id="mainNavbar" aria-label="Điều hướng chính">
    <div class="custom-container">
      <ul class="main-nav-list mb-0">
        <li class="main-nav-item active position-relative">
          <a href="#trang-chu" class="main-nav-link">
            TRANG CHỦ
          </a>
        </li>
        <li class="main-nav-item position-relative">
          <a href="#gioi-thieu" class="main-nav-link">GIỚI THIỆU</a>
        </li>
        <li class="main-nav-item position-relative">
          <a href="#dich-vu" class="main-nav-link">DỊCH VỤ NỔI BẬT</a>
        </li>
        <li class="main-nav-item position-relative">
          <a href="#san-pham" class="main-nav-link">DANH MỤC SẢN PHẨM</a>
        </li>
        <li class="main-nav-item position-relative">
          <a href="#tin-tuc" class="main-nav-link">TIN TỨC</a>
        </li>
        <li class="main-nav-item position-relative">
          <a href="#lien-he" class="main-nav-link">LIÊN HỆ</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Flyout / Drawer Navigation (Hình 3: Menu trượt ra khi bấm Hamburger hoặc trên mobile) -->
  <div id="mobileMenuBackdrop" class="mobile-menu-backdrop"></div>
  <aside id="mobileMenuDrawer" class="mobile-menu-drawer" aria-label="Menu điều hướng">
    <div class="drawer-header">
      <div class="d-flex align-items-center gap-2">
        <img src="assets/images/logo-binh-an.png" alt="Logo" style="height: 38px;">
        <div>
          <span class="d-block text-muted" style="font-size: 0.68rem; font-weight: 600; text-transform: uppercase;">Cơ Điện</span>
          <span class="d-block fw-bold text-primary-blue fs-6" style="line-height: 1.1;">BÌNH AN</span>
        </div>
      </div>
      <!-- Round Blue Close Button (Hình 3) -->
      <button type="button" id="drawerCloseBtn" class="btn-drawer-close" aria-label="Đóng menu">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Drawer Search Box (Hình 3: Ô tìm kiếm pill ở đầu drawer) -->
    <div class="p-3 border-bottom" style="background-color: var(--color-slate-50);">
      <div class="search-wrapper w-100" style="max-width: 100%;">
        <input 
          type="text" 
          placeholder="Tìm kiếm..." 
          class="search-input"
          aria-label="Tìm kiếm nội dung"
        />
        <button type="button" class="search-submit-btn" aria-label="Tìm kiếm">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>

    <!-- Drawer Menu List (Hình 3: Danh sách menu dọc với font chữ rõ nét) -->
    <div class="drawer-body">
      <ul class="drawer-nav-list list-unstyled mb-4">
        <li class="drawer-nav-item active">
          <a href="#trang-chu" class="drawer-nav-link">TRANG CHỦ</a>
        </li>
        <li class="drawer-nav-item">
          <a href="#gioi-thieu" class="drawer-nav-link">GIỚI THIỆU</a>
        </li>
        <li class="drawer-nav-item">
          <a href="#dich-vu" class="drawer-nav-link">DỊCH VỤ NỔI BẬT</a>
        </li>
        <li class="drawer-nav-item">
          <a href="#san-pham" class="drawer-nav-link">DANH MỤC SẢN PHẨM</a>
        </li>
        <li class="drawer-nav-item">
          <a href="#tin-tuc" class="drawer-nav-link">TIN TỨC</a>
        </li>
        <li class="drawer-nav-item">
          <a href="#lien-he" class="drawer-nav-link">LIÊN HỆ</a>
        </li>
      </ul>

      <!-- Quick Hotline Card in Drawer -->
      <div class="p-3 rounded-3 text-start" style="background-color: var(--color-slate-100); border: 1px dashed var(--color-slate-300);">
        <span class="d-block text-muted small mb-1" style="font-size: 0.8rem;">Hotline tư vấn 24/7:</span>
        <a href="tel:0896555656" class="fw-bold text-danger d-inline-flex align-items-center gap-2 text-decoration-none" style="font-size: 1rem;">
          <i class="fa-solid fa-phone"></i> 0896 55 56 56
        </a>
      </div>
    </div>
  </aside>
</header>
`;
  }
})();
