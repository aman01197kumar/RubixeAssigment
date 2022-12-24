import React from "react";
import logo from "../images/logo.jpg";
import "../styles/Header.css";
import background from "../images/background.jpg";
import logo1 from "../images/logo1.png";

function Header() {
  return (
    <main className="main">
      <div className="header">
        <div className="img_content">
          <img className="logo_img" src={logo} alt="logo" />
          <div className="title_content">
            <h6 className="title">Rubixe</h6>
            <h6 className="subheading">Disruptive Technologies at work</h6>
          </div>
        </div>
        <div className="side_bar">
          <h6 className="side_tags">HOME</h6>
          <h6 className="side_tags">SERVICES</h6>
          <h6 className="side_tags">PRODUCTS</h6>
          <h6 className="side_tags">AI INTERNSHIP</h6>
          <h6 className="side_tags">CAREER</h6>
          <h6 className="side_tags">BLOG</h6>
          <h6 className="side_tags">CONTACT US</h6>
        </div>
      </div>
      {/* <img className="background_img" src={background} alt="background img" /> */}
      <div className="background_img">
        <div className="background_title_content">
          <div className="bg_title_content">
            <div>
              <div className="background_title">Rubixe</div>
              <div className="background_subheading">
                Disruptive Technologies at work
              </div>
            </div>
          </div>
          <img className="logo1" src={logo1} alt="logo" />
        </div>
      </div>
    </main>
  );
}

export default Header;
