import React, { createContext } from "react";
import all from '../assets/all'



export const BuildingContext = createContext(null);

const BuildingContextProvider = (props) =>{
    const contextValue = {allproduct};

    return (
        <BuildingContext.Provider  value={contextValue}>
            {props.children}
        </BuildingContext.Provider>
    )
}



export default BuildingContext