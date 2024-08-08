document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const searchInput = document.getElementById('search-input');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = event.target.getAttribute('data-value');
            dropbtn.textContent = selectedCategory;
            searchInput.placeholder = `Searching in ${selectedCategory.toLowerCase()}...`;
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            document.querySelector('.dropdown-content').style.display = 'none';
        }
    });

    dropbtn.addEventListener('click', () => {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});
