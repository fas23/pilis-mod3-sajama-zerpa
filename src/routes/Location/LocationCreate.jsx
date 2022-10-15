import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import { getApiMeteo } from "../../service";
import { imagenes } from "../../service";
import "./LocationCreate.css";

const initForm = {
  name: "",
  latitude: "",
  longitude: "",
};

const LocationCreate = () => {
  const [form, setForm] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const { locations, setLocations } = useContext(LocationContext);
  const navigate = useNavigate();
  var rand = Math.floor(Math.random() * imagenes.length);
  var rValue = imagenes[rand];

  useEffect(() => {
    getApiMeteo(form.latitude, form.longitude)
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.latitude || !form.longitude) {
      alert("Datos incompletos");
      return;
    }
    const locationNew = {
      id: locations.length + 1,
      name: form.name,
      latitude: form.latitude,
      longitude: form.longitude,
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      img: rValue,
    };

    setLocations([...locations, locationNew]);
    navigate("/");
  };

  const handleReset = (e) => {
    setForm(initForm);
  };

  return (
    <div id="container1" className="d-flex justify-content-center">
      <form className="card col-sm-4 col-md-3 p-5" onSubmit={handleSubmit}>
        <h3 className="display-10 text-dark text-center">CREAR TARJETA</h3>
        <div className="mb-3">
          <input
            size="40"
            type="text"
            name="name"
            placeholder="Nombre de Ciudad"
            onChange={handleChange}
            value={form.name}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            size="40"
            type="text"
            name="longitude"
            placeholder="Longitud"
            onChange={handleChange}
            value={form.longitude}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            size="40"
            type="text"
            name="latitude"
            placeholder="Latitud"
            onChange={handleChange}
            value={form.latitude}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <input
            id="crear"
            type="submit"
            value="Crear"
            className="btn btn-success"
          />
          <input
            id="crear"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
            className="btn btn-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default LocationCreate;
