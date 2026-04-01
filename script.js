// Vanilla JavaScript for the Codezilla Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Select elements for the mobile navigation toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconClosed = document.getElementById('menu-icon-closed');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle Mobile Menu
    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Open the menu
            mobileMenu.classList.remove('hidden');
            menuIconClosed.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        } else {
            // Close the menu
            mobileMenu.classList.add('hidden');
            menuIconClosed.classList.remove('hidden');
            menuIconOpen.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when a link inside it is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconClosed.classList.remove('hidden');
            menuIconOpen.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        });
    });
});
