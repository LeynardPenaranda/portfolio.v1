import ItemSkill from "./ItemSkill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const webDev = [
  {
    id: 1,
    name: "HTML",
    image: process.env.PUBLIC_URL + "/images-skills/HTML.png",
  },
  {
    id: 2,
    name: "CSS",
    image: process.env.PUBLIC_URL + "/images-skills/CSS.png",
  },
  {
    id: 3,
    name: "JS",
    image: process.env.PUBLIC_URL + "/images-skills/JS.png",
  },
  {
    id: 4,
    name: "REACT",
    image: process.env.PUBLIC_URL + "/images-skills/REACT.png",
  },
];

const databaseArray = [
  {
    id: 1,
    name: "PostgresQL",
    image: process.env.PUBLIC_URL + "/images-skills/PostGress.png",
  },
  {
    id: 2,
    name: "STUDY",
    image: process.env.PUBLIC_URL + "/images-skills/STUDY.png",
  },
];
export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    rtl: false,

    // 👇 Add responsive behavior here
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
          arrows: false, // optional: hide arrows on small screen
        },
      },
    ],
  };

  const settingsDB = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1, // Number of cards shown at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    rtl: true,
  };

  return (
    <section className="skills" id="3">
      <img src="images/toplogy1.png" alt="" className="toplogy1" />
      <img src="images/toplogy3.png" alt="" className="toplogy3" />
      <img src="images/toplogy2.png" alt="" className="toplogy2" />
      <img src="images/toplogy4.png" alt="" className="toplogy4" />

      <div className="skills-top-container">
        <h2>Skills</h2>
      </div>

      <div className="skills-body-container">
        {/* Web Development */}
        <div className="web-development-container">
          <div className="title-header-container">
            <h3>Web Development</h3>
          </div>
          <div className="web-cards-container">
            <Slider {...settings}>
              {webDev.map((webs) => (
                <ItemSkill key={webs.id} webs={webs} />
              ))}
            </Slider>
          </div>
        </div>

        {/* Database Management */}
        <div className="web-development-container database">
          <div className="title-header-container">
            <h3>Database</h3>
          </div>
          <div className="web-cards-container database-container-cards">
            <Slider {...settingsDB}>
              {databaseArray.map((webs, index) => (
                <ItemSkill key={index} webs={webs} />
              ))}
            </Slider>
          </div>
        </div>
        {/* Other Skills */}
      </div>
    </section>
  );
}
