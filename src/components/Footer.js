import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="main_container">
      <div id="aboutus_container">
        <div>ABOUT US</div>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </p>
      </div>
      <div id="menus">
        MENUS
        <>
          <p>HOME</p>
          <p>SERVICES</p>
          <p>PRODUCT</p>
          <p>CAREER</p>
        </>
      </div>
      <div id="learn_more">
        LEARN MORE
        <>
          <p>ABOUT</p>
          <p>CONTACT US</p>
        </>
      </div>
      <div id="address">
        ADDRESS
        <p>
          Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka
          560068
        </p>
        <p>Phone: 0804-717-8999</p>
        <p>Email: hi@rubixe.com</p>
      </div>
    </div>
  );
}
export default Footer;
