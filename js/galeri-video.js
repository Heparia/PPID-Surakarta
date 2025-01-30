$(document).ready(function () {
    const itemsPerPage = 8;
    let currentPage = 1;
    let galleryData = [];

    // Fetch gallery data from JSON
    async function fetchGalleryData() {
        try {
            const response = await fetch('/konten/data/galery-video.json');
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
                <div class="gallery-item d-flex justify-content-center align-items-center">
                    <iframe width="300" height="160" 
                    src="${item.url}" title="${item.judul}" 
                    class="mx-auto"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
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

    // Initial fetch and render
    fetchGalleryData();

    // Ensure `changePage` is globally accessible
    window.changePage = changePage;
});
