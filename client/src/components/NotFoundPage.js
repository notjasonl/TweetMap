import React from "react";
import galaxy from "../images/Galaxy.jpg";

const NotFoundPage = () => (
  <div className={"header"}>
    <h1>404 ERROR</h1>
    <h2>The server could not find the URL you requested.</h2>

    <div className={"nav"}>
      <a href="Home.html">Return to Home Page</a>
      <br />
    </div>

    <img src={galaxy} alt="Background" />
  </div>
);

export default NotFoundPage;
