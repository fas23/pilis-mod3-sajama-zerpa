import Location from "./Location";

const LocationList = ({ locations }) => {
  return (
    <div className="container-list">
      <div className="row d-flex justify-content-center">
        {locations.map((location) => (
          <Location key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationList;
