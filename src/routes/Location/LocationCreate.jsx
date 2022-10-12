import React from "react";
import "./LocationCreate.css";
import { LocationContext } from "../../contexts/LocationContext";

const LocationCreate = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div id="container" class="d-flex justify-content-center">
      <form class="card col-sm-4 col-md-3 p-5">
        <h3 class="display-10 text-dark text-center">CREAR TARJETA</h3>
        <div class="mb-3">
          <label for="InputNombre" class="form-label">
            Nombre de Ciudad
          </label>
          <input
            type="nombre"
            class="form-control"
            id="InputNombre"
            aria-describedby="nombreHelp"
          />
        </div>
        <div class="mb-3">
          <label for="InputLongitud" class="form-label">
            Longitud
          </label>
          <input type="longitud" class="form-control" id="InputLongitud" />
        </div>
        <div class="mb-3">
          <label for="InputLatitud" class="form-label">
            Latitud
          </label>
          <input type="latitud" class="form-control" id="InputLatitud" />
        </div>
        <button type="submit" class="btn btn-dark">
          Crear
        </button>
      </form>
    </div>
  );
};

export default LocationCreate;
