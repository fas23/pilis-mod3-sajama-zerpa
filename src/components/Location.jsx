import { FaTemperatureHigh } from "react-icons/fa";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import { GiWindSlap } from "react-icons/gi";

const Location = ({ location }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h1>hola</h1>
      <img src={location.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">
          <TbWorldLongitude />
          {location.longitude}
          <TbWorldLatitude />
          {location.latitude}
          <FaTemperatureHigh />
          {location.temperature}
          <GiWindSlap />
          {location.windspeed}km/h
        </p>
      </div>
    </div>
  );
};

export default Location;
