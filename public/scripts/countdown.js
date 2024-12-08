document.addEventListener('DOMContentLoaded', () => {
    const countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach(countdownElement => {
        const eventDate = new Date(countdownElement.getAttribute('data-event-date')).getTime();
        const countdownTimer = countdownElement.querySelector('.countdown-timer');

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance <= 0) {
                countdownTimer.innerHTML = 'Event finished.';
                return;  // Stop updating this countdown
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        // Update the timer every second
        setInterval(updateTimer, 1000);
    });

    // Periodically update expired events on the server
    setInterval(() => {
        fetch('/update-expired-events', { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    console.error('Failed to update expired events:', response.statusText);
                } else {
                    console.log('Expired events updated.');
                }
            })
            .catch(error => console.error('Error in fetch call:', error));
    }, 60000); // Run every 60 seconds
});