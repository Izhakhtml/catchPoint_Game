import '../../App.css'
import { useContext } from "react";
import { CatchBallContext } from "../../context/CatchBallContext";
import { IoMdArrowBack } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
const WinPopUp = (props) => {
    const { counter, id } = useContext(CatchBallContext);
    return (
        <>
            {
                counter == 5 ?
                    <div className={props.text || 'win_popUp'}>
                        <article className='text_win'>{clearInterval(id)}You are win congrats</article>
                        <button className='option_buttons' onClick={props.sameLev}><IoMdArrowBack /></button><button className='option_buttons' onClick={props.menu}><FiMenu /></button>
                    </div> : ""
            }
        </>
    )
}
export default WinPopUp;