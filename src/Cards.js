import React, { useState } from "react";
import "./Cards.css";
import TinderCard from "react-tinder-card";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Koushik",
      url: "https://drive.google.com/uc?export=view&id=18XXqgUWlXtKyCHossiR3H912yhr57rq_",
    },
    {
      name: "Rahul",
      url: "https://drive.google.com/uc?export=view&id=1LX_EE7OvfDIN84i3POyQL0nz7kpqYxgw",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
