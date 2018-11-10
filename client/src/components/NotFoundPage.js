import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className={"header"}>
    <h1>404 ERROR</h1>
    <h2>The server could not find the URL you requested.</h2>

    <Link to="/" className={"link"}>
      Return to Home Page
    </Link>
  </div>
);

export default NotFoundPage;
