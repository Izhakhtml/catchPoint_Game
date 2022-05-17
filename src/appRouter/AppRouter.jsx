import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/parts/Header'
import Footer from '../components/parts/Footer'
import NavBar from '../components/parts/NavBar'
import CatchPoint from '../components/pages/CatchPoint'
import CountTNumber from '../components/parts/CountTNumber'
const AppRouter = () => {

    return (
        <div>
            {/* <Header /> */}
            <CountTNumber/>
            <CatchPoint/>
            {/* <NavBar />
            <Routes>
                <Route path='/' element={<CatchPoint />} ></Route>
            </Routes> */}
            <Footer />
        </div>
    )
}
export default AppRouter