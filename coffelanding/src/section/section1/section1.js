import React from "react";
import "./section1.scss";

const Section1 = props => {
  return (
    <section className="section1">
      <article className="section1-card-content"></article>
      <h1>Portwell, Inc.</h1>
      <p className="text-1">Serving only the best since 2019</p>
      <a href="#">EXPLORE</a>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </section>
  );
};

export default Section1;
