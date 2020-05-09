import React from "react";
import "./CardSectionCuatro.scss";

const CardSectionCuatro = props => {
  return (
    <section>
      <div
        className="CardSectionCuatro-card"
        style={{
          backgroundImage: `url(${props.headerimg})`
        }}
      ></div>
      <article className="CardSectionCuatro-card-content">
        <h1 className="titulo-CardSectionCuatro" style={{ color: props.color }}>
          {props.title}{" "}
        </h1>
        <p className="text-CardSectionCuatro">{props.sub}</p>
        <a href="#" className="full-more-cuatro">{props.more}</a>
      </article>
    </section>
  );
};

export default CardSectionCuatro;