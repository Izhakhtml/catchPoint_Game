import '../../App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from "react-icons/fa"
import { CatchBallContext } from '../../context/CatchBallContext';
import ButtonsGame from './ButtonsGame';
import InitialPopUp from './InitialPopUp';
import WinPopUp from './WinPopUp';
const CatchPoint = () => {
    const [arrayBtn, setArrayBtn] = useState([]);
    const [count, setCount] = useState(0);
    const [winText, setWinText] = useState("");
    const [currentTime, setCurrentTime] = useState(0);
    const { setCounter, showButtons, setShowButtons, changeButtons, setChangeButtons, setDisapear, setCurrentLevel , id, setId} = useContext(CatchBallContext);
    const BtnValue = useRef(null);
    const BtnGame = useRef(null);
    const SelectValue = useRef(null);
    useEffect(() => {
        setArrayBtn(BtnValue.current.children);
        if (localStorage.getItem("currentTime") != undefined)setCurrentTime(localStorage.getItem("currentTime"));
        if (localStorage.getItem("currentLevel") != undefined)setCurrentLevel(localStorage.getItem("currentLevel"));
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
        setWinText("")

    }

    const ChooseLevel = (event, time) => {
        StartGame(event, time)
        setDisapear("disapear")
        setShowButtons(true);
        setChangeButtons(false)
        setCurrentTime(time)
        localStorage.setItem("currentTime", time);
        setCounter(0)
        localStorage.setItem("scoreNumber", 0);
        setCurrentLevel(event.target.innerText)
        localStorage.setItem("currentLevel", event.target.innerText);
    }

    const CheckTStatus = (event) => {
        if (changeButtons == true) {
            setChangeButtons(false)
            StartGame(event, currentTime)
        } else {
            setChangeButtons(true);
            StopGame(event)
        }
    }

    const RepeatToMenu = () => {
        setDisapear("")
        setWinText("winPopup")
        setCounter(0)
        setShowButtons(false);
        localStorage.setItem("scoreNumber", 0);
    }

    const RepeatToSameLevel = (event) => {
        setDisapear("disapear")
        setChangeButtons(false)
        setCounter(0)
        StartGame(event, currentTime)
        setShowButtons(true);
        localStorage.setItem("scoreNumber", 0);
    }

    return (
        <div className='warp_game'>
            <div className='game_buttons' ref={BtnGame}>
                {showButtons ? <button className='stop_game' onClick={(e) => CheckTStatus(e)}>{changeButtons ? <FaPlay /> : <FaPause />}</button> : ""}
            </div>
            <InitialPopUp selectLevel={SelectValue} eazyLev={(e) => ChooseLevel(e, 900)} middleLev={(e) => ChooseLevel(e, 600)} hardLev={(e) => ChooseLevel(e, 400)}/>
            <ButtonsGame refValue={BtnValue} btnText={BtnText}/>
            <WinPopUp text={winText} sameLev={RepeatToSameLevel} menu={RepeatToMenu}/>
        </div >
    )
}
export default CatchPoint;