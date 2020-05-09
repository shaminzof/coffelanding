import React from "react";
import "./section2.scss";
import CardSection2 from "../../components/Cards/cardsection2/CardSection2";
import img1 from "../section2/coffee_item_1.png";
import img2 from "../section2/coffee_item_2.png";
import img3 from "../section2/coffee_item_3.png";

const Section2 = props => {
  const imagenes = [
    {
      img: img2,
      title: "MOCHA LATTE",
      sub:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      color: "#111111"
    },
    {
      img: img1,
      title: "POUR OVER",
      sub:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      color: "#111111"
    },
    {
      img: img3,
      title: "ESPRESSO",
      sub:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      color: "#111111"
    }
  ];
  return (
    <section className="section2">
      <article>
        <div className="cont-text">
          <h2 className="text-h2">WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE</h2>
          <p className="text-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </article>
      <div className="all">
        {imagenes.map((card, index) => {
          return (
            <CardSection2
              key={`cardSection2-${index}`}
              title={card.title}
              headerimg={card.img}
              sub={card.sub}
              color={card.color}
            ></CardSection2>
          );
        })}
      </div>
      <a href="#" className="full-menu">FULL MENU</a>
    </section>
  );
};
export default Section2;
