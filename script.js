document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Toggle Dark Mode';
        } else {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Toggle Light Mode';
        }
    });
});
