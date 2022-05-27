import '../../App.css'
import { useContext, useState } from "react";
import { CatchBallContext } from "../../context/CatchBallContext";
const InitialPopUp = (props) => {
    const { counter, disapear } = useContext(CatchBallContext);
    return (
        <>
            {
                counter <= 0 || counter === NaN ?
                    < div className={disapear || "chooose_level_popUp"} ref={props.selectLevel}>
                        <article className='inital_text'>
                            <h1 className='inital_h1'>Hello There;</h1>
                            <h2 className='inital_h2'>please choose the level you want</h2>
                        </article>
                        <article className='inital_buttons'>
                            <button className='start_game' onClick={props.eazyLev}>Eazy</button>
                            <button className='start_game' onClick={props.middleLev}>Middle</button>
                            <button className='start_game' onClick={props.hardLev}>Hard</button>
                        </article>
                    </div>
                    : ""
            }
        </>
    )
}
export default InitialPopUp;