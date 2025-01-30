// Daftar data yang akan ditampilkan di tabel
const dataPPID = [
    { no: 1, nama: 'John Doe', perangkatDaerah: 'Dinas Kominfo', satuanUnitKerja: 'Seksi Pengolahan Data', jabatan: 'Kepala Seksi', golongan: 'IV/A', lastUpdate: '2025-01-20' },
    { no: 2, nama: 'Jane Smith', perangkatDaerah: 'Dinas Pendidikan', satuanUnitKerja: 'Kepala Bidang Kurikulum', jabatan: 'Kepala Bidang', golongan: 'III/B', lastUpdate: '2025-01-18' },
    { no: 3, nama: 'Budi Santoso', perangkatDaerah: 'Dinas Kesehatan', satuanUnitKerja: 'Sekretariat', jabatan: 'Sekretaris', golongan: 'II/C', lastUpdate: '2025-01-15' }
    // Data lainnya bisa ditambahkan di sini
];

$(document).ready(function() {
    // Inisialisasi DataTable
    $('#info-table').DataTable({
        data: dataPPID, // Mengisi data ke DataTable
        columns: [
            { data: 'no' },
            { data: 'nama' },
            { data: 'perangkatDaerah' },
            { data: 'satuanUnitKerja' },
            { data: 'jabatan' },
            { data: 'golongan' },
            { data: 'lastUpdate' }
        ],
        // Opsional: Setelan DataTable lainnya
        pageLength: 10,
        lengthChange: false,
        ordering: true,
        searching: true,
        responsive: true
    });
});
