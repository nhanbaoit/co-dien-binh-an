(function() {
  var el = document.getElementById('section-footer');
  if (el) {
    el.outerHTML = `
<!-- =========================================================================
     8. FOOTER (Company Info, Services Nav, Newsletter Signup, Copyright)
     ========================================================================= -->
<footer id="lien-he" class="site-footer">
  <div class="custom-container">
    <div class="row g-4 mb-4">
      <!-- Column 1: Company Profile -->
      <div class="col-12 col-md-5">
        <div class="d-flex align-items-center gap-3 mb-3">
          <img
            src="assets/images/logo-binh-an.png"
            alt="Logo Cơ Điện Bình An"
            class="brand-logo-img-footer"
          />
          <div>
            <span
              class="d-block text-secondary-subtle small fw-medium text-uppercase"
              style="font-size: 0.8rem"
              >CÔNG TY TNHH ĐẦU TƯ VÀ KỸ THUẬT</span
            >
            <span class="d-block fw-bold text-white fs-6">CƠ ĐIỆN BÌNH AN</span>
          </div>
        </div>

        <p class="text-light opacity-75 small mb-3">
          Đơn vị uy tín chuyên sâu về tư vấn giải pháp bốc tách khối lượng M&E,
          phân phối vật tư cơ điện chính hãng và hỗ trợ thu hồi vật tư công
          trình.
        </p>

        <address class="mb-0 text-light opacity-90 small fst-normal">
          <div class="d-flex align-items-start gap-2 mb-2">
            <i class="fa-solid fa-location-dot text-brand-red mt-1"></i>
            <span>1148A Phạm Văn Đồng, P. Thủ Đức, Tp. Hồ Chí Minh</span>
          </div>
          <div class="d-flex align-items-start gap-2 mb-2">
            <i class="fa-solid fa-phone text-gold mt-1"></i>
            <div>
              <div>0896 55 56 56 (Ms. Hằng - Dự án)</div>
              <div>0941 283 024 (Mr. Thưởng - Khách lẻ / Thầu thợ)</div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-envelope text-gold"></i>
            <a
              href="mailto:quangthuongqn@gmail.com"
              class="text-light text-decoration-underline"
              >quangthuongqn@gmail.com</a
            >
          </div>
        </address>
      </div>

      <!-- Column 2: Quick Links / Featured Services -->
      <div class="col-12 col-sm-6 col-md-3">
        <h3 class="h6 text-uppercase fw-bold text-white mb-2">
          DỊCH VỤ NỔI BẬT
        </h3>
        <div
          style="
            width: 36px;
            height: 2px;
            background-color: var(--color-secondary);
            margin-bottom: 1rem;
          "
        ></div>

        <ul class="d-flex flex-column gap-2 small">
          <li>
            <a href="#dich-vu" class="footer-nav-link text-decoration-none">
              <span class="text-gold fw-bold">&gt;</span> Bốc tách khối lượng
              miễn phí
            </a>
          </li>
          <li>
            <a href="#dich-vu" class="footer-nav-link text-decoration-none">
              <span class="text-gold fw-bold">&gt;</span> Cung cấp vật tư chính
              hãng
            </a>
          </li>
          <li>
            <a href="#dich-vu" class="footer-nav-link text-decoration-none">
              <span class="text-gold fw-bold">&gt;</span> Thu mua lại vật tư
              thừa
            </a>
          </li>
          <li>
            <a href="#san-pham" class="footer-nav-link text-decoration-none">
              <span class="text-gold fw-bold">&gt;</span> Danh mục sản phẩm
            </a>
          </li>
          <li>
            <a href="#tin-tuc" class="footer-nav-link text-decoration-none">
              <span class="text-gold fw-bold">&gt;</span> Tin tức & kiến thức
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 3: Newsletter Form -->
      <div class="col-12 col-sm-6 col-md-4">
        <h3 class="h6 text-uppercase fw-bold text-white mb-2">
          ĐĂNG KÝ NHẬN TIN
        </h3>
        <div
          style="
            width: 36px;
            height: 2px;
            background-color: var(--color-secondary);
            margin-bottom: 1rem;
          "
        ></div>
        <p class="text-light opacity-75 small mb-3">
          Nhận thông tin báo giá và chính sách chiết khấu mới nhất từ Cơ Điện
          Bình An.
        </p>

        <form id="newsletterForm" class="d-flex flex-column gap-2">
          <div>
            <input
              type="text"
              placeholder="Họ tên"
              class="footer-form-input"
              required
              aria-label="Họ tên"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Số điện thoại"
              class="footer-form-input"
              required
              aria-label="Số điện thoại"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              class="footer-form-input"
              aria-label="Địa chỉ email"
            />
          </div>
          <button
            type="submit"
            class="btn btn-danger py-2 text-uppercase fw-bold small rounded-3 mt-1 shadow-sm d-flex align-items-center justify-content-center gap-1"
            style="
              background-color: var(--color-secondary);
              border-color: var(--color-secondary);
            "
          >
            ĐĂNG KÝ ↗
          </button>
        </form>
      </div>
    </div>

    <!-- Copyright Sub-footer -->
    <div class="footer-copyright-bar text-center small text-secondary">
      <p
        class="mb-0 text-light opacity-75"
        style="font-size: 0.8rem; letter-spacing: 0.02em"
      >
        &copy; 2026 CTY TNHH ĐẦU TƯ & KỸ THUẬT CƠ ĐIỆN
        <strong class="text-white fw-bold">BÌNH AN</strong>. Design by
        <strong class="text-white fw-bold">SOTA</strong>
      </p>
    </div>
  </div>
</footer>

<!-- Modal Thông Báo Đăng Ký Nhận Tin Thành Công -->
<div class="modal fade" id="newsletterSuccessModal" tabindex="-1" aria-labelledby="newsletterSuccessModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" style="max-width: 460px;">
    <div class="modal-content border-0 shadow-lg text-center p-2" style="border-radius: 18px;">
      <div class="modal-body p-4">
        <!-- Success Check Icon -->
        <div class="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm" style="width: 72px; height: 72px; background-color: #ecfdf5; color: #10b981; border: 2px solid #a7f3d0;">
          <i class="fa-solid fa-circle-check fs-1"></i>
        </div>
        
        <h3 class="h4 fw-bold text-primary-blue mb-2" id="newsletterSuccessModalLabel">
          Đăng Ký Thành Công!
        </h3>
        
        <p class="text-muted small mb-3" style="line-height: 1.6; font-size: 0.9rem;">
          Cảm ơn Quý khách <strong id="successCustomerName" class="text-dark fw-bold"></strong> đã tin tưởng. Cơ Điện Bình An đã tiếp nhận thông tin và sẽ gửi bảng giá chiết khấu mới nhất tới Quý vị trong thời gian sớm nhất.
        </p>

        <!-- Hotline support box -->
        <div class="p-3 rounded-3 mb-4 text-start d-flex align-items-center gap-3" style="background-color: var(--color-slate-100); border: 1px dashed var(--color-slate-300);">
          <div class="rounded-circle bg-white text-danger d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style="width: 40px; height: 40px;">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="small">
            <span class="d-block text-muted" style="font-size: 0.78rem;">Hotline hỗ trợ dự án 24/7:</span>
            <a href="tel:0896555656" class="fw-bold text-decoration-none text-danger" style="font-size: 0.95rem;">0896 55 56 56 (Ms. Hằng)</a>
          </div>
        </div>

        <!-- Close Button -->
        <button type="button" class="btn btn-primary w-100 py-2 fw-bold text-uppercase rounded-3 shadow-sm" data-bs-dismiss="modal" style="background-color: var(--color-primary); border-color: var(--color-primary); font-size: 0.88rem; letter-spacing: 0.04em;">
          HOÀN TẤT & ĐÓNG
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Back to Top Floating Button -->
<button type="button" id="backToTopBtn" class="back-to-top-btn" title="Quay lại đầu trang" aria-label="Quay lại đầu trang">
  <i class="fa-solid fa-arrow-up"></i>
</button>

`;
  }
})();
