import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(
        (section): section is HTMLElement => section !== null
      );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.75],
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <a
        href="#top"
        className="garden-logo"
        aria-label="Back to top"
      >
        VF<span>.</span>
      </a>

      <nav
        className="garden-object-nav"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`garden-object ${
                isActive ? "is-active" : ""
              } garden-object-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              aria-label={`Go to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="garden-object-label">
                {item.label}
              </span>

              <span
                className="garden-object-icon"
                aria-hidden="true"
              >
                {item.icon}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default GardenNav;