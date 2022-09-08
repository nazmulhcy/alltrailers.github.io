import React from "react";
import logo from "./image.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram } from "@mui/icons-material";
import { ContactPage } from "@mui/icons-material";
import Subcribe from "../../components/Subscribe/Subscribe";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import "./profile.css";

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const shoot1 = () => {
    window.open(
      "https://www.facebook.com/nazmulhoque.choudhury.92/",
      "noopener,noreferrer",
      (EventTarget = "blank")
    );
  };
  const shoot2 = () => {
    window.open(
      "https://www.linkedin.com/in/nazmul-hoque-choudhury-7a4b091b7",
      "noopener,noreferrer",
      (EventTarget = "blank")
    );
  };
  const shoot3 = () => {
    window.open(
      "https://www.instagram.com/nazmul_ee_41/",
      "noopener,noreferrer",
      (EventTarget = "blank")
    );
  };
  const shoot4 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfVYoL-FGjRG7d3CrqeVT5sFg35gecJya9eyRD9wWs_j0eklQ/viewform?usp=sf_link",
      "noopener,noreferrer"
    );
  };
  return (
    <div>
      <div className="profile">
        <div className="disc">
          {/* <span className="page">Developer Profile</span> */}
          <h2>About The Project</h2>
          <div className="about_">
            <h2>ALL TRAILERS:</h2>

            <p>
              This is the platform where all entertainment lovers can find his
              favorite Movie or Tv Show.
              <br /> <br /> This platform have features like
              <br />
              <li>
                Trending- Here all the trending movies and TV Series are
                presented.
              </li>
              <li>
                {" "}
                Chip Tag - Using the user can filter the Movies and Series of
                his Like.
              </li>
              <li>
                Movies- Here all the movies are presented.User can discover
                movies of his favorite type using Filter Tag
              </li>
              <li>
                TV Series: Here all the Tv Series are presented. User can
                discover movies of his favorite type using Filter Tag
              </li>
              <li>
                Search: In this feature users can search and find out his
                favorite Shows or Movies.
              </li>
              <br />
              Most favorite thing of this platform is that it allow to watch
              TRAILERS of all Movies and Series
            </p>
          </div>

          <div className="about_">
            <h2>Tech Stack Used</h2>
            <li>
              <b>HTML</b>
            </li>
            <li>
              <b>CSS</b>
            </li>
            <li>
              <b>React.js</b>
            </li>
            <li>
              <b>Express.js</b>
            </li>
            <li>
              <b>JavaScript</b>
            </li>
            Library like Material ui, Bootstrap are used
          </div>
        </div>

        <div className="others">
          <span className="page">Developer Profile</span>
          <img src={logo} alt="Logo" className="image" />
          <div className="social">
            <div className="icon">
              <FacebookIcon fontSize="large" onClick={shoot1} />
            </div>
            <div className="icon">
              <LinkedInIcon fontSize="large" onClick={shoot2} />
            </div>
            <div className="icon">
              <Instagram fontSize="large" onClick={shoot3} />
            </div>
            <PermContactCalendarIcon
              className="icon"
              fontSize="large"
              onClick={shoot4}
            />
          </div>
          <div className="about">
            <h1>
              <b>About me</b>
            </h1>
            <p>
              My name is <b>Nazmul Hoque Choudhury</b>. I am Full Stack
              Developer with a good knowledge on <b>React.js</b>.I have a good
              command of <b>C++</b>, <b>HTML</b>, <b>CSS</b>, <b>React.js</b>,
              <b> Node.js</b>, <b>DBMS</b> and <b>SQL</b> I have worked on many
              small and big projects.
            </p>
          </div>
          <Subcribe />
        </div>
      </div>
    </div>
  );
};

export default Profile;
