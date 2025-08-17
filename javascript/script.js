// This will show a welcome message in the browser console
console.log("Welcome to Amanat's website!");

// Example: Change heading text when clicked
document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");
    heading.addEventListener("click", function() {
        heading.textContent = "You clicked me!";
    });
});