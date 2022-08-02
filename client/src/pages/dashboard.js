import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USER, CARDS } from "../utils/queries";
import Auth from "../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = Auth.loggedIn();
  const { loading, error, data } = useQuery(USER, {
    variables: {
      _id: currentUser?.data?._id,
    },
  });

  if (!currentUser) {
    navigate("/login");
  }

  // ADD LOADING SPINNER
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const user = data?.user;
  if (!user) {
    return "No user found.";
  }

  const cards = useQuery(CARDS, {
    type: ['creature', 'planeswalker'],
    supertypes: 'legendary'
  })

  return (
    <div>
      {cards.map(card => {
        return <img src={card.imageUrl} />
      })}
    </div>
  );
};

export default Dashboard;
