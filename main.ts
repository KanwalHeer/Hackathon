// main.ts

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
    const navLinks = document.getElementById('nav-links') as HTMLUListElement | null;

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const navLinksItems = document.querySelectorAll('nav ul li a');

    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const href = link.getAttribute('href');
            if (href) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
});
