import { createContext } from "react";
import { createBrowserRouter } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}