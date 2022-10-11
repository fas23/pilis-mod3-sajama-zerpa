import { createContext, useState } from "react";

export const LocationContext = createContext({
    locations: [],
    setLocations: () => { }
})

export const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const value = { locations, setLocations };

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}