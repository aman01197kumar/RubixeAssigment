import React from "react";
import "../styles/LoginInPage.css";

export default function LoginInPage() {
  return (
    <div id="complete">
      <div className="main_form">
        <div id="content">
          <h3>GET IN TOUCH</h3>
          <p>Please fill the form and we will get back to you</p>
        </div>
        <form id="form">
          <label for="name">Name*</label>
          <br />
          <input type="text" id="name" placeholder="Enter your Name" required />
          <br />
          <br />
          <label for="email">Email*</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            required
          />
          <br />
          <br />
          <label for="mob">Mobile No.*</label>
          <br />
          <input
            type="number"
            id="mob"
            placeholder="Enter your Mobile No."
            required
          />
          <br />
          <br />
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
}
