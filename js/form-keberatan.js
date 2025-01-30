document.getElementById('ajukan-keberatan').addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('form-keberatan');
    
    const checkboxes = document.querySelectorAll('.form-check-input');
    let isChecked = false;
    
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });
  
    if (form.checkValidity() && isChecked) {
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
        
        if (!isChecked) {
            errorMessage = 'Harap pilih minimal satu alasan!';
        }

        Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

document.getElementById('cek-data').addEventListener('click', () => {
    const kode = document.getElementById('kode').value;
    const nik = document.getElementById('nik').value;

    if (kode && nik) {
        Swal.fire({
            title: 'Data Permohonan',
            html: `
                <strong>Kode Permohonan:</strong> ${kode} <br>
                <strong>NIK/No Identitas:</strong> ${nik}
            `,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Harap lengkapi semua isian form.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
