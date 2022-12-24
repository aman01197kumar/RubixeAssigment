import React from "react";
import "../styles/MidContent.css";
import about from "../images/about.PNG";

export default function MidContent() {
  return (
    <main className="Content_main">
      <div className="container">
        <h3>WHO WE ARE</h3>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </p>
      </div>
      <img src={about} alt="about_us" />
    </main>
  );
}
