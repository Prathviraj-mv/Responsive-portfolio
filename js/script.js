// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Typing Effect for Hero Tagline
const heroTagline = document.querySelector('.hero-tagline');
const taglineText = heroTagline ? heroTagline.textContent : '';
const taglines = [
    'Robotics · Firmware · Machine Learning · AI',
    'Embedded Systems & Intelligent Control',
    'Building Autonomous Machines',
    'From CAD to Real-World Systems'
];
let taglineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeTagline() {
    if (!heroTagline) return;
    
    const currentTagline = taglines[taglineIndex];
    
    if (isDeleting) {
        heroTagline.textContent = currentTagline.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        heroTagline.textContent = currentTagline.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentTagline.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(typeTagline, typingSpeed);
}

// Keep the hero speciality line fixed so it is immediately readable.

// Portfolio projects - ordered to highlight the strongest robotics, firmware, and AI work.
const portfolioProjects = [
    ['Rocket Flight Controller PCB', 'Custom Raspberry Pi Pico flight-controller PCB for model rockets, avionics testing, and embedded control systems.', 'Rocket-Flight-Controller-RFC-PCB'],
    ['CHIMAERA A1 - 5DOF Robotic Arm', 'Custom 5-DOF arm using RAMPS stepper control, magnetic encoder feedback, and inverse kinematics.', 'CHIMAERA-A1-----Open-source-5-DOF-Robotic-arm'],
    ['Active Fin Stabilization Flight Controller', 'Real-time active-fin control system for model rocketry using onboard sensor data and embedded processing.', 'Flight-controller-for-Active-fin-stabilization-in-Rocketry'],
    ['Bio-Inspired Rocket Steering', 'CAD, CFD, and flight-simulation work for a whale-flipper-inspired guided-rocket fin system.', 'Bio-Inspired-Fin-Controlled-Steering-in-Rocketry'],
    ['Custom Angular-Leg Quadruped', 'Open-source quadruped robot with custom CAD, PCB electronics, and Arduino walking firmware.', 'Custom-angular-leg-Quadruped-Robot'],
    ['Delta Robotic Arm', 'A 3D-printed 3-DOF delta robotic arm built entirely around revolute joints.', 'DELTA-robotic-Arm'],
    ['Linear-Rail PRRR Robotic Arm', 'Mouse-controlled teleoperation for a rail-mounted robotic arm, combining real-time inverse kinematics, Pygame, and Arduino motor control.', 'Linear-Rail-3DOF-Robotic-arm-PRRR-config-with-Teleoperation-System'],
    ['Hybrid ML + LLM Network Analyzer', 'Network-threat detection that combines supervised ML, anomaly detection, rule signatures, and LLM explanations.', 'Hybrid-ML-LLM-Network-Traffic-Analyzer'],
    ['ARIM Railway Inspection Robot', 'Autonomous rail-mounted inspection robot that detects defects using edge AI and marks damaged locations in real time.', 'Automatic-Railway-Track-Inspection-and-Monitoring-robot-ARIM'],
    ['Arduino & STM32 Quadcopter', '3D-printed quadcopter using Arduino, STM32, MPU6050, and BMP280 sensors for stable flight.', 'Arduino-and-STm32-based-Quadcopter'],
    ['HIGGS ML Detection Pipeline', 'Machine-learning pipeline for Higgs boson detection using 12+ classifiers, including XGBoost, LightGBM, CatBoost, neural networks, and SVM.', 'HIGGS-UCI-DATASET'],
    ['Arduino GRBL CNC Plotter', 'Open-source CNC plotter with Arduino Uno, GRBL firmware, CNC Shield V3, and a Universal G-code Sender workflow.', 'Open-source-2-axis-cnc-plotter']
];

const projectReadmeDetails = {
    'Rocket-Flight-Controller-RFC-PCB': 'The board is designed around a Raspberry Pi Pico for experimental aerospace work, model rockets, avionics testing, and embedded-control prototyping. The project focuses on a compact custom PCB foundation for future real-time flight instrumentation and control loops.',
    'CHIMAERA-A1-----Open-source-5-DOF-Robotic-arm': 'CHIMAERA is a five-joint articulated manipulator for precision movement, automation experiments, and control-system learning. It combines a 360-degree base with stepper actuation, high-torque servo joints, magnetic encoder feedback, and inverse kinematics for accurate positioning.',
    'Flight-controller-for-Active-fin-stabilization-in-Rocketry': 'This active-fin-control system addresses the limitations of passive fins under crosswinds and trajectory disturbances. An STM32 flight controller processes onboard sensor data in real time and drives fin-mounted servos to support stable, controlled high-power flight.',
    'Bio-Inspired-Fin-Controlled-Steering-in-Rocketry': 'This aerospace project explores a whale-flipper-inspired fin for agile, low-power rocket steering. The repository brings together the mechanical concept, CAD models, CFD work, and OpenRocket flight simulations behind the guided-rocket design.',
    'Custom-angular-leg-Quadruped-Robot': 'A complete open-source quadruped platform that joins custom mechanical CAD, PCB electronics, and Arduino walking firmware. It is structured as a reproducible robotics build for experimenting with legged locomotion and embedded motor control.',
    'DELTA-robotic-Arm': 'The Delta arm is a compact 3D-printed, three-degree-of-freedom parallel robot built from revolute joints. The repository includes CAD, workspace and circuit material, firmware, and image documentation for the mechanical and embedded build.',
    'Linear-Rail-3DOF-Robotic-arm-PRRR-config-with-Teleoperation-System': 'A motorized linear rail carries a two-link arm with servo-driven shoulder, elbow, and wrist joints. Moving the mouse in the Python/Pygame interface selects an end-effector target; the inverse-kinematics solver translates it into rail and joint commands that can be sent to Arduino over serial.',
    'Hybrid-ML-LLM-Network-Traffic-Analyzer': 'The analyzer layers supervised machine learning, unsupervised anomaly detection, rule-based signatures, and LLM-generated explanations. Together, these stages detect, classify, and explain suspicious network traffic in real time rather than returning a bare prediction.',
    'Automatic-Railway-Track-Inspection-and-Monitoring-robot-ARIM': 'ARIM is an autonomous rail-mounted inspection robot that uses edge AI to detect track defects and mark damaged locations in real time. The project documents a practical monitoring system for cracks, misalignments, and surface wear, including image-based evidence.',
    'Arduino-and-STm32-based-Quadcopter': 'A 3D-printed quadcopter platform developed in both Arduino Uno and STM32 variants. The build uses MPU6050 and BMP280 sensors as part of its flight-stability hardware and is documented with mechanical and electronics imagery.',
    'HIGGS-UCI-DATASET': 'This is a large-scale Higgs boson detection pipeline built around 12+ classifiers, including gradient boosting, neural networks, SVMs, and hyperparameter optimisation. It compares multiple model families on Large Hadron Collider data rather than relying on a single baseline.',
    'Open-source-2-axis-cnc-plotter': 'The CNC plotter uses an Arduino Uno, GRBL, CNC Shield V3, stepper drivers, and NEMA17 motors for reliable two-axis G-code motion. Its documented workflow runs SVG-to-G-code plotting through Universal G-code Sender, connecting digital design to physical output.'
};

const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    projectsGrid.innerHTML = portfolioProjects.map(([title, description, repository], index) => `
        <button class="project-card" type="button" data-project-index="${index}" aria-label="View details for ${title}">
            <div class="project-image">
                <div class="wireframe-placeholder"><span>Project ${String(index + 1).padStart(2, '0')}</span></div>
            </div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${description}</p>
                <span class="project-link">View project <span aria-hidden="true">↗</span></span>
            </div>
        </button>
    `).join('');
}

const projectModal = document.createElement('div');
projectModal.className = 'project-modal';
projectModal.setAttribute('aria-hidden', 'true');
projectModal.innerHTML = `
    <div class="project-modal__backdrop" data-close-modal></div>
    <section class="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button class="project-modal__close" type="button" aria-label="Close project details" data-close-modal>×</button>
        <div class="project-modal__gallery" aria-label="Project image placeholders">
            <div class="project-modal__image">Image 01</div>
            <div class="project-modal__image">Image 02</div>
        </div>
        <div class="project-modal__content">
            <p class="project-modal__eyebrow">Project overview</p>
            <h3 id="project-modal-title"></h3>
            <p class="project-modal__description"></p>
            <p class="project-modal__details"></p>
            <a class="btn btn-primary project-modal__readme" target="_blank" rel="noopener noreferrer">Read the README</a>
        </div>
    </section>
`;
document.body.appendChild(projectModal);

function openProjectModal(index) {
    const [title, description, repository] = portfolioProjects[index];
    projectModal.querySelector('#project-modal-title').textContent = title;
    projectModal.querySelector('.project-modal__description').textContent = description;
    projectModal.querySelector('.project-modal__details').textContent = projectReadmeDetails[repository] || description;
    projectModal.querySelector('.project-modal__readme').href = `https://github.com/Prathviraj-mv/${repository}`;
    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    projectModal.querySelector('.project-modal__close').focus();
}

projectsGrid?.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (card) openProjectModal(Number(card.dataset.projectIndex));
});

projectModal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-modal]')) {
        projectModal.classList.remove('is-open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal.classList.contains('is-open')) {
        projectModal.classList.remove('is-open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.classList.add('cad-visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('slide-up');
    observer.observe(card);
});

// Observe skill tags
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.classList.add('slide-up');
    tag.style.animationDelay = `${index * 0.1}s`;
    observer.observe(tag);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Observe stats section for counter animation
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

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
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
