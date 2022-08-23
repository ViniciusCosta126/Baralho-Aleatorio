import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Cards from '../pages/Cards'
import Home from '../pages/Home'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/cards/:nome" element={<Cards/>}/>
            </Routes>
            <Outlet />
        </BrowserRouter>
    )
}