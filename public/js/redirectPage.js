document.addEventListener('DOMContentLoaded', () => {
    const redirectButton = () => {
        const buttonRedirect = Array.from(document.querySelectorAll('.navbar__divButton'));

        buttonRedirect.forEach((button) => {
            button.addEventListener('click', () => {
                const tipo = button.dataset.type;
                const href = button.dataset.href;

                console.log(tipo, ' ', href);
                if (!href) {
                    return
                }

                if (tipo === 'sobre mi') {
                    window.location.href = href;
                }

                if (tipo === 'contactar') {
                    window.location.href = href;
                }
            });
        });
    };

    redirectButton();
});