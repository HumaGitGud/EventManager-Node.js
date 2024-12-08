// This script performs an animation after "submit" button is clicked

document.addEventListener('DOMContentLoaded', (event) => {
    
    const container = document.getElementById('animation-container');

    // Add multiple toys
    for (let i = 0; i < 40; i++) {
        const toy = document.createElement('img');
        toy.src = '/images/christmas-pic' + (i % 12 + 1) + '.png';

        toy.className = 'toy';

        // Randomize starting position and size
        toy.style.left = Math.random() * 100 + 'vw';
        toy.style.width = Math.random() * 100 + 40 + 'px';
        

        container.appendChild(toy);

        // Remove the toy after animation ends
        setTimeout(() => toy.remove(), 3000);
    }
});