import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Activity, Braces, BriefcaseBusiness,
  Check, ChevronRight, Code2, Cpu, Database, Github, Globe2, HeartPulse,
  Layers3, Linkedin, Mail, MapPin, Menu, MonitorSmartphone, Rocket,
  Send, Smartphone, Sparkles, Terminal, Workflow, X, Zap
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Mobile engineering', subtitle: 'Cross-platform experiences', icon: Smartphone, items: ['Flutter', 'Dart', 'GetX', 'Responsive UI'] },
  { title: 'API & integration', subtitle: 'Connecting products end to end', icon: Workflow, items: ['REST APIs', 'JSON', 'PHP', 'Python'] },
  { title: 'Cloud & data', subtitle: 'Reliable app foundations', icon: Database, items: ['Firebase Auth', 'Cloud Firestore', 'FCM', 'MySQL'] },
  { title: 'Quality & delivery', subtitle: 'Polished, stable releases', icon: Cpu, items: ['Debugging', 'Optimization', 'Unit testing', 'Widget testing'] },
];

const projects = [
  {
    number: '01', name: 'Al Tadawi Specialty Hospital', client: 'Dubai, UAE', type: 'HEALTHCARE MOBILITY', icon: HeartPulse, featured: true,
    description: 'A healthcare mobile experience built to support hospital workflows, patient engagement, and coordination across care teams.',
    outcomes: ['Patient access and appointment scheduling', 'Billing, laboratory and radiology results', 'Role-based doctor, nurse and patient dashboards'],
    stack: ['Flutter', 'Dart', 'REST API', 'Firebase', 'MySQL', 'PHP'],
  },
  {
    number: '02', name: 'Kraniummd Amara (HMMA)', client: 'Amara Hospitals · Tirupati', type: 'HOSPITAL MOBILE APP', icon: Activity,
    description: 'A mobile application supporting patient records, appointment workflows, and treatment history for a hospital environment.',
    outcomes: ['Patient records and appointment modules', 'Treatment history management', 'Notifications and cross-platform optimization'],
    stack: ['Flutter', 'Dart', 'REST API', 'Firebase', 'MySQL', 'PHP'],
  },
  {
    number: '03', name: 'Kraniummd Star', client: 'Star Hospitals · Hyderabad', type: 'HOSPITAL MOBILE APP', icon: Layers3,
    description: 'A multispecialty hospital application focused on accessible patient information and care-related workflows.',
    outcomes: ['Patient records and appointment scheduling', 'Treatment history and notifications', 'Android and iOS compatibility'],
    stack: ['Flutter', 'Dart', 'REST API'],
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 0px 0px'
    });

    nodes.forEach(node => {
      const rect = node.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        node.classList.add('is-visible');
      } else {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);
  useReveal();

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={heroRef}>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <div className="noise-layer" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />

      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vamsi Krishna home">
          <span className="brand-mark">v<span>.</span>k</span>
          <span className="brand-caption">MOBILE ENGINEER <i>·</i> 2026</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['About', 'about'], ['Expertise', 'skills'], ['Selected work', 'work'], ['Journey', 'experience']].map(([label, id]) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="status-dot" /> BUILDING DIGITAL EXPERIENCES THAT MATTER</div>
            <h1>Code with purpose.<br /><span className="hero-gradient">Experiences with impact.</span></h1>
            <p className="hero-lede">I’m <strong>Vamsi Krishna S</strong> — a Flutter developer building thoughtful, high-performance mobile applications, with a focus on healthcare technology and the people who depend on it.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Chennai, India</span><span className="meta-divider" /><span><BriefcaseBusiness size={15} /> Software Engineer</span>
            </div>
            <a className="scroll-cue" href="#about"><span className="scroll-cue-line" /><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
          </div>

          <div className="hero-visual desktop-hero-visual" data-reveal>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
            <div className="hero-photo-shell">
              <div className="photo-topline"><span>PROFILE / 001</span><span className="live-indicator"><i /> ONLINE</span></div>
              <div className="hero-photo-wrap"><img src={`${import.meta.env.BASE_URL}images/vamsi.png`} alt="Vamsi Krishna" className="hero-photo" /></div>
              <div className="photo-footer"><div><span className="photo-label">FOCUS AREA</span><strong>Mobile experiences</strong></div><div className="photo-index">VK<span>.</span> / 26</div></div>
            </div>
            <div className="floating-chip chip-code"><span className="chip-icon"><Braces size={17} /></span><span><b>Flutter + Dart</b><small>Cross-platform craft</small></span></div>
            <div className="floating-chip chip-impact"><span className="chip-icon chip-icon-violet"><Zap size={17} /></span><span><b>Built for impact</b><small>Healthcare technology</small></span></div>
            <div className="visual-side-label">DESIGN <span>×</span> ENGINEERING <span>×</span> IMPACT</div>
          </div>
          <div className="hero-bottom-mark"><span>01</span><span className="hero-bottom-rule" /><span>PORTFOLIO / VAMSI KRISHNA S</span></div>
        </section>

        <section className="marquee-band" aria-label="Areas of focus"><div className="marquee-track">{Array.from({ length: 2 }).map((_, i) => <div className="marquee-set" key={i}><span>FLUTTER DEVELOPMENT</span><Sparkles size={16} /><span>PRODUCT THINKING</span><Sparkles size={16} /><span>HEALTHCARE TECH</span><Sparkles size={16} /><span>API INTEGRATION</span><Sparkles size={16} /><span>USER-CENTRED DESIGN</span><Sparkles size={16} /></div>)}</div></section>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-kicker" data-reveal><span>01 / THE PERSON BEHIND THE CODE</span><span className="kicker-line" /></div>
          <div className="about-grid">
            <div className="section-heading" data-reveal><h2>Technology is better<br />when it feels <span className="outline-text">human.</span></h2></div>
            <div className="about-copy" data-reveal>
              <p className="about-lead">I turn complex requirements into intuitive mobile experiences — from the first interface to the APIs and systems working behind it.</p>
              <p>My work focuses on Flutter and Dart, building cross-platform healthcare applications that help patients and hospital teams get things done with less friction. I enjoy solving practical problems, refining details, and making products feel reliable in everyday use.</p>
              <a href="#experience" className="text-link">A little more about my journey <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="stats-row" data-reveal>
            <div className="stat-item"><span className="stat-number">25<sup>%</sup></span><span className="stat-title">Performance improvement</span><span className="stat-footnote">Resume-listed achievement</span></div>
            <div className="stat-item"><span className="stat-number">40<sup>%</sup></span><span className="stat-title">Crash-rate reduction</span><span className="stat-footnote">Resume-listed achievement</span></div>
            <div className="stat-item stat-stores"><span className="stat-icon"><Rocket size={20} /></span><span className="stat-title">App Store & Google Play</span><span className="stat-footnote">Release and delivery experience</span></div>
            <div className="stat-item stat-location"><span className="stat-icon"><Globe2 size={20} /></span><span className="stat-title">India · UAE</span><span className="stat-footnote">Cross-team collaboration</span></div>
          </div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-kicker" data-reveal><span>02 / WHAT I BRING</span><span className="kicker-line" /></div>
          <div className="section-title-row" data-reveal><h2>A toolkit built<br />to <span className="outline-text">make things work.</span></h2><p>From the visible pixels to the systems beneath them, I care about the whole experience.</p></div>
          <div className="skills-grid">
            {skills.map((group, index) => { const Icon = group.icon; return <article className="skill-card" data-reveal style={{ '--delay': `${index * 90}ms` }} key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-index">0{index + 1}</span></div><h3>{group.title}</h3><p>{group.subtitle}</p><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-glow" /></article>; })}
          </div>
        </section>

        <section className="section-wrap section-block work-section" id="work">
          <div className="section-kicker" data-reveal><span>03 / SELECTED WORK</span><span className="kicker-line" /></div>
          <div className="section-title-row" data-reveal><h2>Real products.<br /><span className="outline-text">Real-world impact.</span></h2><p>Healthcare applications shaped around people, information, and the moments that matter.</p></div>
          <div className="projects-list">
            {projects.map((project, index) => {
              const Icon = project.icon; return <article className={`project-card ${project.featured ? 'project-featured' : ''}`} data-reveal style={{ '--delay': `${index * 120}ms` }} key={project.number}>
                <div className="project-visual"><div className="project-visual-grid" /><div className="project-number">{project.number}<span> / 03</span></div><div className="project-orb"><Icon size={54} strokeWidth={1.2} /></div><span className="project-visual-type">{project.type}</span><ArrowUpRight className="project-arrow" size={23} /></div>
                <div className="project-info"><div className="project-meta"><span>{project.type}</span><span>{project.client}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-outcomes"><span className="outcomes-label">CONTRIBUTIONS</span>{project.outcomes.map(item => <div className="outcome" key={item}><Check size={15} /><span>{item}</span></div>)}</div></div>
              </article>;
            })}
          </div>
          <p className="project-note" data-reveal><span className="note-dot" /> Project descriptions reflect my professional experience. Public product links and screenshots can be added where approved for sharing.</p>
        </section>

        <section className="journey-section" id="experience"><div className="section-wrap journey-wrap"><div className="section-kicker" data-reveal><span>04 / THE JOURNEY SO FAR</span><span className="kicker-line" /></div><div className="journey-grid"><div className="journey-heading" data-reveal><h2>Always building.<br /><span className="outline-text">Always learning.</span></h2><p>Progress comes from shipping, listening, and improving the next version.</p></div><div className="timeline" data-reveal><div className="timeline-entry"><div className="timeline-marker"><span /></div><div className="timeline-top"><span>MAY 2025 — PRESENT</span><span className="timeline-status"><i /> CURRENT</span></div><h3>Software Engineer</h3><p className="timeline-company">Karemind iScripts Pvt Ltd <span>· Chennai</span></p><ul><li>Develop cross-platform Flutter applications for Android, iOS, and tablets.</li><li>Build reusable Dart components with a focus on maintainability and performance.</li><li>Collaborate with UI/UX teams and international clients across UAE and India.</li><li>Debug, test, and optimize apps for stability and responsiveness.</li></ul></div><div className="timeline-entry timeline-education"><div className="timeline-marker"><span /></div><div className="timeline-top"><span>2023</span><span>EDUCATION</span></div><h3>B.Tech — Computer Science & Engineering</h3><p className="timeline-company">JNTU College of Engineering, Rajempeta · AITS</p><p className="timeline-desc">Annamacharya Institute of Technology and Sciences, Rajempeta.</p></div></div></div></div></section>

        <section className="section-wrap contact-section" id="contact" data-reveal><div className="contact-card"><div className="contact-orbit contact-orbit-one" /><div className="contact-orbit contact-orbit-two" /><div className="contact-content"><div className="section-kicker"><span>05 / YOUR NEXT IDEA STARTS HERE</span><span className="kicker-line" /></div><h2>Have something<br />good in <span className="hero-gradient">mind?</span></h2><p>Let’s make something useful, thoughtful, and a little extraordinary.</p><a className="button button-primary contact-button" href="mailto:vamsisangeetham97@gmail.com">Start a conversation <ArrowUpRight size={17} /></a><div className="contact-details"><a href="mailto:vamsisangeetham97@gmail.com"><Mail size={16} /> vamsisangeetham97@gmail.com</a><a href="tel:+918522996172"><Smartphone size={16} /> +91 85229 96172</a></div></div><div className="contact-stamp"><Send size={27} /><span>LET’S<br />BUILD</span><ArrowUpRight size={18} /></div></div></section>
      </main>



      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">v<span>.</span>k</span>
        </a>

        <span className="footer-center">
          Made with curiosity <span>✳</span> and React.
        </span>

        <div className="footer-links">
          <a href="mailto:vamsisangeetham97@gmail.com" aria-label="Email" title="Email">
            <Mail size={17} />
          </a>

          <a href="tel:+918522996172" aria-label="Phone" title="Call me">
            <Smartphone size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/sangeetham-vamsi-krishna/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          <a
            href="https://github.com/vamsisangeetham"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={17} />
          </a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} VAMSI KRISHNA S
        </span>
      </footer>


    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
