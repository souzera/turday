import { createContext, useState, useContext } from "react";

const AuthContext = createContext<any>({});

export function AuthContextProvider({children}: any){

    const [usuario, setUsuario] = useState<any>(undefined);

    return (
        <AuthContext.Provider value={{usuario, setUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext);
}