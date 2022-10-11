import { useContext } from "react";
import LocationList from "../../components/LocationList";
import { LocationContext } from "../../contexts/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);

  return (
    <div>
        <a href="location/create" class="btn btn-primary">
          Crear tarjeta
        </a>
      <LocationList locations={locations} />
    </div>
  );
};

export default Home;
