
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    alert("Welcome to Sabiha's Website!");

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.textContent = "Welcome to my website! ✨";
    }

    // About section click event
    const about = document.querySelector(".about");

    if (about) {
        about.addEventListener("click", function () {
            alert("Hello! I am Sabiha. Nice to meet you!");
        });
    }

    // Social links
    const links = document.querySelectorAll(".social-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening: " + link.textContent.trim());
        });
    });

});
