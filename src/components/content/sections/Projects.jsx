import { useProps } from "../../PostProvider";
import Slider from "react-slick";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsArray = [
  {
    id: 1,
    name: "Fast Fizza Factory",
    image: process.env.PUBLIC_URL + "/images/pizza.png",
    link: "https://leynardpenaranda-fast-react-pizza.netlify.app/",
  },
  {
    id: 2,
    name: "The Wild Oasis Employee",
    image: process.env.PUBLIC_URL + "/images/wildOasis.png",
    link: "https://leynardpenaranda-the-wild-oasis.netlify.app/login",
  },
  {
    id: 3,
    name: "The Wild Oasis Website Guest",
    image: process.env.PUBLIC_URL + "/images/cabin-website.png",
    link: "https://the-wild-oasis-website-leynardpenar.vercel.app/",
  },
  {
    id: 3,
    name: "🚧🏗️🏗️",
    image: process.env.PUBLIC_URL + "/images/undercons.png",
    link: "",
  },
];

function Projects() {
  const { isDarkorLight } = useProps();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 857,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={isDarkorLight ? "projectsDark" : "projects"} id="5">
      <div
        className={
          isDarkorLight
            ? "certificate-top-containerDark"
            : "certificate-top-container"
        }
      >
        <h2>Projects</h2>
      </div>
      <div className="projects-outer-container">
        <div className="projects-body-container">
          <Slider {...settings}>
            {projectsArray.map((card) => (
              <ProjectsDev key={card.id} card={card} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function ProjectsDev({ card }) {
  const { isDarkorLight } = useProps();
  return (
    <div className={isDarkorLight ? "project-cardDark" : "project-card"}>
      <img src={card.image} alt={card.name} />
      <div className="project-info-card">
        <div className="project-card-info-body">
          <h2>{card.name}</h2>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon className="NewTab-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
