import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-logo-container">
          <a href="#top">
            <img
              className="img"
              src={process.env.PUBLIC_URL + "/images/mylogo.png"}
              alt="My Logo"
            />
          </a>
        </div>
        <div className="nav-list-container">
          {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
          <ul className="first-navbar">
            <li className="nav1">
              <a href="#2">Certificates</a>
            </li>
            <li className="nav1">
              <a href="#3">Skills</a>
            </li>
            <li className="nav1">
              <a href="#5">Projects</a>
            </li>
            <li className="nav1">
              <a href="#4">About Me</a>
            </li>

            <li className="nav1">
              <a
                href="https://www.linkedin.com/in/leynard-pe%C3%B1aranda-40ab95337/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5px",
                  padding: "15px 25px",
                  marginRight: "20px",
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div className="bar" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className="sidebar">
      <ul>
        <li className="exit" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-x"></i>
        </li>
        <li>
          <a href="#2" onClick={() => setIsOpen(false)}>
            Certificates
          </a>
        </li>
        <li>
          <a href="#3" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#5" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#4" onClick={() => setIsOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leynard-pe%C3%B1aranda-40ab95337/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              padding: "4px 8px",
            }}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
