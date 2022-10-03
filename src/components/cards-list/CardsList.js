import React from "react";
import Card from "../card/Card";
export default function CardsList(props) {
  let { monsters, searchText } = props;
  // filtering based on search text
  monsters = monsters.filter(monster => ((monster.firstName + " " + monster.lastName).toLowerCase().includes(searchText.toLowerCase())))
  return (
    <div className="container d-flex flex-wrap justify-content-center my-5">
        {monsters.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))}
    </div>
  );
}
