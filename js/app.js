document.addEventListener("DOMContentLoaded", () => {
    fetch('../../komponen/navbar.html')
      .then(response => response.text()) 
      .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data; 
        const navbar = tempDiv.querySelector('nav');
        if (navbar) {
            document.getElementById('navbar-placeholder').outerHTML = navbar.outerHTML;
        }
    });
});
