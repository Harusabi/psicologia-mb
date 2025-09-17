document.addEventListener('DOMContentLoaded', () => {

    const moveContainer_mouse = () => {
        const container = document.querySelector('.sectionOne__divContent');


        container.addEventListener('mouseenter', () => {
            container.style.boxShadow = '0 12px 40px rgba(31, 38, 135, 0.5)';
            container.style.transform += ' scale(1.05)';
            container.removeAttribute('style');
            return;
        });


        document.addEventListener('mousemove', (e) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerX = windowWidth / 2;
            const centerY = windowHeight / 2;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            const maxRotation = 10;
            const rotationX = (deltaY / centerY) * maxRotation * -1;
            const rotationY = (deltaX / centerX) * maxRotation;

            container.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });

    }

    moveContainer_mouse();

});