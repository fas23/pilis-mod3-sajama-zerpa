import { useContext } from "react";
import LocationList from "../../components/LocationList";
import { LocationContext } from "../../contexts/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);

  return (
    <div>
      <LocationList locations={locations} />
    </div>
  );
};

export default Home;
