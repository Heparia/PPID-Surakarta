// Data for Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['2021-2025', '2024', '2023'],
        datasets: [{
            label: 'Jumlah',
            data: [25, 15, 10],
            backgroundColor: '#003366',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Data for Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['2023', '2024', '2025'],
        datasets: [{
            label: 'Jumlah',
            data: [10, 20, 30],
            borderColor: '#003366',
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Data for Pie Charts
const pieData = {
    labels: ['2021-2023', '2024'],
    datasets: [{
        data: [41.7, 31],
        backgroundColor: ['rgb(133, 190, 255)', '#19304b']
    }]
};

const pieOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'bottom' }
    }
};


new Chart(document.getElementById('pieChart1').getContext('2d'), { type: 'pie', data: pieData, options: pieOptions });
new Chart(document.getElementById('pieChart2').getContext('2d'), { type: 'pie', data: pieData, options: pieOptions });
new Chart(document.getElementById('pieChart3').getContext('2d'), { type: 'pie', data: pieData, options: pieOptions });


// Data for the table Daftar Perangkat Daerah
const dataPerangkatDaerah = [
    { no: 1, ppidOpd: 'BADAN KEPEGAWAIAN DAERAH', dipPublish: 0, laporan: '-' },
    { no: 2, ppidOpd: 'BADAN KESATUAN BANGSA DAN POLITIK', dipPublish: 0, laporan: '-' },
    { no: 3, ppidOpd: 'BADAN PELAYANAN PENGADAAN BARANG JASA', dipPublish: 0, laporan: '-' },
    { no: 4, ppidOpd: 'BADAN PEMBINAAN BADAN USAHA MILIK DAERAH', dipPublish: 1, laporan: '-' },
    { no: 5, ppidOpd: 'BADAN PENANGGULANGAN BENCANA DAERAH', dipPublish: 0, laporan: '-' },
    { no: 6, ppidOpd: 'BADAN PENDAPATAN DAERAH', dipPublish: 1, laporan: '-' },
    { no: 7, ppidOpd: 'BADAN PENGELOLAAN ASET DAERAH', dipPublish: 0, laporan: '-' },
    { no: 8, ppidOpd: 'BADAN PENGELOLAAN KEUANGAN DAERAH', dipPublish: 0, laporan: '-' }
];

// Data for the table Alasan Penolakan Permohonan Publik
const dataPenolakan = [
    { no: 1, namaPemohon: 'Ali Usman', alasanPenolakan: 'Data tidak lengkap', tanggal: '2025-01-18' },
    { no: 2, namaPemohon: 'Budi Santoso', alasanPenolakan: 'Dokumen tidak sesuai', tanggal: '2025-01-20' },
    { no: 3, namaPemohon: 'Siti Nurhaliza', alasanPenolakan: 'Tidak ada bukti pendukung', tanggal: '2025-01-22' }
];

$(document).ready(function() {
    // Menghancurkan DataTable jika sudah ada sebelumnya
    if ($.fn.dataTable.isDataTable('#perangkat-daerah-table')) {
        $('#perangkat-daerah-table').DataTable().clear().destroy();
    }

    // Inisialisasi DataTable untuk "Daftar Perangkat Daerah"
    $('#perangkat-daerah-table').DataTable({
        data: dataPerangkatDaerah, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'ppidOpd' },
            { data: 'dipPublish' },
            { data: 'laporan' }
        ],
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });

    // Menghancurkan DataTable jika sudah ada sebelumnya
    if ($.fn.dataTable.isDataTable('#info-table')) {
        $('#info-table').DataTable().clear().destroy();
    }

    // Inisialisasi DataTable untuk "Alasan Penolakan Permohonan Publik"
    $('#info-table').DataTable({
        data: dataPenolakan, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'namaPemohon' },
            { data: 'alasanPenolakan' },
            { data: 'tanggal' }
        ],
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });
});

// Data for the table Alasan Keberatan Informasi Publik
const dataKeberatan = [
    { 
        no: 1, 
        nomorRegKeberatan: '202400027-KBI', 
        kodePermohonan: '24-3840-13', 
        catatan: 'Permintaan informasi tidak ditanggapi sebagaimana yang diminta, Tidak dipenuhinya permintaan informasi', 
        tanggal: '2024-11-11' 
    }
    // Data lainnya bisa ditambahkan di sini
];

$(document).ready(function() {
    // Menghancurkan DataTable jika sudah ada sebelumnya
    if ($.fn.dataTable.isDataTable('#alasan-keberatan-table')) {
        $('#alasan-keberatan-table').DataTable().clear().destroy();
    }

    // Inisialisasi DataTable untuk "Alasan Keberatan Informasi Publik"
    $('#alasan-keberatan-table').DataTable({
        data: dataKeberatan, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'nomorRegKeberatan' },
            { data: 'kodePermohonan' },
            { data: 'catatan' },
            { data: 'tanggal' }
        ],
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });

    // Menghancurkan DataTable jika sudah ada sebelumnya
    if ($.fn.dataTable.isDataTable('#perangkat-daerah-table')) {
        $('#perangkat-daerah-table').DataTable().clear().destroy();
    }

    // Inisialisasi DataTable untuk "Daftar Perangkat Daerah"
    $('#perangkat-daerah-table').DataTable({
        data: dataPerangkatDaerah, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'ppidOpd' },
            { data: 'dipPublish' },
            { data: 'laporan' }
        ],
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });

    // Menghancurkan DataTable jika sudah ada sebelumnya
    if ($.fn.dataTable.isDataTable('#info-table')) {
        $('#info-table').DataTable().clear().destroy();
    }

    // Inisialisasi DataTable untuk "Alasan Penolakan Permohonan Publik"
    $('#info-table').DataTable({
        data: dataPenolakan, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'namaPemohon' },
            { data: 'alasanPenolakan' },
            { data: 'tanggal' }
        ],
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });
});
