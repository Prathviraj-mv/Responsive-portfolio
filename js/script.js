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
    ['Agricultural Automation Rover', 'Mobile agricultural rover equipped with a robotic arm for autonomous field assistance and farming automation tasks.', 'Rover-equipped-with-a-Robotic-Arm-for-Agricultural-Automation'],
    ['Bird Control Laser-Guided Turret', 'Laser-guided bird-control turret that combines real-time targeting with a motorized pan-and-tilt mechanism.', 'Bird-control-using-laser-guided-turret'],
    ['4-DOF Robotic Arm', 'Four-degree-of-freedom robotic arm designed for precise object handling, embedded control, and automation experiments.', '4-Degree-of-freedom-Robotic-arm'],
    ['Arduino GRBL CNC Plotter', 'Open-source CNC plotter with Arduino Uno, GRBL firmware, CNC Shield V3, and a Universal G-code Sender workflow.', 'Open-source-2-axis-cnc-plotter'],
    ['Custom Angular-Leg Quadruped', 'Open-source quadruped robot with custom CAD, PCB electronics, and Arduino walking firmware.', 'Custom-angular-leg-Quadruped-Robot'],
    ['Delta Robotic Arm', 'A 3D-printed 3-DOF delta robotic arm built entirely around revolute joints.', 'DELTA-robotic-Arm'],
    ['Linear-Rail PRRR Robotic Arm', 'Mouse-controlled teleoperation for a rail-mounted robotic arm, combining real-time inverse kinematics, Pygame, and Arduino motor control.', 'Linear-Rail-3DOF-Robotic-arm-PRRR-config-with-Teleoperation-System'],
    ['Hybrid ML + LLM Network Analyzer', 'Network-threat detection that combines supervised ML, anomaly detection, rule signatures, and LLM explanations.', 'Hybrid-ML-LLM-Network-Traffic-Analyzer'],
    ['ARIM Railway Inspection Robot', 'Autonomous rail-mounted inspection robot that detects defects using edge AI and marks damaged locations in real time.', 'Automatic-Railway-Track-Inspection-and-Monitoring-robot-ARIM'],
    ['Arduino & STM32 Quadcopter', '3D-printed quadcopter using Arduino, STM32, MPU6050, and BMP280 sensors for stable flight.', 'Arduino-and-STm32-based-Quadcopter'],
    ['HIGGS ML Detection Pipeline', 'Machine-learning pipeline for Higgs boson detection using 12+ classifiers, including XGBoost, LightGBM, CatBoost, neural networks, and SVM.', 'HIGGS-UCI-DATASET'],
    ['Bio-Inspired Rocket Steering', 'CAD, CFD, and flight-simulation work for a whale-flipper-inspired guided-rocket fin system.', 'Bio-Inspired-Fin-Controlled-Steering-in-Rocketry']
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
    'Open-source-2-axis-cnc-plotter': 'The CNC plotter uses an Arduino Uno, GRBL, CNC Shield V3, stepper drivers, and NEMA17 motors for reliable two-axis G-code motion. Its documented workflow runs SVG-to-G-code plotting through Universal G-code Sender, connecting digital design to physical output.',
    'Bird-control-using-laser-guided-turret': 'A motorized laser-guided turret designed for non-lethal bird deterrence. The project combines a pan-and-tilt mechanism with guided aiming to direct the laser accurately across a protected area.',
    '4-Degree-of-freedom-Robotic-arm': 'A four-degree-of-freedom robotic arm built to explore articulated motion, coordinated joint control, and practical object manipulation. The project documents the mechanical build and its robotic control system.',
    'Rover-equipped-with-a-Robotic-Arm-for-Agricultural-Automation': 'An agricultural rover that integrates a robotic arm with mobile automation for field operations. The platform explores how navigation, manipulation, and embedded systems can work together to support modern farming workflows.'
};

const projectImages = {
    'Rocket-Flight-Controller-RFC-PCB': ['images/rocket-flight-controller-pcb/Screenshot 2026-05-21 202211.png', 'images/rocket-flight-controller-pcb/Screenshot 2026-05-21 202656.png'],
    'CHIMAERA-A1-----Open-source-5-DOF-Robotic-arm': ['images/chimaera-5dof-robotic-arm/IMG_20250628_210058.jpg', 'images/chimaera-5dof-robotic-arm/RENDER1.PNG'],
    'Flight-controller-for-Active-fin-stabilization-in-Rocketry': ['images/active-fin-stabilization/IMG_20250222_185927.jpg', 'images/active-fin-stabilization/IMG_20250530_203337.jpg'],
    'Bio-Inspired-Fin-Controlled-Steering-in-Rocketry': ['images/bio-inspired-rocketry/Screenshot 2025-04-08 201104.png', 'images/bio-inspired-rocketry/Screenshot 2025-04-08 212336.png'],
    'Custom-angular-leg-Quadruped-Robot': ['images/quadruped-robot/520874258-7f52d29a-0045-461e-b233-68f5ef354ffb.png', 'images/quadruped-robot/Screenshot 2025-11-28 114347.png'],
    'DELTA-robotic-Arm': ['images/delta-robotic-arm/IMG_20251102_135505.jpg', 'images/delta-robotic-arm/Screenshot 2025-10-09 142118.png'],
    'Linear-Rail-3DOF-Robotic-arm-PRRR-config-with-Teleoperation-System': ['images/prrr-robotic-arm/Screenshot 2026-05-15 230902.png', 'images/prrr-robotic-arm/WhatsApp Image 2026-05-15 at 22.38.59.jpeg'],
    'Hybrid-ML-LLM-Network-Traffic-Analyzer': ['images/network-traffic-analyzer/img2.png', 'images/network-traffic-analyzer/img4.png'],
    'Automatic-Railway-Track-Inspection-and-Monitoring-robot-ARIM': ['images/railway-inspection-robot/Screenshot 2026-03-18 160404.png', 'images/railway-inspection-robot/WhatsApp Image 2026-03-18 at 16.04.42.jpeg'],
    'Arduino-and-STm32-based-Quadcopter': ['images/stm32-quadcopter/IMG_20250325_172036.jpg', 'images/stm32-quadcopter/IMG_20250405_151326.jpg'],
    'HIGGS-UCI-DATASET': ['images/higgs-ml-pipeline/images (1).jpg'],
    'Open-source-2-axis-cnc-plotter': ['images/cnc-plotter/Screenshot 2026-02-21 124727.png', 'images/cnc-plotter/WhatsApp Image 2026-02-21 at 12.46.49.jpeg'],
    'Bird-control-using-laser-guided-turret': ['images/bird control/WhatsApp Image 2026-06-13 at 12.02.29 (1).jpeg', 'images/bird control/WhatsApp Image 2026-04-29 at 12.04.01.jpeg'],
    '4-Degree-of-freedom-Robotic-arm': ['images/4dof robotic arm/IMG_20241207_125614.jpg', 'images/4dof robotic arm/IMG_20241129_195953.jpg'],
    'Rover-equipped-with-a-Robotic-Arm-for-Agricultural-Automation': ['images/agribot/IMG_20250316_211211.jpg', 'images/agribot/IMG_20250326_075737.jpg']
};

const alternateThumbnails = new Set([
    'Linear-Rail-3DOF-Robotic-arm-PRRR-config-with-Teleoperation-System',
    'Hybrid-ML-LLM-Network-Traffic-Analyzer',
    'Custom-angular-leg-Quadruped-Robot',
    'Automatic-Railway-Track-Inspection-and-Monitoring-robot-ARIM'
]);

const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    projectsGrid.innerHTML = portfolioProjects.map(([title, description, repository], index) => {
        const thumbnail = projectImages[repository]?.[alternateThumbnails.has(repository) ? 1 : 0];
        return `
        <button class="project-card" type="button" data-project-index="${index}" aria-label="View details for ${title}">
            <div class="project-image">
                ${thumbnail
                    ? `<img class="project-thumbnail" src="${encodeURI(thumbnail)}" alt="${title} thumbnail">`
                    : `<div class="wireframe-placeholder"><span>Project ${String(index + 1).padStart(2, '0')}</span></div>`}
            </div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${description}</p>
                <span class="project-link">View project <span aria-hidden="true">↗</span></span>
            </div>
        </button>
    `;
    }).join('');
}

const projectModal = document.createElement('div');
projectModal.className = 'project-modal';
projectModal.setAttribute('aria-hidden', 'true');
projectModal.innerHTML = `
    <div class="project-modal__backdrop" data-close-modal></div>
    <section class="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button class="project-modal__close" type="button" aria-label="Close project details" data-close-modal>×</button>
        <div class="project-modal__gallery" aria-label="Project image placeholders">
            <div class="project-modal__image"><img alt="" hidden><span>Image 01</span></div>
            <div class="project-modal__image"><img alt="" hidden><span>Image 02</span></div>
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
    const images = projectImages[repository] || [];
    projectModal.querySelectorAll('.project-modal__image').forEach((imagePanel, imageIndex) => {
        const image = imagePanel.querySelector('img');
        const label = imagePanel.querySelector('span');
        const source = images[imageIndex];
        if (source) {
            image.src = encodeURI(source);
            image.alt = `${title} - image ${imageIndex + 1}`;
            image.hidden = false;
            label.hidden = true;
        } else {
            image.removeAttribute('src');
            image.alt = '';
            image.hidden = true;
            label.hidden = false;
            label.textContent = `Image ${String(imageIndex + 1).padStart(2, '0')} coming soon`;
        }
    });
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
