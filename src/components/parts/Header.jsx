import { useContext } from "react"
import { CatchBallContext } from "../../context/CatchBallContext";
import { FiMenu } from "react-icons/fi"
const Header = () => {
    const { counter, currentLevel, setDisapear, setCounter, setShowButtons, id , isDisabled} = useContext(CatchBallContext);
    const ReapeatTMainMenu = () => {
        if (window.confirm("Are you sure that you want out from game?")) {
            setDisapear("")
            setCounter(0)
            setShowButtons(false)
            clearInterval(id)
            localStorage.setItem("scoreNumber", 0);
        }
    }
    return (
        <header className="header_tag">
            <h1 className="header_title">Header</h1>
            <article className="contain_title">
                <h1 className="title_score">Your scores : {counter}</h1>
                <button className="menu_icon" onClick={ReapeatTMainMenu} disabled={isDisabled}><FiMenu /></button>
                <h1 className="current_level">Your level:{currentLevel}</h1>
            </article>
        </header>
    )
}
export default Header;
