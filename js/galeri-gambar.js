$(document).ready(function () {
    const itemsPerPage = 8;
    let currentPage = 1;
    let galleryData = [];

    // Fetch gallery data from JSON
    async function fetchGalleryData() {
        try {
            const response = await fetch('/konten/data/galery-image.json');
            if (!response.ok) {
                throw new Error('Failed to fetch gallery data');
            }
            galleryData = await response.json();
            renderGallery(currentPage);
            renderPagination();
        } catch (error) {
            console.error('Error fetching gallery data:', error);
            alert('Unable to load gallery data. Please try again later.');
        }
    }

    // Render gallery
    function renderGallery(page) {
        const gallery = document.getElementById('gallery');
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const pageItems = galleryData.slice(startIndex, endIndex);

        gallery.innerHTML = pageItems.map(item => `
            <div class="col-md-6 col-xl-3">
                <div class="gallery-item">
                    <img src="${item.url}" alt="${item.judul}" data-bs-toggle="modal" 
                         data-bs-target="#imageModal" 
                         onerror="this.onerror=null;this.src='/asset/berita/image-default.png';">
                    <button type="button" class="overlay p-3 text-center" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="showModal('${item.judul}', '${item.deskripsi}', '${item.url}')">
                        <h5>${item.judul}</h5>
                        <p class="m-0">${item.deskripsi}</p>
                    </button> 
                </div>
            </div>
        `).join('');
    }

    // Render pagination
    function renderPagination() {
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(galleryData.length / itemsPerPage);

        pagination.innerHTML = `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <button class="page-link" onclick="changePage(${currentPage - 1})">Previous</button>
            </li>
            ${Array.from({ length: totalPages }, (_, i) => `
                <li class="page-item ${currentPage === i + 1 ? 'active' : ''}">
                    <button class="page-link" onclick="changePage(${i + 1})">${i + 1}</button>
                </li>
            `).join('')}
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <button class="page-link" onclick="changePage(${currentPage + 1})">Next</button>
            </li>
        `;
    }

    // Change page
    function changePage(page) {
        currentPage = page;
        renderGallery(page);
        renderPagination();
    }

    // Show modal
    function showModal(title, description, url) {
        const modalImg = document.getElementById('imageModalImg');
        const defaultImage = '/asset/berita/image-default.png';

        document.getElementById('imageModalTitle').innerText = title;
        document.getElementById('imageModalDesc').innerText = description;

        modalImg.onerror = function () {
            modalImg.src = defaultImage;
        };
        modalImg.src = url;
    }
    

    // Initial fetch and render
    fetchGalleryData();

    // Ensure `changePage` is globally accessible
    window.changePage = changePage;
    window.showModal = showModal;
});
