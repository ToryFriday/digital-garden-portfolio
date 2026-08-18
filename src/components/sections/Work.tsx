import "./Work.css";

const projects = [
  {
    number: "01",
    type: "AUTOMATION",
    title: "Do!do!-It-All",
    description:
      "A productivity automation system that connects Discord with Taskwarrior to turn conversations and reminders into actionable tasks.",
    technologies: ["Node.js", "Discord.js", "Taskwarrior"],
    icon: "🌱",
    link: "#",
  },
  {
    number: "02",
    type: "AI / AUTOMATION",
    title: "AI Approval System",
    description:
      "A workflow application that uses AI-assisted decisions, automated email notifications and approval links to streamline business processes.",
    technologies: ["Django", "Python", "AI", "REST API"],
    icon: "🌿",
    link: "#",
  },
  {
    number: "03",
    type: "CLOUD / DATA",
    title: "Cloud Systems",
    description:
      "Cloud-based applications and data workflows built around AWS services, APIs, storage, messaging and serverless infrastructure.",
    technologies: ["AWS", "Python", "Boto3", "DynamoDB"],
    icon: "🪴",
    link: "#",
  },
];

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-inner">

        {/* Header */}
        <div className="work-header">
          <div>
            <p className="work-eyebrow">
              02 / THE GARDEN
            </p>

            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>
          </div>

          <p className="work-introduction">
            A selection of applications, automation systems,
            experiments and technical projects I've grown
            from an idea into something real.
          </p>
        </div>


        {/* Projects */}
        <div className="project-garden">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-plant-area">
                <div className="project-glow"></div>

                <div className="project-plant">
                  <span className="project-stem"></span>

                  <span className="project-leaf project-leaf-one"></span>

                  <span className="project-leaf project-leaf-two"></span>

                  <span className="project-leaf project-leaf-three"></span>

                  <span className="project-icon">
                    {project.icon}
                  </span>
                </div>
              </div>


              <div className="project-content">
                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-link"
                >
                  <span>View project</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Work;