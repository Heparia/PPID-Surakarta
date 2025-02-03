$(document).ready(function () {
    const tipe = $('main').data('jenis-berita');
    const urlBerita = getUrlBerita(tipe);

    fetch(urlBerita)
        .then(response => response.json()) 
        .then(berita => {
            const beritaContainer = $('#berita-placeholder');
            let currentIndex = 0; 
            function renderItems() {
                const batch = berita.slice(currentIndex, currentIndex + 4);
                
                batch.forEach(item => {

                    const itemBerita = `
                        <div class="col-12 col-xl-6 item-berita row mb-5" id="id-berita-${item.no}">
                            <div class="col-12 col-md-5 mb-md-0 mb-3">
                                <div class="ratio ratio-1x1" style="border-radius: 10px; overflow: hidden;">
                                    <img src="${item.gambar}" 
                                        class="w-100 h-100" 
                                        onerror="this.onerror=null; this.src='/asset/berita/image-default.png';" 
                                        style="object-fit: cover;">
                                </div>
                            </div>
                            <div class="col-12 col-md-7 item-berita-body">
                                <h5 class="fw-bold">${item.judul}</h5>
                                <div class="publish-date d-flex align-items-center fcc-1 gap-1 my-2">
                                    <span class="material-symbols-outlined">calendar_month</span>
                                    <p class="fcc-2 fst-italic m-0">${item.tanggal}</p>
                                </div>
                                <p class="deskripsi">${item.deskripsi}</p>
                                <a href="/page/berita/detail-berita.html?jenis-berita=${tipe}&id=${item.no}" class="bgc-2 text-white d-flex rounded-5 p-1 justify-content-center text-decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                    `;
                    beritaContainer.append(itemBerita);
                });

                currentIndex += 4;
                if (currentIndex >= berita.length) {
                    $('#loadmore').hide();
                    beritaContainer.append('<p class="fcc-3 w-100 fst-italic text-center">Semua berita sudah ditampilkan.</p>');
                }
            }

            renderItems();

            const loadMoreButton = $('#loadmore');

            loadMoreButton.on('click', function() {
                renderItems();
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            $('#berita-placeholder').append('<p class="text-center">Terjadi kesalahan saat memuat data berita. Lakukan refresh secara berkala.</p>');
            $('#loadmore').hide();
            Swal.fire({
                title: 'Error!',
                text: "Terjadi kesalahan saat memuat data berita",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
});


const getUrlBerita = (tipe) => {
    let url = '';
    console.log(tipe)
    if (tipe == 'berita-surakarta') {
        url = '/konten/data/berita-surakarta.json';
    } else if (tipe == 'berita-transparansi') {
        url = '/konten/data/berita-transparansi.json';
    } else {
        console.error('Tipe berita tidak valid');
        return;
    }
    return url;
};