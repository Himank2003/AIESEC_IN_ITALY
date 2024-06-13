// script.js
document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');

    // URL of the website to redirect to
    var targetURL = "https://www.aiesec.it/en/"; // Replace with the actual URL

    // Duration for which the preloader will be displayed (in milliseconds)
    var preloaderDuration = 3000; // 3000 milliseconds = 3 seconds

    // After the specified duration, fade out the preloader and redirect
    setTimeout(function() {
        preloader.classList.add('fade-out');

        // Wait for the fade-out animation to complete before redirecting
        setTimeout(function() {
            window.location.href = targetURL;
        }, 1000); // 1000 milliseconds = 1 second (matching the CSS transition time)
    }, preloaderDuration);
});
