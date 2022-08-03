import { useQuery } from "@apollo/client";
import { MTG_CARDS } from "../utils/queries";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const CardsGallery = (props) => {

  const [modalData, setModalData] = useState(null)

  const { loading, error, data } = useQuery(MTG_CARDS, {
    type: ['creature', 'planeswalker'],
    supertypes: 'legendary'
  })

  if (loading) return "Loading...";
  if (error) return Error! ${error.message};

  const cards = data?.cards;
  if (!cards) {
    return "No cards found.";
  }

  function closeModal() {
    setModalData(null)
  }



  return (
    <>
      <Modal isOpen={!!modalData} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{modalData?.name}</ModalHeader>
        <ModalBody>


          <img src={modalData?.imageUrl}></img>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={null}>Save</Button>{' '}
          <Button color="secondary" onClick={() => setModalData(null)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      {cards.map(card => {
        return <img src={card.imageUrl} className={props.className} onClick={() => setModalData(card)} key={${card.imageUrl}-${card.name}} />
      })}
    </>
  )
}

export default CardsGallery