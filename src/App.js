import "./App.css";
import { dataLocations } from "./service";
import { useContext, useEffect } from "react";
import { LocationContext } from "./contexts/LocationContext";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import LocationCreate from "./routes/Location/LocationCreate";
import Login from "./routes/Login/Login";

function App() {
  const { setLocations } = useContext(LocationContext);
  useEffect(() => {
    setLocations(dataLocations);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="location/create" element={<LocationCreate />} />
      </Routes>
    </div>
  );
}

export default App;
