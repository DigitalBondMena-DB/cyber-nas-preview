/* ===== THEME ===== */
(function () {
    const stored = localStorage.getItem('cybernas-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateIcon(theme);
    function updateIcon(t) {
        const i = document.getElementById('themeIcon');
        if (!i) return;
        t === 'dark'
            ? i.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
            : i.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
    }
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const c = document.documentElement.getAttribute('data-theme');
            const n = c === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', n);
            localStorage.setItem('cybernas-theme', n);
            updateIcon(n);
        });
    }
})();

/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMenuFn() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
}
if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (closeMenu) closeMenu.addEventListener('click', closeMenuFn);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenuFn);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenuFn));

/* ===== PARTICLES ===== */
(function () {
    const c = document.getElementById('heroParticles');
    if (!c || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const s = Math.random() * 4 + 1.5;
        p.style.width = s + 'px';
        p.style.height = s + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.opacity = (Math.random() * .5 + .2).toFixed(2);
        p.style.animationDuration = (Math.random() * 6 + 6) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        if (Math.random() > .6) p.style.background = 'var(--cn-light-blue)';
        fragment.appendChild(p);
    }
    c.appendChild(fragment);
})();

/* ===== VIDEO PLAYER ===== */
const videoPlayBtn = document.getElementById('videoPlayBtn');
const videoPoster = document.getElementById('videoPoster');
const videoText = document.getElementById('videoText');
const videoOverlayGrad = document.getElementById('videoOverlayGrad');
const videoPlayer = document.getElementById('videoPlayer');
if (videoPlayBtn && videoPoster && videoPlayer) {
    videoPlayBtn.addEventListener('click', () => {
        videoPoster.style.opacity = '0';
        videoPlayBtn.style.opacity = '0';
        videoPlayBtn.style.pointerEvents = 'none';
        if (videoText) {
            videoText.style.opacity = '0';
            videoText.style.transform = 'translateY(12px)';
            videoText.style.pointerEvents = 'none';
        }
        if (videoOverlayGrad) {
            videoOverlayGrad.style.opacity = '0';
            videoOverlayGrad.style.pointerEvents = 'none';
        }
        setTimeout(() => {
            videoPoster.style.display = 'none';
            videoPlayBtn.style.display = 'none';
            if (videoText) videoText.style.display = 'none';
            if (videoOverlayGrad) videoOverlayGrad.style.display = 'none';
            videoPlayer.style.display = 'block';
            videoPlayer.play().catch(() => {});
        }, 400);
    });
}

/* ===== SERVICES ===== */
const services = [
    {
        name: 'Training Programs',
        short: 'Capacity building & skill refinement',
        tags: ['Cybersecurity and Data Protection', 'SANS Institute', 'Microsoft Training Program', 'ISO Risk Management Training', 'Gamified Secure Coding'],
        desc: 'Our CyberNas Training programs are designed to accommodate learners at all stages, from novices grasping foundational concepts to seasoned professionals seeking to refine their advanced skills.',
        icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
    },
    {
        name: 'Consultancy',
        short: 'Proactive expert advisory & security',
        tags: ['DFIR', 'ICS/OT Security', 'SoCaaS'],
        desc: 'In today’s ever-evolving threat landscape, robust cybersecurity is no longer optional. Our expert consultancy equips you to proactively navigate tomorrow’s challenges, ensuring your digital future remains secure.',
        icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'
    },
    {
        name: 'Cybersecurity Solutions',
        short: 'Tailored enterprise security suite',
        tags: ['Robotic Process Automation (RPA)', 'DDoS Attack Mitigation', 'AWS Cloud Optimization'],
        desc: 'We offer a comprehensive suite of transformative cybersecurity services, meticulously tailored to address your organization’s unique needs and challenges.',
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
    }
];


const svcList = document.getElementById('serviceList');
const mobileSvcSelect = document.getElementById('mobileServiceSelect');
const svcIllustration = document.getElementById('serviceIllustration');
const svcName = document.getElementById('serviceName');
const svcDesc = document.getElementById('serviceDesc');
const svcTags = document.getElementById('serviceTags');

function renderServiceList() {
    if (svcList) {
        svcList.innerHTML = services.map((s, i) => `<div class="service-item ${i === 0 ? 'active' : ''} flex-1 min-w-[280px]" data-idx="${i}" role="button" tabindex="0"><span class="service-num">${String(i + 1).padStart(2, '0')}</span><span class="svc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span><span class="flex-1 text-left"><span class="font-semibold text-sm block">${s.name}</span><span class="text-xs" style="color:var(--text-muted);">${s.short}</span></span></div>`).join('');
        svcList.querySelectorAll('.service-item').forEach(item => {
            item.addEventListener('click', () => selectService(parseInt(item.dataset.idx)));
            item.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectService(parseInt(item.dataset.idx));
                }
            });
        });
    }
    if (mobileSvcSelect) {
        mobileSvcSelect.innerHTML = services.map((s, i) => `<option value="${i}">${String(i + 1).padStart(2, '0')}. ${s.name}</option>`).join('');
        mobileSvcSelect.addEventListener('change', e => {
            selectService(parseInt(e.target.value));
        });
    }
}

function buildIllustration(svc, idx) {
    const cx = 200, cy = 200, nodes = [];
    for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2, r = 130 + (i % 2) * 15, x = cx + Math.cos(ang) * r, y = cy + Math.sin(ang) * r;
        nodes.push({ x, y, delay: (i * .3).toFixed(1) });
    }
    return `<svg viewBox="0 0 400 400" class="w-full h-full illu-anim" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ig" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#010ED0" stop-opacity="0.5"/><stop offset="100%" stop-color="#010ED0" stop-opacity="0"/></radialGradient><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#010ED0"/><stop offset="100%" stop-color="#3a44e8"/></linearGradient></defs><circle cx="200" cy="200" r="180" fill="url(#ig)"/><g style="transform-origin:200px 200px;animation:rotate-slow 30s linear infinite;"><circle cx="200" cy="200" r="155" fill="none" stroke="#010ED0" stroke-width="1" stroke-dasharray="4 8" opacity="0.3"/></g><circle cx="200" cy="200" r="120" fill="none" stroke="#010ED0" stroke-width="1" opacity="0.2"/>${nodes.map(n => `<line x1="${cx}" y1="${cy}" x2="${n.x}" y2="${n.y}" stroke="#010ED0" stroke-width="1" opacity="0.25"/>`).join('')}${nodes.map(n => `<g class="net-node" style="animation-delay:${n.delay}s;"><circle cx="${n.x}" cy="${n.y}" r="5" fill="#010ED0" opacity="0.7"/><circle cx="${n.x}" cy="${n.y}" r="10" fill="none" stroke="#010ED0" stroke-width="1" opacity="0.4"/></g>`).join('')}<circle cx="200" cy="200" r="75" fill="var(--bg-elevated)" stroke="url(#lg)" stroke-width="2"/><g transform="translate(200,200)"><g transform="translate(-32,-32) scale(2.7)" stroke="url(#lg)" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${svc.icon}</g></g><g transform="translate(310,310)"><circle r="22" fill="var(--bg-elevated)" stroke="url(#lg)" stroke-width="1.5"/><text x="0" y="5" text-anchor="middle" font-family="Space Grotesk" font-size="13" font-weight="700" fill="var(--cn-blue)">${String(idx + 1).padStart(2, '0')}</text></g></svg>`;
}

function selectService(idx) {
    if (svcList) {
        svcList.querySelectorAll('.service-item').forEach((el, i) => el.classList.toggle('active', i === idx));
        const activeItem = svcList.querySelector(`.service-item[data-idx="${idx}"]`);
        if (activeItem) {
            const containerHeight = svcList.clientHeight;
            const itemTop = activeItem.offsetTop;
            const itemHeight = activeItem.clientHeight;
            const scrollPos = svcList.scrollTop;
            if (itemTop < scrollPos || itemTop + itemHeight > scrollPos + containerHeight) {
                svcList.scrollTo({
                    top: itemTop - (containerHeight / 2) + (itemHeight / 2),
                    behavior: 'smooth'
                });
            }
        }
    }
    if (mobileSvcSelect && mobileSvcSelect.value !== String(idx)) {
        mobileSvcSelect.value = String(idx);
    }
    const s = services[idx];
    if (svcIllustration) svcIllustration.innerHTML = buildIllustration(s, idx);
    if (svcName) svcName.textContent = s.name;
    if (svcDesc) svcDesc.textContent = s.desc;
    if (svcTags) svcTags.innerHTML = s.tags.map(t => `<span class="px-3 py-1.5 rounded-full text-xs font-medium" style="background:var(--accent-glow);color:var(--cn-blue);border:1px solid var(--border);">${t}</span>`).join('');
}
renderServiceList();
selectService(0);


/* ===== SOLUTIONS ===== */
const solutions = [
    { title: 'Cloud Security', desc: 'Protecting multi-cloud environments with architecture, configuration, and monitoring controls.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },
    { title: 'Compliance & Governance', desc: 'Meeting regulatory requirements with structured frameworks and continuous control monitoring.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { title: 'Security Operations', desc: '24/7 SOC monitoring, threat detection, and rapid incident response capabilities.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { title: 'Training & Awareness', desc: 'Building human firewalls through role-based training and phishing simulations.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
    { title: 'Risk Management', desc: 'Identifying, assessing, and mitigating threats before they impact your business.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80', icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { title: 'Incident Response', desc: 'Rapid breach response, digital forensics, and recovery to minimize business disruption.', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' }
];
const solGrid = document.getElementById('solutionsGrid');
if (solGrid) {
    solGrid.innerHTML = solutions.map((s, i) => `<div class="sol-card reveal" data-reveal><img src="${s.img}" alt="${s.title}" loading="lazy"/><div class="sol-overlay"></div><div class="sol-content"><div class="sol-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></div><h3 class="display text-lg font-bold mb-1.5">${s.title}</h3><p class="text-sm leading-relaxed opacity-90">${s.desc}</p></div></div>`).join('');
}

/* ===== METHODOLOGY ===== */
const methodology = [
    { num: '01', title: 'Discover', desc: 'Comprehensive assessment of your current security posture, assets, and risks.', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
    { num: '02', title: 'Design', desc: 'Tailored security architecture and roadmap aligned with your business objectives.', icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>' },
    { num: '03', title: 'Deploy', desc: 'Implementation of security controls, tools, and processes across your environment.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { num: '04', title: 'Defend', desc: 'Continuous monitoring, threat detection, and rapid incident response 24/7.', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { num: '05', title: 'Develop', desc: 'Ongoing optimization, testing, and maturation of your security program.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' }
];
const methodGrid = document.getElementById('methodGrid');
if (methodGrid) {
    methodGrid.innerHTML = methodology.map((m, i) => `<div class="method-card reveal" data-reveal>${i < 4 ? '<div class="method-line hidden lg:block"></div>' : ''}<div class="method-num mb-3">${m.num}</div><div class="why-icon mb-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${m.icon}</svg></div><h3 class="display text-lg font-bold mb-2">${m.title}</h3><p class="text-sm leading-relaxed" style="color:var(--text-muted);">${m.desc}</p></div>`).join('');
}


/* ===== FORM VALIDATION ===== */
function validateField(input, type) {
    if (!input) return { valid: false, msg: '' };
    const v = input.value.trim();
    
    if (type === 'name') {
        if (v === '') return { valid: false, msg: 'Name is required.' };
        if (v.length < 3) return { valid: false, msg: 'Min 3 characters required.' };
        if (!/^[A-Za-z\u0600-\u06FF\s]+$/.test(v)) return { valid: false, msg: 'Letters and spaces only.' };
        return { valid: true, msg: '' };
    }
    if (type === 'phone') {
        if (v === '') return { valid: false, msg: 'Phone number is required.' };
        const cleanNum = v.replace(/[^0-9\u0660-\u0669\u06f0-\u06f9]/g, '');
        if (cleanNum.length < 7) return { valid: false, msg: 'Min 7 digits required.' };
        if (!/^[0-9+\-\s()\u0660-\u0669\u06f0-\u06f9]+$/.test(v)) return { valid: false, msg: 'Please enter a valid phone number.' };
        return { valid: true, msg: '' };
    }
    if (type === 'email') {
        if (v === '') return { valid: false, msg: 'Email address is required.' };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return { valid: false, msg: 'Please enter a valid email address.' };
        return { valid: true, msg: '' };
    }
    if (type === 'select') {
        if (v === '') return { valid: false, msg: 'Please select a service.' };
        return { valid: true, msg: '' };
    }
    if (type === 'text') {
        if (v === '') return { valid: false, msg: 'Subject is required.' };
        if (v.length < 3) return { valid: false, msg: 'Min 3 characters required.' };
        return { valid: true, msg: '' };
    }
    if (type === 'textarea') {
        if (v === '') return { valid: false, msg: 'Message is required.' };
        if (v.length < 5) return { valid: false, msg: 'Min 5 characters required.' };
        return { valid: true, msg: '' };
    }
    return { valid: true, msg: '' };
}

function showError(name, res, form) {
    const f = form || document;
    const input = f.querySelector(`[name="${name}"]`);
    const err = f.querySelector(`[data-err="${name}"]`);
    if (!input || !err) return;
    if (!res.valid) {
        input.classList.add('error');
        const errText = err.querySelector('.err-text');
        if (errText) {
            errText.textContent = res.msg;
        } else {
            err.textContent = res.msg;
        }
        err.classList.add('show');
    } else {
        input.classList.remove('error');
        err.classList.remove('show');
    }
}

const consultForm = document.getElementById('consultForm');
const resetFormBtn = document.getElementById('resetForm');
if (consultForm) {
    consultForm.addEventListener('submit', e => {
        e.preventDefault();
        const resN = validateField(consultForm.fullName, 'name');
        const resP = validateField(consultForm.phone, 'phone');
        const resE = validateField(consultForm.email, 'email');
        const resS = validateField(consultForm.serviceType, 'select');
        showError('fullName', resN, consultForm);
        showError('phone', resP, consultForm);
        showError('email', resE, consultForm);
        showError('serviceType', resS, consultForm);
        if (resN.valid && resP.valid && resE.valid && resS.valid) {
            const successEl = document.getElementById('successState');
            if (successEl) successEl.classList.add('show');
        }
    });
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            consultForm.reset();
            consultForm.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
            consultForm.querySelectorAll('.err-msg').forEach(e => e.classList.remove('show'));
            const successEl = document.getElementById('successState');
            if (successEl) successEl.classList.remove('show');
        });
    }
    consultForm.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', () => {
            if (input.name === 'fullName') showError('fullName', validateField(input, 'name'), consultForm);
            if (input.name === 'phone') showError('phone', validateField(input, 'phone'), consultForm);
            if (input.name === 'email') showError('email', validateField(input, 'email'), consultForm);
            if (input.name === 'serviceType') showError('serviceType', validateField(input, 'select'), consultForm);
        });
        input.addEventListener('input', () => {
            if (input.name === 'fullName') input.value = input.value.replace(/[\d\u0660-\u0669\u06f0-\u06f9]/g, '');
            if (input.name === 'phone') input.value = input.value.replace(/[^0-9+\-\s()\u0660-\u0669\u06f0-\u06f9]/g, '');
            let type = '';
            if (input.name === 'fullName') type = 'name';
            else if (input.name === 'phone') type = 'phone';
            else if (input.name === 'email') type = 'email';
            else if (input.name === 'serviceType') type = 'select';
            if (type) {
                showError(input.name, validateField(input, type), consultForm);
            }
        });
    });
}

const contactForm = document.getElementById('contactForm');
const resetContactBtn = document.getElementById('resetContact');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const resN = validateField(contactForm.cName, 'name');
        const resE = validateField(contactForm.cEmail, 'email');
        const resP = validateField(contactForm.cPhone, 'phone');
        const resS = validateField(contactForm.cSubject, 'text');
        const resM = validateField(contactForm.cMessage, 'textarea');
        showError('cName', resN, contactForm);
        showError('cEmail', resE, contactForm);
        showError('cPhone', resP, contactForm);
        showError('cSubject', resS, contactForm);
        showError('cMessage', resM, contactForm);
        if (resN.valid && resE.valid && resP.valid && resS.valid && resM.valid) {
            const contactSuccessEl = document.getElementById('contactSuccess');
            if (contactSuccessEl) contactSuccessEl.classList.add('show');
        }
    });
    if (resetContactBtn) {
        resetContactBtn.addEventListener('click', () => {
            contactForm.reset();
            contactForm.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
            contactForm.querySelectorAll('.err-msg').forEach(e => e.classList.remove('show'));
            const contactSuccessEl = document.getElementById('contactSuccess');
            if (contactSuccessEl) contactSuccessEl.classList.remove('show');
        });
    }
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', () => {
            if (input.name === 'cName') showError('cName', validateField(input, 'name'), contactForm);
            if (input.name === 'cEmail') showError('cEmail', validateField(input, 'email'), contactForm);
            if (input.name === 'cPhone') showError('cPhone', validateField(input, 'phone'), contactForm);
            if (input.name === 'cSubject') showError('cSubject', validateField(input, 'text'), contactForm);
            if (input.name === 'cMessage') showError('cMessage', validateField(input, 'textarea'), contactForm);
        });
        input.addEventListener('input', () => {
            if (input.name === 'cName') input.value = input.value.replace(/[\d\u0660-\u0669\u06f0-\u06f9]/g, '');
            if (input.name === 'cPhone') input.value = input.value.replace(/[^0-9+\-\s()\u0660-\u0669\u06f0-\u06f9]/g, '');
            let type = '';
            if (input.name === 'cName') type = 'name';
            else if (input.name === 'cEmail') type = 'email';
            else if (input.name === 'cPhone') type = 'phone';
            else if (input.name === 'cSubject') type = 'text';
            else if (input.name === 'cMessage') type = 'textarea';
            if (type) {
                showError(input.name, validateField(input, type), contactForm);
            }
        });
    });
}

/* ===== UNIFIED THROTTLED SCROLL MANAGER ===== */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = ['home', 'about', 'what-we-do', 'services', 'solutions', 'methodology', 'contact'];
const cachedSections = sectionIds.map(id => ({ id, el: document.getElementById(id) })).filter(s => s.el);

let isScrollTicking = false;
function onScrollFrame() {
    const scrollY = window.scrollY;
    
    // 1. Scroll To Top Visibility
    if (scrollTopBtn) {
        if (scrollY > 600) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    }
    
    // 2. Nav Active Highlight
    let cur = 'home';
    for (let i = 0; i < cachedSections.length; i++) {
        if (cachedSections[i].el.getBoundingClientRect().top <= 120) {
            cur = cachedSections[i].id;
        }
    }
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));

    isScrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
        window.requestAnimationFrame(onScrollFrame);
        isScrollTicking = true;
    }
}, { passive: true });

/* ===== NATIVE SCROLL ANIMATIONS (IntersectionObserver) ===== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px -15% 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => {
    if (prefersReducedMotion) {
        el.classList.add('revealed');
    } else if (el.closest('#home')) {
        setTimeout(() => { el.classList.add('revealed'); }, 150);
    } else {
        revealObserver.observe(el);
    }
});

// Counter count-up helper
function animateCount(el, target, duration) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = target + '+';
        return;
    }
    if (el._animId) cancelAnimationFrame(el._animId);
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress);
        el.textContent = Math.floor(target * easeProgress) + '+';
        if (progress < 1) {
            el._animId = requestAnimationFrame(step);
        } else {
            el.textContent = target + '+';
            el._animId = null;
        }
    }
    el._animId = requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            if (!isNaN(target)) {
                animateCount(el, target, 2000);
            }
            observer.unobserve(el);
        }
    });
}, { rootMargin: '0px 0px -15% 0px' });

document.querySelectorAll('.counter-num').forEach(el => {
    counterObserver.observe(el);
});


/* ===== OPTIMIZED MAGNETIC BUTTONS ===== */
document.querySelectorAll('.magnetic').forEach(btn => {
    if (prefersReducedMotion) return;
    let rect = null;
    let isTicking = false;
    let mouseX = 0, mouseY = 0;

    btn.addEventListener('mouseenter', () => {
        rect = btn.getBoundingClientRect();
    });

    btn.addEventListener('mousemove', e => {
        if (!rect) rect = btn.getBoundingClientRect();
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isTicking) {
            window.requestAnimationFrame(() => {
                if (rect) {
                    const tx = (mouseX - rect.left - rect.width / 2) * 0.2;
                    const ty = (mouseY - rect.top - rect.height / 2) * 0.3;
                    btn.style.transform = `translate(${tx}px, ${ty}px)`;
                }
                isTicking = false;
            });
            isTicking = true;
        }
    });

    btn.addEventListener('mouseleave', () => {
        rect = null;
        btn.style.transform = '';
    });
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});
