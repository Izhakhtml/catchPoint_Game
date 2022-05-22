import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/parts/Header'
import Footer from '../components/parts/Footer'
import CatchPoint from '../components/pages/CatchPoint'
const AppRouter = () => {

    return (
        <BrowserRouter>
            <div className='base_contain'>
                <Header />
                <Routes>
                    <Route path='/' element={<CatchPoint />} ></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter