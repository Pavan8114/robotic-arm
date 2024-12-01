function scrollToDetails() {
    const detailsSection = document.querySelector('main');
    detailsSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


