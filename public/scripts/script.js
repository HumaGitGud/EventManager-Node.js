// This script performs front-end validation
// Error messages are created if the validation fails

document.getElementById('form').onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission to handle validation

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(div => div.innerHTML = '');

    let isValid = true;

    // Event name validation
    if (!document.getElementById('einput').value.trim()) {
        document.getElementById('einput-error').innerHTML = 'Event name is required';
        isValid = false;
    }

    // Event description validation
    if (!document.getElementById('etext').value.trim()) {
        document.getElementById('etext-error').innerHTML = 'Event description is required';
        isValid = false;
    }

    // Event time validation
    const etimeValue = document.getElementById('etime').value;
    if (!etimeValue) {
        document.getElementById('etime-error').innerHTML = 'Event time is required';
        isValid = false;
    } else {
        // Validate the datetime-local format (YYYY-MM-DDTHH:MM)
        const datetimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
        if (!datetimeRegex.test(etimeValue)) {
            document.getElementById('etime-error').innerHTML = 'Please enter a valid date and time in the format YYYY-MM-DDTHH:MM';
            isValid = false;
        }
    }

    if (isValid) {
        document.getElementById('form').submit(); // Submit the form if all validations pass
    }
};