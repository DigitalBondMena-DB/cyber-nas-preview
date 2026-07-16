/* ===== THEME ===== */
(function () {
    const stored = localStorage.getItem('cybernas-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateIcon(theme);
    function updateIcon(t) { const i = document.getElementById('themeIcon'); if (!i) return; t === 'dark' ? i.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' : i.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>'; }
    document.getElementById('themeToggle').addEventListener('click', () => { const c = document.documentElement.getAttribute('data-theme'); const n = c === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); localStorage.setItem('cybernas-theme', n); updateIcon(n); });
})();

/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById('menuBtn'), closeMenu = document.getElementById('closeMenu'), mobileMenu = document.getElementById('mobileMenu'), mobileOverlay = document.getElementById('mobileOverlay');
function openMenu() { mobileMenu.classList.add('open'); mobileOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenuFn() { mobileMenu.classList.remove('open'); mobileOverlay.classList.remove('open'); document.body.style.overflow = ''; }
menuBtn.addEventListener('click', openMenu); closeMenu.addEventListener('click', closeMenuFn); mobileOverlay.addEventListener('click', closeMenuFn);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenuFn));

/* ===== PARTICLES ===== */
(function () { const c = document.getElementById('heroParticles'); if (!c) return; for (let i = 0; i < 20; i++) { const p = document.createElement('div'); p.className = 'particle'; const s = Math.random() * 4 + 1.5; p.style.width = s + 'px'; p.style.height = s + 'px'; p.style.left = Math.random() * 100 + '%'; p.style.top = Math.random() * 100 + '%'; p.style.opacity = (Math.random() * .5 + .2).toFixed(2); p.style.animationDuration = (Math.random() * 6 + 6) + 's'; p.style.animationDelay = (Math.random() * 5) + 's'; if (Math.random() > .6) p.style.background = 'var(--cn-light-blue)'; c.appendChild(p); } })();

/* ===== VIDEO PLAYER ===== */
const videoPlayBtn = document.getElementById('videoPlayBtn'), videoPoster = document.getElementById('videoPoster'), videoPlayer = document.getElementById('videoPlayer');
videoPlayBtn.addEventListener('click', () => {
    videoPoster.style.opacity = '0'; videoPlayBtn.style.opacity = '0'; videoPlayBtn.style.pointerEvents = 'none';
    setTimeout(() => { videoPoster.style.display = 'none'; videoPlayBtn.style.display = 'none'; videoPlayer.style.display = 'block'; videoPlayer.play(); }, 300);
});

/* ===== SERVICES ===== */
const services = [
    { name: 'Cybersecurity Consulting', short: 'Strategy & advisory', tags: ['Strategy', 'Advisory', 'Roadmap'], desc: 'Our consultants work alongside your leadership to design, implement, and mature security strategies aligned with business objectives — turning compliance and risk into competitive advantage.', icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>' },
    { name: 'Training Programs', short: 'Capability building', tags: ['Workshops', 'Certifications', 'Labs'], desc: 'Comprehensive, role-based training solutions that build internal security capabilities — from technical analysts to executive leadership, delivered through hands-on labs and certifications.', icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
    { name: 'Security Awareness', short: 'Human firewall', tags: ['Phishing', 'Culture', 'Simulations'], desc: 'Practical, ongoing programs that help every employee recognize and respond to modern threats — turning your workforce from the weakest link into your first line of defense.', icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' },
    { name: 'Risk Assessment', short: 'Identify · prioritize · mitigate', tags: ['Threats', 'Vulnerabilities', 'Impact'], desc: 'Systematic evaluation of threats, vulnerabilities, and business impact — giving leadership a clear, prioritized view of where to invest in mitigation and where to accept residual risk.', icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { name: 'Compliance', short: 'Standards & regulations', tags: ['Audit', 'Evidence', 'Controls'], desc: 'Ensuring your operations meet regulatory and industry standards through structured frameworks, evidence collection, and continuous control monitoring — built to pass audits the first time.', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { name: 'Governance', short: 'Policies · roles · oversight', tags: ['Policy', 'Board', 'Oversight'], desc: 'Establishing clear policies, roles, and oversight structures that drive sustainable security practices — aligned to your risk appetite and embedded into how the business actually runs.', icon: '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/>' },
    { name: 'Cloud Security', short: 'Multi-cloud protection', tags: ['AWS', 'Azure', 'GCP'], desc: 'Protecting cloud infrastructure, applications, and data across leading platforms — through secure architecture, configuration hardening, identity controls, and continuous monitoring.', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },
    { name: 'SOC', short: '24/7 monitoring & response', tags: ['SIEM', 'Detection', 'Response'], desc: 'A 24/7 Security Operations Center delivering continuous monitoring, threat detection, and rapid incident response — staffed by analysts who know your environment and your business.', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { name: 'DFIR', short: 'Forensics & incident response', tags: ['Investigation', 'Containment', 'Recovery'], desc: 'Digital Forensics and Incident Response capabilities to investigate, contain, and recover from breaches — preserving evidence and minimizing business disruption when seconds matter.', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>' },
    { name: 'Vulnerability Assessment', short: 'Find weaknesses first', tags: ['Scan', 'Prioritize', 'Report'], desc: 'Identifying and prioritizing weaknesses across systems, applications, and networks before attackers can exploit them — with clear, actionable reporting for technical and executive audiences.', icon: '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2"/><path d="M5 7l3 2"/><path d="M19 13h-3"/><path d="M5 13h3"/><path d="M19 19l-3-2"/><path d="M5 19l3-2"/><path d="M12 3v3"/>' },
    { name: 'Penetration Testing', short: 'Real-world attack simulation', tags: ['Red Team', 'Exploit', 'Validate'], desc: 'Simulated attacks that expose real-world risks in your applications, networks, and people — going beyond automated scans to validate impact and provide prioritized remediation guidance.', icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>' },
    { name: 'ISO 27001', short: 'Certification readiness', tags: ['ISMS', 'Audit', 'Certify'], desc: 'Achieving and maintaining international certification for information security management — through gap assessments, ISMS design, control implementation, and audit-ready evidence.', icon: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>' },
    { name: 'NCA ECC', short: 'Saudi Essential Cybersecurity Controls', tags: ['NCA', 'ECC', 'Compliance'], desc: "Supporting compliance with the Saudi National Cybersecurity Authority's Essential Cybersecurity Controls — covering all five domains with implementation, evidence, and reporting.", icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { name: 'SAMA CSF', short: 'Saudi Central Bank framework', tags: ['SAMA', 'Banking', 'Finance'], desc: "Aligning with the Saudi Central Bank's Cyber Security Framework for financial institutions — ensuring your programs meet the regulator's expectations across all four domains.", icon: '<path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/>' },
    { name: 'PDPL', short: 'Personal Data Protection Law', tags: ['Privacy', 'Data', 'KSA'], desc: 'Personal Data Protection Law compliance for responsible data handling — covering data mapping, consent management, individual rights, breach notification, and cross-border transfers.', icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
    { name: 'AI Security', short: 'Secure AI systems & models', tags: ['ML', 'LLM', 'Adversarial'], desc: 'Securing AI systems, models, and pipelines against emerging threats — from data poisoning and model extraction to prompt injection and adversarial inputs, without slowing innovation.', icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>' },
    { name: 'AWS Security', short: 'Hardened Amazon Web Services', tags: ['IAM', 'Config', 'GuardDuty'], desc: 'Hardening and monitoring workloads on Amazon Web Services following AWS best practices — covering IAM, network segmentation, encryption, logging, and native security services.', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 13v4"/><circle cx="12" cy="11" r="1"/>' }
];
const svcList = document.getElementById('serviceList'), mobileSvcSelect = document.getElementById('mobileServiceSelect'), svcIllustration = document.getElementById('serviceIllustration'), svcName = document.getElementById('serviceName'), svcDesc = document.getElementById('serviceDesc'), svcTags = document.getElementById('serviceTags');
function renderServiceList() {
    if (svcList) {
        svcList.innerHTML = services.map((s, i) => `<div class="service-item ${i === 0 ? 'active' : ''}" data-idx="${i}" role="button" tabindex="0"><span class="service-num">${String(i + 1).padStart(2, '0')}</span><span class="svc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span><span class="flex-1"><span class="font-semibold text-sm block">${s.name}</span><span class="text-xs" style="color:var(--text-muted);">${s.short}</span></span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.5;"><polyline points="9 18 15 12 9 6"/></svg></div>`).join('');
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
function buildIllustration(svc, idx) { const cx = 200, cy = 200, nodes = []; for (let i = 0; i < 8; i++) { const ang = (i / 8) * Math.PI * 2, r = 130 + (i % 2) * 15, x = cx + Math.cos(ang) * r, y = cy + Math.sin(ang) * r; nodes.push({ x, y, delay: (i * .3).toFixed(1) }); } return `<svg viewBox="0 0 400 400" class="w-full h-full illu-anim" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ig" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#010ED0" stop-opacity="0.5"/><stop offset="100%" stop-color="#010ED0" stop-opacity="0"/></radialGradient><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#010ED0"/><stop offset="100%" stop-color="#3a44e8"/></linearGradient></defs><circle cx="200" cy="200" r="180" fill="url(#ig)"/><g style="transform-origin:200px 200px;animation:rotate-slow 30s linear infinite;"><circle cx="200" cy="200" r="155" fill="none" stroke="#010ED0" stroke-width="1" stroke-dasharray="4 8" opacity="0.3"/></g><circle cx="200" cy="200" r="120" fill="none" stroke="#010ED0" stroke-width="1" opacity="0.2"/>${nodes.map(n => `<line x1="${cx}" y1="${cy}" x2="${n.x}" y2="${n.y}" stroke="#010ED0" stroke-width="1" opacity="0.25"/>`).join('')}${nodes.map(n => `<g class="net-node" style="animation-delay:${n.delay}s;"><circle cx="${n.x}" cy="${n.y}" r="5" fill="#010ED0" opacity="0.7"/><circle cx="${n.x}" cy="${n.y}" r="10" fill="none" stroke="#010ED0" stroke-width="1" opacity="0.4"/></g>`).join('')}<circle cx="200" cy="200" r="75" fill="var(--bg-elevated)" stroke="url(#lg)" stroke-width="2"/><g transform="translate(200,200)"><g transform="translate(-32,-32) scale(2.7)" stroke="url(#lg)" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${svc.icon}</g></g><g transform="translate(310,310)"><circle r="22" fill="var(--bg-elevated)" stroke="url(#lg)" stroke-width="1.5"/><text x="0" y="5" text-anchor="middle" font-family="Space Grotesk" font-size="13" font-weight="700" fill="var(--cn-blue)">${String(idx + 1).padStart(2, '0')}</text></g></svg>`; }
function selectService(idx) {
    if (svcList) {
        svcList.querySelectorAll('.service-item').forEach((el, i) => el.classList.toggle('active', i === idx));
        // Auto scroll selected desktop item into view inside scrollable container
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
renderServiceList(); selectService(0);

/* ===== PARTNERS & CLIENTS ===== */
const partners = [{ name: 'CloudShield', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' }, { name: 'ThreatGrid', icon: '<path d="M3 3v18h18"/><polyline points="7 14 11 10 14 13 21 6"/>' }, { name: 'SecureNet', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' }, { name: 'DataFort', icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' }, { name: 'CyberGuard', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>' }, { name: 'NetArmor', icon: '<path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6l-8-4z"/>' }, { name: 'ByteWall', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>' }, { name: 'InfoShield', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>' }]; const clients = [{ name: 'Al Salam Bank', icon: '<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>' }, { name: 'Emirates Energy', icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' }, { name: 'Royal Health', icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>' }, { name: 'Gulf Telecom', icon: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>' }, { name: 'Falcon Aviation', icon: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>' }, { name: 'Pearl Logistics', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>' }, { name: 'Desert Mining', icon: '<circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/>' }, { name: 'National Insurance', icon: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>' }];
function renderLogos(arr, id) { document.getElementById(id).innerHTML = arr.map(p => `<div class="partner-logo"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p.icon}</svg><span>${p.name}</span></div>`).join(''); }
renderLogos([...partners, ...clients], 'partnersGrid');

/* ===== SOLUTIONS ===== */
const solutions = [
    { title: 'Cloud Security', desc: 'Protecting multi-cloud environments with architecture, configuration, and monitoring controls.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },
    { title: 'Compliance & Governance', desc: 'Meeting regulatory requirements with structured frameworks and continuous control monitoring.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { title: 'Security Operations', desc: '24/7 SOC monitoring, threat detection, and rapid incident response capabilities.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { title: 'Training & Awareness', desc: 'Building human firewalls through role-based training and phishing simulations.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
    { title: 'Risk Management', desc: 'Identifying, assessing, and mitigating threats before they impact your business.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80', icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { title: 'Incident Response', desc: 'Rapid breach response, digital forensics, and recovery to minimize business disruption.', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' }
];
document.getElementById('solutionsGrid').innerHTML = solutions.map((s, i) => `<div class="sol-card reveal" data-reveal><img src="${s.img}" alt="${s.title}" loading="lazy"/><div class="sol-overlay"></div><div class="sol-content"><div class="sol-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></div><h3 class="display text-lg font-bold mb-1.5">${s.title}</h3><p class="text-sm leading-relaxed opacity-90">${s.desc}</p></div></div>`).join('');

/* ===== METHODOLOGY ===== */
const methodology = [
    { num: '01', title: 'Discover', desc: 'Comprehensive assessment of your current security posture, assets, and risks.', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
    { num: '02', title: 'Design', desc: 'Tailored security architecture and roadmap aligned with your business objectives.', icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>' },
    { num: '03', title: 'Deploy', desc: 'Implementation of security controls, tools, and processes across your environment.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { num: '04', title: 'Defend', desc: 'Continuous monitoring, threat detection, and rapid incident response 24/7.', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { num: '05', title: 'Develop', desc: 'Ongoing optimization, testing, and maturation of your security program.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' }
];
document.getElementById('methodGrid').innerHTML = methodology.map((m, i) => `<div class="method-card reveal" data-reveal>${i < 4 ? '<div class="method-line hidden lg:block"></div>' : ''}<div class="method-num mb-3">${m.num}</div><div class="why-icon mb-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${m.icon}</svg></div><h3 class="display text-lg font-bold mb-2">${m.title}</h3><p class="text-sm leading-relaxed" style="color:var(--text-muted);">${m.desc}</p></div>`).join('');

/* ===== WHY CYBERNAS ===== */
const whyCards = [
    { icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>', title: 'Certified Expertise', text: 'Our team holds industry-leading certifications — OSCP, CISSP, CISM, CISA, and ISO 27001 Lead Auditor — backed by years of field experience.' },
    { icon: '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/>', title: 'Regulatory Mastery', text: 'Deep, current knowledge of NCA ECC, SAMA CSF, and PDPL — specific to the Saudi regulatory landscape and its enforcement expectations.' },
    { icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', title: '24/7 Vigilance', text: 'Continuous monitoring through our Security Operations Center ensures threats are detected and contained in real time, every hour of every day.' },
    { icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>', title: 'Tailored Approach', text: 'We design security programs around your business objectives and risk appetite — not generic templates that ignore how you actually operate.' },
    { icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>', title: 'Proven Delivery', text: 'Hundreds of successful engagements across financial services, government, healthcare, and energy sectors — with measurable security outcomes.' },
    { icon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>', title: 'End-to-End Coverage', text: 'From governance and risk to incident response and recovery — a single partner for the full security lifecycle, eliminating vendor sprawl.' }
];
document.getElementById('whyGrid').innerHTML = whyCards.map((c, i) => `<div class="feature-card rounded-2xl p-6 sm:p-7 reveal" data-reveal><div class="why-icon mb-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${c.icon}</svg></div><h3 class="display text-lg font-bold mb-2">${c.title}</h3><p class="text-sm leading-relaxed" style="color:var(--text-muted);">${c.text}</p></div>`).join('');

/* ===== TECH TREE (GSAP Animated) ===== */
const treeNodes = [
    { id: 'root', x: 20, y: 330, w: 170, h: 60, label: 'CyberNas Stack', type: 'root', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { id: 'secops', x: 330, y: 76, w: 160, h: 48, label: 'Security Ops', type: 'branch', parent: 'root', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { id: 'cloud', x: 330, y: 256, w: 160, h: 48, label: 'Cloud Security', type: 'branch', parent: 'root', icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },
    { id: 'comp', x: 330, y: 436, w: 160, h: 48, label: 'Compliance', type: 'branch', parent: 'root', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { id: 'assess', x: 330, y: 596, w: 160, h: 48, label: 'Assessment', type: 'branch', parent: 'root', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
    { id: 'siem', x: 760, y: 32, w: 180, h: 36, label: 'Splunk SIEM', type: 'leaf', parent: 'secops' },
    { id: 'edr', x: 760, y: 82, w: 180, h: 36, label: 'CrowdStrike EDR', type: 'leaf', parent: 'secops' },
    { id: 'ti', x: 760, y: 132, w: 180, h: 36, label: 'Threat Intel', type: 'leaf', parent: 'secops' },
    { id: 'aws', x: 760, y: 212, w: 180, h: 36, label: 'AWS GuardDuty', type: 'leaf', parent: 'cloud' },
    { id: 'azure', x: 760, y: 262, w: 180, h: 36, label: 'Azure Sentinel', type: 'leaf', parent: 'cloud' },
    { id: 'gcp', x: 760, y: 312, w: 180, h: 36, label: 'GCP SCC', type: 'leaf', parent: 'cloud' },
    { id: 'iso', x: 760, y: 392, w: 180, h: 36, label: 'ISO 27001', type: 'leaf', parent: 'comp' },
    { id: 'nca', x: 760, y: 442, w: 180, h: 36, label: 'NCA ECC', type: 'leaf', parent: 'comp' },
    { id: 'pdpl', x: 760, y: 492, w: 180, h: 36, label: 'PDPL', type: 'leaf', parent: 'comp' },
    { id: 'burp', x: 760, y: 572, w: 180, h: 36, label: 'Burp Suite', type: 'leaf', parent: 'assess' },
    { id: 'nessus', x: 760, y: 622, w: 180, h: 36, label: 'Nessus', type: 'leaf', parent: 'assess' },
    { id: 'metasploit', x: 760, y: 672, w: 180, h: 36, label: 'Metasploit', type: 'leaf', parent: 'assess' },
];

function buildTree() {
    const svg = document.getElementById('treeSvg');
    let defs = `<defs>
    <linearGradient id="rootGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#010ED0"/><stop offset="100%" stop-color="#3a44e8"/></linearGradient>
    <linearGradient id="branchGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#010ED0" stop-opacity="0.15"/><stop offset="100%" stop-color="#DEE0FF" stop-opacity="0.1"/></linearGradient>
    <filter id="treeGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>`;

    let paths = '';
    let rootPathCount = 0;
    let leafPathCount = 0;
    treeNodes.forEach(n => {
        if (n.parent) {
            const p = treeNodes.find(t => t.id === n.parent);
            const sx = p.x + p.w, sy = p.y + p.h / 2, ex = n.x, ey = n.y + n.h / 2;
            const mx = (sx + ex) / 2;

            let delay, duration;
            if (n.parent === 'root') {
                delay = 0.4 + rootPathCount * 0.1;
                duration = 0.5;
                rootPathCount++;
            } else {
                delay = 1.4 + leafPathCount * 0.04;
                duration = 0.3;
                leafPathCount++;
            }

            paths += `<path class="tree-path" data-parent="${n.parent}" data-child="${n.id}" d="M ${sx},${sy} C ${mx},${sy} ${mx},${ey} ${ex},${ey}" style="--delay: ${delay.toFixed(2)}s; --duration: ${duration.toFixed(2)}s;"/>`;
        }
    });

    let nodes = '';
    let branchCount = 0;
    let leafCount = 0;
    treeNodes.forEach(n => {
        const cx = n.x + n.w / 2, cy = n.y + n.h / 2;
        let fill, stroke, strokeW, textFill, iconFill;
        if (n.type === 'root') { fill = 'url(#rootGrad)'; stroke = '#010ED0'; strokeW = 2; textFill = '#fff'; iconFill = '#fff'; }
        else if (n.type === 'branch') { fill = 'var(--bg-elevated)'; stroke = 'var(--cn-blue)'; strokeW = 1.5; textFill = 'var(--text)'; iconFill = 'var(--cn-blue)'; }
        else { fill = 'var(--card-bg)'; stroke = 'var(--border)'; strokeW = 1; textFill = 'var(--text)'; iconFill = 'var(--cn-blue)'; }

        let iconSvg = '';
        if (n.icon) {
            iconSvg = `<g transform="translate(${n.x + 14},${cy - 10})"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${iconFill}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n.icon}</svg></g>`;
        } else {
            iconSvg = `<circle cx="${n.x + 22}" cy="${cy}" r="4" fill="var(--cn-blue)" opacity="0.6"/>`;
        }

        const textX = n.x + (n.type === 'leaf' ? 42 : (n.icon ? 44 : n.w / 2));
        const textAnchor = (n.type === 'leaf' || n.icon) ? 'start' : 'middle';

        let delay, duration, ease;
        if (n.type === 'root') {
            delay = 0;
            duration = 0.6;
            ease = 'cubic-bezier(0.34, 1.56, 0.64, 1.7)';
        } else if (n.type === 'branch') {
            delay = 0.9 + branchCount * 0.1;
            duration = 0.4;
            ease = 'cubic-bezier(0.34, 1.56, 0.64, 1.5)';
            branchCount++;
        } else {
            delay = 1.94 + leafCount * 0.04;
            duration = 0.3;
            ease = 'cubic-bezier(0.34, 1.56, 0.64, 1.5)';
            leafCount++;
        }

        nodes += `<g class="tree-node" data-id="${n.id}" data-type="${n.type}" style="transform-origin: ${cx}px ${cy}px; --delay: ${delay.toFixed(2)}s; --duration: ${duration.toFixed(2)}s; --ease: ${ease};">
      <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="${n.type === 'root' ? 14 : 10}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}" ${n.type === 'root' ? 'filter="url(#treeGlow)"' : ''}/>
      ${iconSvg}
      <text x="${textX}" y="${cy + 5}" text-anchor="${textAnchor}" fill="${textFill}" font-size="${n.type === 'root' ? '14' : '12'}" font-weight="${n.type === 'root' ? '700' : '600'}" font-family="${n.type === 'leaf' ? 'Inter' : 'Space Grotesk'}">${n.label}</text>
    </g>`;
    });

    const rootCx = treeNodes[0].x + treeNodes[0].w / 2, rootCy = treeNodes[0].y + treeNodes[0].h / 2;
    const ring = `<g style="transform-origin:${rootCx}px ${rootCy}px;animation:rotate-slow 40s linear infinite;pointer-events:none;"><circle cx="${rootCx}" cy="${rootCy}" r="50" fill="none" stroke="#010ED0" stroke-width="1" stroke-dasharray="3 6" opacity="0.3"/></g>`;

    svg.innerHTML = defs + ring + paths + nodes;

    svg.querySelectorAll('.tree-path').forEach(p => { const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len; });
}

buildTree();

/* ===== FORM VALIDATION ===== */
function validateField(input, type) { const v = input.value.trim(); let valid = true; if (type === 'name') valid = /^[A-Za-z\u0600-\u06FF\s]{2,}$/.test(v); else if (type === 'phone') valid = /^[0-9+\-\s()]{7,}$/.test(v); else if (type === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); else if (type === 'select') valid = v !== ''; else if (type === 'text') valid = v.length >= 2; else if (type === 'textarea') valid = v.length >= 5; return valid; }
function showError(name, show, form) { const f = form || document; const input = f.querySelector(`[name="${name}"]`); const err = f.querySelector(`[data-err="${name}"]`); if (!input || !err) return; if (show) { input.classList.add('error'); err.classList.add('show'); } else { input.classList.remove('error'); err.classList.remove('show'); } }

const consultForm = document.getElementById('consultForm');
consultForm.addEventListener('submit', e => { e.preventDefault(); const vN = validateField(consultForm.fullName, 'name'), vP = validateField(consultForm.phone, 'phone'), vE = validateField(consultForm.email, 'email'), vS = validateField(consultForm.serviceType, 'select'); showError('fullName', !vN, consultForm); showError('phone', !vP, consultForm); showError('email', !vE, consultForm); showError('serviceType', !vS, consultForm); if (vN && vP && vE && vS) document.getElementById('successState').classList.add('show'); });
document.getElementById('resetForm').addEventListener('click', () => { consultForm.reset(); document.getElementById('successState').classList.remove('show'); });
consultForm.querySelectorAll('input, select, textarea').forEach(input => { input.addEventListener('blur', () => { if (input.name === 'fullName') showError('fullName', !validateField(input, 'name') && input.value !== '', consultForm); if (input.name === 'phone') showError('phone', !validateField(input, 'phone') && input.value !== '', consultForm); if (input.name === 'email') showError('email', !validateField(input, 'email') && input.value !== '', consultForm); }); input.addEventListener('input', () => { if (input.classList.contains('error')) { const err = consultForm.querySelector(`[data-err="${input.name}"]`); if (err) err.classList.remove('show'); input.classList.remove('error'); } }); });

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => { e.preventDefault(); const vN = validateField(contactForm.cName, 'name'), vE = validateField(contactForm.cEmail, 'email'), vS = validateField(contactForm.cSubject, 'text'), vM = validateField(contactForm.cMessage, 'textarea'); showError('cName', !vN, contactForm); showError('cEmail', !vE, contactForm); showError('cSubject', !vS, contactForm); showError('cMessage', !vM, contactForm); if (vN && vE && vS && vM) document.getElementById('contactSuccess').classList.add('show'); });
document.getElementById('resetContact').addEventListener('click', () => { contactForm.reset(); document.getElementById('contactSuccess').classList.remove('show'); });

/* ===== SCROLL TO TOP ===== */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => { if (window.scrollY > 600) scrollTopBtn.classList.add('visible'); else scrollTopBtn.classList.remove('visible'); }, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== NAV ACTIVE ===== */
const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = ['home', 'about', 'what-we-do', 'services', 'solutions', 'methodology', 'tech-stack', 'contact'];
window.addEventListener('scroll', () => { let cur = 'home'; sectionIds.forEach(id => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top <= 120) cur = id; }); navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur)); }, { passive: true });

/* ===== NATIVE SCROLL ANIMATIONS (IntersectionObserver & CSS Transitions) ===== */
// Reveal animations observer
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -15% 0px'
});

// Initialize reveals
document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.closest('#home')) {
        // Animate hero immediately with delay
        setTimeout(() => {
            el.classList.add('revealed');
        }, 150);
    } else {
        revealObserver.observe(el);
    }
});

// Counter count-up helper
function animateCount(el, target, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress); // easeOutQuad
        el.textContent = Math.floor(target * easeProgress) + '+';
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target + '+';
        }
    }
    requestAnimationFrame(step);
}

// Counter observer
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
}, {
    rootMargin: '0px 0px -15% 0px'
});

document.querySelectorAll('.counter-num').forEach(el => {
    counterObserver.observe(el);
});

// Tech Tree observer
const treeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const svg = entry.target;
            svg.classList.add('active');
            setTimeout(() => {
                svg.querySelectorAll('.tree-path').forEach(p => p.classList.add('flow'));
            }, 2700);
            observer.unobserve(svg);
        }
    });
}, {
    rootMargin: '0px 0px -40% 0px'
});

const treeSvg = document.getElementById('treeSvg');
if (treeSvg) {
    treeObserver.observe(treeSvg);
}

/* ===== MAGNETIC ===== */
document.querySelectorAll('.magnetic').forEach(btn => { btn.addEventListener('mousemove', e => { const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`; }); btn.addEventListener('mouseleave', () => btn.style.transform = ''); });

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function (e) { const target = document.querySelector(this.getAttribute('href')); if (target) { e.preventDefault(); const y = target.getBoundingClientRect().top + window.pageYOffset - 70; window.scrollTo({ top: y, behavior: 'smooth' }); } }); });


