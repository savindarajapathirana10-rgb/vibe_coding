const card = document.querySelector('.profile-card');
const container = document.querySelector('.card-container');

// 3D Tilt Effect
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Button click effect
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    contactBtn.textContent = 'Connecting...';
    contactBtn.style.background = '#10b981'; // Green color
    
    setTimeout(() => {
        contactBtn.textContent = 'Message Sent!';
        setTimeout(() => {
            contactBtn.textContent = 'Get In Touch';
            contactBtn.style.background = 'var(--primary-color)';
        }, 2000);
    }, 1500);
});
