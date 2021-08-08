import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const booksByGenre = {
    classic: [
      ["To Kill a Mockingbird", "4.28/5"],
      ["Pride and Prejudice", "4.27/5"],
      ["1984", "4.19/5"],
      ["The Great Gatsby", "3.98/5"]
    ],
    comic: [
      ["Astro City", "3.8/5"],
      ["Batman: The Dark Knight Returns", "4.3/5"],
      ["Batman: Arkham Asylum", "4.5/5"],
      ["City of Glass", "4.4/5"]
    ],
    mystery: [
      ["Gone Girl", "4.09/5"],
      ["The Girl on the Train", "3.94/5"],
      ["11/22/63", "4.30/5"]
    ],
    horror: [
      ["The Shining", "4.24/5"],
      ["It", "4.3/5"],
      ["Dracula", "4/5"],
      ["Pet Semantary", "4.01/5"]
    ]
  };
  const [card, updateCard] = useState(booksByGenre["classic"]);
  function updateContent(t) {
    updateCard(booksByGenre[t]);
  }
  return (
    <div className="App">
      <div>
        <h1>
          <span role="img">📚</span> goodbooks
        </h1>
        <p>Checkout my favorite books. Select a genre to get started.</p>
        <div>
          <button onClick={() => updateContent("classic")}>classic</button>
          <button onClick={() => updateContent("comic")}>comic</button>
          <button onClick={() => updateContent("mystery")}>mystery</button>
          <button onClick={() => updateContent("horror")}>horror</button>
          <hr></hr>
        </div>
        <div className={"itemHolder"}>
          {card.map(function (item) {
            return (
              <div className={"innerDiv"} key={item[0]}>
                <h4>{item[0]}</h4>
                <p>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
