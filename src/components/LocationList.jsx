import Location from "./Location";

const LocationList = ({ locations }) => {
  return (
    <div className="container">
      {locations.map((location) => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
