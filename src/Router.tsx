import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout/DefaultLayout'
import { History } from './Pages/History/history'
import { Home } from './Pages/Home/home'
export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/History' element={<History/>}/>
            </Route>
        </Routes>
    )
}