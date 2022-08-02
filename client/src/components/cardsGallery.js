import { useQuery } from "@apollo/client";
import { MTG_CARDS } from "../utils/queries";


const CardsGallery = () => {

  const {loading, error, data} = useQuery(MTG_CARDS, {
    type: ['creature', 'planeswalker'],
    supertypes: 'legendary'
  })

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const cards = data?.cards;
  if (!cards) {
    return "No cards found.";
  }

 return cards.map(card => {
  return <img src={card.imageUrl} />
})


 
}

export default CardsGallery