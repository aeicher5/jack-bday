document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.entry');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeInObserver.observe(element);
        });

        // Add class to trigger animation
        document.addEventListener('scroll', () => {
            fadeElements.forEach(element => {
                const position = element.getBoundingClientRect();
                
                // Check if element is in viewport
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    element.classList.add('fade-in');
                }
            });
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        fadeElements.forEach(element => {
            element.classList.add('fade-in');
        });
    }

    // Add fade-in class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Handle photo galleries with many images
    const photoGalleries = document.querySelectorAll('.photo-gallery');
    photoGalleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        if (images.length >= 5) {
            gallery.style.maxHeight = '450px';
            gallery.style.overflowY = 'auto';
            gallery.style.paddingRight = '1rem';
        }
    });
    
    // Add lightbox functionality for photo gallery images
    const galleryImages = document.querySelectorAll('.photo-gallery img');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
    lightbox.style.zIndex = '1000';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.opacity = '0';
    lightbox.style.pointerEvents = 'none';
    lightbox.style.transition = 'opacity 0.3s ease';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.borderRadius = '8px';
    lightboxImg.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '30px';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '40px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Add click event to gallery images
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.opacity = '1';
            lightbox.style.pointerEvents = 'auto';
        });
    });
    
    // Close lightbox when clicking the close button or outside the image
    closeBtn.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        lightbox.style.pointerEvents = 'none';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.opacity = '0';
            lightbox.style.pointerEvents = 'none';
        }
    });
}); 