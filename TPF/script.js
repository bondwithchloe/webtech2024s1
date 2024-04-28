window.addEventListener('scroll', () => {
    let containers = document.querySelectorAll('.container');
    let triggerBottom = window.innerHeight / 5 * 4;

    containers.forEach(container => {
        let containerTop = container.getBoundingClientRect().top;

        if(containerTop < triggerBottom) {
            container.classList.add('active');
        } else {
            container.classList.remove('active');
        }
    });
});
 // Function to randomly flip images horizontally or vertically
 function randomFlip() {
    var images = document.querySelectorAll('.year-image');
    images.forEach(function(image) {
        var flip = Math.random() < 0.5; // Randomly choose between horizontal and vertical flip
        if (flip) {
            image.style.transform = 'scaleX(-1)';
        } else {
            image.style.transform = 'scaleY(-1)';
        }
    });
}

// Call the randomFlip function when the page loads
window.onload = randomFlip;