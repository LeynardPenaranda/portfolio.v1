import { useProps } from "../../PostProvider";

export default function Profile() {
  const { isDarkorLight } = useProps();
  return (
    <section className={isDarkorLight ? "ProfileDark" : "Profile"}>
      <div
        className={isDarkorLight ? "intro-containerDark" : "intro-container"}
      >
        <h2>Hi! DON'T BE AFRAID TO EXPLORE MY PORTFOLIO</h2>
        <p>
          "Hi, I’m Leynard Peñaranda — I build modern, responsive web
          applications using <b>React</b>, <b>Next.js</b>, and{" "}
          <b>Tailwind CSS</b>, backed by a strong foundation in{" "}
          <b>cybersecurity</b>. I focus on creating secure, user-friendly
          digital experiences."
        </p>

        <div
          className={isDarkorLight ? "icon-containersDark" : "icon-containers"}
        >
          <ul>
            <li>
              <a href="mailto:leynardlove@gmail.com?subject=Hello&body=I%20love%20your%20design!">
                <i className="fa-solid fa-square-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leynard-pe%C3%B1aranda-40ab95337/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LeynardPenaranda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isDarkorLight ? "profile-pic-containerDark" : "profile-pic-container"
        }
      >
        <img
          src={process.env.PUBLIC_URL + "/images/Leynard.png"}
          alt="Leynard Profile"
        />
      </div>
    </section>
  );
}
