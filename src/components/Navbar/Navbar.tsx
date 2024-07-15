import { Pivot as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Github } from '../Icons/Github'
import { Linkedin } from '../Icons/Linkedin'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [ isOpen, setOpen ] = useState<boolean>(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
    }
    return <>
        <nav className={`${isOpen ? 'opened' : ''}`}>
            <div className='nav'>
                <div className='nav-options'>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                                Mi Galería
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <p>SnapSeek</p>
                <Hamburger toggled={isOpen} toggle={toggleMenu} size={30}/>
                <div className='nav-logos'>
                    <Linkedin />
                    <Github />
                </div>
            </div>
            <div className={`burger-menu ${isOpen ? 'burger-menu-open' : ''}`}>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                                Mi Galería
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Linkedin />
                    <Github />
                </div>
            </div>
        </nav>
    </>
}