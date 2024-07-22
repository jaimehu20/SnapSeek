import React, { useState } from "react"
import { Close } from "../Icons/Close"
import { editDescription } from "../../features/favorites/favoriteSlice"
import { useAppDispatch } from "../../app/hooks"

export const Modal:React.FC<any> = ({ showModal, setShowModal, info, setShouldUpdate }) => {

    const dispatch = useAppDispatch();
    const [ newDescription, setNewDescription ] = useState<string>("")
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDescription(event.target.value)
    }

    const handleClick = () => {
        setShowModal(false)
        dispatch(editDescription({image: info, description: newDescription}));
        setShouldUpdate(true)
    }

    return <>
    <div className={`modal ${showModal ? 'enabled' : ''}`}>
        <div className="modal-content">
            <div className="modal-header">
                <h1>Editar descripción</h1>
                <Close handleClick={handleClick}/>
            </div>
            <div className="modal-editor">
                <p>{"La descripción de la foto es:"}</p>
                <em>{`"${info.description}"`}</em>
                <p>Si quieres cambiar la descripción, introdúcela en el siguiente campo:</p>
                <input type="text" placeholder={info.description} onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>Editar descripción</button>
        </div>
    </div>
    </>
}