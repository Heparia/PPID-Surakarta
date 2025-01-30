document.addEventListener("DOMContentLoaded", () => {
  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
  
    // Inisialisasi Swiper Sliders
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        // Inisialisasi Swiper dengan konfigurasi yang sudah didapat
        const swiperInstance = new Swiper(swiperElement, config);
  
        // Setelah gambar baru ditambahkan, update Swiper
        swiperInstance.update();  // Mengupdate Swiper agar bisa mengenali gambar baru yang ditambahkan
      });
    }
  
    // Inisialisasi Swiper setelah halaman dimuat
    initSwiper();
  
  });
  $(document).ready(function () {
    const data = [
        {
            no: 1,
            namaPD: "namaPD 1",
            namadokumen: "Nama dokumen 1",
            tahun: "2024",
            tipefile: "pdf",
            ukuran: "3 mb",
            dokumen: "dokumen 1",
        },
        
       
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
            <td>${item.dokumen}</td>
        </tr>`;
        tableBody.append(row);
    });
  
    
    $("#info-table").DataTable({
        paging: true,
        searching: true,
        lengthChange: true,
        pageLength: 5, 
        responsive: true,
        language: {
            search: "Cari:",
            lengthMenu: "Tampilkan MENU data per halaman",
            zeroRecords: "Tidak ada data yang ditemukan",
            info: "Menampilkan START sampai END dari TOTAL data",
            infoEmpty: "Tidak ada data tersedia",
            infoFiltered: "(difilter dari total MAX data)",
            paginate: {
                first: "Awal",
                last: "Akhir",
                next: "Next",
                previous: "Previous"
            }
        }
      });
   

  });
  
  