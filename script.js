const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const celebration = document.getElementById('celebration');

noButton.addEventListener('mouseover', () => {
    // Move the "No" button randomly when hovered
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    // Show celebration GIF and message
    celebration.classList.remove('hidden');
    document.querySelector('.buttons').classList.add('hidden');
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.teddy').classList.add('hidden');
    document.querySelector('.hearts').classList.add('hidden');
});

noButton.addEventListener('click', () => {
    alert("Oh no! Please think again! 🥺");
});