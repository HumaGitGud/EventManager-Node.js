// This script creates a countdown of the top upcoming event

document.addEventListener('DOMContentLoaded', ()=> {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const eventDate = new Date(countdownElement.getAttribute('data-event-date')).getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;
            if (distance <= 0) {
                document.getElementById('countdown-timer').innerHTML = 'Event Started!';
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }
});