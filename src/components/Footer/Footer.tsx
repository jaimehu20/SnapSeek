import React from "react"
import { Github } from "../Icons/Github"
import { Linkedin } from "../Icons/Linkedin"

export const Footer : React.FC = () => {
    return <>
        <footer>
            <div>
                <Linkedin />
                <Github />
            </div>
            <p>© 2024 Jaime Hurtado.</p>
        </footer>
    </>
}