import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import { getApiMeteo } from "../../service";
import "./LocationCreate.css";

const initForm = {
  name: "",
  latitude: "",
  longitude: "",
};

const initDta = {
  latitude: null,
  longitude: null,
  generationtime_ms: null,
  utc_offset_seconds: null,
  timezone: "",
  timezone_abbreviation: "",
  elevation: null,
  current_weather: {
    temperature: null,
    windspeed: null,
    winddirection: null,
    weathercode: null,
    time: "",
  },
};

const LocationCreate = () => {
  const [form, setForm] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initDta);
  const { locations, setLocations } = useContext(LocationContext);
  const navigate = useNavigate();

  useEffect(() => {
    getApiMeteo(form.latitude, form.longitude)
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [form]);
  
  useEffect(() => {
    console.log(locations);
  }, [locations]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const cargar = (e) => {
    e.preventDefault();
    const locationNew = {
      id: locations.length + 1,
      name: "jujuy",
      latitude: "1234567",
      longitude: "teregvdchgf",
      temperature: "tefdctedfdc",
      windspeed: "yhgdvcgdvc",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/PlazaBelgrano1.jpg/280px-PlazaBelgrano1.jpg",
    };

    setLocations([...locations, locationNew]);
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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/PlazaBelgrano1.jpg/280px-PlazaBelgrano1.jpg",
    };

    setLocations([...locations, locationNew]);
  };

  const handleReset = (e) => {
    setForm(initForm);
  };

  return (
    <div id="container" className="d-flex justify-content-center">
      <form className="card col-sm-4 col-md-3 p-5" onSubmit={cargar}>
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
        <input type="submit" value="Crear" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default LocationCreate;
