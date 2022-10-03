import React from "react";
import './card.style.css'
export default function Card(props) {
  const { monster } = props;
  
  function handleMouseEnter(e){
    let card = e.target.closest('.card')
    let cardBody = card.querySelector('.card-body')
    cardBody.classList.remove("hide-card-body")
  }
  function handleMouseLeave(e){
    let card = e.target.closest('.card')
    let cardBody = card.querySelector('.card-body')
    cardBody.classList.add("hide-card-body")
  }
  return (
    <div className="card m-3" style={{ width: "18rem" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&180*180`}
        className="card-img-top text-light"
        alt={`${monster.id}`}
      />
      <div className="card-body hide-card-body">
        <h5 className="card-title ">{monster.firstName} {monster.lastName}</h5>
        <p className="card-text fw-light">{monster.email}</p>
      </div>
    </div>
  );
}
