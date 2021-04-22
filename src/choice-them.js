const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
}

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

refs.switch.addEventListener('change', themeClassList);


function themeClassList(e) {

    if (refs.switch.checked) {
        refs.body.classList.add(theme.DARK);
        refs.body.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK)

    }
    else {
        refs.body.classList.add(theme.LIGHT);
        refs.body.classList.remove(theme.DARK);
        localStorage.removeItem('theme');
        localStorage.setItem('theme', theme.LIGHT)
    }

};
// const thisTheme = localStorage.getItem('theme');
if (localStorage.getItem('theme') === theme.DARK) {
    refs.body.classList.add(theme.DARK);
    refs.switch.checked = true;
};