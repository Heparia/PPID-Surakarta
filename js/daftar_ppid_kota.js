$(document).ready(function () {
    const data = [
        {
            no: 1,
            judul: "Kedudukan/ domisili beserta alamat lengkap",
            ringkasan: "Berisi tentang kedudukan, domisili, alamat lengkap Pemerintah Kota Surakarta di Jalan Jenderal Sudirman no 2 Surakarta",
            pejabat: "PPID Kota Surakarta",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/informasi/kedudukan-domisili-beserta-alamat-lengkap/"
        },
        {
            no: 2,
            judul: "Visi dan Misi",
            ringkasan: "MEWUJUDKAN SURAKARTA SEBAGAI KOTA BUDAYA YANG MODERN, TANGGUH, GESIT, KREATIF DAN SEJAHTERA",
            pejabat: "Badan Perencanaan Pembangunan Daerah Kota Surakarta",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/visi-dan-misi/"
        },
        {
            no: 3,
            judul: "Tugas dan Fungsi",
            ringkasan: "Perwali Nomor 40 Tahun 2021 Tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja Dinas",
            pejabat: "PPID",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/informasi/tugas-dan-fungsi/"
        },
        {
            no: 4,
            judul: "Struktur Organisasi",
            ringkasan: "Memuat Informasi tentang Struktur Organisasi perangkat daerah sebagaimana diatur dalam Peraturan Daerah Nomor 8 Tahun 2021 tentang Pembentukan dan Susunan Perangkat Daerah Kota Surakarta",
            pejabat: "PPID",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/informasi/struktur-organisasi-tugas-wewenang-dan-fungsi/"
        },
        {
            no: 5,
            judul: "Berisi informasi profil pimpinan Pemerintah Kota Surakarta, yaitu: a. Walikota b. Wakil Walikota c. Sekretaris Daerah",
            ringkasan: "Bagian Protokol Komunikasi dan Administrasi Pimpinan Setda Kota Surakarta",
            pejabat: "PPID",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/informasi/profil-pimpinan-pemerintah-kota-surakarta/"
        },
        {
            no: 6,
            judul: "	LHKPN",
            ringkasan: "Data LHKPN Pejabat Walikota, Wakil Walikota, Sekretaris Daerah, Pejabat lainnya yang telah diperiksa, diverifikasi, dan diumumkan oleh KPK",
            pejabat: "BKPSDM Kota Surakarta",
            penanggung: "PPID",
            waktu: "2024",
            bentuk: "Softfile",
            jangka: "selama berlaku",
            media: "http://ppid.surakarta.go.id/informasi/lhkpn/"
        },
    ];

    // Populate the table with data
    const tableBody = $("#info-table tbody");
    data.forEach(item => {
        const mediaLink = item.media.startsWith("http") ? `<a href="${item.media}" target="_blank">Link</a>` : item.media;
        const row = `<tr>
            <td>${item.no}</td>
            <td>${item.judul}</td>
            <td>${item.ringkasan}</td>
            <td>${item.pejabat}</td>
            <td>${item.penanggung}</td>
            <td>${item.waktu}</td>
            <td>${item.bentuk}</td>
            <td>${item.jangka}</td>
            <td>${mediaLink}</td>
        </tr>`;
        tableBody.append(row);
    });

    // Initialize DataTable
    $("#info-table").DataTable({
        paging: true,
        searching: true,
        lengthChange: true,
        pageLength: 5, 
        responsive: true,
        language: {
            search: "Cari:",
            lengthMenu: "Tampilkan _MENU_ data per halaman",
            zeroRecords: "Tidak ada data yang ditemukan",
            info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
            infoEmpty: "Tidak ada data tersedia",
            infoFiltered: "(difilter dari total _MAX_ data)",
            paginate: {
                first: "Awal",
                last: "Akhir",
                next: "Next",
                previous: "Previous"
            }
        }
    });
});
