document.addEventListener("DOMContentLoaded", function() {
    const heroImages = [
        document.getElementById("hero-img-1"),
        document.getElementById("hero-img-2")
    ];
    const heroText = document.querySelector(".hero-text");

    function fadeIn(element, delay) {
        element.style.opacity = 0;
        element.style.transition = `opacity ${delay}ms ease-in-out`;
        setTimeout(() => {
            element.style.opacity = 1;
        }, delay);
    }

    fadeIn(heroText, 1000);
    heroImages.forEach((img, index) => {
        fadeIn(img, 1500 + (index * 500));
    });
});
