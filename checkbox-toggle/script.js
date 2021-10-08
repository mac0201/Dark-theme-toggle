const storage = window.localStorage;
const theme_box = document.getElementById('flexSwitchCheckDefault');

// Set theme
function setTheme(theme) {
    const nav = document.getElementById('top-navigation');
    document.documentElement.className = theme;

    if (theme === 'dark') {
        storage.setItem('dark_theme', true);
        theme_box.checked = true;
        nav.classList.replace('navbar-light', 'navbar-dark');
        nav.classList.replace('bg-light', 'bg-dark');
        console.log('theme set to dark..');
    }
    else {
        storage.setItem('dark_theme', false);
        nav.classList.replace('navbar-dark', 'navbar-light');
        nav.classList.replace('bg-dark', 'bg-light');
        console.log('theme set to light..');
    }
}

// Check local storage for set theme
function checkTheme() {
    storage.getItem('dark_theme') === 'true' ? setTheme('dark') : setTheme('light');
}

// Pass the preferred theme to setTheme()
function changeTheme() {
    theme_box.checked ? setTheme('dark') : setTheme('light');
}
