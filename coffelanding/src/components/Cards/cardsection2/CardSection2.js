import React from "react";
import "./CardSection2.scss";

const CardSection2 = props => {
  return (
    <section
      className="cardSection2-card"
      style={{
        backgroundImage: `url(${props.headerimg})`
      }}
    >
      <article className="cardSection2-card-content">
        <h1 className="titulo-card2" style={{ color: props.color }}>{props.title} </h1>
        <p className="text-card2">{props.sub}</p>
      </article>
    </section>
  );
};

export default CardSection2;
