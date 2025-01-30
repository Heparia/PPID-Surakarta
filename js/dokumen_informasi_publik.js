$(document).ready(function () {
    const data = [
        {
            no: 1,
            tanggal: "2 januari 2024",
            informasi: "info 1",
            ppid: "ppid 1",
            judul: "judul 1",
            tipe: "pdf",
            ukuran: "1 mb",
            dokumen: "dokumen 1"
        },
        {
            no: 2,
            tanggal: "2 januari 2024",
            informasi: "info 2",
            ppid: "ppid 2",
            judul: "judul 2",
            tipe: "pdf",
            ukuran: "2 mb",
            dokumen: "dokumen 2"
        }, 
        {
            no: 3,
            tanggal: "3 januari 2024",
            informasi: "info 3",
            ppid: "ppid 3",
            judul: "judul 3",
            tipe: "pdf",
            ukuran: "3 mb",
            dokumen: "dokumen 3"
        }, 
        {
            no: 4,
            tanggal: "4 januari 2024",
            informasi: "info 4",
            ppid: "ppid 4",
            judul: "judul 4",
            tipe: "pdf",
            ukuran: "4 mb",
            dokumen: "dokumen 4"
        }, 
        {
            no: 5,
            tanggal: "5 januari 2024",
            informasi: "info 5",
            ppid: "ppid 5",
            judul: "judul 5",
            tipe: "pdf",
            ukuran: "5 mb",
            dokumen: "dokumen 5"
        }, 
        {
            no: 6,
            tanggal: "6 januari 2024",
            informasi: "info 6",
            ppid: "ppid 6",
            judul: "judul 6",
            tipe: "pdf",
            ukuran: "6 mb",
            dokumen: "dokumen 6"
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
            <td>${item.dokumen}</td>
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
