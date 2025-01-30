document.getElementById('ajukan-permohonan').addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('form-permohonan');
    if (form.checkValidity()) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Form Permohonan telah berhasil dikirim.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          form.reset(); 
        //   form.submit();
        }
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Harap lengkapi semua isian form dan pastikan semua sesuai format.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  });
