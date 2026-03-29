// Custom JavaScript for Crazy Fix
// You can add interactive elements here later, e.g., form validation, animations, etc.

document.addEventListener('DOMContentLoaded', function() {
    // Example: A simple console log to confirm script is loaded
    console.log("Crazy Fix custom script loaded!");

    // Example: Smooth scrolling for anchor links (if you add any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});