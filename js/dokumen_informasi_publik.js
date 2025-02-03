$(document).ready(function () {
    const data = [
        {
            no: 1,
            tanggal: "2 Januari 2024",
            informasi: "info 1",
            ppid: "ppid 1",
            judul: "judul 1",
            tipe: "pdf",
            ukuran: "1 mb",
            dokumen: "dokumen1.pdf"
        },
        {
            no: 2,
            tanggal: "2 Januari 2024",
            informasi: "info 2",
            ppid: "ppid 2",
            judul: "judul 2",
            tipe: "pdf",
            ukuran: "2 mb",
            dokumen: "dokumen2.pdf"
        }, 
        {
            no: 3,
            tanggal: "3 Januari 2024",
            informasi: "info 3",
            ppid: "ppid 3",
            judul: "judul 3",
            tipe: "pdf",
            ukuran: "3 mb",
            dokumen: "dokumen1.pdf"
        }, 
        {
            no: 4,
            tanggal: "4 Januari 2024",
            informasi: "info 4",
            ppid: "ppid 4",
            judul: "judul 4",
            tipe: "pdf",
            ukuran: "4 mb",
            dokumen: "dokumen1.pdf"
        }, 
        {
            no: 5,
            tanggal: "5 Januari 2024",
            informasi: "info 5",
            ppid: "ppid 5",
            judul: "judul 5",
            tipe: "pdf",
            ukuran: "5 mb",
            dokumen: "dokumen1.pdf"
        }, 
        {
            no: 6,
            tanggal: "6 Januari 2024",
            informasi: "info 6",
            ppid: "ppid 6",
            judul: "judul 6",
            tipe: "pdf",
            ukuran: "6 mb",
            dokumen: "dokumen1.pdf"
        },
    ];

    // Populate the table with data
    const tableBody = $("#info-table tbody");
    data.forEach(item => {
        const row = `<tr>
            <td>${item.no}</td>
            <td>${item.tanggal}</td>
            <td>${item.informasi}</td>
            <td>${item.ppid}</td>
            <td>${item.judul}</td>
            <td>${item.tipe}</td>
            <td>${item.ukuran}</td>
            <td class="text-center">
                <a href="/asset/${item.dokumen}" target="_blank">
                    <i class="fas fa-file-alt file-icon"></i>
                </a>
            </td>
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
