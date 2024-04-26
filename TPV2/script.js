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
