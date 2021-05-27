import { useEffect, useState } from "react";
import CardItem from "./card-item";

const CardList = () => {
  const [dataCards, setDataCards] = useState([]);
  const [counter, setCounter] = useState(0);

  console.log("RENDER");

  useEffect(() => {
    console.log("USE EFFECT");
    callToRickMortyAPI(setDataCards);
  }, [counter]);

  let cards;

  if (dataCards.length) {
    cards = dataCards.map((dataCard) => (
      <CardItem
        key={dataCard.name}
        name={dataCard.name}
        image={dataCard.image}
        type={dataCard.type}
      />
    ));
  }

  return (
    <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Aumentar counter</button>
      {cards ? cards : <span>CARGANDO DATOS DE LA API...</span>}
    </div>
  );
};

const callToRickMortyAPI = async (setDataCards) => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  setDataCards(data.results);
};

export default CardList;
