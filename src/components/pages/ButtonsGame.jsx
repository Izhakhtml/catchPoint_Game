import '../../App.css'
import React from "react";
const ButtonsGame = (props) => {
    return (
        <div  className='catchPoint' ref={props.refValue}>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
            <button className='btn' onClick={props.btnText}><span></span></button>
        </div>
    )
}
export default ButtonsGame;