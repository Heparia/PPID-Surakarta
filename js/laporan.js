document.querySelectorAll('.slider').forEach((slider) => {
    const gallery = slider.querySelector('.gallery');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
  
    let scrollAmount = 0;
  
    nextBtn.addEventListener('click', () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      if (scrollAmount < maxScroll) {
        scrollAmount += gallery.clientWidth / 2; // Geser setengah layar
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (scrollAmount > 0) {
        scrollAmount -= gallery.clientWidth / 2;
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });
  });
  