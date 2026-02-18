// =============================================
// THEME TOGGLE — TEXT SWAP MAPPINGS
// Mapped to your ACTUAL site content
// =============================================

const corporateText = {
    heroTitle: 'Q1 2026 TEAM OFFSITE',
    navLogo: 'J.P. MORGAN — TEAM EVENT',
    footerLogo: 'J.P. MORGAN • Q1 2026 TEAM OFFSITE',
    footerText: 'AMSTERDAM • MARCH 6-8, 2026',
    footerWarning: '© 2026 J.P. MORGAN CHASE & CO. THIS IS SATIRE.',
    sectionTitles: {
        'THE LINEUP': 'ATTENDEE ROSTER',
        'TOUR DATES': 'AGENDA',
        'THE SETLIST': 'ACTION ITEMS',
        'BACKSTAGE PASS': 'DOCUMENT REPOSITORY',
        'TOUR RULES': 'COMPLIANCE GUIDELINES'
    },
    sectionSubtitles: {
        'THE WARRIORS RIDING INTO BATTLE': 'APPROVED PARTICIPANTS — HR CLEARED',
        '3 NIGHTS OF CHAOS': 'SCHEDULED ACTIVITIES',
        'GREATEST HITS': 'DELIVERABLES & MILESTONES',
        'UPLOAD YOUR PHOTOS FROM THE TOUR': 'UPLOAD SUPPORTING MATERIALS',
        'BREAK THEM AT YOUR PERIL': 'MANDATORY — PER COMPLIANCE POLICY §7.3'
    },
    // Lineup roles
    roles: {
        'HEADLINER • THE GROOM': 'PROJECT LEAD',
        'BEST MAN • TALL FRENCH GUY': 'DEPUTY PROJECT LEAD (EMEA)',
        'THE DUTCH GUY • TALL': 'REGIONAL STAKEHOLDER (BENELUX)',
        'TALL FRENCH GUY': 'SENIOR ANALYST (EMEA)',
        'THE BOSS': 'EVENT COORDINATOR',
        'THE SHORT GUY': 'OPERATIONS ANALYST',
        'THE TECH GUY': 'TECHNOLOGY SME',
        'THE CREW': 'TEAM MEMBER'
    },
    // Bio
    bios: {
        '"One last ride before the ball and chain"': '"Committed to delivering stakeholder value"'
    },
    // Day headers
    dayDates: {
        'FRIDAY, MARCH 6': 'FRIDAY, 6 MARCH — TRAVEL & ONBOARDING',
        'SATURDAY, MARCH 7': 'SATURDAY, 7 MARCH — CORE SESSIONS',
        'SUNDAY, MARCH 8': 'SUNDAY, 8 MARCH — WRAP-UP & DEPARTURE'
    },
    // Event names
    events: {
        'LEAVE CANARY WHARF': 'DEPART CANARY WHARF OFFICE',
        'WHEELS UP': 'SCHEDULED DEPARTURE',
        'TOUCHDOWN AMSTERDAM': 'ARRIVAL — AMSTERDAM SCHIPHOL',
        'HOTEL CHECK-IN': 'REGISTRATION & BADGE COLLECTION',
        'FIRST PINTS & DINNER': 'NETWORKING DINNER',
        'LATE NIGHT EXPLORATION': 'OPTIONAL EVENING SOCIAL (VOLUNTARY)',
        'RECOVERY BREAKFAST': 'CONTINENTAL BREAKFAST BRIEFING',
        'ACTIVITY TBC': 'TEAM-BUILDING WORKSHOP',
        'PUB CRAWL BEGINS': 'CROSS-FUNCTIONAL NETWORKING SESSION',
        'CLUB NIGHT': 'POST-DINNER NETWORKING EVENT',
        'RECOVERY BRUNCH': 'MORNING DEBRIEF & FEEDBACK SESSION',
        'HOTEL CHECKOUT': 'CHECKOUT & EXPENSE REPORT SUBMISSION',
        'DEPARTURE TO AIRPORT': 'TRANSPORT TO SCHIPHOL',
        'FLIGHT HOME': 'SCHEDULED RETURN FLIGHT',
        'MEMORIES FOREVER': 'ACTION ITEMS & FOLLOW-UPS'
    },
    // Event locations
    locations: {
        '📍 DLR to London City Airport': '📍 Pre-approved transport route',
        '📍 BA8459 departs London City': '📍 BA8459 — Corporate Travel booked',
        '📍 Schiphol Airport': '📍 Schiphol Airport — Ground transport arranged',
        '📍 Leidseplein Area': '📍 Pre-approved venue (budget ref: Q1-OFFSITE-2026)',
        '📍 You know where...': '📍 Participation voluntary. Taxi receipts accepted.',
        '📍 Hotel': '📍 Hotel — included with room booking',
        '📍 Shooting Range / Go-Karts / Beer Bikes?': '📍 See attached options. H&S assessment pending.',
        '📍 Paradiso / Melkweg TBC': '📍 Venue TBC — smart casual dress code applies',
        '📍 Hotel / Local Spot': '📍 Hotel meeting room B',
        '📍 Amsterdam Schiphol': '📍 Amsterdam Schiphol — allow 2hrs',
        '📍 BA0439 to London City': '📍 BA0439 — Corporate Travel booked',
        '📍 In our hearts (and photos)': '📍 Deliverables due within 5 business days'
    },
    // Setlist tracks
    tracks: {
        'Canal Cruise & Beers': 'Stakeholder Alignment Exercise (Canal)',
        'Heineken Experience': 'Cultural Immersion Workshop (Brewery)',
        'Coffee Shop Tour (Educational)': 'Market Research Field Study',
        'Red Light District': 'Urban Economics Walking Tour',
        'Dam Square Mayhem': 'City Centre Team Morale Activity',
        'Stag Costume Reveal': 'Team Branding Initiative',
        'Epic Night Out': 'Extended Networking Session',
        '3AM Kebabs & Regrets': 'Post-Session Sustenance & Retrospective'
    },
    // Rules
    rules: [
        'All discussions during the offsite are subject to information barriers and need-to-know protocols.',
        'Ensure the Project Lead is adequately hydrated and supported at all times.',
        'No team member shall be left unaccounted for, per H&S Policy §4.2.',
        'Team branding materials must be worn during all Day 2 sessions.',
        'Forfeit penalties apply for: referencing personal commitments, checking Outlook, or failing to engage.',
        'All sessions must be documented. If undocumented, the session did not occur.',
        'Emergency contact: Building Security. Do not improvise.',
        'The Project Lead has final approval on all decisions. Except when incapacitated.'
    ]
};

// Reverse mappings (corporate → rock)
function reverseMap(map) {
    const r = {};
    for (const [k, v] of Object.entries(map)) r[v] = k;
    return r;
}

const rockText = {
    heroTitle: 'THE FINAL SEND-OFF TOUR',
    navLogo: 'RAF TOUR 2026',
    footerLogo: 'RAF • THE FINAL SEND-OFF TOUR',
    footerText: 'AMSTERDAM • MARCH 6-8, 2026',
    footerWarning: '⚠️ PARENTAL ADVISORY: EXPLICIT CONTENT ⚠️',
    sectionTitles: reverseMap(corporateText.sectionTitles),
    sectionSubtitles: reverseMap(corporateText.sectionSubtitles),
    roles: reverseMap(corporateText.roles),
    bios: reverseMap(corporateText.bios),
    dayDates: reverseMap(corporateText.dayDates),
    events: reverseMap(corporateText.events),
    locations: reverseMap(corporateText.locations),
    tracks: reverseMap(corporateText.tracks),
    rules: [
        'What happens in Amsterdam, gets posted in the group chat',
        'The groom drinks for free (or pays double, we\'ll decide)',
        'No man left behind (unless he\'s being arrested)',
        'Costume must be worn at all times on Day 2',
        'Forfeit drinks for: mentioning the wedding, checking work emails, boring conversation',
        'Photos or it didn\'t happen',
        'Emergency contact: Don\'t call anyone, we\'re adults',
        'What Raf says, goes. Except when he\'s too drunk to talk.'
    ]
};

// Generic text swapper
function swapText(map, selector) {
    document.querySelectorAll(selector).forEach(el => {
        const text = el.textContent.trim();
        if (map[text]) el.textContent = map[text];
    });
}

// innerHTML swapper (for locations with <br> tags)
function swapHTML(map, selector) {
    document.querySelectorAll(selector).forEach(el => {
        const text = el.textContent.trim();
        if (map[text]) el.textContent = map[text];
    });
}

// Flash effect
function createFlash() {
    let flash = document.querySelector('.theme-flash');
    if (!flash) {
        flash = document.createElement('div');
        flash.className = 'theme-flash';
        document.body.appendChild(flash);
    }
    flash.classList.remove('active');
    void flash.offsetWidth;
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 500);
}

function applyThemeText(source) {
    // Hero
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        heroTitle.textContent = source.heroTitle;
        heroTitle.setAttribute('data-text', source.heroTitle);
    }
    
    const navLogo = document.getElementById('navLogo');
    if (navLogo) navLogo.textContent = source.navLogo;
    
    const footerLogo = document.getElementById('footerLogo');
    if (footerLogo) footerLogo.textContent = source.footerLogo;
    
    const footerText = document.getElementById('footerText');
    if (footerText) footerText.textContent = source.footerText;
    
    const footerWarning = document.getElementById('footerWarning');
    if (footerWarning) footerWarning.textContent = source.footerWarning;

    // Section titles & subtitles
    swapText(source.sectionTitles, '.section-title');
    swapText(source.sectionSubtitles, '.section-subtitle');

    // Lineup
    swapText(source.roles, '.lineup-role');
    swapText(source.bios, '.lineup-bio');

    // Tour dates
    swapText(source.dayDates, '.day-date');
    swapText(source.events, '.event-name');
    swapHTML(source.locations, '.event-location');

    // Setlist
    swapText(source.tracks, '.track-name');

    // Rules (by index)
    if (source.rules) {
        document.querySelectorAll('.rule-text').forEach((el, i) => {
            if (source.rules[i]) el.textContent = source.rules[i];
        });
    }

    // Upload text
    const uploadText = document.querySelector('.upload-text');
    const uploadSub = document.querySelector('.upload-subtext');
    if (source === corporateText) {
        if (uploadText) uploadText.textContent = 'Click to Upload Supporting Materials';
        if (uploadSub) uploadSub.textContent = 'Approved file formats only';
    } else {
        if (uploadText) uploadText.textContent = 'Click or Drag Photos Here';
        if (uploadSub) uploadSub.textContent = 'Share the chaos with the crew';
    }

    // Swap lineup images (rock ↔ corporate)
    // Corporate images use _corp suffix: Raf2_corp.PNG, Julien_corp.PNG, etc.
    document.querySelectorAll('.lineup-card img').forEach(img => {
        const src = img.getAttribute('src');
        if (!src) return;
        if (source === corporateText) {
            if (!src.includes('_corp')) {
                img.setAttribute('src', src.replace(/(\.\w+)$/, '_corp$1'));
            }
        } else {
            img.setAttribute('src', src.replace('_corp', ''));
        }
    });

    // Swap hero image (raf_viking.png ↔ raf_viking_corp.png)
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        const src = heroImg.getAttribute('src');
        if (source === corporateText) {
            if (!src.includes('_corp')) {
                heroImg.setAttribute('src', src.replace(/(\.\w+)$/, '_corp$1'));
            }
        } else {
            heroImg.setAttribute('src', src.replace('_corp', ''));
        }
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'rock' ? 'corporate' : 'rock';

    // Flash
    createFlash();

    // Switch theme
    html.setAttribute('data-theme', next);

    // Swap text
    applyThemeText(next === 'corporate' ? corporateText : rockText);

    // Persist
    localStorage.setItem('rafstag-theme', next);
}

// =============================================
// COUNTDOWN — ENHANCED WITH URGENCY STATES
// =============================================

let confettiFired = false;

function updateCountdown() {
    const tourDate = new Date('2026-03-06T14:00:00').getTime();
    const now = new Date().getTime();
    const distance = tourDate - now;

    const countdown = document.getElementById('countdown');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (distance <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        if (countdown) countdown.className = 'countdown zero';
        if (!confettiFired) {
            confettiFired = true;
            launchConfetti();
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    animateValue(daysEl, days);
    animateValue(hoursEl, hours);
    animateValue(minutesEl, minutes);
    animateValue(secondsEl, seconds);

    // Urgency states
    if (countdown) {
        countdown.classList.remove('urgent', 'critical', 'zero');
        if (days <= 3 && days > 0) countdown.classList.add('urgent');
        else if (days === 0 && distance > 0) countdown.classList.add('critical');
    }
}

function animateValue(el, value) {
    const formatted = String(value).padStart(2, '0');
    if (el.textContent !== formatted) {
        el.style.transform = 'scale(1.15)';
        el.textContent = formatted;
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 200);
    }
}

// =============================================
// CONFETTI
// =============================================

function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#FF0000', '#FFD700', '#00FF00', '#FF69B4', '#00BFFF', '#FF4500', '#FFFFFF'];
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.width = (Math.random() * 10 + 5) + 'px';
            piece.style.height = (Math.random() * 10 + 5) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
            piece.style.opacity = Math.random() * 0.7 + 0.3;
            container.appendChild(piece);
            setTimeout(() => piece.remove(), 5000);
        }, Math.random() * 2000);
    }
}

// =============================================
// NOTIFICATION SYSTEM (from original)
// =============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent, #FF0000);
        color: #fff;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 18px;
        font-family: Arial, sans-serif;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// =============================================
// PARALLAX (from original — disabled in corporate)
// =============================================

window.addEventListener('scroll', function() {
    if (document.documentElement.getAttribute('data-theme') === 'corporate') return;
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// =============================================
// MOBILE MENU TOGGLE (from original)
// =============================================

const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('dblclick', function() {
        document.querySelectorAll('.nav-links').forEach(nav => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    });
}

// =============================================
// SMOOTH SCROLLING (from original)
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Restore saved theme (without sound/flash)
    const saved = localStorage.getItem('rafstag-theme');
    if (saved && saved !== 'rock') {
        document.documentElement.setAttribute('data-theme', saved);
        applyThemeText(corporateText);
    }

    // Theme toggle button
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
