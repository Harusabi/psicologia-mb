document.addEventListener('DOMContentLoaded', () => {

    const animationHeart_ornamental = () => {
        const icon = document.querySelector('.heartImage');

        let angle = 0;

        const animate = () => {
            const scrollY = window.scrollY;

            const posY = 400 + scrollY * 0.5;

            const posX = 100 - Math.max(0, (scrollY - 100) * 0.2);

            angle = -20 + scrollY * 0.1;

            icon.style.bottom = posY + 'px';
            icon.style.right = posX + 'px';
            icon.style.transform = `rotate(${angle}deg)`;

            requestAnimationFrame(animate);
        }

        animate();
    }

    const animationTitle_page = () => {
        const text = document.querySelector('.titleContainer-one');

        text.addEventListener('animationend', () => {
            text.classList.remove('animationText-presentation');
        });

        setInterval(() => {
            text.classList.add('animationText-presentation');
        }, 3000);
    }

    animationHeart_ornamental();

    animationTitle_page();
});
