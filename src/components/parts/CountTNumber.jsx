import { useContext, useState } from "react"
import { CatchBallContext } from "../../context/CatchBallContext"
const CountTNumber = () => {
    const { counter } = useContext(CatchBallContext);
    return (
        <div>
             <h1 className="title_score">Your scores : {counter}</h1>
        </div>
    )
}
export default CountTNumber;