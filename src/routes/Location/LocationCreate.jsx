import { useContext, useState, useEffect } from "react";
import "./LocationCreate.css";
import { LocationContext } from "../../contexts/LocationContext";

const initForm = {
  id: null,
  name: "",
  latitude: "",
  longitude: "",
  temperature: "",
  windspeed: "",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/PlazaBelgrano1.jpg/280px-PlazaBelgrano1.jpg",
};

const LocationCreate = () => {
  const [form, setForm] = useState(initForm);

  const createData = (data) => {
    console.log(data);
  };

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
    createData(form);
  };

  const handleReset = (e) => {
    setForm(initForm);
  };

  return (
    <div id="container" className="d-flex justify-content-center">
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
        <input type="submit" value="Crear" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default LocationCreate;
