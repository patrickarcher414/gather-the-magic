import { useQuery } from "@apollo/client";
import { MTG_CARDS } from "../utils/queries";
import { CARDS } from "../utils/queries";
import { useState } from 'react';


const CardsGallery = (props) => {
  const [modalData, setModalData] = useState(null);

  function closeModal() {
    setModalData(null);
  }

  function displayId(card) {
    return <div>{card.id}</div>
  }

  const { loading, error, data } = useQuery(MTG_CARDS, {
    type: ["creature", "planeswalker"],
    supertypes: "legendary",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const cards = data?.cards;
  if (!cards) {
    return "No cards found.";
  }

  return (
    <>
      <div
        id='modalContainer'
        isOpen={!!modalData}
        toggle={closeModal}
      >
        <div
          id='modalHeader'
          toggle={closeModal}
        >
          {modalData?.name}
        </div>

        <div id='modalContent'>
          <img
            src={modalData?.imageUrl}
          // alt={card.name}
          ></img>
          <p></p>
        </div>

        <div>
          <button
            id='modalBtn'
            onClick={null}
          >
            add to deck
          </button>

          <button onClick={() => setModalData(null)}>
            cancel
          </button>
        </div>
      </div>

      {cards.map((card) => {
        return (

          <img
            src={card.imageUrl}
            className={props.className}
            onClick={() => setModalData(card)}
            key={`${card.imageUrl}-${card.name}`}
            alt={card.name}
          />

        );
      })}
    </>
  )
}

export default CardsGallery;
