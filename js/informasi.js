document.getElementById("tampilkan-lebih-banyak").addEventListener("click", function() {
    var tambahan = document.querySelectorAll(".informasi-section.tambahan");
    var isHidden = Array.from(tambahan).some(el => el.style.display === "none");

    tambahan.forEach(function(el) {
        el.style.display = isHidden ? "block" : "none"; 
    });

    this.textContent = isHidden ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"; 
});
