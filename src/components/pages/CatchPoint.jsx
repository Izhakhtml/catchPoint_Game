import '../../App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from "react-icons/fa"
import { CatchBallContext } from '../../context/CatchBallContext';
const CatchPoint = () => {
    const [arrayBtn, setArrayBtn] = useState([]);
    const [id, setId] = useState(0);
    const [count , setCount ] = useState(0)
    const { setCounter , counter} = useContext(CatchBallContext)
    const BtnValue = useRef(null);
    const BtnGame = useRef(null);
    useEffect(() => {
        setArrayBtn(BtnValue.current.children);
    }, [])
    const StartGame = (e) => {
        let array = [];
        array.push(count); //! this push for back the last number to game in case the player stop the game;
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
                    array.push(ChangeNumber)
                    setCount(ChangeNumber)
                }else{
                    arrayBtn[array[array.length - 1] || 0].firstChild.style = '';
                    arrayBtn[ChangeNumber].firstChild.style = 'background:red; border-radius:20px; padding:8%; box-shadow: 0px 0px 20px 20px red;'
                    arrayBtn[ChangeNumber].disabled = false 
                    array.push(ChangeNumber)
                    setCount(ChangeNumber)
                }
            }, 1000);
            setId(idNum)
        }
        e.target.disabled = true
    }
    const StopGame = () => {
        BtnGame.current.children[0].disabled = false;
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
    return (
        <div>
            <div className='game_buttons' ref={BtnGame}>
                <button className='start_game' onClick={StartGame}>play</button>
                <button className='stop_game' onClick={StopGame}>stop</button>
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
            {
                counter == 5?
                <div className='win_popUp'><span className='text_title'>{clearInterval(id)}You are win congratulations</span></div>:
                ""
            }
        </div>
    )
}
export default CatchPoint;