document.getElementById('year').textContent = new Date().getFullYear();

const rabbitHoleSection = document.getElementById('rabbit-hole-section');
const rabbitOverlay = document.getElementById('rabbit-overlay');

let rabbitTimer;

function enterRabbitHole() {
    clearTimeout(rabbitTimer);

    rabbitOverlay.classList.remove('active');

    // Force animation restart.
    void rabbitOverlay.offsetWidth;

    rabbitOverlay.classList.add('active');
    rabbitOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('rabbit-active');

    rabbitTimer = setTimeout(() => {
        rabbitOverlay.classList.remove('active');
        rabbitOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('rabbit-active');
    }, 3800);
}

rabbitHoleSection.addEventListener('click', enterRabbitHole);

rabbitHoleSection.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        enterRabbitHole();
    }
});

rabbitOverlay.addEventListener('click', () => {
    clearTimeout(rabbitTimer);
    rabbitOverlay.classList.remove('active');
    rabbitOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('rabbit-active');
});