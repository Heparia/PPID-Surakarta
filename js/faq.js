document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const button = item.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        // Tutup semua jawaban terlebih dahulu
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.textContent = '⬇');

        // Tampilkan atau sembunyikan jawaban yang dipilih
        if (!isOpen) {
            answer.style.display = 'block';
            button.textContent = '⬆';
        } else {
            answer.style.display = 'none';
            button.textContent = '⬇';
        }
    });
});
