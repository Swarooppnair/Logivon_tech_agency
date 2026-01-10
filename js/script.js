document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need to be animated
    const animatedElements = document.querySelectorAll('.fade-up');
    const navbar = document.querySelector('.navbar');

    // Intersection Observer Options
    const options = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger CSS animation
                entry.target.classList.add('visible');
                // Stop observing once animated (optional, keeps it one-time)
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe each element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Optional: Navbar background changes on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    console.log('Logivon Systems Initialized: Animations Ready.');
});
