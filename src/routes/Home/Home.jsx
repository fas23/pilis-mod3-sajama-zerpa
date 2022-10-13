import { useContext } from "react";
import LocationList from "../../components/LocationList";
import { LocationContext } from "../../contexts/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);

  return (
    <div className="container">
      <LocationList locations={locations} />
    </div>
  );
};

export default Home;
