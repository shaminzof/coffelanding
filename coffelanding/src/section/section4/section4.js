import React from "react";
import "./section4.scss";
import Cardsection4 from "../../components/Cards/cardsection4/Cardsection4";
import CardSectionCuatro from "../../components/Cards/cardsection4/CardSectionCuatro";
import img1coffe from "../section4/section_bg_9.jpg";
import img2coffe from "../section4/section_bg_10.jpg";

const section4 = props => {
  const cardcoffe1 = {
    img: img2coffe,
    title: "FRESH BEANS",
    sub:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    more: "LEARN MORE"
  };
  const cardcoffe2 = {
    img: img1coffe,
    title: "GREAT COFFEE",
    sub:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    more: "LEARN MORE"
  };
  return (
    <section className="section4">
      <div className="all-4">
        <Cardsection4
          title={cardcoffe1.title}
          headerimg={cardcoffe1.img}
          sub={cardcoffe1.sub}
          more={cardcoffe1.more}
        ></Cardsection4>
        <CardSectionCuatro
          title={cardcoffe2.title}
          headerimg={cardcoffe2.img}
          sub={cardcoffe2.sub}
          more={cardcoffe2.more}
        ></CardSectionCuatro>
      </div>
    </section>
  );
};

export default section4;
