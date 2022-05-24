import React, { useEffect, useState } from "react";
export const CatchBallContext = React.createContext();
export const CatchBallProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [id, setId] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const [changeButtons, setChangeButtons] = useState(false);
    const [disapear, setDisapear] = useState("");
    const [currentLevel, setCurrentLevel] = useState("");
    useEffect(() => {
        if (localStorage.getItem("scoreNumber") != undefined) {

            if (localStorage.getItem("scoreNumber") != 0) {
                let currentNum = Number(localStorage.getItem("scoreNumber"))
                setShowButtons(true);
                setChangeButtons(true);
                setCounter(currentNum)
                console.log(currentNum);
            }
        } else {
            setCounter(Number(localStorage.setItem("scoreNumber", counter)));
            console.log("once");
        }
        // localStorage.removeItem("scoreNumber")
    }, [])
    return (
        <CatchBallContext.Provider value={{ counter, setCounter, showButtons, setShowButtons, changeButtons, setChangeButtons, currentLevel, setCurrentLevel, disapear, setDisapear, id, setId }}>
            {children}
        </CatchBallContext.Provider>
    )
}