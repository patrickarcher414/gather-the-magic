import { useQuery } from "@apollo/client";
import { MTG_CARDS } from "../utils/queries";
import { useState } from 'react';

const CardsGallery = (props) => {
  const [modalData, setModalData] = useState(null);
  
  function closeModal() {
      setModalData(null);
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
        <div id='modalHeaderBox'>
          <div
            id='modalHeader'
            toggle={closeModal}
          >
            {modalData?.name}
          </div>
        </div>
        <div id='modalContent'>
          <img
            src={modalData?.imageUrl}
            // alt={card.name}
          ></img>
          <div id='commentsBox'>
            <div id='commentsContent'>
              
            </div>
          </div>
        </div>
        <div id='modalBtns'>
          <button 
            id='modalBtn'
            onClick={null}
          >
            add to deck
          </button>
          <button 
            id='closeModalBtn'
            onClick={() => {
              var modal = document.getElementById("modalContainer");
              setModalData(null);
              modal.style.display = "none";
            }}
          >
            cancel
          </button>
        </div>
      </div>
      <div id='cardsContainer'>
        {cards.map((card) => {
          return (
            <img
              id='cardCards'
              src={card.imageUrl}
              className={props.className}
              onClick={() => {
                var modal = document.getElementById("modalContainer");
                setModalData(card);
                modal.style.display = "block";
              }}
              key={`${card.imageUrl}-${card.name}`}
              alt={card.name}
            />
          );
        })}
      </div>
    </>
  )
}

export default CardsGallery;
