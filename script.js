document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for contacting me, " + name + "! Your message has been sent.");
        // Optionally, here you can add AJAX to send the data to a server
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert("Please fill in all fields.");
    }
});