import "./Location.css";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import { GiWindSlap } from "react-icons/gi";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const { id, img, latitude, longitude, windspeed, temperature } = location;

  const eliminarCard = () => {
    console.log(id);
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

        <Link
          className="btn btn-outline-danger"
          to={"/"}
          onClick={() => eliminarCard(id)}
        >
          Eliminar
        </Link>
      </div>
    </div>
  );
};

export default Location;
