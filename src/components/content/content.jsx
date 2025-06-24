import AboutMe from "./sections/AboutMe";
import Certificate from "./sections/Certificate";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function Content() {
  return (
    <>
      <Profile />
      <Certificate />
      <Skills />
      <Projects />
      <AboutMe />
    </>
  );
}
