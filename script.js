document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    const body = document.body;

    // Check for saved user preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeButton.textContent = 'Day';
        themeButton.style.color="black"
        themeButton.style.backgroundColor="white"

    }

    themeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeButton.textContent = 'Night';
            themeButton.style.color="white";
            themeButton.style.backgroundColor="black"
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeButton.textContent = 'Day';
            themeButton.style.backgroundColor="white";
            themeButton.style.color="black";
            localStorage.setItem('theme', 'dark');
        }
    });
});

