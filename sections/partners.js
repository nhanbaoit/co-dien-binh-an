(function() {
  var el = document.getElementById('section-partners');
  if (el) {
    el.outerHTML = `
<!-- =========================================================================
     7. SECTION THƯƠNG HIỆU VẬT TƯ & CAM KẾT (BRANDS & COMMITMENTS)
     ========================================================================= -->
<section class="section-partners" id="thuong-hieu">
  <div class="brand-container-1200">
    <!-- Section Title Header -->
    <div class="text-center mx-auto mb-4" style="max-width: 720px;">
      <h2 class="display-6 fw-bold mb-0" style="color: #0B3C8C; font-weight: 800;">
        Thương hiệu vật tư chúng tôi cung cấp
      </h2>
      <!-- Thin Red Underline Accent -->
      <div class="d-flex justify-content-center align-items-center gap-1 my-3">
        <div style="width: 48px; height: 3px; background-color: #B3141B; border-radius: 2px;"></div>
      </div>
      <p class="text-muted small">
        Vật tư điện chính hãng, đầy đủ CO/CQ, chiết khấu cạnh tranh, giao hàng tận công trình.
      </p>
    </div>

    <!-- Row of 4 Brand Cards with Logos (Static Centered 4-Column Grid, Mobile: 2 Columns) -->
    <div class="row g-3 justify-content-center">
      <!-- Card 1: CADIVI -->
      <div class="col-6 col-lg-3">
        <div class="brand-logo-card h-100">
          <div class="brand-logo-box">
            <img 
              src="images/brands/cadivi.svg" 
              onerror="this.onerror=null;this.src='public/images/brands/cadivi.png';" 
              alt="Logo Cadivi" 
              class="brand-logo-img-item" 
              loading="lazy" 
            />
          </div>
          <div class="brand-text-caption">Cáp điện</div>
        </div>
      </div>

      <!-- Card 2: PANASONIC -->
      <div class="col-6 col-lg-3">
        <div class="brand-logo-card h-100">
          <div class="brand-logo-box">
            <img 
              src="public/images/brands/panasonic.svg" 
              onerror="this.onerror=null;this.src='images/brands/panasonic.svg';" 
              alt="Logo Panasonic" 
              class="brand-logo-img-item" 
              loading="lazy" 
            />
          </div>
          <div class="brand-text-caption">Thiết bị điện</div>
        </div>
      </div>

      <!-- Card 3: SINO -->
      <div class="col-6 col-lg-3">
        <div class="brand-logo-card h-100">
          <div class="brand-logo-box">
            <img 
              src="images/brands/sino.svg" 
              onerror="this.onerror=null;this.src='public/images/brands/sino.png';" 
              alt="Logo Sino" 
              class="brand-logo-img-item" 
              loading="lazy" 
            />
          </div>
          <div class="brand-text-caption">Ống & phụ kiện điện</div>
        </div>
      </div>

      <!-- Card 4: SUNTEK -->
      <div class="col-6 col-lg-3">
        <div class="brand-logo-card h-100">
          <div class="brand-logo-box">
            <img 
              src="images/brands/suntek.svg" 
              onerror="this.onerror=null;this.src='public/images/brands/suntek.png';" 
              alt="Logo SUNTEK" 
              class="brand-logo-img-item" 
              loading="lazy" 
            />
          </div>
          <div class="brand-text-caption">Thiết bị Solar</div>
        </div>
      </div>
    </div>

    <!-- Note below grid -->
    <div class="text-center mt-3 pt-1">
      <small class="text-muted" style="font-size: 0.8125rem;">
        Logo thuộc quyền sở hữu của các hãng tương ứng.
      </small>
    </div>
  </div>
</section>


`;
  }
})();
