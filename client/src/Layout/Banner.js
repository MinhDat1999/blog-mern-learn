import React from "react";
import Bannerblog from "../img/banner.jpg";

const Banner = ({ title }) => {
  return (
    <div className="h-[60vh] text-center overflow-hidden  ">
      <div className="h-full bannerblog  text-white flex justify-center pt-[100px] ">
        <div className="w-3/4">
          <h1 className="text-white font-mono  text-[2.5rem] ">Hi!{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum
            iusto cupiditate quo, quidem officiis illo quod nihil veritatis
            voluptas, nemo est voluptatem maiores? Accusamus adipisci maiores
            aliquid ipsum nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
