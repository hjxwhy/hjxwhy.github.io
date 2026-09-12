import { ExternalLink } from 'lucide-react';

const links = {
  scholar: 'https://scholar.google.com/citations?user=tulWjo8AAAAJ&hl=en',
  bilibili: 'https://space.bilibili.com/165629418',
  vla: 'https://unigen-x.github.io/unifolm-vla.github.io/',
  wla: 'https://unigen-x.github.io/unifolm-wla.github.io/',
};

function OutLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ExternalLink aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="site-name" href="#top">Jianxin Huang</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <div className="avatar" aria-label="Jianxin Huang initials">JH</div>
        <div className="intro-main">
          <p className="kicker">Jianxin Huang · 黄建新</p>
          <h1>Jianxin Huang <span>(Jensen Huang)</span></h1>
          <p className="role">Algorithm Researcher at Unitree Robotics</p>
          <p className="summary">
            I work on the continued pre-training of vision-language models (VLM),
            vision-language-action models (VLA), and world-action models (WAM),
            with a focus on embodied intelligence and general-purpose robots.
          </p>
          <div className="primary-links">
            <OutLink href={links.scholar}>Google Scholar</OutLink>
            <OutLink href={links.bilibili}>Bilibili</OutLink>
          </div>
        </div>
      </section>

      <div className="content-grid">
        <div className="main-column">
          <section id="about">
            <h2>About</h2>
            <p>
              I received my B.Eng. in Automation from Harbin Institute of
              Technology in 2019 and my M.Eng. from the College of Control Science
              and Engineering at Zhejiang University in 2023. Before joining
              Unitree Robotics, I worked at ZYT on perception algorithms for
              autonomous driving.
            </p>
          </section>

          <section id="work">
            <div className="section-title-row">
              <h2>Selected Work</h2>
              <OutLink href={links.scholar}>All publications</OutLink>
            </div>

            <article className="work-item">
              <div className="work-year">2026</div>
              <div>
                <h3>UnifoLM-WLA-1.0</h3>
                <p className="work-subtitle">
                  General-Purpose Humanoid Robot Foundation Model
                </p>
                <p className="work-tags">World model · Vision-language-action · Whole-body control</p>
                <OutLink href={links.wla}>Project page</OutLink>
              </div>
            </article>

            <article className="work-item">
              <div className="work-year">2026</div>
              <div>
                <h3>UnifoLM-VLA-0</h3>
                <p className="work-subtitle">
                  A Vision-Language-Action Model for General-Purpose Manipulation
                </p>
                <p className="work-tags">Vision-language-action · Robot manipulation</p>
                <OutLink href={links.vla}>Project page</OutLink>
              </div>
            </article>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <div className="timeline-row">
              <div className="date">Present</div>
              <div><strong>Unitree Robotics</strong><span>Algorithm Researcher</span></div>
            </div>
            <div className="timeline-row">
              <div className="date">Previous</div>
              <div><strong>ZYT</strong><span>Perception Algorithm Engineer, Autonomous Driving</span></div>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div className="timeline-row">
              <div className="date">2023</div>
              <div><strong>Zhejiang University</strong><span>M.Eng., Control Science and Engineering</span></div>
            </div>
            <div className="timeline-row">
              <div className="date">2019</div>
              <div><strong>Harbin Institute of Technology</strong><span>B.Eng., Automation</span></div>
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <div className="side-block">
            <h2>Research Interests</h2>
            <ul>
              <li>Vision-Language Models</li>
              <li>Vision-Language-Action</li>
              <li>World-Action Models</li>
              <li>Robot Learning</li>
            </ul>
          </div>
          <div className="side-block">
            <h2>Links</h2>
            <div className="side-links">
              <OutLink href={links.scholar}>Google Scholar</OutLink>
              <OutLink href={links.bilibili}>Bilibili channel</OutLink>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <span>© 2026 Jianxin Huang</span>
        <span>Last updated September 2026</span>
      </footer>
    </main>
  );
}
