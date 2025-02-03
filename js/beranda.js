const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardWrapper = document.querySelector('.card-deck-wrapper');
const cards = document.querySelectorAll('.card-deck-wrapper .card-p'); 

function getCurrentCardIndex() {
  const wrapperScrollLeft = cardWrapper.scrollLeft;
  let closestIndex = 0;
  let closestDistance = Infinity;

  cards.forEach((card, index) => {
    const distance = Math.abs(card.offsetLeft - wrapperScrollLeft);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function updateButtonState() {
  const currentIndex = getCurrentCardIndex();

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

prevBtn.addEventListener('click', () => {
  const currentIndex = getCurrentCardIndex();
  if (currentIndex > 0) {
    cards[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setTimeout(updateButtonState, 300); 
  }
});

nextBtn.addEventListener('click', () => {
  const currentIndex = getCurrentCardIndex();
  if (currentIndex < cards.length - 1) {
    cards[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setTimeout(updateButtonState, 300); 
  }
});

updateButtonState();

$(document).ready(function() {
  $.getJSON("/konten/data/website-perangkat-daerah.json", function(data) {
      data.forEach(function(item) {
          const link = item.url || "#";
          const image = item.logo || "/asset/logo.png";

          const html = `
              <a href="${link}" data-aos="fade-up" class="link-item text-center p-5 rounded-5 text-decoration-none fcc-1 border-primary border border-2">
                  <img src="${image}" onerror="this.src='/asset/logo.png'" class="img-fluid mb-3">
                  <p class="m-0">${item.nama}</p>
              </a>
          `;
          $("#websitePerangkatDaerah").append(html);
      });
  }).fail(function() {
      console.error("Failed to fetch data.");
  });
});

$(document).ready(function() {
  $.getJSON("/konten/data/galery-image.json", function(imageData) {
      if (imageData.length >= 2) {
          $(".col-12.col-md-6 .d-flex a").eq(0).find("img").attr("src", imageData[0].url || "/asset/banner-1.png");
          $(".col-12.col-md-6 .d-flex a").eq(1).find("img").attr("src", imageData[1].url || "/asset/banner-1.png");
      }
  }).fail(function() {
      console.error("Failed to fetch image data.");
  });

  $.getJSON("/konten/data/galery-video.json", function(videoData) {
      if (videoData.length > 0) {
          $(".col-12.col-md-5 .ratio iframe").attr("src", videoData[0].url);
      }
  }).fail(function() {
      console.error("Failed to fetch video data.");
  });
});


$(document).ready(function () {
  $.getJSON("/konten/data/berita-surakarta.json", function (data) {
      const beritaTeratas = data.slice(0, 4);
      $.each(beritaTeratas, function (index, berita) {
          const beritaHtml = `
              <div class="col-12 col-md-6 col-xl-3 mb-4" data-aos="fade-up">
                  <div class="card rounded-custom shadow-sm mb-4 mb-md-0">
                      <div class="header-custom-card my-3 d-flex flex-row ps-4">
                          <div class="d-flex justify-content-center align-items-center me-2">
                              <div class="rounded-circle bgc-1"></div>
                          </div>
                          <div class="d-flex justify-content-center align-items-center me-2">
                              <div class="rounded-circle bgc-2"></div>
                          </div>  
                          <div class="d-flex justify-content-center align-items-center">
                              <div class="rounded-circle bgc-2"></div>
                          </div>                                  
                      </div>
                      <div class="ratio ratio-16x9">
                        <img src="${berita.gambar}" class="card-img-top rounded-0" alt="${berita.judul}" style="object-fit: cover;">
                      </div>  
                      <div class="card-body p-4 hover-custom-1">
                          <h5 class="card-title">${berita.judul}</h5>
                          <p class="card-text">${berita.deskripsi}...</p>
                          <a href="/page/berita/detail-berita.html?jenis-berita=berita-surakarta&id=${berita.no}" class="text-decoration-none text-center text-white bgc-1 d-flex rounded-2 justify-content-center py-1">Selengkapnya</a>
                      </div>
                  </div>
              </div>`;
          $("#berita-terbaru-container").prepend(beritaHtml);
      });
  }).fail(function () {
      console.error("Gagal memuat data berita.");
  });
});

$(document).ready(function () {
  $.getJSON("/konten/data/pers-surakarta.json", function (data) {
      const beritaTeratas = data.slice(0, 4);
      $.each(beritaTeratas, function (index, berita) {
          const beritaHtml = `
              <div class="col-12 col-md-6 col-xl-3 mb-4" data-aos="fade-up">
                  <div class="card rounded-custom shadow-sm mb-4 mb-md-0">
                      <div class="header-custom-card my-3 d-flex flex-row ps-4">
                          <div class="d-flex justify-content-center align-items-center me-2">
                              <div class="rounded-circle bgc-1"></div>
                          </div>
                          <div class="d-flex justify-content-center align-items-center me-2">
                              <div class="rounded-circle bgc-2"></div>
                          </div>  
                          <div class="d-flex justify-content-center align-items-center">
                              <div class="rounded-circle bgc-2"></div>
                          </div>                                  
                      </div>
                      <div class="ratio ratio-16x9">
                        <img src="${berita.gambar}" class="card-img-top rounded-0" alt="${berita.judul}" style="object-fit: cover;">
                      </div>  
                      <div class="card-body p-4 hover-custom-1">
                          <h5 class="card-title">${berita.judul}</h5>
                          <p class="card-text">${berita.deskripsi}...</p>
                          <a href="${berita.url}" class="text-decoration-none text-center text-white bgc-1 d-flex rounded-2 justify-content-center py-1" target="_blank">Selengkapnya</a>
                      </div>
                  </div>
              </div>`;
          $("#berita-pers-container").prepend(beritaHtml);
      });
  }).fail(function () {
      console.error("Gagal memuat data berita.");
  });
});