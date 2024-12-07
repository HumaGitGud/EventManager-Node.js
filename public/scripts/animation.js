document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demo purposes
    
    const container = document.getElementById('animation-container');

    // Add multiple toys
    for (let i = 0; i < 40; i++) {
        const toy = document.createElement('img');
        // toy.src = '/images/christmas-stocking' + (i % 3 + 1) + '.png'; // Example toy images
        toy.src = '/images/christmas-stocking.png';

        toy.className = 'toy';

        // Randomize starting position and size
        toy.style.left = Math.random() * 100 + 'vw';
        toy.style.width = Math.random() * 100 + 40 + 'px';
        

        container.appendChild(toy);

        // Remove the toy after animation ends
        setTimeout(() => toy.remove(), 3000);
    }

    // Uncomment the line below to allow form submission after the animation
    event.target.submit();
});