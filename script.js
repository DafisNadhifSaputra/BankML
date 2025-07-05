// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isDark = document.body.classList.contains('dark-theme');
    
    if (window.scrollY > 50) {
        if (isDark) {
            navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (isDark) {
            navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Initialize Charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    animateCounters();
    initThemeToggle();
});

// Chart initialization function
function initializeCharts() {
    // Clustering Chart
    const clusterCtx = document.getElementById('clusterChart');
    if (clusterCtx) {
        new Chart(clusterCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Dokter Profesional (554 - 25.4%)',
                    data: generateClusterData(25, {x: 80, y: 85}),
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    pointRadius: 6
                }, {
                    label: 'Mahasiswa Aktif (571 - 26.2%)',
                    data: generateClusterData(26, {x: 50, y: 50}),
                    backgroundColor: 'rgba(72, 187, 120, 0.8)',
                    borderColor: 'rgba(72, 187, 120, 1)',
                    pointRadius: 6
                }, {
                    label: 'Digital Savvy ATM (522 - 23.9%)',
                    data: generateClusterData(24, {x: 65, y: 55}),
                    backgroundColor: 'rgba(237, 137, 54, 0.8)',
                    borderColor: 'rgba(237, 137, 54, 1)',
                    pointRadius: 6
                }, {
                    label: 'Konservatif Matang (535 - 24.5%)',
                    data: generateClusterData(25, {x: 45, y: 60}),
                    backgroundColor: 'rgba(159, 122, 234, 0.8)',
                    borderColor: 'rgba(159, 122, 234, 1)',
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Visualisasi Kluster Pelanggan',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Frekuensi Transaksi'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Nilai Transaksi'
                        }
                    }
                }
            }
        });
    }

    // Distribution Chart
    const distributionCtx = document.getElementById('distributionChart');
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Dokter Profesional', 'Mahasiswa Aktif', 'Digital Savvy ATM', 'Konservatif Matang'],
                datasets: [{
                    data: [25.4, 26.2, 23.9, 24.5],
                    data: [25.4, 26.2, 23.9, 24.5],
                    backgroundColor: [
                        'rgba(102, 126, 234, 0.8)',
                        'rgba(72, 187, 120, 0.8)',
                        'rgba(237, 137, 54, 0.8)',
                        'rgba(159, 122, 234, 0.8)'
                    ],
                    borderColor: [
                        'rgba(102, 126, 234, 1)',
                        'rgba(72, 187, 120, 1)',
                        'rgba(237, 137, 54, 1)',
                        'rgba(159, 122, 234, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cluster Distribution',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Model Comparison Chart
    const modelCtx = document.getElementById('modelComparisonChart');
    if (modelCtx) {
        new Chart(modelCtx, {
            type: 'bar',
            data: {
                labels: ['Decision Tree', 'Random Forest', 'SVM', 'KNN'],
                datasets: [{
                    label: 'Akurasi (%)',
                    data: [100.0, 100.0, 100.0, 99.77],
                    backgroundColor: [
                        'rgba(102, 126, 234, 0.8)',
                        'rgba(72, 187, 120, 0.8)',
                        'rgba(237, 137, 54, 0.8)',
                        'rgba(159, 122, 234, 0.8)'
                    ],
                    borderColor: [
                        'rgba(102, 126, 234, 1)',
                        'rgba(72, 187, 120, 1)',
                        'rgba(237, 137, 54, 1)',
                        'rgba(159, 122, 234, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Perbandingan Performa Model',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Accuracy (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'ML Algorithms'
                        }
                    }
                }
            }
        });
    }
}

// Generate random cluster data for visualization
function generateClusterData(count, center) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            x: center.x + (Math.random() - 0.5) * 30,
            y: center.y + (Math.random() - 0.5) * 30
        });
    }
    return data;
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent.replace(/[^\d]/g, '');
                const increment = target / 100;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Scroll animations
const observeElements = () => {
    const elements = document.querySelectorAll('.overview-card, .analysis-card, .insight-card, .method-card, .model-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', observeElements);

// Particle animation for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${5 + Math.random() * 10}s infinite linear;
        `;

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';

        hero.appendChild(particle);
    }
}

// Add particle animation
document.addEventListener('DOMContentLoaded', createParticles);

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (isDark) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Loading animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Copy to clipboard functionality for code snippets (if needed)
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent);
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        });
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(copyButton);
    });
}

// Progressive image loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    addCopyButtons();
});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
        }
    }
});

perfObserver.observe({ entryTypes: ['navigation'] });
