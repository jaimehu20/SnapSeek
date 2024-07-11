import { Pivot as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export const Navbar = () => {
    const [ isOpen, setOpen ] = useState<boolean>(false)
    return <>
        <nav>
            <div className='nav'>
                <p>SnapSeek</p>
                <Hamburger toggled={isOpen} toggle={setOpen} size={30}/>
            </div>
        </nav>
    </>
}