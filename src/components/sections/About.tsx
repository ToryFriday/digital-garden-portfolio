import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* Section heading */}
        <div className="about-heading">
          <p className="about-eyebrow">
            A LITTLE ABOUT THE GARDENER
          </p>

          <h2>
            I like building
            <br />
            <em>useful things.</em>
          </h2>
        </div>

        {/* Main content */}
        <div className="about-content">

          <div className="about-story">
            <p className="about-lead">
              I'm a software engineer who enjoys turning
              complicated problems into systems that feel
              simple, useful and intentional.
            </p>

            <p>
              My work sits around AI, automation, backend
              systems, cloud technologies and the occasional
              idea that starts out much messier than it ends.
            </p>

            <p>
              I enjoy understanding how things work underneath
              the surface — then finding better ways to make
              them work.
            </p>
          </div>

          {/* Garden card */}
          <div className="about-garden-card">
            <div className="about-card-glow"></div>

            <div className="about-card-plant">
              <span className="about-card-stem"></span>
              <span className="about-card-leaf leaf-one"></span>
              <span className="about-card-leaf leaf-two"></span>
              <span className="about-card-leaf leaf-three"></span>

              <div className="about-card-pot">
                <span></span>
              </div>
            </div>

            <div className="about-card-caption">
              <span>currently growing</span>
              <strong>ideas → systems</strong>
            </div>
          </div>

        </div>

        {/* Technical identity */}
        <div className="about-traits">

          <div className="about-trait">
            <span className="trait-number">01</span>
            <h3>Build</h3>
            <p>
              Turning ideas into reliable software,
              APIs and applications.
            </p>
          </div>

          <div className="about-trait">
            <span className="trait-number">02</span>
            <h3>Automate</h3>
            <p>
              Removing repetitive work through
              intelligent workflows and systems.
            </p>
          </div>

          <div className="about-trait">
            <span className="trait-number">03</span>
            <h3>Explore</h3>
            <p>
              Learning new technologies and finding
              interesting ways to use them.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;