import React from "react";
import './Cards.css'

const Cards = ({ d }) => {
  return (
    <div>
      <div className="cards-con">
        <div className="cards">
          {d.map((e, i) => {

            let {id,title,image,description,price} = e
            return (
              <div key={i} className="card">
                <p>{id}</p>
                <p>{title}</p>
                <img src={image} alt="loading..." />
                <p>{description}</p>
                <h1>${price}</h1>
                <button>Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
