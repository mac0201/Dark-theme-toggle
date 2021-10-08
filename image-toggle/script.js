const storage = window.localStorage;
const theme_box = document.getElementById('flexSwitchCheckDefault');


// Change the theme
function setTheme(theme) {
    document.documentElement.className = theme;
    const nav = document.getElementById('top-navigation');
    const icon_light = document.getElementById('switch-light');
    const icon_dark = document.getElementById('switch-dark');

    if (theme === 'dark') {
        storage.setItem('dark_theme', true);
        icon_light.style = 'display: inline-block;';
        icon_dark.style = 'display: none;';
        nav.classList.replace('navbar-light', 'navbar-dark');
        nav.classList.replace('bg-light', 'bg-dark');
        console.log('theme set to dark..');
    }
    else {
        storage.setItem('dark_theme', false);
        icon_dark.style = 'display: inline-block;';
        icon_light.style = 'display: none;';
        nav.classList.replace('navbar-dark', 'navbar-light');
        nav.classList.replace('bg-dark', 'bg-light');
        console.log('theme set to light..');
    }
}


// Check internal storage for set theme
function checkTheme() {
    storage.getItem('dark_theme') === 'true' ? setTheme('dark') : setTheme('light');
}

// Pass the preferred theme to setTheme()
function changeTheme(theme) {
    theme === 'dark' ? setTheme('dark') : setTheme('light');
}