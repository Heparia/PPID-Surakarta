$(document).ready(function () {
    const data = [
        { no: 1, namaPD: "namaPD 1", namadokumen: "Nama dokumen 1", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen1.pdf" },
        { no: 2, namaPD: "namaPD 2", namadokumen: "Nama dokumen 2", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen2.pdf" },
        { no: 3, namaPD: "namaPD 3", namadokumen: "Nama dokumen 3", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen1.pdf" },
        { no: 4, namaPD: "namaPD 4", namadokumen: "Nama dokumen 4", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen1.pdf" },
        { no: 5, namaPD: "namaPD 5", namadokumen: "Nama dokumen 5", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen1.pdf" },
        { no: 6, namaPD: "namaPD 6", namadokumen: "Nama dokumen 6", tahun: "2024", tipefile: "pdf", ukuran: "3 mb", dokumen: "dokumen1.pdf" }
    ];

    // Populate the table with data
    const tableBody = $("#info-table tbody");
    data.forEach(item => {
        const row = `<tr>
            <td>${item.no}</td>
            <td>${item.namaPD}</td>
            <td>${item.namadokumen}</td>
            <td>${item.tahun}</td>
            <td>${item.tipefile}</td>
            <td>${item.ukuran}</td>
            <td class="text-center">
                <a href="/asset/${item.dokumen}" target="_blank">
                    <i class="fas fa-file-alt file-icon"></i>
                </a>
            </td>
        </tr>`;
        tableBody.append(row);
    });

    // Inisialisasi DataTable
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
