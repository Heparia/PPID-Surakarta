$(document).ready(() => {
    console.log("Berhasil memuat detail berita");
    const beritaId = getURLParameter('id'); 
    const jenisBerita = getURLParameter('jenis-berita');
    const previousPage = getPreviousPage(jenisBerita, beritaId);

    console.log('Berita ID:', beritaId);
    console.log('Jenis Berita:', jenisBerita);
    console.log('Nama Jenis Berita:', pairingTypeAndNameNews(jenisBerita))

    fetchBerita(jenisBerita, beritaId).then(berita => {
        if (berita) {
            console.log(berita);
            renderData(berita, pairingTypeAndNameNews(jenisBerita), previousPage);
        }
    });
    
});

const renderData = (berita, jenisBerita, previous) => {
    $('#jenis-berita-breadcrumb').text(jenisBerita);
    $('#jenis-berita-breadcrumb').attr('href', previous);
    $('#judul-berita-breadcrumb').text(berita.judul);
    $('#gambar-berita').attr('src', berita.gambar);
    $("#gambar-berita").on("error", function() {
        $(this).attr("src", "/asset/berita/image-default.png");
    });
    $('#judul-berita').text(berita.judul);
    $('#tanggal-berita').text(berita.tanggal);
    $('#penulis-berita').text(berita.penulis);
    $('#deskripsi-berita').text(getParagraft(berita.deskripsi));
}

const getURLParameter = (name) => {
    const regex = new RegExp(`[?&]${name}=([^&#]*)`);
    const result = regex.exec(window.location.search);
    return result ? decodeURIComponent(result[1]) : null;
}

const pairingTypeAndNameNews = (type) => {
    const newsTypes = {
        'berita-surakarta': 'Berita Kota Surakarta',
        'berita-transparansi': 'Berita Transparansi'
    };
    return newsTypes[type] || 'Tidak Diketahui'; 
};

const getPreviousPage = (type, id) => {
    const newsTypes = {
        'berita-surakarta': `/page/berita/berita-surakarta.html#id-berita-${id}`,
        'berita-transparansi':  `/page/berita/berita-transparansi.html#${id}`
    };
    return newsTypes[type] || 'Tidak Diketahui'; 
};

const fetchBerita = async (tipe, id) => {
    let url = '';
    if (tipe === 'berita-surakarta') {
        url = '/konten/data/berita-surakarta.json';
    } else if (tipe === 'berita-transparansi') {
        url = '/konten/data/berita-transparansi.json';
    } else {
        console.error('Tipe berita tidak valid');
        return;
    }

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Gagal mengakses file JSON');
        }

        const data = await response.json();
        const berita = data.find(item => item.no == id);

        if (berita) {
            return berita;
        } else {
            console.log('Data tidak ditemukan');
            return null;
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};

const getParagraft = (inputString) => {
    inputString.split('\n').forEach(function (text) {
        if ($.trim(text) !== '') { 
          $('<p></p>', {
            text: text,
            class: 'paragraph' 
          }).appendTo('#deskripsi-berita');
        }
    });
}