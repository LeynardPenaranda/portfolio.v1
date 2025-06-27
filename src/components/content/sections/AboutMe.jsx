import { useState } from "react";
import { useProps } from "../../PostProvider";

export default function AboutMe() {
  const { isDarkorLight } = useProps();
  return (
    <>
      <div
        className={isDarkorLight ? "header-about-meDark" : "header-about-me"}
        id="4"
      >
        <h2>About Me</h2>
      </div>
      <section className={isDarkorLight ? "about-meDark" : "about-me"}>
        <img
          src={process.env.PUBLIC_URL + "/images/Leynard.png"}
          alt="Leynard"
          id={isDarkorLight ? "me1Dark" : "me1"}
        />

        <Paragraph>
          <p>
            "I’m a dedicated and creative technology professional with growing
            expertise in both cybersecurity and web development. I specialize in
            building modern, user-friendly websites while ensuring they are
            protected against evolving online threats. My approach blends visual
            design and functionality with a deep focus on data privacy and
            security, helping users feel safe and supported in digital
            environments. I have a strong eye for detail and a genuine passion
            for continuous learning — whether it’s mastering new tools,
            exploring emerging security trends, or refining user experiences. I
            thrive in problem-solving situations and enjoy turning complex
            challenges into clear, effective solutions. Every project I work on
            is an opportunity to learn, improve, and build something meaningful
            that balances aesthetics, usability, and resilience."
          </p>
        </Paragraph>

        <img
          src={process.env.PUBLIC_URL + "/images/Leynard2.png"}
          alt="Leynard 2"
          id={isDarkorLight ? "me2Dark" : "me2"}
        />
      </section>
    </>
  );
}

function getText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getText).join(" ");
  if (children?.props?.children) return getText(children.props.children);
  return "";
}

function Paragraph({
  collapsedNumber = 40,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const fulltext = getText(children);
  const displayText = isExpanded
    ? fulltext
    : fulltext.split(" ").slice(0, collapsedNumber).join(" ") + "...";
  return (
    <div className="about-me-paragraph">
      {displayText}
      <button
        style={{ display: "inline" }}
        onClick={() => setIsExpanded((callbackExp) => !callbackExp)}
        className="ShowMoreBtn"
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
