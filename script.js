// Portfolio Website JavaScript
(function() {
    'use strict';

    // DOM Elements
    const elements = {
        themeToggle: null,
        sidebar: null,
        sidebarToggle: null,
        mobileMenuToggle: null,
        snowParticles: null,
        skillBars: null,
        filterButtons: null,
        projectCards: null,
        contactForm: null
    };

    // State
    let currentTheme = 'dark';
    let isMobileMenuOpen = false;
    let isSidebarCollapsed = false;

    // Initialize application
    function init() {
        try {
            cacheElements();
            setupEventListeners();
            initializeTheme();
            initializeSidebar();
            createSnowParticles();
            animateSkillBars();
            initializePortfolioFilters();
            setActiveNavigation();
            updateDaysTogether(); // Added to update days count
            // router.init(); // Disabled client-side routing
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }

    // Update the days together count in the about page
    function updateDaysTogether() {
        try {
            const startDate = new Date('2025-05-20');
            const today = new Date();
            const diffTime = today - startDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const daysElement = document.getElementById('daysTogether');
            if (daysElement) {
                daysElement.textContent = diffDays >= 0 ? diffDays : 0;
            }
        } catch (error) {
            console.error('Error updating days together:', error);
        }
    }

    // Cache DOM elements
    function cacheElements() {
        try {
            elements.themeToggle = document.getElementById('themeToggle');
            elements.sidebar = document.getElementById('sidebar');
            elements.sidebarToggle = document.getElementById('sidebarToggle');
            elements.mobileMenuToggle = document.getElementById('mobileMenuToggle');
            elements.mobileOverlay = document.getElementById('mobileOverlay');
            elements.snowParticles = document.getElementById('snowParticles');
            elements.skillBars = document.querySelectorAll('.skill-progress');
            elements.filterButtons = document.querySelectorAll('.filter-btn');
            elements.projectCards = document.querySelectorAll('.project-card');
            elements.contactForm = document.getElementById('contactForm');
        } catch (error) {
            console.error('Error caching elements:', error);
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        try {
            // Theme toggle
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', toggleTheme);
            }

            // Sidebar toggle
            if (elements.sidebarToggle) {
                elements.sidebarToggle.addEventListener('click', toggleSidebar);
            }

            // Mobile menu toggle
            if (elements.mobileMenuToggle) {
                elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            }

            // Contact form
            if (elements.contactForm) {
                elements.contactForm.addEventListener('submit', handleContactSubmit);
            }

            // Portfolio filters
            elements.filterButtons.forEach(button => {
                button.addEventListener('click', handleFilterClick);
            });

            // Window resize
            window.addEventListener('resize', handleWindowResize);

            // Intersection Observer for animations
            setupIntersectionObserver();

        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    }

    // Theme Management
    function initializeTheme() {
        try {
            const savedTheme = localStorage.getItem('portfolio-theme');
            if (savedTheme) {
                currentTheme = savedTheme;
            }
            applyTheme(currentTheme);
        } catch (error) {
            console.error('Error initializing theme:', error);
        }
    }

    function toggleTheme() {
        try {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
            localStorage.setItem('portfolio-theme', currentTheme);
        } catch (error) {
            console.error('Error toggling theme:', error);
        }
    }

    function applyTheme(theme) {
        try {
            document.documentElement.setAttribute('data-theme', theme);
            
            if (elements.themeToggle) {
                const icon = elements.themeToggle.querySelector('i');
                if (icon) {
                    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                }
            }
        } catch (error) {
            console.error('Error applying theme:', error);
        }
    }

    // Sidebar Management
    function toggleSidebar() {
        try {
            isSidebarCollapsed = !isSidebarCollapsed;
            
            if (elements.sidebar) {
                elements.sidebar.classList.toggle('collapsed', isSidebarCollapsed);
            }
            
            // Save state to localStorage
            localStorage.setItem('portfolio-sidebar-collapsed', isSidebarCollapsed);
        } catch (error) {
            console.error('Error toggling sidebar:', error);
        }
    }

    function initializeSidebar() {
        try {
            const savedState = localStorage.getItem('portfolio-sidebar-collapsed');
            if (savedState === 'true') {
                isSidebarCollapsed = true;
                if (elements.sidebar) {
                    elements.sidebar.classList.add('collapsed');
                }
            }
        } catch (error) {
            console.error('Error initializing sidebar:', error);
        }
    }

    // Mobile Menu Management
    function toggleMobileMenu() {
        try {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (elements.sidebar) {
                elements.sidebar.classList.toggle('open', isMobileMenuOpen);
            }
            
            if (elements.mobileMenuToggle) {
                elements.mobileMenuToggle.classList.toggle('active', isMobileMenuOpen);
            }

            if (elements.mobileOverlay) {
                elements.mobileOverlay.classList.toggle('active', isMobileMenuOpen);
            }

            // Prevent body scroll when menu is open while keeping scrollbars
            if (isMobileMenuOpen) {
                const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollBarWidth}px`;
            } else {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }

            // Close menu when clicking overlay
            if (isMobileMenuOpen && elements.mobileOverlay) {
                elements.mobileOverlay.addEventListener('click', closeMobileMenu);
            }
        } catch (error) {
            console.error('Error toggling mobile menu:', error);
        }
    }

    function closeMobileMenu() {
        try {
            if (isMobileMenuOpen) {
                isMobileMenuOpen = false;
                
                if (elements.sidebar) {
                    elements.sidebar.classList.remove('open');
                }
                
                if (elements.mobileMenuToggle) {
                    elements.mobileMenuToggle.classList.remove('active');
                }

                if (elements.mobileOverlay) {
                    elements.mobileOverlay.classList.remove('active');
                    elements.mobileOverlay.removeEventListener('click', closeMobileMenu);
                }

                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        } catch (error) {
            console.error('Error closing mobile menu:', error);
        }
    }

    function handleOutsideClick(event) {
        try {
            if (!elements.sidebar.contains(event.target) && 
                !elements.mobileMenuToggle.contains(event.target)) {
                toggleMobileMenu();
            }
        } catch (error) {
            console.error('Error handling outside click:', error);
        }
    }

    function handleWindowResize() {
        try {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                toggleMobileMenu();
            }
        } catch (error) {
            console.error('Error handling window resize:', error);
        }
    }

    // Snow Particles Animation
    function createSnowParticles() {
        try {
            if (!elements.snowParticles) return;

            const particleCount = window.innerWidth < 768 ? 30 : 50;
            const particles = ['❄', '❅', '❆', '✦', '✧'];

            for (let i = 0; i < particleCount; i++) {
                createSnowParticle(particles);
            }
        } catch (error) {
            console.error('Error creating snow particles:', error);
        }
    }

    function createSnowParticle(particles) {
        try {
            const particle = document.createElement('div');
            particle.className = 'snow-particle';
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            
            // Random properties
            const size = Math.random() * 0.8 + 0.5;
            const left = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            particle.style.cssText = `
                left: ${left}%;
                font-size: ${size}rem;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;

            elements.snowParticles.appendChild(particle);

            // Remove and recreate particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    createSnowParticle(particles);
                }
            }, (duration + delay) * 1000);
        } catch (error) {
            console.error('Error creating snow particle:', error);
        }
    }

    // Skills Animation
    function animateSkillBars() {
        try {
            if (!elements.skillBars.length) return;

            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const progress = progressBar.getAttribute('data-progress');
                        
                        setTimeout(() => {
                            progressBar.style.width = progress + '%';
                        }, 300);
                        
                        observer.unobserve(progressBar);
                    }
                });
            }, observerOptions);

            elements.skillBars.forEach(bar => observer.observe(bar));
        } catch (error) {
            console.error('Error animating skill bars:', error);
        }
    }

    // Portfolio Filters
    function initializePortfolioFilters() {
        try {
            if (!elements.filterButtons.length) return;

            // Set first filter as active
            elements.filterButtons[0]?.classList.add('active');
        } catch (error) {
            console.error('Error initializing portfolio filters:', error);
        }
    }

    function handleFilterClick(event) {
        try {
            const button = event.target;
            const filter = button.getAttribute('data-filter');

            // Update active button
            elements.filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            filterProjects(filter);
        } catch (error) {
            console.error('Error handling filter click:', error);
        }
    }

    function filterProjects(filter) {
        try {
            elements.projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        } catch (error) {
            console.error('Error filtering projects:', error);
        }
    }

    // Contact Form
    function handleContactSubmit(event) {
        try {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            
            // Basic validation
            if (!validateContactForm(data)) {
                return;
            }

            // Show success message (in a real app, this would send to a server)
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            event.target.reset();
        } catch (error) {
            console.error('Error handling contact form:', error);
            showNotification('An error occurred. Please try again.', 'error');
        }
    }

    function validateContactForm(data) {
        try {
            const { name, email, subject, message } = data;
            
            if (!name.trim()) {
                showNotification('Please enter your name.', 'error');
                return false;
            }
            
            if (!email.trim() || !isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return false;
            }
            
            if (!subject.trim()) {
                showNotification('Please enter a subject.', 'error');
                return false;
            }
            
            if (!message.trim()) {
                showNotification('Please enter a message.', 'error');
                return false;
            }
            
            return true;
        } catch (error) {
            console.error('Error validating contact form:', error);
            return false;
        }
    }

    function isValidEmail(email) {
        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        } catch (error) {
            console.error('Error validating email:', error);
            return false;
        }
    }

    // Notifications
    function showNotification(message, type = 'info') {
        try {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.textContent = message;
            
            notification.style.cssText = `
                position: fixed;
                top: 2rem;
                right: 2rem;
                background: var(--bg-glass);
                color: var(--text-primary);
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                border: 1px solid var(--border-color);
                backdrop-filter: blur(20px);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
                box-shadow: 0 10px 25px var(--shadow-medium);
            `;

            if (type === 'success') {
                notification.style.borderColor = '#10b981';
                notification.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            } else if (type === 'error') {
                notification.style.borderColor = '#ef4444';
                notification.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            }

            document.body.appendChild(notification);

            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            // Animate out and remove
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        } catch (error) {
            console.error('Error showing notification:', error);
        }
    }

    // Navigation Management
    function setActiveNavigation() {
        try {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                    link.classList.add('active');
                }
            });
        } catch (error) {
            console.error('Error setting active navigation:', error);
        }
    }

    // Intersection Observer for Animations
    function setupIntersectionObserver() {
        try {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe elements that should animate in
            const animateElements = document.querySelectorAll(
                '.feature-card, .project-card, .detail-section, .skill-item, .timeline-item'
            );
            
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Add CSS for animate-in class
            const style = document.createElement('style');
            style.textContent = `
                .animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(style);
        } catch (error) {
            console.error('Error setting up intersection observer:', error);
        }
    }

    // Smooth Scrolling for Anchor Links
    function setupSmoothScrolling() {
        try {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    });
                }
            });
        } catch (error) {
            console.error('Error setting up smooth scrolling:', error);
        }
    }

    // Lazy Loading for Images
    function setupLazyLoading() {
        try {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.classList.remove('lazy');
                                imageObserver.unobserve(img);
                            }
                        }
                    });
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    img.classList.add('lazy');
                    imageObserver.observe(img);
                });
            }
        } catch (error) {
            console.error('Error setting up lazy loading:', error);
        }
    }

    // Performance Monitoring
    function logPerformance() {
        try {
            if ('performance' in window) {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        const perfData = performance.getEntriesByType('navigation')[0];
                        console.log('Page Load Performance:', {
                            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                            totalTime: perfData.loadEventEnd - perfData.fetchStart
                        });
                    }, 0);
                });
            }
        } catch (error) {
            console.error('Error logging performance:', error);
        }
    }

    // Error Handling
    window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Additional initialization
    setupSmoothScrolling();
    setupLazyLoading();
    logPerformance();

})();
