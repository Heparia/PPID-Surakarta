import '/js/global/base.js'

(async function () {
  "use strict";

  async function fetchComponent(url, placeholderId, placeholderFile) {
    const response = await fetch(url);
    const data = await response.text();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;
    const component = tempDiv.querySelector(placeholderFile);

    if (component) {
      document.getElementById(placeholderId).outerHTML = component.outerHTML;
      if (placeholderId === 'navbar-placeholder') {
        activateMenu();
      }
    }
  }

  async function waitForComponents() {
    await fetchComponent('/komponen/navbar.html', 'navbar-placeholder', 'header');
    await fetchComponent('/komponen/footer.html', 'footer-placeholder', 'footer');
    await fetchComponent('/komponen/scroll-top.html', 'scroll-top-placeholder', 'a');
    await fetchComponent('/komponen/search-modal.html', 'search-modal-placeholder', 'div');
  }

  function activateMenu() {
    const menuElement = document.getElementById('navbar-placeholder');
    if (menuElement) {
      const menuClass = menuElement.className;
      const number = parseInt(menuClass.match(/menucustom-(\d+)/)?.[1], 10);
      if (!isNaN(number)) {
        document.querySelectorAll('.main-menu')[number - 1].classList.add('active');
      } else {
        alert('Format salah! Harap gunakan format "menucustom-angka" pada nav.');
      }
    }
  }

  function toggleScrolled() {
    const body = document.querySelector('body');
    const header = document.querySelector('#header');
    if (!header?.classList.contains('scroll-up-sticky')) return;
    window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
  }

  function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    const btn = document.querySelector('.mobile-nav-toggle');
    btn?.classList.toggle('bi-list');
    btn?.classList.toggle('bi-x');
  }

  function handleNavClicks() {
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });
  }

  function toggleDropdown(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  }

  function initDropdowns() {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', toggleDropdown);
    });
  }

  function toggleScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    scrollTop?.addEventListener('click', scrollToTop);
  }

  function navmenuScrollspy() {
    document.querySelectorAll('.navmenu a').forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      }
    });
  }

  function adjustDropdownPosition(dropdownParent, dropdownMenu) {
    dropdownMenu.style.left = `${dropdownParent.offsetWidth}px`;
  }

  function initDropdownAdjustments() {
    document.querySelectorAll('#navmenu .dropdown .dropdown').forEach(dropdown => {
      const dropdownMenu = dropdown.querySelector('ul');
      if (dropdownMenu) {
        adjustDropdownPosition(dropdown, dropdownMenu);
        window.addEventListener('resize', () => adjustDropdownPosition(dropdown, dropdownMenu));
      }
    });
  }

  // Eksekusi kode utama
  await waitForComponents();
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  document.querySelector('.mobile-search-toggle')?.addEventListener('click', () => console.log("klik tombol search"));
  document.querySelector('.mobile-nav-toggle')?.addEventListener('click', mobileNavToggle);

  handleNavClicks();
  initDropdowns();
  initScrollTop();
  initDropdownAdjustments();
})();