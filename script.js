// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add hover effect to clickable elements
const clickables = document.querySelectorAll('a, button, .nav-toggle, input, textarea');
clickables.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(0)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger skill bar animations
            if (entry.target.classList.contains('skill-item')) {
                const skillBar = entry.target.querySelector('.skill-progress');
                const level = entry.target.getAttribute('data-level');
                setTimeout(() => {
                    skillBar.style.width = level + '%';
                }, 200);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .stat-card, .video-card, .category-tag');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Ensure active hero image is always visible
const activeHeroImage = document.querySelector('.profile-img.active');
if (activeHeroImage) {
    activeHeroImage.style.opacity = '1';
    activeHeroImage.style.transform = 'none';
    activeHeroImage.style.visibility = 'visible';
}

// Force active hero image visibility on page load
window.addEventListener('load', () => {
    const heroImg = document.querySelector('.profile-img.active');
    if (heroImg) {
        heroImg.style.opacity = '1';
        heroImg.style.visibility = 'visible';
        heroImg.style.display = 'block';
    }
});

// Hero image rotation
function initHeroImageRotation() {
    const heroImages = document.querySelectorAll('.profile-img');
    let currentImageIndex = 0;
    
    if (heroImages.length <= 1) return;
    
    // Ensure first image is visible
    heroImages[0].classList.add('active');
    
    setInterval(() => {
        // Remove active class from current image
        heroImages[currentImageIndex].classList.remove('active');
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        
        // Add active class to new image
        heroImages[currentImageIndex].classList.add('active');
    }, 10000); // Change image every 10 seconds
}

// Initialize image rotation on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    const heroImg = document.querySelector('.profile-img.active');
    if (heroImg) {
        heroImg.style.opacity = '1';
        heroImg.style.visibility = 'visible';
        heroImg.style.display = 'block';
    }
    
    // Start image rotation
    setTimeout(initHeroImageRotation, 2000); // Wait 2 seconds before starting rotation
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Typing effect for hero title
const heroTitle = document.querySelector('.name');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let index = 0;

function typeText() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});

// Parallax effect for shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Image lazy loading
const images = document.querySelectorAll('img:not(.profile-img)');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Don't fade hero images
            if (img.classList.contains('profile-img')) {
                // Only make active image visible, others should stay hidden
                if (img.classList.contains('active')) {
                    img.style.opacity = '1';
                }
                imageObserver.unobserve(img);
                return;
            }
            
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            // If image is already loaded
            if (img.complete) {
                img.style.opacity = '1';
            }
            
            imageObserver.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => {
    imageObserver.observe(img);
});

// Mobile touch support for custom cursor
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// Video card click handler
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // In a real implementation, this would open the video or redirect to YouTube
        window.open('https://www.youtube.com/channel/UCl-FfJYxzvcwTiP9a1kJsKQ', '_blank');
    });
});
