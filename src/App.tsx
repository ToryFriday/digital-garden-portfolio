import "./App.css";

function App() {
  return (
    <main className="garden">
      <nav className="garden-nav">
        <div className="logo">VF<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-decoration leaf-one">✦</div>
        <div className="hero-decoration leaf-two">❧</div>

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY DIGITAL GARDEN</p>

          <h1>
            I build things
            <br />
            <em>that grow.</em>
          </h1>

          <p className="hero-description">
            Software engineer focused on AI, automation, cloud systems,
            backend development and turning complex problems into simple
            experiences.
          </p>

          <a href="#work" className="garden-cta">
            <span className="cta-plant">🌱</span>
            <span>Explore my work</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>

        <div className="hero-plant">
          <div className="plant-glow"></div>
          <div className="stem"></div>
          <div className="leaf leaf-left"></div>
          <div className="leaf leaf-right"></div>
          <div className="leaf leaf-top"></div>
          <div className="pot">
            <div className="soil"></div>
          </div>
        </div>

        <div className="ground-decoration"></div>
      </section>

      <section id="about" className="placeholder-section">
        <p>ABOUT — COMING NEXT</p>
      </section>

      <section id="work" className="placeholder-section">
        <p>WORK — COMING NEXT</p>
      </section>

      <section id="skills" className="placeholder-section">
        <p>SKILLS — COMING NEXT</p>
      </section>

      <section id="contact" className="placeholder-section">
        <p>CONTACT — COMING NEXT</p>
      </section>
    </main>
  );
}

export default App;