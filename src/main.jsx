
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Menu,
  Smartphone,
  X,
  Zap,
  Layers3,
  HeartPulse,
  CheckCircle2
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "Mobile development", items: ["Flutter", "Dart", "GetX", "Responsive UI"] },
  { title: "Backend & integration", items: ["REST API", "JSON", "PHP", "Python"] },
  { title: "Cloud & data", items: ["Firebase Authentication", "Cloud Firestore", "Cloud Messaging", "MySQL"] },
  { title: "Quality & delivery", items: ["Debugging", "Performance optimization", "Unit testing", "Widget testing"] }
];

const projects = [
  {
    number: "01",
    name: "Al Tadawi Specialty Hospital",
    client: "Dubai, UAE",
    type: "Healthcare mobility",
    description: "A healthcare mobile application supporting hospital workflows, patient engagement, and staff coordination.",
    highlights: [
      "Patient login and appointment scheduling",
      "Billing, laboratory and radiology results",
      "Role-based doctor, nurse and patient dashboards"
    ],
    stack: ["Flutter", "Dart", "REST API", "Firebase", "MySQL", "PHP"],
    icon: HeartPulse,
    featured: true
  },
  {
    number: "02",
    name: "Kraniummd Amara (HMMA)",
    client: "Amara Hospitals · Tirupati",
    type: "Hospital mobile app",
    description: "A mobile application for patient record management, appointment scheduling, and treatment history.",
    highlights: [
      "Patient records and appointment modules",
      "Treatment history management",
      "Notification systems and cross-platform optimization"
    ],
    stack: ["Flutter", "Dart", "REST API", "Firebase", "MySQL", "PHP"],
    icon: Smartphone
  },
  {
    number: "03",
    name: "Kraniummd Star",
    client: "Star Hospitals · Hyderabad",
    type: "Hospital mobile app",
    description: "A multispecialty hospital application focused on patient records and care-related workflows.",
    highlights: [
      "Patient records and appointment scheduling",
      "Treatment history and notifications",
      "Android and iOS compatibility"
    ],
    stack: ["Flutter", "Dart", "REST API"],
    icon: Layers3
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vamsi Krishna home">
          <span className="brand-mark">VK<span>.</span></span>
          <span className="brand-caption">PORTFOLIO / 2026</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Expertise</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR GREAT OPPORTUNITIES
            </div>

            <h1>
              Hi, I'm Vamsi Krishna S.
              <br />
              <span className="gradient-text">Flutter Developer.</span>
            </h1>

            <p className="hero-lede">
              I'm a <strong>Mobile App Developer</strong> creating reliable,
              user-friendly cross-platform applications, with a focus on
              healthcare technology and real-world impact.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15} /> Chennai, India</span>
              <span className="meta-separator" />
              <span><BriefcaseBusiness size={15} /> Software Engineer</span>
            </div>
          </div>


          <div className="hero-visual">
            <div className="visual-grid" />


            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch" />

                <div className="screen-top">
                  <div className="screen-logo">VK<span>.</span></div>
                  <div className="screen-menu">•••</div>
                </div>


                <div className="phone-photo">
                  <img
                    src="/images/vamsi.png"
                    alt="Vamsi Krishna"
                    className="phone-profile-image"
                  />
                </div>

                <div className="screen-lines screen-lines-bottom">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="screen-bottom">
                  <span>IDEA</span>
                  <span>IMPACT</span>
                </div>
              </div>
            </div>

            <div className="float-card float-top">
              <div className="float-icon code-icon">{"</>"}</div>
              <div>
                <strong>Flutter + Dart</strong>
                <span>Cross-platform apps</span>
              </div>
            </div>

            <div className="float-card float-bottom">
              <div className="float-icon performance-icon">ϟ</div>
              <div>
                <strong>Performance minded</strong>
                <span>Built to work better</span>
              </div>
            </div>

            <div className="visual-caption">
              DESIGNING · BUILDING · IMPROVING
            </div>
          </div>



          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO DISCOVER
          </a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">MY FOCUS</span>
            <p>
              Thoughtful interfaces. Dependable integrations.{" "}
              <span>Technology that helps people.</span>
            </p>
            <HeartPulse className="strip-icon" size={28} />
          </div>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>
              Engineering with
              <br />
              <span className="muted-heading">the user in mind.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">
                I build cross-platform mobile applications designed to feel
                intuitive, perform reliably, and solve practical problems.
              </p>
              <p>
                With hands-on experience in Flutter and Dart, I have contributed
                to healthcare mobility solutions for hospital teams and patients.
                My work spans UI implementation, API integration, debugging,
                performance optimization, and collaboration with designers,
                developers, and international clients.
              </p>
              <p>
                I enjoy turning requirements into maintainable features and
                continuously improving the experience across devices.
              </p>
            </div>

            <div className="metric-stack">
              <div className="metric-card">
                <span className="metric-value">25<span>%</span></span>
                <span className="metric-label">Application performance improvement</span>
                <span className="metric-note">Achievement listed in my resume</span>
              </div>

              <div className="metric-card">
                <span className="metric-value">40<span>%</span></span>
                <span className="metric-label">Crash-rate reduction</span>
                <span className="metric-note">Achievement listed in my resume</span>
              </div>

              <div className="metric-card metric-card-small">
                <span className="metric-symbol"><CheckCircle2 size={19} /></span>
                <span className="metric-label">
                  Google Play Store & Apple App Store deployments
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">02 / EXPERTISE</span>
              <h2>Tools of my <span className="muted-heading">trade.</span></h2>
            </div>
            <p className="heading-note">
              A practical toolkit for building, connecting, testing, and improving mobile products.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="work">
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">03 / SELECTED WORK</span>
              <h2>
                Projects built for <span className="muted-heading">real needs.</span>
              </h2>
            </div>
            <p className="heading-note">
              Healthcare applications built around patient access, hospital workflows, and care-team coordination.
            </p>
          </div>

          <div className="projects-list">
            {projects.map(project => {
              const Icon = project.icon;

              return (
                <article
                  className={project.featured ? "project-card featured" : "project-card"}
                  key={project.number}
                >
                  <div className="project-topline">
                    <span>PROJECT / {project.number}</span>
                    <span className="project-type">{project.type}</span>
                  </div>

                  <div className="project-content">
                    <div className="project-main">
                      <div className="project-icon"><Icon size={24} /></div>
                      <h3>{project.name}</h3>
                      <p className="project-client">{project.client}</p>
                      <p className="project-description">{project.description}</p>
                      <div className="stack-list">
                        {project.stack.map(item => <span key={item}>{item}</span>)}
                      </div>
                    </div>

                    <div className="project-highlights">
                      <span className="highlight-label">CONTRIBUTIONS</span>
                      {project.highlights.map(item => (
                        <div className="highlight" key={item}>
                          <CheckCircle2 size={16} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="project-disclaimer">
            Project descriptions are based on my professional experience.
            Public product links and screenshots can be added where approved for sharing.
          </p>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap experience-grid">
            <div className="section-heading">
              <span className="section-index">04 / EXPERIENCE</span>
              <h2>
                Growing through
                <br />
                <span className="muted-heading">every release.</span>
              </h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-date">MAY 2025 — PRESENT</div>
                <h3>Software Engineer</h3>
                <p className="timeline-company">Karemind iScripts Pvt Ltd · Chennai</p>
                <ul>
                  <li>Develop cross-platform Flutter applications for Android, iOS, and tablets.</li>
                  <li>Build reusable Dart components with a focus on maintainability and performance.</li>
                  <li>Collaborate with UI/UX teams and international clients across UAE and India.</li>
                  <li>Debug, test, and optimize apps for stability and responsiveness.</li>
                </ul>
              </div>

              <div className="timeline-item education-item">
                <span className="timeline-dot" />
                <div className="timeline-date">2023</div>
                <h3>B.Tech — Computer Science and Engineering</h3>
                <p className="timeline-company">
                  JNTU College of Engineering, Rajempeta · AITS
                </p>
                <p className="timeline-description">
                  Annamacharya Institute of Technology and Sciences, Rajempeta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <span className="section-index">05 / CONTACT</span>
            <h2>
              Have a good project
              <br />
              in mind? <span className="gradient-text">Let's talk.</span>
            </h2>
            <p>
              I'm interested in connecting with teams building useful,
              thoughtful digital products.
            </p>

            <a className="button button-primary" href="mailto:vamsisangeetham97@gmail.com">
              Start a conversation <ArrowUpRight size={17} />
            </a>

            <div className="contact-details">
              <a href="mailto:vamsisangeetham97@gmail.com">
                <Mail size={16} /> vamsisangeetham97@gmail.com
              </a>
              <a href="tel:+918522996172">
                <Smartphone size={16} /> +91 85229 96172
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">VK<span>.</span></span>
        </a>
        <span>Designed with intent. Built with React.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Vamsi Krishna S</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
