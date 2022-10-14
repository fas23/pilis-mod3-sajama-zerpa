import "./Location.css";
import { useContext } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import { GiWindSlap } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LocationContext } from "../contexts/LocationContext";

const Location = ({ location }) => {
  const { locations, setLocations } = useContext(LocationContext);
  const { id, img, latitude, longitude, windspeed, temperature } = location;

  const eliminarCard = (e) => {
    e.preventDefault();
    alert("Está seguro que desea eliminar?¡");
    let locationList1 = locations.filter((card) => card.id !== id);
    setLocations(locationList1);
  };

  return (
    <div className="card col-sm-4 col-md-3 tex-center">
      <div className="overflow">
        <img src={img} className="card-img-top" alt="..." />
      </div>
      <div className="card-body text-light text-center">
        <h5 className="card-title">{location.name}</h5>

        <div className="card-text">
          <p>
            <TbWorldLongitude />
            {longitude}
          </p>
          <p>
            <TbWorldLatitude />
            {latitude}
          </p>

          <p>
            <FaTemperatureHigh />
            {temperature}
          </p>

          <p>
            <GiWindSlap />
            {windspeed}km/h
          </p>
        </div>
        <input
          type="reset"
          value="Eliminar"
          onClick={eliminarCard}
          className="btn btn-outline-danger"
        />
      </div>
    </div>
  );
};

export default Location;
