(async function() {
  "use strict";

  // Tunggu sampai semua komponen dimuat
  async function waitForComponents() {
    const fetchComponent = async (url, placeholderId, placeholderFile) => {
      const response = await fetch(url);
      const data = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      const menuelemet = document.getElementById('navbar-placeholder');
      let number;
      if(menuelemet) {
        const menu = menuelemet.className;
        number = parseInt(menu.substring(menu.indexOf('menucustom-') + 'menucustom-'.length), 10);
        if (isNaN(number)) {
          alert('Format salah! Harap menuliskan class name pada nav dengan format "menucustom-angka", contoh menucustom-1 pada beranda, menucustom-2 pada profil, menucustom-3 pada informasi publik, dst');
        }
      }
      const component = tempDiv.querySelector(placeholderFile);
  
      if (component) {
        document.getElementById(placeholderId).outerHTML = component.outerHTML;
        if(placeholderId == 'navbar-placeholder'){
          document.querySelectorAll('.main-menu')[number-1].classList.add('active');
        }
      }
    };

    // Muat navbar
    await fetchComponent('/komponen/navbar.html', 'navbar-placeholder', 'header');

    // Muat footer
    await fetchComponent('/komponen/footer.html', 'footer-placeholder', 'footer');

    // Muat scroll top
    await fetchComponent('/komponen/scroll-top.html', 'scroll-top-placeholder', 'a');

    // Muat search modal
    await fetchComponent('/komponen/search-modal.html', 'search-modal-placeholder', 'div');
  }

  await waitForComponents(); // Tunggu hingga navbar dan footer selesai dimuat

  // Eksekusi kode main.js setelah semua komponen dimuat

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  document.querySelector('.mobile-search-toggle').addEventListener('click', () => {
    console.log("klik tombol search");
  })

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Initiate Pure Counter
   */
  // new PureCounter();

$(document).ready(function() {
    $('a[href], img[src]').each(function() {
        let attr = $(this).is('a') ? 'href' : 'src';
        let url = $(this).attr(attr);
        
        // Cek apakah URL mengarah ke domain github.com
        if (url.includes('github.com')) {
            // Tambahkan prefix jika belum ada
            if (!url.startsWith('https://heparia.github.io/PPID-Surakarta/')) {
                $(this).attr(attr, 'https://heparia.github.io/PPID-Surakarta/' + url);
            }
        }
    });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  // Hitung lebar elemen dan sesuaikan posisi
  function adjustDropdownPosition(dropdownParent, dropdownMenu) {
    const parentWidth = dropdownParent.offsetWidth;
    dropdownMenu.style.left = `${parentWidth}px`;
  }

  const dropdowns = document.querySelectorAll('#navmenu .dropdown .dropdown');
  dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('ul'); 
    if (dropdownMenu) {
      adjustDropdownPosition(dropdown, dropdownMenu);
      window.addEventListener('resize', () => adjustDropdownPosition(dropdown, dropdownMenu));
    }
  });

})();
