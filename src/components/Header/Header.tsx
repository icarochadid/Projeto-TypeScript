import { HeaderContainner } from "./Header-Style"
import logoIgnite from '../../Assets/logo.svg'
import {Timer, Scroll} from 'phosphor-react'
import { NavLink } from "react-router-dom"
export function Header(){
    return (
            <HeaderContainner>
            <img src={logoIgnite} alt="" />

            <nav>
                <NavLink to="/" title="Temporizador"><Timer size={24} /></NavLink>
                <NavLink to="/History" title="Histórico" ><Scroll size={24} /></NavLink>
            </nav>
            </HeaderContainner>

    )
}