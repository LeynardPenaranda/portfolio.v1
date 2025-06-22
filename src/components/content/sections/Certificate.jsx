import { useState } from "react";
import ItemCert from "./ItemCert";
import SchoolIcon from "@mui/icons-material/School";

const cyberSecurityCert = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    link: "https://drive.google.com/file/d/1WBu-jY9rH7gG5YwwizT47xh72kfcbMt6/view?usp=sharing",
  },
  {
    id: 2,
    name: "Google Cybersecurity Professional Certificate V2",
    link: "https://www.credly.com/badges/4fddc47d-a1e3-40e6-985c-aedcfa62f2e9/public_url",
  },
  {
    id: 3,
    name: "Google Cybersecurity Certificate",
    link: "https://coursera.org/share/abfd5aa655e58a835ed847ce6a994d40",
  },
  {
    id: 4,
    name: "Foundation of Cybersecurity",
    link: "https://coursera.org/share/2e54444b0fa6415cb03197b705c969d3",
  },
  {
    id: 5,
    name: "Automate Cybersecurity Tasks with",
    link: "https://coursera.org/share/8158e002edb93391e66755ae810a1dc0",
  },
  {
    id: 6,
    name: "Assets, Threats, and Vulnerabilities",
    link: "https://coursera.org/share/31302ce0f4c7523a2d4b2ff361351ab3",
  },
  {
    id: 7,
    name: "Connect and Protect:Networks and Network Security",
    link: "https://coursera.org/share/ba673623adde563146244f21753e98b3",
  },
  {
    id: 8,
    name: "Play it Safe: Manage Security Risks",
    link: "https://coursera.org/share/25783f3e836bdf4898189d9a2ec38fab",
  },
  {
    id: 9,
    name: "Introduction to Cybersecurity Badge",
    link: "https://www.credly.com/badges/3664b679-bff3-43b1-b122-a9aa75eee939/public_url",
  },
  {
    id: 10,
    name: "Udemy Completed Course:Cybersecurity Hackers Exposed",
    link: "https://drive.google.com/file/d/1epX6ZQ7HCrusM8lfLW45i_k9VFjriLwd/view?usp=sharing",
  },
  {
    id: 11,
    name: "Mastercard Cybersecurity Job Simulation Certificate",
    link: "https://drive.google.com/file/d/1OPaGoESrR_JNYFb7xU-Qe0cRxHQGofXN/view?usp=sharing",
  },
  {
    id: 12,
    name: "Shield Up Cybersecurity Job Simulation Certificate",
    link: "https://drive.google.com/file/d/1LwglbaQ9tfJQZFKW67-rOMwpRzPsRSmE/view?usp=sharing",
  },
];

const networkingCert = [
  {
    id: 1,
    name: "Introduction to Network Analysis",
    link: "https://drive.google.com/file/d/1ZxeOxT9xvNNqOEn4sfLGfSTSdja6kfsO/view?usp=sharing",
  },
  {
    id: 2,
    name: "TLS/SSL Certificate",
    link: "https://drive.google.com/file/d/1-hpmHWpndrh-hNGFn8QaTQDC7me9yX3H/view?usp=sharing",
  },
];

const otherCert = [
  {
    id: 1,
    name: "Data Fundamentals Badge",
    link: "https://www.credly.com/badges/f180f9f7-4fcc-469f-8fd8-49d7e76ddec4/public_url",
  },
  {
    id: 2,
    name: "DICT Basic Cloud Computing",
    link: "https://drive.google.com/file/d/1FC3cqIJqzWIEPod5cHG-L2o7akD2p-uc/view?usp=sharing",
  },
  {
    id: 3,
    name: "DICT Programming for Intermediate Users Using Python",
    link: "https://drive.google.com/file/d/1SBBrA8Hkcm6Et8AEG5bKX2FHExV98u1C/view?usp=sharin",
  },
  {
    id: 4,
    name: "DICT Programming For Beginners Using Python",
    link: "https://drive.google.com/file/d/1VpWv3xL8p6n1fR-SA1BSdffceO0R8POA/view?usp=sharing",
  },
];

const linuxCert = [
  {
    id: 1,
    name: "Tools of the Trade: Linux",
    link: "https://coursera.org/share/02af6ce898d46900ee1cc42bd21407be",
  },
];
const webdev = [
  {
    id: 1,
    name: "ongoing",
    link: "ongoing",
  },
  {
    id: 2,
    name: "i modify it",
    link: "ongoing",
  },
];
export default function Certificate() {
  const [isOpen, setIsOpen] = useState(null);

  function toggleAccordion(accordionName) {
    setIsOpen((prevIsOpen) =>
      prevIsOpen === accordionName ? null : accordionName
    );
  }

  return (
    <section className="certificate" id="2">
      <div className="certificate-clip-path"></div>

      <div className="certificate-top-container">
        <h2>Certificates</h2>
      </div>

      {/* CyberSecurity accodion  */}

      <div className="certificate-body-container">
        <div className="certificate-background-design">
          <i className="fa-solid fa-graduation-cap"></i>
        </div>

        <div
          className={`accordion-cybersecurity accordion ${
            isOpen === "cyber" ? `active` : ""
          } `}
          onClick={() => toggleAccordion("cyber")}
        >
          <div className="accordion-header">
            <h1>
              <SchoolIcon /> Cybersecurity Certificates
            </h1>
            <div className="icon">{isOpen === "cyber" ? "-" : "+"}</div>
          </div>
          <ul>
            {isOpen === "cyber"
              ? cyberSecurityCert.map((cert) => (
                  <ItemCert key={cert.id} cyber={cert} />
                ))
              : null}
          </ul>
        </div>

        {/* Networking Accordion  */}

        <div
          className={`accordion-cybersecurity accordion ${
            isOpen === "networking" ? `active` : ""
          } `}
          onClick={() => toggleAccordion("networking")}
        >
          <div className="accordion-header">
            <h1>
              <SchoolIcon /> Networking Certificates
            </h1>
            <div className="icon">{isOpen === "networking" ? "-" : "+"}</div>
          </div>
          <ul>
            {isOpen === "networking"
              ? networkingCert.map((cert) => (
                  <ItemCert key={cert.id} cyber={cert} />
                ))
              : null}
          </ul>
        </div>

        {/* Linux and Sql  */}

        <div
          className={`accordion-cybersecurity accordion ${
            isOpen === "linux" ? `active` : ""
          } `}
          onClick={() => toggleAccordion("linux")}
        >
          <div className="accordion-header">
            <h1>
              <SchoolIcon /> Linux and SQL Certificates
            </h1>
            <div className="icon">{isOpen === "linux" ? "-" : "+"}</div>
          </div>
          <ul>
            {isOpen === "linux"
              ? linuxCert.map((cert) => <ItemCert key={cert.id} cyber={cert} />)
              : null}
          </ul>
        </div>

        {/* other certificates  */}

        <div
          className={`accordion-cybersecurity accordion ${
            isOpen === "other" ? `active` : ""
          } `}
          onClick={() => toggleAccordion("other")}
        >
          <div className="accordion-header">
            <h1>
              <SchoolIcon /> Other Certificates
            </h1>
            <div className="icon">{isOpen === "other" ? "-" : "+"}</div>
          </div>
          <ul>
            {isOpen === "other"
              ? otherCert.map((cert) => <ItemCert key={cert.id} cyber={cert} />)
              : null}
          </ul>
        </div>
        {/* other certificates  */}

        <div
          className={`accordion-cybersecurity accordion ${
            isOpen === "webdev" ? `active` : ""
          } `}
          onClick={() => toggleAccordion("webdev")}
        >
          <div className="accordion-header">
            <h1>
              <SchoolIcon /> Web Dev Certs
            </h1>
            <div className="icon">{isOpen === "webdev" ? "-" : "+"}</div>
          </div>
          <ul>
            {isOpen === "webdev"
              ? webdev.map((cert) => <ItemCert key={cert.id} cyber={cert} />)
              : null}
          </ul>
        </div>
      </div>
    </section>
  );
}
