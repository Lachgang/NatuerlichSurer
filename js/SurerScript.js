document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Footer Jahr aktualisieren
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p');
    
    yearElements.forEach(element => {
        if (element.textContent.includes('2026')) {
            if (currentYear > 2026) {
                element.textContent = element.textContent.replace('2026', currentYear);
            }
        }
    });
    
    // 2. Smooth Scrolling für interne Sprungmarken
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});