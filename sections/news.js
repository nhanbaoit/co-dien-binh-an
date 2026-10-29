(function() {
  var el = document.getElementById('section-news');
  if (el) {
    el.outerHTML = `
<!-- =========================================================================
     6. SECTION TIN TỨC (NEWS & ARTICLES)
     ========================================================================= -->
<section id="tin-tuc" class="section-news">
  <div class="custom-container">
    <!-- Section Title Header -->
    <div class="text-center mx-auto mb-5" style="max-width: 600px;">
      <h2 class="display-6 fw-bold text-primary-blue mb-0">
        Tin tức
      </h2>
      <div style="width: 50px; height: 3.5px; background-color: var(--color-secondary); margin: 0.75rem auto 0; border-radius: 99px;"></div>
    </div>

    <!-- News Carousel Wrapper -->
    <div class="position-relative px-md-4">
      <!-- Prev Button -->
      <button id="newsPrevBtn" type="button" class="btn btn-light rounded-circle shadow-sm border position-absolute top-50 start-0 translate-middle-y z-2 d-none d-md-flex align-items-center justify-content-center" style="width: 44px; height: 44px;" aria-label="Tin trước">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <!-- 3 News Cards Row -->
      <div class="row g-4" id="newsContainer">
        
        <!-- News Card 1: Cách kiểm tra cáp điện khi nhập về công trình -->
        <div class="col-12 col-md-4">
          <article class="news-card h-100">
            <div>
              <div class="news-cover-wrap">
                <span class="news-pill-badge">Kiến thức</span>
                <img
                  src="assets/images/news-kiem-tra-cap.jpg"
                  onerror="this.onerror=null;this.src='images/news-kiem-tra-cap.jpg';"
                  alt="Cách kiểm tra cáp điện khi nhập về công trình"
                  class="news-cover-img"
                  loading="lazy"
                />
                <div class="news-navy-overlay"></div>
              </div>
              <div class="p-4 pb-3">
                <h3 class="h6 fw-bold text-dark line-clamp-2 mb-2" style="font-size: 1.05rem; line-height: 1.45;">
                  Cách kiểm tra cáp điện khi nhập về công trình
                </h3>
                <p class="text-muted line-clamp-3 mb-0" style="font-size: 0.875rem; line-height: 1.6;">
                  Hướng dẫn chi tiết cách kiểm tra tem mác, độ dày cách điện XLPE/PVC, quy cách ruột đồng và đối chiếu chứng chỉ CO/CQ xuất xưởng chống hàng giả.
                </p>
              </div>
            </div>
            <div class="px-4 py-3 d-flex align-items-center justify-content-between border-top bg-white">
              <a href="#" class="text-brand-red text-uppercase fw-bold text-decoration-none" style="font-size: 0.85rem; letter-spacing: 0.03em;">ĐỌC TIẾP →</a>
              <span class="text-muted d-inline-flex align-items-center gap-1" style="font-size: 0.8125rem;"><i class="fa-regular fa-calendar"></i> 30/9/2026</span>
            </div>
          </article>
        </div>

        <!-- News Card 2: Quy trình giao vật tư đầy đủ CO/CQ, giao tận công trình -->
        <div class="col-12 col-md-4">
          <article class="news-card h-100">
            <div>
              <div class="news-cover-wrap">
                <span class="news-pill-badge">Vật tư</span>
                <img
                  src="assets/images/news-co-cq.jpg"
                  onerror="this.onerror=null;this.src='images/news-co-cq.jpg';"
                  alt="Quy trình giao vật tư đầy đủ CO/CQ, giao tận công trình"
                  class="news-cover-img"
                  loading="lazy"
                />
                <div class="news-navy-overlay"></div>
              </div>
              <div class="p-4 pb-3">
                <h3 class="h6 fw-bold text-dark line-clamp-2 mb-2" style="font-size: 1.05rem; line-height: 1.45;">
                  Quy trình giao vật tư đầy đủ CO/CQ, giao tận công trình
                </h3>
                <p class="text-muted line-clamp-3 mb-0" style="font-size: 0.875rem; line-height: 1.6;">
                  Cơ Điện Bình An cam kết bàn giao 100% vật tư chính hãng Cadivi, Panasonic, Sino kèm đầy đủ chứng nhận CO/CQ, test report và hóa đơn đúng tiến độ.
                </p>
              </div>
            </div>
            <div class="px-4 py-3 d-flex align-items-center justify-content-between border-top bg-white">
              <a href="#" class="text-brand-red text-uppercase fw-bold text-decoration-none" style="font-size: 0.85rem; letter-spacing: 0.03em;">ĐỌC TIẾP →</a>
              <span class="text-muted d-inline-flex align-items-center gap-1" style="font-size: 0.8125rem;"><i class="fa-regular fa-calendar"></i> 28/9/2026</span>
            </div>
          </article>
        </div>

        <!-- News Card 3: Bốc tách khối lượng điện: những lỗi nhà thầu hay gặp -->
        <div class="col-12 col-md-4">
          <article class="news-card h-100">
            <div>
              <div class="news-cover-wrap">
                <span class="news-pill-badge">Dịch vụ</span>
                <img
                  src="assets/images/news-boc-tach.jpg"
                  onerror="this.onerror=null;this.src='images/news-boc-tach.jpg';"
                  alt="Bốc tách khối lượng điện: những lỗi nhà thầu hay gặp"
                  class="news-cover-img"
                  loading="lazy"
                />
                <div class="news-navy-overlay"></div>
              </div>
              <div class="p-4 pb-3">
                <h3 class="h6 fw-bold text-dark line-clamp-2 mb-2" style="font-size: 1.05rem; line-height: 1.45;">
                  Bốc tách khối lượng điện: những lỗi nhà thầu hay gặp
                </h3>
                <p class="text-muted line-clamp-3 mb-0" style="font-size: 0.875rem; line-height: 1.6;">
                  Tổng hợp những sai sót phổ biến khi đo đếm bản vẽ CAD mặt bằng và sơ đồ nguyên lý, cùng giải pháp bốc tách khối lượng miễn phí 100% trong 24 giờ.
                </p>
              </div>
            </div>
            <div class="px-4 py-3 d-flex align-items-center justify-content-between border-top bg-white">
              <a href="#" class="text-brand-red text-uppercase fw-bold text-decoration-none" style="font-size: 0.85rem; letter-spacing: 0.03em;">ĐỌC TIẾP →</a>
              <span class="text-muted d-inline-flex align-items-center gap-1" style="font-size: 0.8125rem;"><i class="fa-regular fa-calendar"></i> 25/9/2026</span>
            </div>
          </article>
        </div>

      </div>

      <!-- Next Button -->
      <button id="newsNextBtn" type="button" class="btn btn-light rounded-circle shadow-sm border position-absolute top-50 end-0 translate-middle-y z-2 d-none d-md-flex align-items-center justify-content-center" style="width: 44px; height: 44px;" aria-label="Tin tiếp theo">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
`;
  }
})();
