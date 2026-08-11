import "./App.css";
import GardenNav from "./components/navigation/GardenNav";

function App() {
  return (
    <main className="garden">
      <GardenNav />
      <nav className="garden-nav">
        <div className="logo">VF<span>.</span></div>
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

      <section id="about" className="placeholder-section about-section">
        <span className="section-number">01</span>

        <div>
          <p className="section-label">THE GARDENER</p>
          <h2>About me</h2>
        </div>
      </section>

      <section id="work" className="placeholder-section work-section">
        <span className="section-number">02</span>

        <div>
          <p className="section-label">THE GARDEN</p>
          <h2>Things I've built</h2>
        </div>
      </section>

      <section id="skills" className="placeholder-section skills-section">
        <span className="section-number">03</span>

        <div>
          <p className="section-label">MY TOOLKIT</p>
          <h2>What I grow with</h2>
        </div>
      </section>

      <section id="contact" className="placeholder-section contact-section">
        <span className="section-number">04</span>

        <div>
          <p className="section-label">THE GREENHOUSE</p>
          <h2>Let's grow something</h2>
        </div>
      </section>
    </main>
  );
}

export default App;