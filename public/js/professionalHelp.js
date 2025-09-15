document.addEventListener('DOMContentLoaded', () => {
    const animationTitle_page = () => {
        const text = document.querySelector('.divOne__titlePresentation');

        text.addEventListener('animationend', () => {
            text.classList.remove('animationText-presentation');
        });

        setInterval(() => {
            text.classList.add('animationText-presentation');
        }, 3000);
    }

    const animationHeart_ornamental = () => {
        const icon = document.querySelector('.heartImage');

        let angle = 0;

        const animate = () => {
            const scrollY = window.scrollY;

            const posY = 30 + scrollY * 0.5;

            const posX = 200 - Math.max(0, (scrollY - 100) * 0.2);

            angle = -20 + scrollY * 0.1;

            icon.style.bottom = posY + 'px';
            icon.style.right = posX + 'px';
            icon.style.transform = `rotate(${angle}deg)`;

            requestAnimationFrame(animate);
        }

        animate();
    }

    const parseImage = () => {
        const container = document.querySelectorAll('.sectionTwo__containerImage-two');
        const imageContainer = document.querySelectorAll('.containerImage');

        console.log(container)
        console.log(imageContainer)

        rotateImage(container, imageContainer);
    }

    function rotateImage(parentContainer, imageContainer) {
        let fondoActual;

        const pairs = [...parentContainer].map((node, i) => {
            const imgNode = imageContainer[i];
            if (!imgNode) return null;
            return { contEl: node, imgEl: imgNode };
        }).filter(Boolean);

        pairs.forEach(({ contEl, imgEl }) => {
            contEl.addEventListener('mouseenter', () => {
                const styles = window.getComputedStyle(imgEl);
                fondoActual = styles.backgroundImage;
                imgEl.style.backgroundImage = 'url(/images/fondo_2-f&q.png)';
                contEl.classList.add('activeAnimation_rotate');
            });

            contEl.addEventListener('mouseleave', () => {
                imgEl.style.backgroundImage = fondoActual;
                contEl.classList.remove('activeAnimation_rotate');
            });
        });
    }

    parseImage();
    animationTitle_page();
    animationHeart_ornamental();
});
