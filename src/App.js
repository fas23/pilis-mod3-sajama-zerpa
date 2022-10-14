import './App.css';
import { dataLocations } from './service';
import { useContext, useEffect } from 'react';
import { LocationContext } from './contexts/LocationContext';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import LocationCreate from './routes/Location/LocationCreate';
import Login from './routes/Login/Login';
import Navbar from './routes/Navbar/Navbar';

function App() {
  const { setLocations } = useContext(LocationContext);
  useEffect(() => {
    setLocations(dataLocations);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='location/create' element={<LocationCreate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
