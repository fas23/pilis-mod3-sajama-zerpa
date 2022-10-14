import { useContext } from "react";
import LocationList from "../../components/LocationList";
import { LocationContext } from "../../contexts/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);

  return (
    <div className="container">
    <a href="location/create" className="btn btn-primary">
          Crear tarjeta
        </a>
      <LocationList locations={locations} />
    </div>
  );
};

export default Home;
