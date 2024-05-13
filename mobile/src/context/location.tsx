import { createContext, useContext, useState } from "react";

const LocationContext = createContext<any>({});

export function LocationContextProvider({children}: any){

    const [location, setLocation] = useState<any>(null);

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default function useLocation(){
    return useContext(LocationContext);
}