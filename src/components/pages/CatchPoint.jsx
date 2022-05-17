import '../../App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from "react-icons/fa"
import { CatchBallContext } from '../../context/CatchBallContext';
import ChooseTime from '../parts/ChooseTime';
const CatchPoint = () => {
    const [arrayBtn, setArrayBtn] = useState([]);
    const [id, setId] = useState(0);
    const [count, setCount] = useState(0)
    const [disapear, setDisapear] = useState("")
    const [bool, setBool] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(0);
    const { setCounter, counter } = useContext(CatchBallContext)
    const BtnValue = useRef(null);
    const BtnGame = useRef(null);
    const SelectValue = useRef(null);

    useEffect(() => {
        setArrayBtn(BtnValue.current.children);
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
        // BtnGame.current.children[0].disabled = false;
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
            setCounter(parm => parm + 1);
            console.log(e.target.disabled);
            e.target.disabled = true
        }
    }

    const ChooseLevel = (event, time) => {
        StartGame(event, time)
        setDisapear("disapear")
        setBool(true);
        setCurrentLevel(time)
    }

    const CheckTStatus = (event) => {
        if (btnStatus == true) {
            setBtnStatus(false)
            StartGame(event, currentLevel)
            console.log(btnStatus, "if");
        } else {
            setBtnStatus(true)
            StopGame(event)
            console.log(btnStatus, "else");
        }
    }
    console.log(btnStatus);
    return (
        <div>
            <div className='game_buttons' ref={BtnGame}>
                {bool ? <button className='stop_game' onClick={(e) => CheckTStatus(e)}>{btnStatus ? <FaPlay /> : <FaPause />}</button> : ""}
            </div>
            <div className={disapear || "chooose_level_popUp"} ref={SelectValue}>
                <article className='inital_text'>
                    <h1 className='inital_h1'>Hello There;</h1>
                    <h2 className='inital_h2'>please choose the level you want</h2>
                </article>
                <article className='inital_buttons'>
                    <button className='start_game' onClick={(e) => ChooseLevel(e, 1000)}>Eazy</button>
                    <button className='start_game' onClick={(e) => ChooseLevel(e, 700)}>Middle</button>
                    <button className='start_game' onClick={(e) => ChooseLevel(e, 400)}>Hard</button>
                </article>
            </div>
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
            {counter == 5 ?<div className='win_popUp'><span className='text_win'>{clearInterval(id)}You are win congratulations</span></div>:""}
        </div>
    )
}
export default CatchPoint;