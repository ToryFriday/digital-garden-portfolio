import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Atmospheric background */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb-one"></div>
        <div className="atmosphere-orb atmosphere-orb-two"></div>
      </div>

      {/* Background botanical decoration */}
      <div className="botanical-background" aria-hidden="true">
        <div className="background-stem background-stem-one">
          <span className="background-leaf leaf-a"></span>
          <span className="background-leaf leaf-b"></span>
          <span className="background-leaf leaf-c"></span>
        </div>

        <div className="background-stem background-stem-two">
          <span className="background-leaf leaf-d"></span>
          <span className="background-leaf leaf-e"></span>
        </div>
      </div>

      {/* Tiny editorial decorations */}
      <div className="hero-decoration decoration-star" aria-hidden="true">
        ✦
      </div>

      <div className="hero-decoration decoration-doodle" aria-hidden="true">
        ❧
      </div>

      {/* Main content */}
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

      {/* Main plant */}
      <div className="hero-plant" aria-hidden="true">
        <div className="plant-glow"></div>

        <div className="stem"></div>

        <div className="leaf leaf-left"></div>
        <div className="leaf leaf-right"></div>
        <div className="leaf leaf-top"></div>

        <div className="pot">
          <div className="soil"></div>
        </div>
      </div>

      {/* Foreground botanical details */}
      <div className="foreground-botanical" aria-hidden="true">
        <span className="foreground-leaf foreground-leaf-one"></span>
        <span className="foreground-leaf foreground-leaf-two"></span>
        <span className="foreground-leaf foreground-leaf-three"></span>
      </div>

      {/* Garden floor */}
      <div className="garden-floor" aria-hidden="true">
        <div className="floor-line"></div>
      </div>
    </section>
  );
}

export default Hero;