document.addEventListener('DOMContentLoaded', () => {

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });


    // Page Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
    const pageSections = document.querySelectorAll('.page-section');
    const pageTitleSpan = document.getElementById('page-title');


    function showPage(pageId) {
        pageSections.forEach(section => section.classList.remove('active-page'));
        document.getElementById(pageId + '-page').classList.add('active-page');

        const pageName = pageId.charAt(0).toUpperCase() + pageId.slice(1);
        pageTitleSpan.textContent = pageName;

        sidebarLinks.forEach(link => link.classList.remove('active'));
        sidebarLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }


    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    showPage('dashboard');


    // Optional: Settings Page Dark Mode Toggle
    const settingsDarkModeToggle = document.getElementById('settings-dark-mode-toggle');
    if (settingsDarkModeToggle) {
        settingsDarkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const headerDarkModeToggle = document.getElementById('dark-mode-toggle');
            if (document.body.classList.contains('light-mode')) {
                settingsDarkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Appearance';
                headerDarkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                settingsDarkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Appearance';
                headerDarkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        });
    }

});