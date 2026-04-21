// script.js

// Magnetic Buttons
document.querySelectorAll('.magnetic-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const x = e.clientX - button.getBoundingClientRect().left;
        const y = e.clientY - button.getBoundingClientRect().top;
        button.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Smooth Scroll Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Set active state
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Card Hover Effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// Parallax Backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.parallax').style.backgroundPositionY = (scrolled * 0.5) + 'px';
});

// Scroll-triggered Animations
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const scrollTop = window.pageYOffset + window.innerHeight;
    revealElements.forEach((el, index) => {
        if (el.getBoundingClientRect().top < scrollTop) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowDown') {
        window.scrollBy(0, 100);
    } else if (e.code === 'ArrowUp') {
        window.scrollBy(0, -100);
    }
});

// Touch/Swipe Support
let startX;
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
document.addEventListener('touchmove', (e) => {
    const diffX = e.touches[0].clientX - startX;
    if (Math.abs(diffX) > 50) {
        window.scrollBy(diffX > 0 ? 100 : -100, 0);
        startX = e.touches[0].clientX;
    }
});

// Element Reveal on Scroll with Staggered Delays
const staggeredRevealElements = document.querySelectorAll('.staggered-reveal');
staggeredRevealElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    const onScroll = () => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
            window.removeEventListener('scroll', onScroll);
        }
    };
    window.addEventListener('scroll', onScroll);
});

// Pointer-Tracking Gradients
const gradientElement = document.querySelector('.gradient-tracking');
document.addEventListener('mousemove', (e) => {
    gradientElement.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.2))`;
});

// Marquee Pause on Hover
const marquee = document.querySelector('.marquee');
marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
});
marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
});

// Interactive Typography
document.querySelectorAll('.interactive-typography').forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.color = 'violet';
    });
    text.addEventListener('mouseleave', () => {
        text.style.color = '';
    });
});