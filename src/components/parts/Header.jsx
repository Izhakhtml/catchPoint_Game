import { useContext, useState } from "react"
import { CatchBallContext } from "../../context/CatchBallContext";
import { FiMenu } from "react-icons/fi"
const Header = () => {
    const { counter, currentLevel , setDisapear , setCounter , setShowButtons} = useContext(CatchBallContext);
    const ReapeatTMainMenu = () => {
        setDisapear("")
        setCounter(0)
        setShowButtons(false)
        localStorage.setItem("scoreNumber", 0);
        console.log("dd");
    }
    return (
        <header className="header_tag">
            <h1>Header</h1>
            <article className="contain_title">
                <h1 className="title_score">Your scores : {counter}</h1>
                <h1 className="menu_icon" onClick={ReapeatTMainMenu}><FiMenu /></h1>
                <h1>Your level:{currentLevel}</h1>
            </article>
        </header>
    )
}
export default Header;
