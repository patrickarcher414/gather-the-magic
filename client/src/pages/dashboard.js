import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USER } from "../utils/queries";
import Auth from "../utils/auth";
const resolvers = require("../../../server/schema/resolvers.js")

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

  const cardQuery = resolvers.Query.cards()

  return (
    <div>
      <img src={cardQuery} />
    </div>
  );
};

export default Dashboard;
