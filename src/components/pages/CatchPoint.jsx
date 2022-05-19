import '../../App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from "react-icons/fa"
import { IoMdArrowBack } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import { CatchBallContext } from '../../context/CatchBallContext';
const CatchPoint = () => {
    const [arrayBtn, setArrayBtn] = useState([]);
    const [id, setId] = useState(0);
    const [count, setCount] = useState(0)
    const [disapear, setDisapear] = useState("")
    const [winPopup, setWinPopup] = useState("")
    const [currentLevel, setCurrentLevel] = useState(0);
    const { setCounter, counter, showButtons, setShowButtons, changeButtons, setChangeButtons } = useContext(CatchBallContext)
    const BtnValue = useRef(null);
    const BtnGame = useRef(null);
    const SelectValue = useRef(null);
    useEffect(() => {
        setArrayBtn(BtnValue.current.children);
        if (localStorage.getItem("currentTime") != undefined) {
            setCurrentLevel(localStorage.getItem("currentTime"))
        } 
    }, [])
    const StartGame = (e, time) => {
        let array = [];
        array.push(count) //! this push for back the last number to game in case the player stop the game;
        for (let i = 0; i < arrayBtn.length; i++) {  //! this loop return the buttons to "disabled = false";
            arrayBtn[i].disabled = false;
        }
        if (e.target.disabled == false || e.target.disabled == undefined) {
            let idNum = setInterval(() => {
                let ChangeNumber = Math.floor(Math.random() * arrayBtn.length);
                if (ChangeNumber == array[array.length - 1]) {
                    ChangeNumber = Math.floor(Math.random() * arrayBtn.length);
                    arrayBtn[array[array.length - 1] || 0].firstChild.style = '';
                    arrayBtn[ChangeNumber].firstChild.style = 'background:red; border-radius:20px; padding:8%; box-shadow: 0px 0px 20px 20px red;'
                    arrayBtn[ChangeNumber].disabled = false
                    array.push(ChangeNumber)
                    setCount(ChangeNumber)
                } else {
                    arrayBtn[array[array.length - 1] || 0].firstChild.style = '';
                    arrayBtn[ChangeNumber].firstChild.style = 'background:red; border-radius:20px; padding:8%; box-shadow: 0px 0px 20px 20px red;'
                    arrayBtn[ChangeNumber].disabled = false
                    array.push(ChangeNumber)
                    setCount(ChangeNumber)
                }
            }, time);
            setId(idNum)
        }
        e.target.disabled = true
    }

    const StopGame = (e) => {
        e.target.disabled = false //! try
        console.log(count);
        clearInterval(id)
        for (let i = 0; i < arrayBtn.length; i++) {
            arrayBtn[i].disabled = true;
            arrayBtn[i].style = "black"
        }
    }

    const BtnText = (e) => {
        let styleText = { background: "red", borderRradius: "20px", padding: "8%", boxShadow: "0px 0px 20px 20px red" }
        const { background } = e.target.firstChild.style
        if (background == styleText.background) {
            let currrentNum;
            setCounter(parm => currrentNum = parm + 1);
            localStorage.setItem("scoreNumber", currrentNum);
            e.target.disabled = true
        }
        setWinPopup("")

    }

    const ChooseLevel = (event, time) => {
        StartGame(event, time)
        setDisapear("disapear")
        setShowButtons(true);
        setChangeButtons(false)
        setCurrentLevel(time)
        localStorage.setItem("currentTime", time);
        setCounter(0)
        localStorage.setItem("scoreNumber", 0);
    }

    const CheckTStatus = (event) => {
        if (changeButtons == true) {
            setChangeButtons(false)
            StartGame(event, currentLevel)
        } else {
            setChangeButtons(true);
            StopGame(event)
        }
    }

    const RepeatToMenu = () => {
        setDisapear("")
        setWinPopup("winPopup")
        setCounter(0)
        setShowButtons(false); 
        localStorage.setItem("scoreNumber", 0);
    }
    
    const RepeatToSameLevel = (event) => {
        setDisapear("disapear")
        setChangeButtons(false)
        setCounter(0)
        StartGame(event, currentLevel)
        setShowButtons(true);
        localStorage.setItem("scoreNumber", 0);
    }

    return (
        <div>
            <div className='game_buttons' ref={BtnGame}>
                {showButtons ? <button className='stop_game' onClick={(e) => CheckTStatus(e)}>{changeButtons ? <FaPlay /> : <FaPause />}</button> : ""}
            </div>
            {
                counter <= 0 ?
                    < div className={disapear || "chooose_level_popUp"} ref={SelectValue}>
                        <article className='inital_text'>
                            <h1 className='inital_h1'>Hello There;</h1>
                            <h2 className='inital_h2'>please choose the level you want</h2>
                        </article>
                        <article className='inital_buttons'>
                            <button className='start_game' onClick={(e) => ChooseLevel(e, 900)}>Eazy</button>
                            <button className='start_game' onClick={(e) => ChooseLevel(e, 600)}>Middle</button>
                            <button className='start_game' onClick={(e) => ChooseLevel(e, 400)}>Hard</button>
                        </article>
                    </div>
                    : ""
            }
            <div className='catchPoint' ref={BtnValue}>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
                <button className='btn' onClick={BtnText}><span></span></button>
            </div>
            {
                counter == 5 ?
                    <div className={winPopup || 'win_popUp'}><span className='text_win'>{clearInterval(id)}You are win congratulations</span>
                        <button className='option_buttons' onClick={RepeatToSameLevel}><IoMdArrowBack /></button><button className='option_buttons' onClick={RepeatToMenu}><FiMenu /></button></div> : ""
            }
        </div >
    )
}
export default CatchPoint;