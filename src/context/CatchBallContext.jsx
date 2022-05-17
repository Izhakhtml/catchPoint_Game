import React, { useState } from "react";
export const  CatchBallContext = React.createContext();
export const CatchBallProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return (
        <CatchBallContext.Provider value={{ counter, setCounter }}>
            {children}
        </CatchBallContext.Provider>
    )
}