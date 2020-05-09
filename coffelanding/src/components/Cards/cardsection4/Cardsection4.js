import React from "react";
import "./Cardsection4.scss";

const Cardsection4 = props => {
  return (
    <section>
      <div
        className="cardsection4-card"
        style={{
          backgroundImage: `url(${props.headerimg})`
        }}
      ></div>
      <div className="cardsection4-card-content">
        <h1 className="titulo-card4" style={{ color: props.color }}>
          {props.title}{" "}
        </h1>
        <p className="text-card4">{props.sub}</p>
        <a href="#" className="full-more">{props.more}</a>
      </div>
    </section>
  );
};

export default Cardsection4;
