import { ExternalLink } from 'lucide-react';

const links = {
  email: 'mailto:jx_huang@163.com',
  scholar: 'https://scholar.google.com/citations?user=tulWjo8AAAAJ&hl=en',
  github: 'https://github.com/hjxwhy',
  bilibili: 'https://space.bilibili.com/165629418',
  gaussianLic2Arxiv: 'https://arxiv.org/abs/2507.04004',
  gaussianLic2Code: 'https://github.com/APRIL-ZJU/Gaussian-LIC',
  gaussianLic2Video: 'https://www.youtube.com/watch?v=SkPnpuCfh88',
  gaussianLic2Page: 'https://xingxingzuo.github.io/gaussian_lic2',
  lodm: 'https://ieeexplore.ieee.org/abstract/document/9981994/',
  lodmVideo: 'https://www.youtube.com/watch?v=CMhcLmH12_Q',
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
      <section className="intro" id="top">
        <img
          className="avatar"
          src="/jianxin-huang.png"
          alt="Portrait of Jianxin Huang"
        />
        <div className="intro-main">
          <h1>Jianxin Huang</h1>
          <p className="role">Embodied AI Researcher at Unitree Robotics</p>
          <p className="summary">
            I work on the continued pre-training of vision-language models (VLM),
            vision-language-action models (VLA), and world-action models (WAM),
            with a focus on embodied intelligence and general-purpose robots.
          </p>
          <div className="primary-links">
            <a href={links.email}>Email</a>
            <OutLink href={links.scholar}>Google Scholar</OutLink>
            <OutLink href={links.github}>GitHub</OutLink>
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
              and Engineering at Zhejiang University in 2023. My current research
              primarily focuses on <strong>Embodied AI</strong>. I am also interested
              in <strong>Stereo</strong>, <strong>feed-forward 3D reconstruction</strong>,
              and <strong>video world models</strong>.
            </p>
          </section>

          <section id="work">
            <div className="section-title-row">
              <h2>Selected Work</h2>
              <OutLink href={links.scholar}>All publications</OutLink>
            </div>

            <article className="work-item">
              <div className="work-preview">
                <video
                  className="work-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  aria-label="UnifoLM-WLA-1.0 video preview"
                >
                  <source src="/videos/unifolm-wla-1.0.mp4?v=20260912" type="video/mp4" />
                </video>
                <span>2026</span>
              </div>
              <div>
                <h3>UnifoLM-WLA-1.0</h3>
                <p className="work-subtitle">
                  General-Purpose Humanoid Robot Foundation Model 🔥
                </p>
                <p className="work-description">
                  UnifoLM-WLA-1.0 is Unitree Robotics&apos; comprehensively upgraded,
                  next-generation general-purpose humanoid robot foundation model
                  with 6B parameters. Trained on approximately 2,500 hours of
                  high-quality real-robot data, a single model coordinates 64 tasks
                  spanning desktop manipulation and whole-body manipulation.
                </p>
                <p className="work-tags">World model · Vision-language-action · Whole-body control</p>
                <OutLink href={links.wla}>Project page</OutLink>
              </div>
            </article>

            <article className="work-item">
              <div className="work-preview">
                <video
                  className="work-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  aria-label="UnifoLM-VLA-0 video preview"
                >
                  <source src="/videos/unifolm-vla-0.mp4?v=20260912" type="video/mp4" />
                </video>
                <span>2026</span>
              </div>
              <div>
                <h3>UnifoLM-VLA-0</h3>
                <p className="work-subtitle">
                  A Vision-Language-Action Model for General-Purpose Manipulation
                </p>
                <p className="work-description">
                  <strong>UnifoLM-VLA-0</strong> is a Vision–Language–Action (VLA)
                  large model in the UnifoLM series, designed for general-purpose
                  humanoid robot manipulation.
                </p>
                <p className="work-tags">Vision-language-action · Robot manipulation</p>
                <OutLink href={links.vla}>Project page</OutLink>
              </div>
            </article>

            <article className="work-item">
              <div className="work-preview">
                <img
                  className="work-image"
                  src="/gaussian-lic2.gif"
                  alt="Gaussian-LIC2 SLAM demonstration"
                />
                <span>2026</span>
              </div>
              <div>
                <h3>Gaussian-LIC2: LiDAR-Inertial-Camera Gaussian Splatting SLAM</h3>
                <p className="work-subtitle">
                  The International Journal of Robotics Research (IJRR), 2026 🔥
                </p>
                <p className="work-authors">
                  Xiaolei Lang, Jiajun Lv, Kai Tang, Laijian Li,
                  <strong> Jianxin Huang</strong>, Lina Liu, Yong Liu, and Xingxing Zuo
                </p>
                <p className="work-description">
                  We present the first photo-realistic LiDAR-Inertial-Camera
                  Gaussian Splatting SLAM that jointly addresses visual quality,
                  geometric accuracy, and real-time performance.
                </p>
                <p className="work-tags">Gaussian Splatting · LiDAR-inertial-camera · SLAM</p>
                <div className="work-links">
                  <OutLink href={links.gaussianLic2Arxiv}>arXiv</OutLink>
                  <OutLink href={links.gaussianLic2Code}>Code</OutLink>
                  <OutLink href={links.gaussianLic2Video}>Video</OutLink>
                  <OutLink href={links.gaussianLic2Page}>Page</OutLink>
                </div>
              </div>
            </article>

            <article className="work-item">
              <div className="work-preview">
                <img
                  className="work-image"
                  src="/lodm-dense-mapping.png?v=20260912"
                  alt="LODM large-scale UAV dense mapping result"
                />
                <span>2022</span>
              </div>
              <div>
                <h3>LODM: Large-scale Online Dense Mapping for UAV</h3>
                <p className="work-subtitle">
                  2022 IEEE/RSJ International Conference on Intelligent Robots and
                  Systems (IROS)
                </p>
                <p className="work-authors">
                  <strong>Jianxin Huang</strong>, Laijian Li, Xiangrui Zhao, Xiaolei
                  Lang, Deye Zhu, and Yong Liu
                </p>
                <p className="work-description">
                  This paper proposes an online large-scale dense mapping method for
                  UAVs operating at altitudes of 150–250 meters.
                </p>
                <p className="work-tags">Published 23 October 2022 · Dense mapping · UAV</p>
                <div className="work-links">
                  <OutLink href={links.lodm}>Paper</OutLink>
                  <OutLink href={links.lodmVideo}>YouTube</OutLink>
                </div>
              </div>
            </article>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <div className="timeline-row">
              <div className="entry-visual">
                <span className="logo-box"><img src="/logos/unitree.ico" alt="Unitree Robotics logo" /></span>
              </div>
              <div>
                <span className="date">Mar 2025 – Present</span>
                <strong>Unitree Robotics</strong>
                <span>Embodied AI Researcher</span>
              </div>
            </div>
            <div className="timeline-row">
              <div className="entry-visual">
                <span className="logo-box"><img src="/logos/zhuoyu.ico" alt="ZhuoYu Technology logo" /></span>
              </div>
              <div>
                <span className="date">May 2023 – Mar 2025</span>
                <strong>ZhuoYu Technology(DJI Automotive)</strong>
                <span>Perception Algorithm Engineer, Autonomous Driving</span>
              </div>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div className="timeline-row">
              <div className="entry-visual">
                <span className="logo-box"><img src="/logos/zju.png" alt="Zhejiang University logo" /></span>
              </div>
              <div>
                <span className="date">2023</span>
                <strong>Zhejiang University</strong>
                <span>M.Eng., Control Science and Engineering</span>
              </div>
            </div>
            <div className="timeline-row">
              <div className="entry-visual">
                <span className="logo-box"><img src="/logos/hit.png" alt="Harbin Institute of Technology logo" /></span>
              </div>
              <div>
                <span className="date">2019</span>
                <strong>Harbin Institute of Technology</strong>
                <span>B.Eng., Automation</span>
              </div>
            </div>
          </section>
        </div>

      </div>

      <footer>
        <span>© 2026 Jianxin Huang</span>
        <span>Last updated September 2026</span>
      </footer>
    </main>
  );
}
