// Countdown Timer
function updateCountdown() {
    const tourDate = new Date('2026-03-06T14:00:00').getTime();
    const now = new Date().getTime();
    const distance = tourDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-value">IT\'S</span><span class="countdown-label">HAPPENING!</span></div>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling
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

// Photo Upload Functionality
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const photoGrid = document.getElementById('photoGrid');

// Store photos in localStorage
let uploadedPhotos = JSON.parse(localStorage.getItem('stagPhotos')) || [];

// Load existing photos
function loadPhotos() {
    photoGrid.innerHTML = '';
    uploadedPhotos.forEach((photoData, index) => {
        addPhotoToGrid(photoData, index);
    });
}

// Add photo to grid
function addPhotoToGrid(photoData, index) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `
        <img src="${photoData}" alt="Stag photo ${index + 1}">
    `;
    photoGrid.appendChild(photoItem);
}

// Handle file selection
fileInput.addEventListener('change', function(e) {
    const files = e.target.files;
    handleFiles(files);
});

// Click to upload
uploadZone.addEventListener('click', function() {
    fileInput.click();
});

// Drag and drop
uploadZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadZone.style.background = 'rgba(255, 0, 0, 0.2)';
});

uploadZone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    uploadZone.style.background = 'rgba(255, 0, 0, 0.05)';
});

uploadZone.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadZone.style.background = 'rgba(255, 0, 0, 0.05)';
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Process uploaded files
function handleFiles(files) {
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const photoData = e.target.result;
                uploadedPhotos.push(photoData);
                localStorage.setItem('stagPhotos', JSON.stringify(uploadedPhotos));
                addPhotoToGrid(photoData, uploadedPhotos.length - 1);
                
                // Show success message
                showNotification('Photo uploaded! 📸');
            };
            reader.readAsDataURL(file);
        }
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #FF0000;
        color: #fff;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 18px;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load photos on page load
loadPhotos();

// Add parallax effect to hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Mobile menu toggle (if needed in future)
const logo = document.querySelector('.logo');
logo.addEventListener('dblclick', function() {
    document.querySelectorAll('.nav-links').forEach(nav => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});
