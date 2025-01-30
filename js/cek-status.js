document.getElementById('cek-status').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const form = document.getElementById('cek-status');
    if (form.checkValidity()) {
        Swal.fire({
            title: 'Berhasil!',
            text: 'Form Permohonan telah berhasil dikirim.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                form.reset(); 
                // form.submit();
            }
        });
    } else {
        let errorMessage = 'Harap lengkapi semua isian form dan pastikan semua sesuai format.';
        Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
