import "./GardenNav.css";

const navigationItems = [
  {
    id: "about",
    label: "About",
    icon: "🌿",
  },
  {
    id: "work",
    label: "Work",
    icon: "🌻",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "🌱",
  },
  {
    id: "experience",
    label: "Experience",
    icon: "🪴",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "✉️",
  },
];

function GardenNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <a href="#" className="garden-logo" aria-label="Back to home">
        VF<span>.</span>
      </a>

      <nav className="garden-object-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`garden-object garden-object-${item.id}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="garden-object-label">
              {item.label}
            </span>

            <span className="garden-object-icon">
              {item.icon}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}

export default GardenNav;