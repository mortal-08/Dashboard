document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle for Landing Page
    const landingDarkModeToggle = document.getElementById('landing-dark-mode-toggle');
    landingDarkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            landingDarkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; // Change to Moon icon for Light Mode
        } else {
            landingDarkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Change to Sun icon for Dark Mode
        }
    });
});