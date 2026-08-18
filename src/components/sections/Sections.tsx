import "./Sections.css";

function Sections() {
  return (
    <>
      <section id="about" className="garden-section about-section">
        <span className="section-number">01</span>

        <div className="section-content">
          <p className="section-label">THE GARDENER</p>

          <h2>
            A little bit
            <br />
            about me.
          </h2>

          <p className="section-description">
            I’m a software engineer who enjoys turning ideas, problems and
            repetitive processes into thoughtful digital experiences.
          </p>
        </div>
      </section>

      <section id="work" className="garden-section work-section">
        <span className="section-number">02</span>

        <div className="section-content">
          <p className="section-label">THE GARDEN</p>

          <h2>
            Things
            <br />
            I’ve built.
          </h2>

          <p className="section-description">
            A collection of applications, automation systems, AI experiments,
            cloud solutions and other things I’ve grown from an idea into
            something real.
          </p>
        </div>
      </section>

      <section id="skills" className="garden-section skills-section">
        <span className="section-number">03</span>

        <div className="section-content">
          <p className="section-label">MY TOOLKIT</p>

          <h2>
            What I
            <br />
            grow with.
          </h2>

          <p className="section-description">
            Python, JavaScript, React, Django, APIs, databases, cloud
            infrastructure, automation and AI.
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="garden-section experience-section"
      >
        <span className="section-number">04</span>

        <div className="section-content">
          <p className="section-label">THE RINGS</p>

          <h2>
            Where I’ve
            <br />
            grown.
          </h2>

          <p className="section-description">
            The experiences, projects and environments that have shaped the
            way I think about technology and solving problems.
          </p>
        </div>
      </section>

      <section id="contact" className="garden-section contact-section">
        <span className="section-number">05</span>

        <div className="section-content">
          <p className="section-label">THE GREENHOUSE</p>

          <h2>
            Let’s grow
            <br />
            something.
          </h2>

          <p className="section-description">
            Have an interesting problem, an idea or something worth building?
            Let’s turn the seed into something real.
          </p>

          <a href="mailto:toryfriday@gmail.com" className="contact-cta">
            <span>Plant an idea</span>
            <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Sections;